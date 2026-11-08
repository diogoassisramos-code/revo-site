# Revo: contexto visual

Guia de referência do visual da Revo (revofit.app) para quem cria página, anúncio, post, apresentação ou peça nova, e para ferramentas de IA que geram layout. Tudo aqui sai do que está no ar: `assets/site.css`, a landing, o blog e as páginas de funcionalidade.

Direção: **"Compass"**. Superfícies chapadas em tons pastel, tipografia grotesca leve e grande, anotações em fonte mono, verde profundo como cor de marca. Calmo, técnico, confiável. Nada de gradiente chamativo, sombra pesada ou foto de "transformação".

---

## 1. Marca

| Item | Arquivo | Uso |
| --- | --- | --- |
| Wordmark escuro | `assets/revo-wordmark.svg` | Sobre fundo claro |
| Wordmark branco | `assets/revo-wordmark-white.svg` | Sobre fundo escuro ou verde |
| Ícone (símbolo) | `assets/revo-icon.svg` | App, favicon, avatar, mockups |
| Favicon | `assets/favicon.svg`, `favicon-32.png`, `favicon-192.png`, `favicon-512.png`, `apple-touch-icon.png` | Navegador e atalhos |
| Imagem de compartilhamento | `assets/og-revo.png` (1200 × 630) | Open Graph / redes |

- Altura do wordmark no menu: 17 px. No rodapé: 18 px.
- Cor do tema (barra do navegador, manifest): `#04453d`.
- Nome: o site usa **"a Revo"** (landing e blog). O doc de páginas de funcionalidade usa "o Revo". Definir um só e padronizar.

---

## 2. Cores

### Base

| Token | Hex | Uso |
| --- | --- | --- |
| `--ink` / `--dark` | `#022128` | Texto principal, fundo escuro (hero das LPs, rodapé), botão padrão |
| `--ink-2` | `#3a4845` | Texto de apoio (lead, parágrafos) |
| `--ink-3` | `#5d6c69` | Texto terciário, legendas, mono |
| `--paper` | `#ffffff` | Fundo padrão |
| `--ice` | `#f4f8f7` | Fundo de painel e card neutro |

### Marca

| Token | Hex | Uso |
| --- | --- | --- |
| `--green` | `#04453d` | Cor de marca. Painéis grandes (App do aluno, blocos de destaque), sidebar do painel |
| `--petrol` | `#004860` | Variação fria do verde. Gradientes de card escuro (`#004860 → #022128`), hover de card verde |
| `--mint-400` | `#7cd3bb` | Acento. Botão principal sobre fundo escuro, CTA final, destaques |
| `--mint-700` | `#2f8f74` | Acento em texto e ícone sobre fundo claro, números em mono, barras de progresso |
| `--mint-100` | `#e3f6f0` | Fundo pastel menta (hero de hubs, chips "ok", tiles de ícone) |
| `--mint-50` | `#edfffa` | Menta quase branco (pouco uso) |

### Tintas pastel (cards)

| Token | Hex | Uso |
| --- | --- | --- |
| `--tint-blue` | `#e4f1f7` | Card azul claro |
| `--tint-cream` | `#f7ecd6` | Card creme, faixa de conformidade, avisos |
| `--tint-sage` | `#a9d9c7` | Card sálvia (mais forte, usar 1 por grupo) |

### Status (mockups e selos)

| Estado | Fundo | Texto |
| --- | --- | --- |
| Ok / pago / em dia | `#e3f6f0` | `#2f8f74` |
| Atenção / pendente / em breve | `#f7ecd6` | `#8a5a12` (selo: `#7a4f0e`) |
| Problema / atrasado / em risco | `#f7e2e0` | `#bd463f` |
| Informação | `#e4f1f7` | `#004860` |

### Linhas

- `--line`: `rgba(2,33,40,.14)` (divisórias, bordas de tabela)
- `--line-soft`: `rgba(2,33,40,.08)` (divisórias internas)
- `--line-inv`: `rgba(255,255,255,.18)` (divisórias sobre escuro)

**Regra de proporção:** a página é majoritariamente branca e `--ice`. Verde e escuro aparecem em blocos inteiros (hero, painel, rodapé), nunca em detalhes espalhados. Menta-400 é o único acento vibrante: no máximo um elemento de destaque por tela (o botão principal ou o CTA final).

---

## 3. Tipografia

