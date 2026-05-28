# Agenda Online

Aplicação web para gerenciamento de compromissos e tarefas do dia a dia.
Desenvolvida para praticar manipulação de DOM, eventos JavaScript e
persistência de dados com localStorage.

## Tecnologias

HTML5 · CSS3 · JavaScript ES6+

## Funcionalidades

- Adicionar compromissos com título, data e hora
- Notificações visuais automáticas: **Hoje** / **Em breve** / **Próximo** / **Futuro** / **Atrasado**
- Marcar como concluído (com animação de risco no texto)
- Remover tarefas com animação de fade-out
- Filtros: **Todos** / **Hoje** / **Pendentes** / **Concluídos**
- Dados persistidos com `localStorage` — compromissos mantidos ao recarregar

## Aprendizados aplicados

- Manipulação de DOM dinâmica (createElement, innerHTML, classList)
- Delegação de eventos — um listener para múltiplos botões
- `localStorage` para persistência de dados no navegador
- Comparação de datas em JavaScript (`Date`, `toISOString`)
- Design responsivo mobile-first com CSS Flexbox
- Prevenção de XSS com escape de HTML em dados do usuário
