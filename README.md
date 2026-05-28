# Lucas Back — Portfólio Front-end

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat&logo=vercel&logoColor=white)
![Status](https://img.shields.io/badge/Status-Em%20desenvolvimento-6C63FF?style=flat)

Portfólio profissional de **Lucas Back**, estudante de Análise e Desenvolvimento de Sistemas na Cruzeiro do Sul, desenvolvedor front-end em formação, em busca da minha primeira oportunidade.

Construído com **HTML5, CSS3 e JavaScript puro** — sem frameworks, sem dependências externas.

---

## Sobre o projeto

Este portfólio foi criado com o objetivo de apresentar minha trajetória de forma honesta:
base técnica real, projetos funcionais e potencial de crescimento — sem exagerar habilidades.

**🎨 Design:** Dark mode com paleta roxo + verde-água, tipografia Sora/Inter, animações com Intersection Observer.

<!-- PERSONALIZAR: adicionar o link real após o deploy -->
**🚀 Acesse:** [lucasback.vercel.app](https://lucasback.vercel.app) _(em breve)_

---

## Projetos incluídos

| Projeto | Descrição | Stack |
|---|---|---|
| **CalcUI** | Calculadora dark com histórico e suporte a teclado | HTML · CSS · JS |
| **ReceitasFáceis** | Site de receitas com busca e filtros | HTML · CSS · JS |
| **Meu Primeiro Site** | Página pessoal — projeto de estudo | HTML · CSS · JS |

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 semântico | Estrutura e acessibilidade |
| CSS3 + Custom Properties | Estilização, layout responsivo, animações |
| JavaScript ES6+ Vanilla | Interações, Intersection Observer, eventos |
| Google Fonts | Sora · Inter · JetBrains Mono |
| Devicon CDN | Ícones de tecnologias na seção de habilidades |
| FormSubmit.co | Formulário de contato sem backend |

---

## Como executar localmente

Não há dependências para instalar. Clone e abra diretamente:

```bash
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio
```

Abra o `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge).

> **Recomendado:** Use a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code para hot-reload durante o desenvolvimento.

---

## Estrutura de pastas

```
portfolio/
│
├── index.html                  ← portfólio one-page principal
├── README.md
├── .gitignore
├── CLAUDE.md                   ← instruções para o Claude Code
│
├── assets/
│   ├── css/
│   │   ├── reset.css           ← CSS reset moderno
│   │   ├── variables.css       ← todas as CSS custom properties
│   │   └── main.css            ← estilos principais (~800 linhas)
│   │
│   ├── js/
│   │   ├── main.js             ← header, menu, scroll, navegação, formulário
│   │   └── animations.js      ← Intersection Observer, typing effect, parallax
│   │
│   ├── curriculo.html          ← currículo A4 pronto para imprimir
│   └── images/                 ← fotos e screenshots (adicionar)
│
└── projects/
    ├── calcui/                 ← Projeto 1: calculadora
    ├── receitas-faceis/        ← Projeto 2: site de receitas
    └── meu-primeiro-site/      ← Projeto 3: página pessoal de estudo
```

---

## Como personalizar

Pontos que ainda precisam de dados reais (marcados com `<!-- PERSONALIZAR: -->` no código):

1. **Foto de perfil** — adicionar `assets/images/lucas-back.webp` e substituir o avatar placeholder
2. **GitHub** — criar conta e atualizar todos os hrefs `#` com `.link-em-breve`
3. **LinkedIn** — criar perfil e atualizar o href
4. **URL do deploy** — após publicar na Vercel, atualizar as meta tags Open Graph
5. **Modalidade da faculdade** — presencial/EAD/híbrido na seção de formação
6. **Formulário** — o FormSubmit enviará para `lucasback158@gmail.com` (confirmar o e-mail na primeira mensagem)

---

## Deploy na Vercel

```bash
# 1. Subir para o GitHub
git init
git add .
git commit -m "feat: initial portfolio setup"
git remote add origin https://github.com/seu-usuario/portfolio.git
git push -u origin main

# 2. Na Vercel: New Project → importar repositório → Framework: Other → Deploy
```

URL gerada automaticamente: `nome-portfolio.vercel.app`

---

## Contato

- **E-mail:** lucasback158@gmail.com
- **WhatsApp:** +55 61 99639-8783
- **Localização:** Sobradinho, Brasília — DF

---

## Licença

[MIT](https://choosealicense.com/licenses/mit/) — Livre para usar como referência e estudo.
