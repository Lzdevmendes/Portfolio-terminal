git clone https://github.com/Lzdevmendes/portfolio-terminal.git
# Portfolio Terminal

Portfólio interativo com duas experiências de navegação: Terminal (linha de comando) e Scroll (página clássica), construído em React + TypeScript com identidade de terminal.

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
- Duas experiências: modo terminal e modo scroll.
- Visual consistente inspirado em terminais reais (Ubuntu/Windows/retro).
- Totalmente responsivo e otimizado para desktop e mobile.

## Funcionalidades
- Modo Terminal: navegação por comandos (help, about, skills, projects, contact, clear).
- Modo Scroll: navegação tradicional com seções About, Skills, Projects e Contact.
- Tema dark com design system próprio (cores, espaçamentos, tipografia monoespaçada).
- Scroll progress discreto e layout centrado.

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
- Navegação: itens em `src/constants/index.ts`.

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
