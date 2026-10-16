#!/usr/bin/env bash
# Reproduces the SDK from the official Voxgig generator.
# Commands follow the generator's own runbook (voxgig/create-sdkgen AGENTS.md).
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p logs

NODE_MAJOR=$(node -p 'process.versions.node.split(".")[0]')
if [ "$NODE_MAJOR" -lt 24 ]; then
  echo "Node.js 24+ required by the generator (found $(node -v))." >&2
  exit 1
fi

# 0. Record environment and re-check the catalogue (non-fatal)
{ echo "date: $(date -u +%FT%TZ)"; echo "node: $(node -v)"; echo "npm: $(npm -v)"; } | tee logs/00-env.log
( curl -fsSL https://voxgig.com/sdk/voxgig-sdk.csv | grep -i -E "resend" || echo "no 'resend' row in catalogue CSV" ) 2>&1 | tee logs/00-catalogue-check.log || true

# 1. Fetch the provider's official OpenAPI spec (URL from resend.com/llms.txt)
curl -fL https://resend.com/openapi.yaml -o resend-openapi.yaml

# 2. Scaffold the generator project
npm create @voxgig/sdkgen -- resend -d ./resend-openapi.yaml -o ./resend-sdk 2>&1 | tee logs/01-scaffold.log

# 3. Add one target (TypeScript) and the offline test feature
( cd resend-sdk/.sdk
  npx voxgig-sdkgen target add ts
  npx voxgig-sdkgen feature add test
  npm run generate 2>&1 | tee ../../logs/02-generate.log
  npx voxgig-sdkgen doctor 2>&1 | tee ../../logs/03-doctor.log || true )

# 4. Verify the generated TypeScript target
( cd resend-sdk/ts
  npm install 2>&1 | tee ../../logs/04-install.log
  npm run build 2>&1 | tee ../../logs/05-build.log
  npm test 2>&1 | tee ../../logs/06-test.log )

( cd resend-sdk/.sdk && npm ls @voxgig/sdkgen @voxgig/apidef @voxgig/docgen 2>&1 | tee ../../logs/07-versions.log ) || true
echo "Done. Review logs/ for secrets before committing (none are expected)."
