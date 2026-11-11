# Revo: site

Site da Revo (revofit.app), publicado pelo GitHub Pages a partir da branch `main`.

- `index.html`: landing page (HTML estático).
- `funcionalidades.html`, `app-do-aluno/`, `painel-do-consultor/`, `para/`, `integracoes.html`, `implantacao.html`: páginas de funcionalidades e LPs por profissão (ver abaixo).
- `blog/`: página inicial do blog e páginas de categoria.
- `_posts/`: artigos do blog, em Markdown.
- `assets/site.css` e `assets/site.js`: visual e comportamento de todas as páginas (LP, blog e funcionalidades). `assets/blog.css`: só o que é do blog.
- `_includes/nav.html` e `_includes/footer*.html`: menu e rodapé, iguais em todas as páginas.
- `_config.yml`: título, categorias, links do app (`cta_url`, `login_url`), formulários e revisão dos itens `[confirmar]`.

## Mockups (home e páginas de funcionalidades)

Os mockups do painel e do app são as telas reais do Figma "Revo - Screen", refeitas em HTML/CSS no tamanho do Figma (painel com 1440px de largura, app 440×956) e reduzidas para caber na página.

- **Home** (seção "Pro consultor" do `index.html`): página **MOCKUPS - SITE** do Figma, com o painel `05 · Resumo` e o app `Hoje · home · iOS`. A janela do painel mostra 1040px de altura; para mudar o recorte, ajuste `.dash`/`.dash-stage` no CSS.
- **Páginas de funcionalidades e LPs**: cada página usa o mockup indicado em `_data/paginas.yml` (`mockup:`), que é um arquivo em `_includes/mock/`. As telas vêm das páginas "DESKTOP - CONSULTOR" e "MOBILE - USUÁRIO" (V3 iOS claro) do Figma. Anamnese, Equipe multidisciplinar, Médicos, Marca própria, Integrações e Implantação não têm tela no Figma e foram montadas com os mesmos componentes.
- **Peças comuns** ficam em `_includes/mock/painel/` (barra do navegador, menu lateral com `on=`, topo, Resumo) e `_includes/mock/app/` (status bar, barra de abas com `on=`, indicador, tela Hoje). Mudou o menu ou a barra de abas no Figma, muda num lugar só.
- **Estilo**: classes `.dk-*` (painel) e `.ios-*` (app) no `assets/site.css`, mais uma seção por tela (marcadores `/* [mock: nome] */`).
- **Escala**: feita pelo `assets/site.js` (`.ux-fit` com `--w`/`--h` para o painel; `[data-fit]` para o app e a home).
- **Ícones, logo e ilustrações**: exportados do Figma para `assets/mockups/painel/` e `assets/mockups/app/` (um subdiretório por tela).

## Publicar um artigo

1. Copie `_modelo-artigo.md` para `_posts/AAAA-MM-DD-palavra-chave.md`.
2. Preencha título, descrição e categoria, e escreva o texto.
3. Faça commit na `main`. Data de hoje ou passada: no ar em ~1 min. Data futura: entra sozinho no dia (workflow `publicar-agendados`).

SEO automático: título/descrição/Open Graph/dados estruturados (jekyll-seo-tag), `sitemap.xml` e feed em `/blog/feed.xml`.

Obs.: o GitHub pausa workflows agendados em repositórios sem commits por 60 dias. O próprio workflow `publicar-agendados` se reativa todo dia para evitar isso. Se algum artigo agendado não entrar no ar, rode o workflow manualmente em Actions > Publicar artigos agendados > Run workflow.

## Google Tag Manager

O GTM está em **todas** as páginas: LP, home do blog, categorias e todos os artigos (inclusive os agendados e os que ainda vão ser criados).

- O ID do contêiner fica em um lugar só: `gtm_id` no `_config.yml`. Para trocar, mude ali.
- O código vem de `_includes/gtm-head.html` (no `<head>`) e `_includes/gtm-body.html` (logo após o `<body>`), chamados pelo `_layouts/default.html` (blog), pelo `_layouts/pagina.html` (páginas de funcionalidade e LPs) e pelo `index.html`.
- Artigos novos em `_posts/` já usam esse layout automaticamente; não precisa fazer nada.
- Página nova fora do blog: use `layout: default` no front matter. Se for um HTML próprio (como o `index.html`), coloque `---` / `---` no topo e as linhas `{% include gtm-head.html %}` logo após `<head>` e `{% include gtm-body.html %}` logo após `<body>`.
- Rede de segurança: o workflow `checar-gtm` gera o site a cada push e fica vermelho se alguma página estiver sem GTM, listando qual.

