# CLAUDE.md — Contexto do Projeto: Portfólio Profissional

> Este arquivo é lido automaticamente pelo Claude Code. Siga TODAS as instruções abaixo com precisão.

---

## 🎯 Objetivo do Projeto

Construir um portfólio profissional para um estudante de Tecnologia da Informação no último semestre,
buscando sua primeira CLT júnior em Front-end nos próximos 6-12 meses.

**Regra de ouro:** O portfólio deve ser HONESTO, PREMIUM e PROFISSIONAL.
Não exagerar habilidades. Transmitir: base técnica real + organização + potencial de crescimento.

---

## 👤 Perfil do Desenvolvedor

- **Curso:** Tecnologia da Informação — 4º semestre (último)
- **Nível técnico:** HTML, CSS e JavaScript básico/intermediário
- **Experiência:** Projetos pessoais simples
- **Objetivo:** Primeira CLT júnior em Front-end (React) em 6-12 meses
- **GitHub:** Sendo criado agora (primeiro repositório real)
- **Área de foco:** Front-end com foco em React

---

## 🎨 Identidade Visual Definida

### Paleta de Cores (Dark Mode como padrão)
```css
--color-bg:           #0F0F0F;   /* fundo principal */
--color-bg-card:      #1A1A2E;   /* cards e seções alternadas */
--color-accent:       #6C63FF;   /* roxo elétrico — cor principal */
--color-accent-hover: #5A52E0;   /* hover da cor principal */
--color-highlight:    #00D4AA;   /* verde-água — CTAs e destaques */
--color-text:         #FFFFFF;   /* texto principal */
--color-text-muted:   #A0A0B0;   /* texto secundário */
--color-border:       #2A2A3E;   /* bordas sutis */
```

### Tipografia
```css
--font-display: 'Sora', sans-serif;        /* títulos e headings */
--font-body:    'Inter', sans-serif;       /* corpo de texto */
--font-code:    'JetBrains Mono', monospace; /* snippets de código */
```
Importar via Google Fonts.

### Estilo Visual
- Dark mode como padrão
- Design minimalista com personalidade
- Muito espaço em branco (breathing room)
- Animações sutis e elegantes (não exageradas)
- Gradientes sutis na cor de acento
- Bordas arredondadas: `border-radius: 12px` para cards
- Sombras suaves com cor de acento: `box-shadow: 0 0 30px rgba(108, 99, 255, 0.1)`

---

## 🏗️ Arquitetura do Projeto

### Estrutura de Pastas (OBRIGATÓRIA — não alterar)
```
portfolio/
│
├── index.html
├── README.md
├── .gitignore
│
└── assets/
    ├── css/
    │   ├── reset.css        ← CSS reset moderno
    │   ├── variables.css    ← todas as CSS custom properties
    │   └── main.css         ← estilos principais
    │
    ├── js/
    │   ├── main.js          ← lógica principal
    │   └── animations.js    ← Intersection Observer e animações
    │
    ├── images/              ← imagens otimizadas (webp quando possível)
    └── icons/               ← SVGs inline ou como arquivos
```

### Tecnologias
- HTML5 semântico (sem frameworks HTML)
- CSS3 com Custom Properties (sem frameworks CSS externos)
- JavaScript ES6+ Vanilla (sem bibliotecas externas)
- Google Fonts (Sora + Inter + JetBrains Mono)
- Devicon CDN (para ícones de tecnologias)

**NÃO usar:** Bootstrap, Tailwind, jQuery, React (o portfólio em si é Vanilla).

---

## 📄 Seções do Portfólio (One-Page)

### 1. `<section id="hero">` — Hero Section
- Nome completo em destaque (tamanho grande, fonte Sora)
- Título: `Desenvolvedor Front-end em Formação`
- Subtítulo/tagline: uma frase curta e honesta (placeholder para personalização)
- Dois botões CTA:
  - `Ver Projetos` → ancora para #projetos (cor accent #6C63FF)
  - `Baixar Currículo` → link para PDF (placeholder — botão com classe `.btn-outline`)
- Elemento decorativo: formas geométricas abstratas com CSS (não imagem)
- Scroll indicator animado na parte inferior

### 2. `<section id="sobre">` — Sobre Mim
- Container com duas colunas no desktop, uma coluna no mobile
- Lado esquerdo: avatar/placeholder de foto com borda estilizada em gradiente
- Lado direito: 
  - Heading: "Olá, sou [Nome]"
  - 3-4 parágrafos honestos (placeholders com instrução de personalização)
  - Chips/tags de características pessoais: ex. "Curioso", "Focado em evolução", "TI — 4º semestre"
- IMPORTANTE: texto placeholder deve ter comentário HTML `<!-- PERSONALIZAR: -->` antes

