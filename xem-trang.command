#!/bin/zsh
cd "$(dirname "$0")"
if ! curl -fsS http://localhost:5500/salepage.html >/dev/null 2>&1; then
  nohup python3 -m http.server 5500 >/dev/null 2>&1 &
  sleep 1
fi
open -a "Google Chrome" "http://localhost:5500/salepage.html"
