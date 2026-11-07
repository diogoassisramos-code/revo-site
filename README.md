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

## Calendário editorial

Os artigos de 7/11/2026 a 5/6/2027 já estão em `_posts/` com data futura: entram 2 por dia, sozinhos. Cada artigo só linka para artigos com data igual ou anterior à dele, para não gerar link quebrado antes da publicação.
