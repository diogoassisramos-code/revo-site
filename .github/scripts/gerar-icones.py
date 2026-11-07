#!/usr/bin/env python3
"""Regenera assets/tabler-subset.woff2 e assets/tabler-subset.css só com os ícones usados no site.

Quando usar: depois de colocar um ícone novo (classe "ti ti-NOME" ou "icone: NOME" no front matter
ou em _data/paginas.yml). Ícones: https://tabler.io/icons

Como rodar (na raiz do repositório):
    npm pack @tabler/icons-webfont@3.31.0 && tar xzf tabler-icons-webfont-3.31.0.tgz
    pip install fonttools brotli
    python3 .github/scripts/gerar-icones.py package/dist
    rm -rf package tabler-icons-webfont-3.31.0.tgz

Mantém os mesmos codepoints e o cabeçalho original da fonte (recalcBBoxes=False), para os ícones
não mudarem de posição.
"""
import pathlib
import re
import sys

from fontTools import subset
from fontTools.ttLib import TTFont

RAIZ = pathlib.Path(__file__).resolve().parents[2]
PULAR = {"_site", ".git", "node_modules", "vendor", "package"}


def icones_usados():
    nomes = set()
    for arq in RAIZ.rglob("*"):
        if arq.suffix not in {".html", ".md", ".yml"} or PULAR & set(arq.relative_to(RAIZ).parts):
            continue
        texto = arq.read_text(encoding="utf-8", errors="ignore")
        nomes.update(re.findall(r"\bti-([a-z0-9]+(?:-[a-z0-9]+)*)", texto))
        nomes.update(re.findall(r"\bicone:\s*\"?([a-z0-9]+(?:-[a-z0-9]+)*)", texto))
    return nomes


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    dist = pathlib.Path(sys.argv[1])
    css_tabler = (dist / "tabler-icons.css").read_text(encoding="utf-8")
    codigos = dict(re.findall(r'\.ti-([a-z0-9-]+):before\s*\{\s*content:\s*"\\([0-9a-f]+)"', css_tabler))
    # o subconjunto atual entra sempre (a LP usa ícones que não aparecem nos templates)
    atual = (RAIZ / "assets/tabler-subset.css").read_text(encoding="utf-8")
    nomes = icones_usados() | set(re.findall(r"\.ti-([a-z0-9-]+):before", atual))
    nomes = sorted(n for n in nomes if n in codigos)
    fonte = TTFont(dist / "fonts/tabler-icons.woff2", recalcBBoxes=False, recalcTimestamp=False)
    opcoes = subset.Options()
    opcoes.flavor = "woff2"
    opcoes.layout_features = []
    opcoes.name_IDs = ["*"]
    opcoes.notdef_outline = True
    sub = subset.Subsetter(options=opcoes)
    sub.populate(unicodes=[int(codigos[n], 16) for n in nomes])
    sub.subset(fonte)
    fonte.flavor = "woff2"
    fonte.save(RAIZ / "assets/tabler-subset.woff2")
    linhas = [
        '@font-face{font-family:"tabler-icons";font-style:normal;font-weight:400;font-display:block;src:url("tabler-subset.woff2") format("woff2")}',
        '.ti{font-family:"tabler-icons" !important;speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}',
    ] + ['.ti-%s:before{content:"\\%s"}' % (n, codigos[n]) for n in nomes]
    (RAIZ / "assets/tabler-subset.css").write_text("\n".join(linhas) + "\n", encoding="utf-8")
    print(f"{len(nomes)} ícones em assets/tabler-subset.woff2")


if __name__ == "__main__":
    main()
