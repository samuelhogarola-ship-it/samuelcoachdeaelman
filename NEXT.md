# NEXT

## PRs abiertos

- **PR #86** — `codex/professional-audit-fixes`: SEO multilingüe de Málaga y producto de exámenes B1/B2
- **PR #88** — `codex/samuel-classroom-reports`: paridad de blog localizado y homepage

Verificado contra GitHub el 2026-08-24. Revisar posibles conflictos con la remediación crítica antes de mergear cualquiera de los dos.

## Despliegue crítico pendiente (`hocdlmxzghwymamientc`)

Seguir `docs/runbooks/critical-remediation-rollout.md`. El formulario de contacto actual se mantiene sin cambios: Turnstile y la nueva función `contact` quedan fuera de este despliegue.

Orden obligatorio:

1. Backup de perfiles, códigos y datos afectados.
2. Migraciones `20260824000001` a `20260824000004`.
3. Funciones `newsletter-subscribe`, `newsletter-confirm` y `newsletter-unsubscribe`.
4. Despliegue estático sin cambiar la configuración actual del formulario de contacto.
5. Smoke tests de producción y registro de evidencias.

## Otras acciones manuales en Supabase

1. **Auth URL Configuration** — configurado 2026-07-05.
2. **Migración challenges**: verificar si la tabla `samuel_challenges` existe. Si los Retos muestran skeleton permanente tras el login, aplicar `supabase/migrations/20260704000002_challenges.sql`.

## Pendiente técnico

- **Cloudflare Turnstile / contacto endurecido** (no bloqueante): mantener por ahora el formulario y su fallback de email actuales. Activar más adelante la nueva función `contact` cuando se decida usar Turnstile, se disponga de las claves reales y se pueda hacer una prueba controlada de extremo a extremo.
- **Categorización visual con chips** (`.res-chip`): el CSS ya existe en `styles.css` pero NO está aplicado a ninguna tarjeta de recursos en HTML. Falta añadir `<span class="res-chip res-chip--spb">Sprachbausteine</span>` etc. a las listas de `/recursos/`, `/de/recursos/`, `/en/recursos/`
- **Privacidad de informes profesor**: migrar PII de `localStorage` a almacenamiento autenticado tras definir roles y retención.
- **Privacidad legal**: sustituir el borrador tras revisión legal y documentar Chatbase, Supabase, Resend y Cloudflare.
- **Consentimiento Chatbase**: bloquearlo hasta consentimiento o retirarlo.
- **Cabeceras**: añadir HSTS, CSP con nonce/hash, `frame-ancestors`, Referrer Policy y Permissions Policy tras inventariar scripts externos.
- **iOS 13**: retirar sintaxis incompatible de `assets/js/auth.js` y convertir la regla en check de CI.
- **studio-panel**: admin de Vokabel-World (imKontext) y sección Fuengirola — PRs pendientes en web-fuengirola
- **Migraciones WF-Studio**: clientes Angel, Indira, Sofia → migrar auth a apps-users

## Foco de producto

- `/recursos/` como zona evolutiva principal — añadir lógica sin romper el resto estático
- Consolidar calidad de ejercicios antes de abrir nuevos frentes
- Schreiben como primer recurso con experiencia premium completa (login + corrección)
- Decidir pasarela de pago y modelo de acceso premium
- **Mini classroom / informes profesor**: ahora guarda alumnos, borradores e historial en `localStorage` para uso ligero. Posible mejora futura: migrar a Supabase (`hocdlmxzghwymamientc`) si hace falta sincronizar entre dispositivos, compartir con panel admin o conservar más historial.

## Convenciones activas

- **iOS 13**: nunca `?.` en `assets/js/` — `grep -rn '\?\.' assets/js/` antes de cada PR
- **Git**: siempre rama feature + PR, nunca directo a main, nunca auto-merge
- **Blog slugs**: minúsculas, guiones, sin acentos ni ñ, un único slug canónico
- **Puertos locales**: comprobar puerto libre antes de levantar servidor; playwright busca desde 4173
- **Supabase proyectos**: `admin-panels` (studio-panel) / `apps-clients` = `hocdlmxzghwymamientc` (usuarios finales Samuel)
