#!/bin/sh

if [ $# -eq 1 ] && [ $1 = "local" ]; then
    ENV_FILE="../../env/.env.development"
    if [ -f "$ENV_FILE" ]; then
        cat "$ENV_FILE"
        set -a
        . "$ENV_FILE"
        set +a
    else
        echo "Warning: Environment file not found at $ENV_FILE" >&2
    fi
fi

if [ "$NODE_ENV" = "production" ]; then
    yarn next build
    exec yarn next start -p 3000
else
    export WATCHPACK_POLLING=true
    exec yarn next dev -p 3000
fi
