#!/usr/bin/env python3
"""Corta as telas do app exportadas do Figma e gera assets/app/*.webp + _data/telas_app.yml.

Figma: "Revo - Screen", página "MOBILE - USUÁRIO", quadro "REVO · V2 · Geist" (tema claro),
seção "03 · Telas e fluxos". Cada tela tem 390 x 844: barra de status (50 px), conteúdo
rolável e, às vezes, barra inferior (menu ou botão).

Como atualizar:
  1. No Figma, exporte cada tela da lista TELAS abaixo em PNG 2x, com o nome do campo "arquivo"
     (ex.: home.png), numa pasta qualquer.
  2. pip install pillow
  3. python3 .github/scripts/cortar-telas.py <pasta com os PNG>

Tela nova: inclua em TELAS (y do fim do conteúdo e da barra, em px do Figma, na escala 1x)
e use o nome em _includes/mock/*.html (ex.: {% include mock/app.html telas="hoje,treinos" %}).
"""
import os
import pathlib
import sys

from PIL import Image

RAIZ = pathlib.Path(__file__).resolve().parents[2]
SAIDA = RAIZ / "assets/app"
LARGURA = 540  # px do WebP (a tela aparece com ~250 px no site)

# nome: (arquivo, y onde termina o conteúdo, y onde termina a barra inferior ou None, nó no Figma)
TELAS = {
    "hoje": ("home", 1750, 1830, "40:3939 Hoje · home"),
    "treinos": ("treinos", 481, 561, "40:3983 Treinos · workouts"),
    "dieta": ("dieta", 1790, 1870, "40:3995 Dieta · diet"),
    "treino-sessao": ("sessao", 1192, 1274, "40:4201 Treino · sessão V1"),
    "treino-concluido": ("treino-ok", 844, None, "40:4694 Treino concluído!"),
    "checkin-semanal": ("checkin-semanal", 1098, 1180, "40:4264 Check-in semanal"),
    "checkin-enviado": ("checkin-ok", 844, None, "40:4687 Check-in enviado!"),
    "checkin-semana5": ("checkin-semana", 980, None, "40:4312 Seu check-in · Semana 5"),
    "notificacoes": ("notificacoes", 844, None, "40:4437 Notificações"),
    "seu-programa": ("programa", 1153, 1235, "40:4596 Exercício expandido"),
}


def salvar(img, nome):
    altura = round(img.size[1] * LARGURA / img.size[0])
    img.convert("RGB").resize((LARGURA, altura), Image.LANCZOS).save(SAIDA / f"{nome}.webp", "WEBP", quality=84, method=6)


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    origem = pathlib.Path(sys.argv[1])
    SAIDA.mkdir(exist_ok=True)
    linhas = [
        "# Gerado por .github/scripts/cortar-telas.py a partir do Figma \"Revo - Screen\" (tema claro).",
        "# Medidas em px do Figma (tela 390 x 844). Não editar à mão.",
        "",
    ]
    for nome, (arquivo, y_conteudo, y_barra, no) in TELAS.items():
        img = Image.open(origem / f"{arquivo}.png")
        img = img.crop((0, 0, 780, img.size[1]))  # 390 px em 2x (o export pode vir com sombra à direita)
        if nome == "hoje":
            salvar(img.crop((0, 0, 780, 100)), "status")
        salvar(img.crop((0, 100, 780, y_conteudo * 2)), f"{nome}-conteudo")
        barra = 0
        if y_barra:
            salvar(img.crop((0, y_conteudo * 2, 780, y_barra * 2)), f"{nome}-barra")
            barra = y_barra - y_conteudo
        conteudo = y_conteudo - 50
        rolar = max(0, conteudo - (844 - 50 - barra))
        linhas += [f"{nome}:", f'  figma: "{no}"', f"  conteudo: {conteudo}", f"  barra: {barra}", f"  rolar: {rolar}", ""]
    (RAIZ / "_data/telas_app.yml").write_text("\n".join(linhas), encoding="utf-8")
    print(f"{len(TELAS)} telas em {SAIDA.relative_to(RAIZ)}")


if __name__ == "__main__":
    main()
