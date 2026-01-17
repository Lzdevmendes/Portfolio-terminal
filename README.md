# Portfolio Terminal

Portfólio interativo centrado em uma experiência única de Terminal (linha de comando), com identidade visual fiel a terminais reais. Construído em React + TypeScript, focado em responsividade, fluidez e consistência visual.

## Sumário
- Visão geral
- Funcionalidades
- Tecnologias
- Como rodar
- Comandos do Terminal
- Personalização rápida
- Estrutura do projeto
- Próximos passos

## Visão geral
- Experiência única: modo terminal interativo.
- Visual consistente inspirado em terminais Ubuntu/Windows/retro.
- Totalmente responsivo e otimizado para desktop e mobile.

## Funcionalidades
- Navegação por comandos: `help`, `about`, `skills`, `projects`, `contact`, `clear`.
- Tema dark com design system próprio (cores, espaçamentos, tipografia monoespaçada).
- Layout centrado, padding e line-height ajustados para ergonomia de terminal.

## Tecnologias
- React 19, TypeScript, Vite.
- Tailwind CSS v4 para utilidades e reset.
- Framer Motion para transições pontuais.

## Como rodar
```bash
git clone https://github.com/Lzdevmendes/portfolio-terminal.git
cd portfolio-terminal
npm install
npm run dev
```

## Comandos do Terminal
- `help` — lista comandos disponíveis
- `about` — informações pessoais
- `skills` — habilidades técnicas
- `projects` — projetos em destaque
- `contact` — formas de contato
- `clear` — limpa o terminal

## Personalização rápida
- Conteúdo: `src/components/sections/` e `src/data/projects.ts`.
- Estilo/tema: variáveis em `src/styles/design-system.css` e temas em `src/styles/terminal-themes.css`.
- Navegação/menus: pode ajustar constantes auxiliares em `src/constants/index.ts`.

## Estrutura do projeto
```
src/
  components/
    Terminal/
    sections/
    ui/
  data/
  styles/
  App.tsx
  main.tsx
```

## Próximos passos
- Toggle de tema claro/escuro.
- Formulário de contato funcional.
- Mais comandos no modo terminal.
- Integração com API do GitHub para projetos reais.

## Licença
MIT

## Autor
Luiz Mendes — [@Lzdevmendes](https://github.com/Lzdevmendes) — Lzmendestechdev@gmail.com
