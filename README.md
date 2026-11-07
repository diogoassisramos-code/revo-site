# Revo: site

Site da Revo (revofit.app), publicado pelo GitHub Pages a partir da branch `main`.

- `index.html`: landing page (HTML estático).
- `blog/`: página inicial do blog e páginas de categoria.
- `_posts/`: artigos do blog, em Markdown.
- `_layouts/`, `_includes/`, `assets/blog.css`: visual do blog.
- `_config.yml`: título, categorias, links do app (`cta_url`, `login_url`).

## Publicar um artigo

1. Copie `_modelo-artigo.md` para `_posts/AAAA-MM-DD-palavra-chave.md`.
2. Preencha título, descrição e categoria, e escreva o texto.
3. Faça commit na `main`. Data de hoje ou passada: no ar em ~1 min. Data futura: entra sozinho no dia (workflow `publicar-agendados`).

SEO automático: título/descrição/Open Graph/dados estruturados (jekyll-seo-tag), `sitemap.xml` e feed em `/blog/feed.xml`.

Obs.: o GitHub pausa workflows agendados em repositórios sem commits por 60 dias. O próprio workflow `publicar-agendados` se reativa todo dia para evitar isso. Se algum artigo agendado não entrar no ar, rode o workflow manualmente em Actions > Publicar artigos agendados > Run workflow.

## Google Tag Manager

O GTM está em **todas** as páginas: LP, home do blog, categorias e todos os artigos (inclusive os agendados e os que ainda vão ser criados).

- O ID do contêiner fica em um lugar só: `gtm_id` no `_config.yml`. Para trocar, mude ali.
- O código vem de `_includes/gtm-head.html` (no `<head>`) e `_includes/gtm-body.html` (logo após o `<body>`), chamados pelo `_layouts/default.html` e pelo `index.html`.
- Artigos novos em `_posts/` já usam esse layout automaticamente; não precisa fazer nada.
- Página nova fora do blog: use `layout: default` no front matter. Se for um HTML próprio (como o `index.html`), coloque `---` / `---` no topo e as linhas `{% include gtm-head.html %}` logo após `<head>` e `{% include gtm-body.html %}` logo após `<body>`.
- Rede de segurança: o workflow `checar-gtm` gera o site a cada push e fica vermelho se alguma página estiver sem GTM, listando qual.

## Calendário editorial

Os artigos de 7/11/2026 a 5/6/2027 já estão em `_posts/` com data futura: entram 2 por dia, sozinhos. Cada artigo só linka para artigos com data igual ou anterior à dele, para não gerar link quebrado antes da publicação.
