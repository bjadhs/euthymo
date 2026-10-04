#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

python3 - <<'PY'
import socket
expected = "72.62.72.132"
for host in ("euthymo.com", "www.euthymo.com"):
    addresses = {item[4][0] for item in socket.getaddrinfo(host, 443, type=socket.SOCK_STREAM)}
    if addresses != {expected}:
        raise SystemExit(f"DNS is not ready: {host} resolves to {sorted(addresses)}, expected only {expected}. Update A records and remove conflicting AAAA records before enabling HTTPS.")
print("Both names resolve to this VPS. Enabling Traefik HTTPS routing.")
PY

docker compose -f compose.yml -f compose.https.yml up -d --no-build --wait
printf '%s\n' "HTTPS routing enabled. Allow a short time for certificate issuance, then verify https://www.euthymo.com/privacy/."
