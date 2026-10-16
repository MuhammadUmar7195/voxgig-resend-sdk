#!/usr/bin/env bash
# Crude pre-commit scan for Resend-style keys. Not a substitute for review.
cd "$(dirname "$0")/.."
if grep -RIn --exclude-dir=node_modules --exclude-dir=.git --exclude=.env.example -E 're_[A-Za-z0-9_]{16,}' . ; then
  echo "Possible secret found above." >&2; exit 1
fi
echo "No Resend-style keys found."