### 3. `<section id="habilidades">` — Habilidades
**Regra crítica:** NÃO usar barras de progresso (são consideradas antipadrão por devs sêniores).

Usar três sub-grupos visuais distintos com cards:
- **"Sei fazer"** → HTML5, CSS3, JavaScript, Git
- **"Estou aprendendo"** → React, GitHub, Responsividade avançada
- **"Próximos passos"** → Node.js, TypeScript, Testes

Cada card tem: ícone da tecnologia (Devicon), nome, badge de status colorido.

### 4. `<section id="projetos">` — Projetos (SEÇÃO MAIS IMPORTANTE)
- Grid de cards (3 colunas desktop, 2 tablet, 1 mobile)
- Máximo 3 projetos inicialmente
- Cada card contém:
  - Imagem/screenshot do projeto (placeholder inicial)
  - Nome do projeto
  - Descrição curta (2 linhas max)
  - Tags de tecnologias usadas
  - Dois botões: `GitHub` e `Ver ao vivo`
  - Hover effect: elevação + borda accent
- Projetos placeholder iniciais (com instrução para substituir):
  1. "Projeto 1 — [Seu projeto pessoal refatorado]"
  2. "Projeto 2 — App interativo em JavaScript"
  3. "Projeto 3 — Em breve: React"

### 5. `<section id="formacao">` — Formação & Aprendizado
- Timeline vertical elegante
- Itens:
  - Graduação em TI (em andamento — destaque visual especial)
  - Cursos online (placeholder)
  - Projetos de estudo
- Design: linha vertical com pontos, cards laterais alternados no desktop

### 6. `<section id="contato">` — Contato
- Heading: "Vamos conversar?"
- Parágrafo: convite direto e profissional
- Formulário funcional via FormSubmit (sem backend):
  - action: `https://formsubmit.co/SEU_EMAIL_AQUI` (placeholder)
  - Campos: Nome, E-mail, Mensagem
  - Botão: "Enviar mensagem"
  - Validação básica com JS
- Links sociais: GitHub (ícone SVG) + LinkedIn (ícone SVG) + E-mail
- NOTA: sem backend, sem risco de segurança

---

## 🧭 Navegação (Header)

```html
<header id="header">
  <nav>
    <a class="logo" href="#hero">dev.<span>nome</span></a>
    <ul>
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#habilidades">Habilidades</a></li>
      <li><a href="#projetos">Projetos</a></li>
      <li><a href="#formacao">Formação</a></li>
      <li><a href="#contato">Contato</a></li>
    </ul>
    <button class="menu-mobile" aria-label="Menu">☰</button>
  </nav>
</header>
```

- Header fixo com `position: sticky; top: 0`
- Background transparente → sólido com blur ao scrollar (JS)
- `backdrop-filter: blur(10px)` quando scrollado
- Menu hambúrguer funcional para mobile
- Link ativo destacado conforme seção visível (Intersection Observer)

---

## ✨ Animações e Interações

### Regras de Animação
- Todas as animações devem ser **sutis e elegantes** — não chamar atenção para si mesmas
- Respeitar `prefers-reduced-motion` media query
- Performance: usar `transform` e `opacity` (nunca animar `width`, `height`, `top`, `left`)

### Animações obrigatórias
```javascript
// 1. Fade-in + slide-up ao entrar na viewport
// Implementar com Intersection Observer API
// Aplicar classe .animate-in quando elemento entra na tela

// 2. Header blur ao scroll
// window.addEventListener('scroll', ...) → adiciona classe .scrolled no header

// 3. Smooth scroll para âncoras
// document.querySelectorAll('a[href^="#"]') → scroll behavior smooth

// 4. Hover nos cards de projetos
// CSS: transform: translateY(-8px) + box-shadow intensificado

// 5. Typing effect no hero (opcional, mas elegante)
// Apenas no subtítulo/tagline — sem bibliotecas externas
```

### CSS de animação base
```css
/* Elementos com esta classe ficam invisíveis inicialmente */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

/* Quando o JS adicionar .visible, o elemento aparece */
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 📱 Responsividade (Mobile-First)

### Breakpoints
```css
/* Mobile: padrão (sem media query) */
/* Tablet: */  @media (min-width: 768px)  { }
/* Desktop: */ @media (min-width: 1024px) { }
/* Wide: */    @media (min-width: 1440px) { }
```

### Regras
- Layout mobile-first: construir para mobile PRIMEIRO, expandir para desktop
- Imagens: sempre com `max-width: 100%`
- Grid: `grid-template-columns: 1fr` no mobile → múltiplas colunas no desktop
- Fontes: escalar com `clamp()`:
  ```css
  font-size: clamp(2rem, 5vw, 4rem); /* título hero */
  font-size: clamp(1rem, 2vw, 1.125rem); /* corpo */
  ```

---

## ⚡ Performance e SEO

### Meta tags obrigatórias no `<head>`
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Portfólio de [Nome] — Desenvolvedor Front-end em Formação. Projetos em HTML, CSS, JavaScript e React.">
<meta name="author" content="[Nome Completo]">
<meta name="robots" content="index, follow">

<!-- Open Graph (aparência ao compartilhar no LinkedIn/WhatsApp) -->
<meta property="og:title" content="[Nome] — Desenvolvedor Front-end">
<meta property="og:description" content="Portfólio profissional — projetos reais, evolução constante.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://seudominio.vercel.app">

<title>[Nome] | Desenvolvedor Front-end</title>
```

