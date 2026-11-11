/* Revo: comportamento comum a todas as páginas (LP, blog e funcionalidades).
   Menu (vidro que acompanha o fundo, mega menus, menu do celular), animação de entrada,
   escala dos mockups, formulários e calculadora. */
(function () {
  // animação de entrada (.reveal)
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { el.classList.add('in'); }); }

  // menu: o vidro muda de tom conforme o que está atrás ([data-nav="dark"] = texto claro)
  var nav = document.querySelector('.nav');
  if (nav) {
    var navTick = false;
    var navTheme = function () {
      navTick = false;
      var y = 44, x = window.innerWidth / 2, dark = false;
      var under = document.elementsFromPoint ? document.elementsFromPoint(x, y) : [];
      for (var k = 0; k < under.length; k++) {
        if (nav.contains(under[k]) || under[k].closest('#menu')) continue;
        dark = !!under[k].closest('[data-nav="dark"]'); break;
      }
      nav.classList.toggle('on-dark', dark);
    };
    window.addEventListener('scroll', function () { if (!navTick) { navTick = true; requestAnimationFrame(navTheme); } }, { passive: true });
    window.addEventListener('resize', navTheme);
    navTheme();
  }

  // menu: mega menus no hover (um painel de vidro que desliza e muda de tamanho)
  var drop = document.querySelector('.nav-drop');
  if (nav && drop && window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    var panel = drop.querySelector('.nav-drop-panel'), items = nav.querySelectorAll('.nav-item[data-pane]'), panes = drop.querySelectorAll('.pane');
    var current = null, closeT = null;
    var show = function (item) {
      clearTimeout(closeT);
      var key = item.dataset.pane, pane = drop.querySelector('.pane[data-pane="' + key + '"]');
      if (!pane || current === key) return;
      var wasOpen = drop.classList.contains('open');
      drop.classList.toggle('instant', !wasOpen);
      items.forEach(function (it) { it.classList.toggle('active', it === item); });
      panes.forEach(function (p) { p.classList.toggle('on', p === pane); });
      var w = pane.offsetWidth, h = pane.offsetHeight;
      panel.style.width = w + 'px'; panel.style.height = h + 'px';
      var nb = nav.getBoundingClientRect(), ib = item.getBoundingClientRect();
      var left = ib.left + ib.width / 2 - w / 2 - nb.left;
      left = Math.max(16 - nb.left, Math.min(left, nb.width - (16 - nb.left) - w));
      drop.style.left = left + 'px';
      drop.style.top = (nav.querySelector('.nav-pill').getBoundingClientRect().bottom - nb.top) + 'px';
      if (!wasOpen) { void drop.offsetWidth; drop.classList.add('open'); drop.removeAttribute('inert'); requestAnimationFrame(function () { drop.classList.remove('instant'); }); }
      current = key;
    };
    var hide = function () {
      drop.classList.remove('open'); drop.setAttribute('inert', '');
      items.forEach(function (it) { it.classList.remove('active'); });
      current = null;
    };
    var later = function () { clearTimeout(closeT); closeT = setTimeout(hide, 140); };
    items.forEach(function (it) {
      it.addEventListener('mouseenter', function () { show(it); });
      it.querySelector('a').addEventListener('focus', function () { show(it); });
    });
    nav.querySelector('.nav-logo').addEventListener('mouseenter', later);
    nav.querySelectorAll('.nav-item:not([data-pane])').forEach(function (it) { it.addEventListener('mouseenter', later); });
    nav.querySelector('.nav-cta').addEventListener('mouseenter', later);
    nav.querySelector('.nav-pill').addEventListener('mouseleave', later);
    drop.addEventListener('mouseenter', function () { clearTimeout(closeT); });
    drop.addEventListener('mouseleave', later);
    drop.addEventListener('click', function (e) { if (e.target.closest('a')) hide(); });
    nav.addEventListener('focusout', function (e) { if (!nav.contains(e.relatedTarget)) hide(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && current) { hide(); } });
    window.addEventListener('scroll', function () { if (current) hide(); }, { passive: true });
  }

  // menu do celular
  var burger = document.querySelector('.nav-burger'), menu = document.getElementById('menu');
  if (burger && menu) {
    burger.addEventListener('click', function () { var open = menu.classList.toggle('open'); burger.setAttribute('aria-expanded', open); });
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }); });
  }

  // mockups de painel: escala o desenho (--w px de largura) para caber no espaço
  var fits = document.querySelectorAll('.ux-fit');
  if (fits.length) {
    var fit = function () {
      fits.forEach(function (f) {
        var w = parseFloat(getComputedStyle(f).getPropertyValue('--w')) || 680;
        if (f.clientWidth) f.style.setProperty('--s', Math.min(1, f.clientWidth / w));
      });
    };
    fit();
    if ('ResizeObserver' in window) { var ro = new ResizeObserver(fit); fits.forEach(function (f) { ro.observe(f); }); }
    window.addEventListener('resize', fit);
  }

  // mockups do Figma desenhados em tamanho real: [data-fit="largura do desenho"] (painel 1440, app 440)
  // recebe em --s a escala para caber na largura do container
  var dfits = document.querySelectorAll('[data-fit]');
  if (dfits.length) {
    var dfit = function () {
      dfits.forEach(function (el) { var w = el.clientWidth; if (w) el.style.setProperty('--s', Math.min(1, w / el.getAttribute('data-fit'))); });
    };
    dfit();
    if ('ResizeObserver' in window) { var dro = new ResizeObserver(dfit); dfits.forEach(function (el) { dro.observe(el); }); }
    window.addEventListener('resize', dfit);
  }

  // formulários (lista de espera, implantação, sugestão de integração)
  // Com form_action no _config.yml, o envio vai para lá. Sem ele, abre o e-mail já preenchido.
  document.querySelectorAll('form[data-lead]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'lead_form', form_id: f.getAttribute('data-lead') });
      if (f.getAttribute('action')) return;
      e.preventDefault();
      var linhas = [];
      f.querySelectorAll('input, select, textarea').forEach(function (el) {
        if (!el.name || el.type === 'hidden' || el.name.charAt(0) === '_') return;
        var rot = (el.closest('label') && el.closest('label').firstChild.textContent.trim()) || el.name;
        linhas.push(rot + ': ' + el.value);
      });
      var para = f.getAttribute('data-email'), assunto = f.getAttribute('data-assunto') || 'Contato pelo site';
      window.location.href = 'mailto:' + para + '?subject=' + encodeURIComponent(assunto) + '&body=' + encodeURIComponent(linhas.join('\n'));
      f.classList.add('sent');
    });
  });

  // calculadora "A conta da escala" (LP consultores)
  document.querySelectorAll('[data-calc]').forEach(function (c) {
    var get = function (n) { var el = c.querySelector('[name="' + n + '"]'); return el ? parseFloat(el.value) || 0 : 0; };
    var put = function (n, v) { c.querySelectorAll('[data-out="' + n + '"]').forEach(function (o) { o.textContent = v; }); };
    var fmt = function (v) { return (Math.round(v * 10) / 10).toLocaleString('pt-BR'); };
    var revo = parseFloat(c.getAttribute('data-revo')) || 0; // minutos por check-in com a fila do Revo (dado real)
    var calc = function () {
      var alunos = get('alunos'), min = get('minutos'), mes = get('checkins');
      put('alunos', alunos); put('minutos', min + ' min'); put('checkins', mes + 'x');
      var horas = alunos * min * mes / 60;
      put('horas', fmt(horas)); put('dias', fmt(horas / 8));
      if (revo) { var hRevo = alunos * revo * mes / 60; put('horas-revo', fmt(hRevo)); put('horas-volta', fmt(Math.max(0, horas - hRevo))); }
    };
    c.addEventListener('input', calc);
    calc();
  });
})();
