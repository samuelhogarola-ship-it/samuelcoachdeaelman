#!/bin/sh
set -eu

if [ -z "${UMAMI_WEBSITE_ID:-}" ]; then
  echo 'UMAMI_WEBSITE_ID is required in production' >&2
  exit 1
fi

sh scripts/render-umami-config.sh
exec node scripts/start-site.mjs