## Calendário editorial

Os artigos de 7/11/2026 a 5/6/2027 já estão em `_posts/` com data futura: entram 2 por dia, sozinhos. Cada artigo só linka para artigos com data igual ou anterior à dele, para não gerar link quebrado antes da publicação.

## Páginas de funcionalidades e LPs por profissão

São 24 páginas, com o texto do doc "Revo: arquitetura e textos das páginas de funcionalidades e LPs por profissão":

| Grupo | Páginas |
| --- | --- |
| Hub geral | `/funcionalidades/` |
| App do Aluno | `/app-do-aluno/` (hub), `treino-guiado/`, `dieta-e-refeicoes/`, `check-in/`, `evolucao/`, `plano-atualizado/` |
| Painel do Consultor | `/painel-do-consultor/` (hub), `gestao-de-alunos/`, `montagem-de-treino/`, `plano-alimentar/`, `check-ins/`, `cobranca-recorrente/`, `anamnese-e-avaliacao/`, `equipe-multidisciplinar/`, `marca-propria/` |
| Integrações e implantação | `/integracoes/`, `/implantacao/` |
| LPs por profissão | `/para/nutricionistas/`, `consultores/`, `medicos/`, `personal-trainers/`, `treinadores/`, `coach-de-fisiculturismo/` |

**Onde mexer no texto:** cada página é um arquivo `.html` com o texto no front matter (entre os `---`): `title` (sem o "| Revo", que o layout acrescenta), `description`, `h1`, `subtitulo`, `passos`, `detalhes`, `faq` etc. Os dois modelos de página ficam em `_layouts/funcionalidade.html` (Template A) e `_layouts/profissao.html` (Template B); os hubs, Integrações e Implantação têm o HTML no próprio arquivo.

**Menu, rodapé e cards:** saem de `_data/paginas.yml` (nome, link, ícone, resumo, status). Página nova entra ali e aparece no menu, no rodapé e nos cards de "relacionadas".

- `status: em-breve` (Equipe multidisciplinar, Marca própria) ou `acesso-antecipado` (Médicos): selo no menu e na página, e o botão vira lista de espera. Quando a funcionalidade estiver pronta, apague a linha `status`.

**Itens `[confirmar]` do doc:** estão no front matter com o campo `confirmar:` e **não aparecem no site** enquanto `mostrar_confirmar: false` no `_config.yml`.

- Para revisar tudo de uma vez (por exemplo, com o Thiago), mude para `true`: os itens aparecem com uma borda tracejada "a confirmar". Volte para `false` antes de publicar.
- Para publicar um item confirmado, apague a linha `confirmar:` dele. Se ele não vai existir, apague o item inteiro.
- Os itens `[roadmap]` entram com selo "em breve" (`em_breve: true`).

**Formulários** (lista de espera de Marca própria, Equipe e Médicos; Agendar implantação; "Falta alguma integração?"): com `form_action` vazio no `_config.yml`, o botão abre o e-mail do visitante já preenchido para `contato_email`. Para receber direto numa ferramenta (Formspree, RD Station, HubSpot...), cole a URL dela em `form_action`. Todo envio dispara o evento `lead_form` no dataLayer (com `form_id`), para medir no GTM.

**Dados que faltam no doc** (os blocos aparecem sozinhos quando preenchidos):

- `para/consultores.html`, `minutos_revo`: tempo médio por check-in com o Revo, medido nos coaches fundadores. Com ele, a calculadora mostra as horas que voltam.
- `implantacao.html`, `vagas_total` e `vagas_restantes`: N de vagas de coach fundador e o contador.

**Ícones:** são da [Tabler](https://tabler.io/icons) e o site carrega só os usados (`assets/tabler-subset.woff2`). Ícone novo precisa entrar no arquivo: rode `.github/scripts/gerar-icones.py` (as instruções estão no topo do script).

