import { createClient } from "npm:@supabase/supabase-js@2";

export const requireEnv = (key) => {
  const value = Deno.env.get(key);
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

export const readAdminBootstrapEmails = () => {
  const bootstrapValue =
    Deno.env.get("ADMIN_BOOTSTRAP_EMAILS") ||
    Deno.env.get("LEADS_ADMIN_EMAILS") ||
    "";

  return bootstrapValue
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);
};

export const createServiceRoleClient = () => {
  const supabaseUrl = requireEnv("SUPABASE_URL");
  const serviceRoleKey = requireEnv("SUPABASE_SERVICE_ROLE_KEY");

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
};

export const createVerifyAdminAccess = ({
  supabase,
  adminEmails = []
}) => async (token) => {
  const {
    data: { user },
    error
  } = await supabase.auth.getUser(token);

  if (error || !user?.email) {
    return { success: false };
  }

  const email = user.email.toLowerCase();
  const { data: roles, error: rolesError } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", user.id)
    .eq("role", "admin")
    .limit(1);

  if (!rolesError && Array.isArray(roles) && roles.length > 0) {
    return {
      success: true,
      user
    };
  }

  if (!adminEmails.includes(email)) {
    return { success: false };
  }

  return {
    success: true,
    user
  };
};