### Performance
- Imagens em formato WebP
- Fontes com `font-display: swap`
- CSS crítico inline no `<head>` (apenas reset e variáveis)
- JS com atributo `defer`
- Sem dependências externas desnecessárias

---

## 🔒 Segurança Básica

- Formulário via FormSubmit (sem expor e-mail diretamente no HTML)
- Nenhuma credencial, API key ou dado sensível no código
- `.gitignore` configurado corretamente
- Links externos com `rel="noopener noreferrer"`
- Sem uso de `innerHTML` com dados do usuário

---

## 📝 .gitignore (conteúdo exato)

```
# Sistema operacional
.DS_Store
Thumbs.db
desktop.ini

# Editor
.vscode/settings.json
.idea/
*.swp
*.swo

# Logs
*.log
npm-debug.log*

# Dependências (se usar npm futuramente)
node_modules/

# Arquivos de ambiente
.env
.env.local
.env.production

# Build
dist/
build/
```

---

## 📖 README.md (estrutura profissional)

O README deve conter:
1. Banner/título visual (pode ser texto estilizado em markdown)
2. Badges (HTML, CSS, JS, Deployed on Vercel)
3. Descrição do projeto
4. Screenshot do portfólio
5. Tecnologias utilizadas (com ícones)
6. Como executar localmente
7. Estrutura de pastas
8. Como personalizar
9. Deploy
10. Licença (MIT)

---

## ✅ Checklist de Qualidade (antes de dar como pronto)

- [ ] HTML validado (sem erros no W3C Validator)
- [ ] CSS sem propriedades inválidas
- [ ] JavaScript sem erros no console
- [ ] Responsivo em: 375px, 768px, 1024px, 1440px
- [ ] Todos os links funcionando
- [ ] Formulário de contato testado
- [ ] Lighthouse score: Performance >90, Acessibilidade >90, SEO >90
- [ ] Sem conteúdo placeholder esquecido
- [ ] Meta tags preenchidas
- [ ] Imagens com atributo `alt`
- [ ] Menu mobile funcional
- [ ] Animações respeitam `prefers-reduced-motion`
- [ ] `.gitignore` configurado
- [ ] README.md completo e profissional

---

## 🚀 Instrução de Deploy (Vercel)

1. Projeto no GitHub (repositório público)
2. Acessar vercel.com → "New Project" → importar repositório
3. Framework: "Other" (HTML estático)
4. Deploy automático a cada `git push` na branch `main`
5. URL gerada: `nome-portfolio.vercel.app`

---

## 💬 Padrão de Commits (OBRIGATÓRIO)

Usar Conventional Commits:
```
feat: add hero section with CTA buttons
feat: implement mobile navigation menu
style: apply dark theme color variables
fix: correct responsive grid on tablet
docs: update README with project structure
chore: add .gitignore configuration
refactor: extract animation logic to animations.js
```

**NUNCA commitar com mensagens como:** "update", "fix", "changes", "ajustes", "teste"

---

## ⚠️ Regras Absolutas para Claude Code

1. **NUNCA** usar Bootstrap, Tailwind ou qualquer framework CSS
2. **NUNCA** usar jQuery ou qualquer biblioteca JS externa
3. **SEMPRE** escrever comentários explicativos no código (o dono vai aprender lendo)
4. **SEMPRE** usar HTML semântico: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
5. **NUNCA** usar `<div>` onde existe uma tag semântica equivalente
6. **SEMPRE** incluir comentários `<!-- PERSONALIZAR: instrução -->` onde o usuário precisa substituir dados pessoais
7. **NUNCA** hardcodar dados pessoais fictícios — usar placeholders claros
8. **SEMPRE** escrever CSS mobile-first
9. **SEMPRE** adicionar `transition` em elementos que têm hover
10. **NUNCA** criar animações que usem `width`, `height`, `top`, `left` (usar `transform`)
11. **SEMPRE** que criar um arquivo novo, explicar brevemente o que ele faz e por quê existe
12. **SEMPRE** que escrever uma técnica avançada, adicionar comentário explicando o conceito

---

*Última atualização deste arquivo: início do projeto*
*Manter este arquivo atualizado conforme o projeto evolui.*