| Família | Uso | Pesos |
| --- | --- | --- |
| **Geist** (Google Fonts) | Tudo: títulos, texto, botões | 300 a 700. Títulos em **400** |
| **Geist Mono** | Eyebrows, links em caixa alta, números de passo, legendas técnicas, URLs em mockup | 400 a 600 (geralmente 500) |

### Escala

| Classe | Tamanho | Entrelinha | Espaçamento | Uso |
| --- | --- | --- | --- | --- |
| `.h-xl` | 44 a 112 px | .92 | -0.045em | Título de impacto (CTA final da LP) |
| `.h-lg` | 38 a 72 px | .92 | -0.045em | Títulos de seção da LP, hero |
| hero das páginas | 38 a 62 px | 1 | -0.045em | H1 das páginas de funcionalidade |
| `.h-md` | 30 a 46 px | .98 | -0.03em | H2 de seção |
| `.h-sm` | 22 a 28 px | 1.08 | -0.02em | Título de card |
| `.lead` | 17 a 20 px | 1.45 | | Subtítulo, abertura de seção |
| corpo | 15 a 16 px | 1.5 | | Texto corrido |
| `.small` | 13 px | 1.5 | | Notas |
| `.mono` / `.eyebrow` | 11 px, caixa alta | 1.3 | +0.14em | Rótulos |

- Títulos são **grandes e leves** (peso 400, nunca negrito), com letter-spacing negativo e `text-wrap: balance`.
- Negrito (500/600) só em texto pequeno: nomes em listas, valores em mockup.
- Destaque dentro do título: trecho em `--mint-400` (sobre escuro), sem itálico.

---

## 4. Elementos de assinatura

- **Eyebrow com marcador "compass":** rótulo mono em caixa alta antes do título, com um quadradinho de cantos marcados e um ponto no centro (`<span class="eyebrow"><i class="mk"></i>Texto</span>`). Aparece em quase toda seção.
- **Link mono com seta:** `VER COMO FUNCIONA ▸`. Caixa alta, mono 11 px, triângulo cheio; no hover o espaço até a seta aumenta (`.mlink`).
- **Triângulo** (`▸`, feito em CSS com `.tri`) no lugar de setas e chevrons: em botões, links e marcadores de lista.
- **Raios (sunburst):** linhas finas saindo de um centro, girando devagar. Na seção de cobrança da landing e, em versão estática, no fundo do CTA final das páginas.
- **Cantos com etiquetas:** em blocos de impacto, links mono nos quatro cantos (seção "O aluno paga pelo link").
- **Numeração mono:** `01`, `02`, `03` em `--mint-700` acima de uma linha fina, em passos e listas.

---

## 5. Layout e espaçamento

- Largura máxima do conteúdo: **1360 px**, margem lateral **24 px** (`.wrap`).
- Grade de 12 colunas, gap de 24 px. Cabeçalhos de seção em duas colunas: título à esquerda (7/12), texto de apoio alinhado à base à direita (5/12).
- Seções: 88 a 160 px de respiro vertical na landing (`.sec`), 72 a 128 px nas páginas (`.pg-sec`).
- Raios: **12 px** (cards, fotos), **16 px** (painéis grandes), **20 px** (painel do menu), **999 px** (botões, chips, selos), 40 px (moldura de celular).
- Cards lado a lado com gap de 16 px; cards de detalhe com altura mínima de ~230 px, título empurrado para baixo e ícone no topo.
- Pontos de quebra: 1100, 980, 900 (menu vira hambúrguer), 760, 560 px.

---

## 6. Componentes

### Botões
- **Padrão:** pílula escura `#022128`, texto branco 13 px (`.btn`), 36 px de altura; grande com 44 px (`.btn.lg`). Hover: verde `#04453d`.
- **Menta:** fundo `#7cd3bb`, texto escuro (`.btn.mint`). Usar sobre fundo escuro ou verde, e no menu.
- **Contorno:** transparente com borda de 1 px (`.btn.outline`).
- Todo botão de ação leva o triângulo `▸` no fim.
- Texto padrão do CTA: **"Começar grátis"**. Microcopy abaixo, em mono: "GRÁTIS ATÉ 5 ALUNOS · SEM CARTÃO PRA COMEÇAR".

### Menu (vidro líquido)
- Pílula fixa no topo, centralizada, com fundo de vidro (branco translúcido + blur + brilho interno).
- Fica clara sobre fundo claro e escura sobre seções marcadas `data-nav="dark"`.
- Mega menus em um painel de vidro que desliza e muda de tamanho entre itens: cards com miniatura (foto 120 × 72 ou mini tela) à esquerda e lista com ícone à direita.

