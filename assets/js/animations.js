/**
 * animations.js — Animações e Interações Visuais
 *
 * IMPORTANTE: este arquivo NÃO usa import/export.
 * Funciona como script regular — as funções ficam no escopo global
 * para que main.js possa chamá-las.
 * (ES Modules são bloqueados pelo browser ao abrir via file://)
 */


/* =====================================================
   1. INTERSECTION OBSERVER — Fade-in ao entrar na viewport

   Conceito: IntersectionObserver executa um callback quando
   um elemento entra na área visível. É muito mais performático
   que checar posição no evento scroll.
   ===================================================== */

function initRevealAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.08,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach((el) => observer.observe(el));

  /* Fallback corrigido: espera o 'load' completo (CSS + fontes + imagens)
     antes de verificar posições — garante que getBoundingClientRect() é confiável.
     requestAnimationFrame executava antes do CSS calcular posições, retornando
     valores errados e deixando os elementos do hero invisíveis para sempre. */
  window.addEventListener('load', () => {
    document.querySelectorAll('.reveal').forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
        observer.unobserve(el);
      }
    });
  });

  /* Failsafe: se após 1.2s ainda houver elementos invisíveis no hero,
     força a visibilidade. Protege contra edge cases de carregamento lento. */
  setTimeout(() => {
    document.querySelectorAll('#hero .reveal:not(.visible)').forEach((el) => {
      el.classList.add('visible');
    });
  }, 1200);
}


/* =====================================================
   2. TYPING EFFECT — Efeito de digitação no hero

   Digita frases rotativas no elemento .typing-text,
   apaga e substitui pela próxima em loop infinito.
   ===================================================== */

function initTypingEffect() {
  const typingElement = document.querySelector('.typing-text');
  if (!typingElement) return;

  const phrases = [
    'Desenvolvedor Front-end em Formação',
    'Apaixonado por interfaces.',
    'Estudante de ADS · Cruzeiro do Sul.',
    'Aprendendo React todo dia.',
    'Buscando primeira oportunidade júnior.',
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const TYPE_SPEED   = 55;
  const DELETE_SPEED = 28;
  const PAUSE_END    = 2200;
  const PAUSE_START  = 400;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? DELETE_SPEED : TYPE_SPEED;

    if (!isDeleting && charIndex === currentPhrase.length) {
      delay = PAUSE_END;
      isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = PAUSE_START;
    }

    setTimeout(type, delay);
  }

  setTimeout(type, 800);
}


/* =====================================================
   3. PARALLAX SUTIL — Decoração do hero segue o mouse
   Apenas desktop — touch não tem hover.
   ===================================================== */

function initHeroParallax() {
  if (window.innerWidth < 1024) return;
  const deco = document.querySelector('.hero-decoration');
  if (!deco) return;

  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth  - 0.5) * 18;
    const y = (e.clientY / window.innerHeight - 0.5) * 18;
    deco.style.transform = `translateY(-50%) translate(${x * 0.25}px, ${y * 0.25}px)`;
  });
}
