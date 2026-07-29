# NEXT

## PRs abiertos (esperando merge del usuario)

- **PR #79** — `fix/lueckentext-sticky-fullscreen`: panel sticky + modo fullscreen en Sprachbausteine y Leseverstehen
- **PR #80** — `feat/dashboard-v2-lazy`: dashboard v2 (greeting card, streak, retos, mensajes coach), scroll reveal, scroll reveal en homepage

## Acciones manuales pendientes en Supabase (`hocdlmxzghwymamientc`)

1. ✅ Auth URL Configuration — configurado 2026-07-05

2. **Migración challenges** (opcional para PR #80): verificar si la tabla `samuel_challenges` existe. Si los Retos muestran skeleton permanente tras el login, aplicar `supabase/migrations/20260704000002_challenges.sql`. El resto del panel funciona sin ella.

## Pendiente técnico

- **Categorización visual con chips** (`.res-chip`): el CSS ya existe en `styles.css` pero NO está aplicado a ninguna tarjeta de recursos en HTML. Falta añadir `<span class="res-chip res-chip--spb">Sprachbausteine</span>` etc. a las listas de `/recursos/`, `/de/recursos/`, `/en/recursos/`
- **Migraciones premium/chat** (`20260701000001` + `20260701000002`): viven en rama `feat/estadisticas-textos-nivel2-chat-premium` — ya mergeada. Pendiente aplicarlas a `hocdlmxzghwymamientc` (Samuel hace `supabase link --project-ref hocdlmxzghwymamientc`)
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