### Cards
- Chapados, sem borda e sem sombra, em tintas pastel alternadas (gelo, azul, creme, menta, sálvia) ou escuros (`--dark`, `--green`) para destaque.
- Card de página: rótulo mono no topo + ícone, título, uma linha, link mono no rodapé.

### Painéis
- Bloco verde (`--green`) com cantos de 16 px para "o lado do aluno" e blocos de destaque; texto branco e subtexto a 72 a 80% de opacidade; cards internos em `rgba(255,255,255,.07)`.
- Faixa de conformidade: fundo creme, ícone de escudo, eyebrow e texto curto.

### Tabelas "antes x depois"
- Linhas finas, cabeçalho em mono; a coluna "Com a Revo" fica em fundo menta. No celular viram cartões empilhados.

### FAQ
- Linhas finas, pergunta em 18 a 21 px, botão circular "+" que gira para "×".

### Chips e selos
- Pílulas pequenas em mono caixa alta (`EM BREVE`, `ACESSO ANTECIPADO`) com contorno fino; status com ponto colorido.

---

## 7. Ícones

- **Tabler Icons**, traço 2 px (versão outline padrão), em `<i class="ti ti-nome"></i>`.
- O site carrega só os ícones usados (`assets/tabler-subset.woff2`). Ícone novo: `.github/scripts/gerar-icones.py`.
- Sobre fundo claro, em `--green` ou `--mint-700`, muitas vezes dentro de um tile de 40 × 40 px com cantos de 12 px e fundo `--mint-100`. Sobre escuro, em `--mint-400`.
- Ícones também entram no meio de frases grandes, no tamanho do texto (seção "Check-in, evolução e cobrança no PIX").

---

## 8. Imagem

- **Fotos:** pessoas treinando ao ar livre e usando o celular, luz natural, cores frias e suaves (`foto-app.jpg`, `foto-como-funciona.jpg`). Hero da landing em vídeo de atleta com véu escuro por cima (`#022128` de 42 a 78%).
- Sobre a foto, etiqueta de vidro branca com ícone e texto curto (ex.: "Check-in respondido · Semana 12").
- **Telas do produto:** mockups em HTML (não print), em moldura de celular escura ou janela de navegador, com dados realistas em português (nomes, R$, datas no formato dd/mm). Ficam em `_includes/mock/`.
- **Proibido:** foto de "antes e depois", corpo como prova de resultado, número de quilos perdidos em destaque, substâncias. Vale para site e anúncios (CFN, CFM, políticas da Meta e do Google).

---

## 9. Movimento

- Entrada suave ao rolar: sobe 22 px e aparece em .9 s, com atraso escalonado de 80 ms entre itens (`.reveal`, `data-d`).
- Curva padrão: `cubic-bezier(.2,.7,.2,1)`.
- Título do hero entra palavra por palavra.
- Raios giram devagar (140 s por volta).
- Tudo desliga com "reduzir movimento" do sistema.

---

## 10. Voz e texto

- Fala **com o profissional** (personal, nutri, consultor, coach): "seu aluno"; nas páginas de nutricionista e médico, "seu paciente".
- Frases curtas. Benefício na **rotina do profissional** e na **adesão do aluno**, nunca em quilos ou em corpo.
- **Sem travessão** (— ou –). Use dois-pontos, vírgula ou ponto.
- Concreto e do dia a dia: "PDF no WhatsApp", "Pix manual", "áudio de 5 minutos", "cobrar quem atrasou".
- Títulos vendem; o title de SEO busca a palavra-chave (os dois são diferentes).
- Recurso que ainda não existe: selo "em breve" ou lista de espera. Nada de prometer o que não está no produto.
- Saúde: dieta é do nutricionista; dados de saúde são sensíveis (LGPD); a Revo não substitui avaliação, prontuário nem prescrição.

---

## 11. Resumo rápido (para briefing)

> Fundo branco e gelo, blocos inteiros em verde profundo `#04453d` e quase-preto `#022128`, acento menta `#7cd3bb`. Geist leve (400) em tamanhos grandes com espaçamento negativo; rótulos em Geist Mono caixa alta com marcador de bússola. Cards chapados pastel, sem sombra, cantos de 12 a 16 px. Botões em pílula com triângulo ▸. Menu em vidro. Ícones Tabler finos. Fotos de treino ao ar livre e telas do produto em celular; nunca antes e depois.
