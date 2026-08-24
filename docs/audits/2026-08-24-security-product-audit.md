# Auditoria de seguridad y producto - 2026-08-24

## Alcance

Revision de rutas publicas, login, panel cliente, panel profesor, Supabase, formularios, newsletter, variables de entorno, CI, tests y despliegue de produccion.

## Hallazgos que bloquean la primera ola

1. Las politicas de `samuel_profiles` permiten insertar y actualizar el estado premium propio.
2. Las RPC administrativas `admin_set_premium` y `generate_premium_code` no validan un rol administrador ni revocan ejecucion publica.
3. El canje de codigos premium no bloquea ni consume el codigo de forma atomica.
4. Los login ES, DE y EN aceptan redirecciones `//host-externo`, habilitando open redirect.
5. El newsletter visible en produccion llama endpoints relativos que responden 404.
6. El formulario de contacto desactiva Turnstile cuando falta la clave publica y el endpoint PHP no verifica Turnstile.
7. El ejercicio premium envia columnas incompatibles con `samuel_attempts` y oculta el fallo.
8. El panel cliente intenta marcar mensajes como leidos sin una politica RLS de `UPDATE`.
9. El build genera 31 diferencias respecto a los archivos versionados y CI no comprueba reproducibilidad.
10. `npm audit` informa de una vulnerabilidad alta en `brace-expansion`.

## Restricciones

- Mantener el sitio estatico y el hosting actual durante esta ola.
- Mantener Supabase como autenticacion y almacenamiento de producto.
- No exponer secretos en HTML, JavaScript ni Git.
- La clave anon/publicable de Supabase puede seguir en cliente; las claves `service_role`, Turnstile secret y Resend solo viven en servidor.
- Mantener rutas y textos localizados ES, DE y EN.
- Mantener compatibilidad declarada con iOS 13 en `assets/js`.
- Cada correccion debe incluir una prueba que falle antes del cambio y pase despues.
- No desplegar migraciones destructivas sin copia y consulta previa de perfiles/codigos afectados.

## Acciones externas reservadas al propietario

- Aplicar y verificar migraciones en el proyecto Supabase `hocdlmxzghwymamientc`.
- Configurar secretos de Supabase Edge Functions: `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `TURNSTILE_SECRET_KEY` y los correos de destino.
- Crear o confirmar la clave publica de Cloudflare Turnstile para `www.samuelcoachdealeman.com`.
- Verificar dominio/remitente en Resend y desplegar Edge Functions publicas con `verify_jwt = false` solo donde corresponda.
- Revisar juridicamente privacidad, proveedores, retencion y baja del newsletter en una segunda ola.

## Criterio de salida de la primera ola

- Ningun usuario puede concederse premium ni ejecutar RPC administrativas.
- Un codigo premium solo puede consumirse una vez, incluso con solicitudes concurrentes.
- No existe redireccion autenticada a un origen externo.
- Contacto y newsletter funcionan en produccion con proteccion antiabuso y errores visibles.
- Intentos, progreso y mensajes persisten con un contrato SQL/cliente unico.
- `npm run build`, tests y auditorias forman parte de CI y dejan el arbol limpio.

