#!/usr/bin/env bash
# Confere se TODAS as páginas HTML geradas pelo Jekyll têm o Google Tag Manager
# (o script no <head> e o <noscript> no <body>). Falha se alguma página ficou sem.
# Uso: .github/scripts/checar-gtm.sh [pasta do site gerado, padrão _site]
set -euo pipefail
SITE="${1:-_site}"
total=0; faltando=()
while IFS= read -r -d '' f; do
  total=$((total+1))
  if ! grep -q 'googletagmanager.com/gtm.js' "$f" || ! grep -q 'googletagmanager.com/ns.html?id=GTM-' "$f"; then
    faltando+=("${f#"$SITE"/}")
  fi
done < <(find "$SITE" -name '*.html' -print0)

if [ "$total" -eq 0 ]; then echo "Nenhuma página HTML encontrada em $SITE"; exit 1; fi
if [ "${#faltando[@]}" -gt 0 ]; then
  echo "::error::${#faltando[@]} de $total páginas estão SEM o Google Tag Manager:"
  printf '  - %s\n' "${faltando[@]}"
  echo "Use layout: default (ou {% include gtm-head.html %} e {% include gtm-body.html %}) nessas páginas."
  exit 1
fi
if grep -q 'GTM-XXXXXXX' "$SITE/index.html"; then
  echo "::warning::gtm_id no _config.yml ainda é o exemplo GTM-XXXXXXX. Troque pelo ID real do contêiner."
fi
echo "OK: Google Tag Manager presente nas $total páginas."
