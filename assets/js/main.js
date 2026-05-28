/**
 * main.js — Lógica Principal do Portfólio
 *
 * IMPORTANTE: sem import/export. Script regular carregado após animations.js.
 * As funções de animação (initRevealAnimations, etc.) estão no escopo global
 * definidas em animations.js, carregado antes deste arquivo.
 *
 * Conteúdo:
 * 1. Header — blur ao scroll
 * 2. Menu mobile
 * 3. Smooth scroll
 * 4. Link ativo na nav (Intersection Observer)
 * 5. Formulário — validação
 * 6. Cursor personalizado
 * 7. Barra de progresso de leitura
 * 8. Botão voltar ao topo
 * 9. Toggle Dark / Light mode
 * 10. Inicialização
 */


/* =====================================================
   1. HEADER — blur ao scrollar
   ===================================================== */

function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  function updateHeader() {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}


/* =====================================================
   2. MENU MOBILE
   ===================================================== */

function initMobileMenu() {
  const menuBtn  = document.querySelector('.menu-mobile');
  const navMobile = document.querySelector('.nav-mobile');
  if (!menuBtn || !navMobile) return;

  let isOpen = false;

  function closeMenu() {
    isOpen = false;
    navMobile.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.textContent = '☰';
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    navMobile.classList.toggle('open', isOpen);
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuBtn.textContent = isOpen ? '✕' : '☰';
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navMobile.querySelectorAll('a').forEach((l) => l.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && isOpen) closeMenu(); });
}


/* =====================================================
   3. SMOOTH SCROLL
   ===================================================== */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}


/* =====================================================
   4. LINK ATIVO NA NAV
   ===================================================== */

function initActiveNav() {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a, .nav-mobile a');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((l) => {
          l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px', threshold: 0 });

  sections.forEach((s) => observer.observe(s));
}


/* =====================================================
   5. FORMULÁRIO — validação básica
   ===================================================== */

function initContactForm() {
  const form = document.querySelector('.contato-form form');
  if (!form) return;

  function validateField(input) {
    const errorEl = input.parentElement.querySelector('.form-error');
    let isValid = true;
    let message = '';

    if (input.type === 'email') {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!input.value.trim())      { message = 'E-mail obrigatório'; isValid = false; }
      else if (!re.test(input.value)) { message = 'E-mail inválido';     isValid = false; }
    } else if (input.tagName === 'TEXTAREA') {
      if (input.value.trim().length < 10) { message = 'Mínimo 10 caracteres'; isValid = false; }
    } else {
      if (!input.value.trim()) { message = `${input.placeholder} obrigatório`; isValid = false; }
    }

    if (errorEl) errorEl.textContent = message;
    input.classList.toggle('error', !isValid);
    return isValid;
  }

  form.querySelectorAll('input, textarea').forEach((input) => {
    input.addEventListener('blur',  () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) {
        input.classList.remove('error');
        const e = input.parentElement.querySelector('.form-error');
        if (e) e.textContent = '';
      }
    });
  });

  form.addEventListener('submit', (e) => {
    let allValid = true;
    form.querySelectorAll('input, textarea').forEach((input) => {
      if (!validateField(input)) allValid = false;
    });
    if (!allValid) e.preventDefault();
  });
}


/* =====================================================
   6. CURSOR PERSONALIZADO

   Conceito: substituímos o cursor padrão por dois elementos:
   - cursor-dot: pequeno ponto sólido (segue o mouse em tempo real)
   - cursor-ring: anel maior (segue com delay via CSS transition)

   Desativado em dispositivos touch (matchMedia hover:none).
   ===================================================== */

function initCustomCursor() {
  /* Dispositivos touch não têm hover real — não aplicar cursor */
  if (window.matchMedia('(hover: none)').matches) return;

  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  /* Mostrar os elementos */
  dot.style.opacity  = '1';
  ring.style.opacity = '1';

  /* Esconder o cursor padrão */
  document.documentElement.classList.add('custom-cursor');

  let raf;
  let mouseX = -100, mouseY = -100;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    /* O dot segue em tempo real */
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';

    /* O ring usa CSS transition para criar o delay */
    if (!raf) {
      raf = requestAnimationFrame(() => {
        ring.style.left = mouseX + 'px';
        ring.style.top  = mouseY + 'px';
        raf = null;
      });
    }
  });

  /* Efeito de "clique": encolhe o ring */
  document.addEventListener('mousedown', () => ring.classList.add('clicking'));
  document.addEventListener('mouseup',   () => ring.classList.remove('clicking'));

  /* Efeito hover em links e botões: expande o ring */
  document.addEventListener('mouseover', (e) => {
    const isInteractive = e.target.closest('a, button, input, textarea, [role="button"]');
    ring.classList.toggle('hovering', !!isInteractive);
  });

  /* Esconde ao sair da janela */
  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });
}


/* =====================================================
   7. BARRA DE PROGRESSO DE LEITURA

   Linha fina no topo da página. Largura = % scrollado.
   ===================================================== */

function initReadingProgress() {
  const bar = document.getElementById('reading-progress');
  if (!bar) return;

  function updateProgress() {
    const scrollTop  = window.scrollY;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    const progress   = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width  = progress + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}


/* =====================================================
   8. BOTÃO VOLTAR AO TOPO

   Aparece após 400px de scroll, smooth scroll para o topo.
   ===================================================== */

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* =====================================================
   9. TOGGLE DARK / LIGHT MODE

   Alterna a classe .light-mode no <html>.
   Persiste a preferência no localStorage.
   ===================================================== */

function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  /* Restaura preferência salva ou usa prefers-color-scheme */
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isLight = saved === 'light' || (!saved && !prefersDark);

  if (isLight) applyLight();

  function applyLight() {
    document.documentElement.classList.add('light-mode');
    btn.textContent = '☀️';
    btn.setAttribute('aria-label', 'Ativar modo escuro');
  }

  function applyDark() {
    document.documentElement.classList.remove('light-mode');
    btn.textContent = '🌙';
    btn.setAttribute('aria-label', 'Ativar modo claro');
  }

  btn.addEventListener('click', () => {
    const nowLight = document.documentElement.classList.toggle('light-mode');
    btn.textContent = nowLight ? '☀️' : '🌙';
    btn.setAttribute('aria-label', nowLight ? 'Ativar modo escuro' : 'Ativar modo claro');
    localStorage.setItem('theme', nowLight ? 'light' : 'dark');
  });
}


/* =====================================================
   10. INICIALIZAÇÃO
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initSmoothScroll();
  initActiveNav();
  initContactForm();
  initCustomCursor();
  initReadingProgress();
  initBackToTop();
  initThemeToggle();

  /* Funções definidas em animations.js (escopo global) */
  if (typeof initRevealAnimations === 'function') initRevealAnimations();
  if (typeof initTypingEffect      === 'function') initTypingEffect();
  if (typeof initHeroParallax      === 'function') initHeroParallax();
});
