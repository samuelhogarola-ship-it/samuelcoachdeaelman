-- Fase 2B: Gestión de premium (manual + códigos)

-- Expandir samuel_profiles con fecha de expiración
ALTER TABLE samuel_profiles
ADD COLUMN IF NOT EXISTS premium_expires_at timestamptz;

-- Códigos promocionales únicos por cliente
CREATE TABLE IF NOT EXISTS samuel_premium_codes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE NOT NULL,
  duration_days int NOT NULL,
  customer_email text,
  redeemed_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  redeemed_at timestamptz,
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_by_type text CHECK (created_by_type IN ('admin', 'studio-panel'))
);

CREATE INDEX IF NOT EXISTS samuel_premium_codes_code_idx ON samuel_premium_codes(code);
CREATE INDEX IF NOT EXISTS samuel_premium_codes_redeemed_by_idx ON samuel_premium_codes(redeemed_by);

-- RPC: Marcar alumno premium manualmente
CREATE OR REPLACE FUNCTION admin_set_premium(
  p_user_id uuid,
  p_duration_days int
)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF p_duration_days <= 0 THEN RAISE EXCEPTION 'Duration must be positive'; END IF;

  INSERT INTO samuel_profiles (user_id, is_premium, premium_expires_at)
  VALUES (p_user_id, true, now() + (p_duration_days || ' days')::interval)
  ON CONFLICT (user_id) DO UPDATE SET
    is_premium = true,
    premium_expires_at = now() + (p_duration_days || ' days')::interval;
END; $$;

-- RPC: Generar código único para un cliente
CREATE OR REPLACE FUNCTION generate_premium_code(
  p_duration_days int,
  p_customer_email text,
  p_created_by_type text
)
RETURNS text LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_code text;
  v_uid uuid := auth.uid();
BEGIN
  IF p_duration_days <= 0 THEN RAISE EXCEPTION 'Duration must be positive'; END IF;
  IF p_created_by_type NOT IN ('admin', 'studio-panel') THEN
    RAISE EXCEPTION 'Invalid created_by_type';
  END IF;

  v_code := 'PREM-' || upper(substr(md5(random()::text || clock_timestamp()::text), 1, 12));

  INSERT INTO samuel_premium_codes (code, duration_days, customer_email, created_by, created_by_type)
  VALUES (v_code, p_duration_days, p_customer_email, v_uid, p_created_by_type);

  RETURN v_code;
END; $$;

-- RPC: Canjear código (usuario logueado)
CREATE OR REPLACE FUNCTION redeem_premium_code(
  p_code text
)
RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_code_id uuid;
  v_uid uuid := auth.uid();
  v_duration int;
BEGIN
  IF v_uid IS NULL THEN RAISE EXCEPTION 'Not authenticated'; END IF;

  SELECT id, duration_days INTO v_code_id, v_duration
  FROM samuel_premium_codes
  WHERE code = upper(p_code) AND redeemed_by IS NULL;

  IF v_code_id IS NULL THEN RETURN false; END IF;

  UPDATE samuel_premium_codes
  SET redeemed_by = v_uid, redeemed_at = now()
  WHERE id = v_code_id;

  INSERT INTO samuel_profiles (user_id, is_premium, premium_expires_at)
  VALUES (v_uid, true, now() + (v_duration || ' days')::interval)
  ON CONFLICT (user_id) DO UPDATE SET
    is_premium = true,
    premium_expires_at = GREATEST(
      COALESCE(samuel_profiles.premium_expires_at, now()),
      now() + (v_duration || ' days')::interval
    );

  RETURN true;
END; $$;

-- RPC: Verificar si usuario tiene premium activo
CREATE OR REPLACE FUNCTION is_premium_active(
  p_user_id uuid
)
RETURNS boolean LANGUAGE sql STABLE AS $$
  SELECT COALESCE(is_premium = true AND premium_expires_at > now(), false)
  FROM samuel_profiles WHERE user_id = p_user_id;
$$;

-- RPC: Obtener fecha de expiración
CREATE OR REPLACE FUNCTION get_premium_expires_at(
  p_user_id uuid
)
RETURNS timestamptz LANGUAGE sql STABLE AS $$
  SELECT premium_expires_at
  FROM samuel_profiles
  WHERE user_id = p_user_id AND is_premium = true AND premium_expires_at > now();
$$;
