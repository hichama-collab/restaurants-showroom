#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PORT="${PORT:-8010}"

cd "$ROOT"
printf 'Showroom Ma Vitrine Online disponible sur http://127.0.0.1:%s\n' "$PORT"
python3 -m http.server "$PORT"
