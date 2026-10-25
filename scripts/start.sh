#!/bin/sh

if [ "$NODE_ENV" = "production" ]; then
  yarn next build
  exec yarn next start -p 3000
else
  export WATCHPACK_POLLING=true
  exec yarn next dev -p 3000
fi
