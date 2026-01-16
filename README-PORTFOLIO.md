# 🚀 Portfolio Terminal - Portfólio Interativo

Um portfólio moderno e criativo com duas experiências distintas de navegação: **Terminal** e **Scroll**, demonstrando habilidades avançadas em React, TypeScript e animações com Framer Motion.

## ✨ Características

### 🎯 Dual Experience
- **Terminal Mode**: Navegação via linha de comando, simulando um terminal real
- **Scroll Mode**: Experiência tradicional com navegação fluida e animações sofisticadas

### 🎨 Design & UX
- **Mobile-First**: Totalmente responsivo para todos os dispositivos
- **Animações Avançadas**: Usando Framer Motion para transições suaves e interativas
- **Cards 3D**: Efeitos de profundidade e perspectiva nos projetos
- **Scroll Spy Navigation**: Menu que acompanha a rolagem da página
- **Tema Dark**: Paleta de cores moderna com gradientes emerald e indigo

### 🛠️ Tecnologias

- **React 19** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Framer Motion** - Animações e transições
- **Tailwind CSS v4** - Estilização utilitária
- **Vite** - Build tool ultrarrápido

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/Lzdevmendes/portfolio-terminal.git

# Entre na pasta
cd portfolio-terminal

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🎮 Comandos do Terminal

Quando estiver no **Terminal Mode**, você pode usar:

- `help` - Lista todos os comandos disponíveis
- `about` - Informações sobre você
- `skills` - Lista de habilidades técnicas
- `projects` - Projetos em destaque
- `contact` - Formas de contato
- `clear` - Limpa o terminal

## 🎨 Personalização

### 1. Informações Pessoais

Edite os componentes em `src/components/sections/`:
- `About.tsx` - Suas informações e bio
- `Skills.tsx` - Suas tecnologias e níveis
- `Projects.tsx` - Seus projetos (edite também `src/data/projects.ts`)
- `Contact.tsx` - Seus links sociais e email

### 2. Cores e Tema

Personalize em `tailwind.config.ts`:
```typescript
colors: {
  primary: { /* Cor primária */ },
  secondary: { /* Cor secundária */ },
}
```

### 3. Animações

Ajuste as animações em cada componente usando props do Framer Motion:
```typescript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

## 📱 Mobile-First

Todas as telas foram desenvolvidas pensando primeiro em dispositivos móveis:

- Grid responsivo: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Tipografia adaptativa: `text-sm sm:text-base md:text-lg`
- Espaçamentos flexíveis: `p-4 sm:p-6 md:p-8`
- Touch-friendly: Áreas de toque otimizadas

## 🚀 Build para Produção

```bash
# Criar build otimizado
npm run build

# Visualizar preview da build
npm run preview
```

## 📂 Estrutura do Projeto

```
portfolio-terminal/
├── src/
│   ├── components/
│   │   ├── sections/       # Seções do portfólio
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Section.tsx
│   │   ├── Terminal/       # Modo terminal
│   │   │   └── Terminal.tsx
│   │   ├── ExperienceSelector.tsx
│   │   ├── ScrollExperience.tsx
│   │   └── Navigation.tsx
│   ├── data/
│   │   └── projects.ts     # Dados dos projetos
│   ├── App.tsx
│   └── main.tsx
├── public/
└── package.json
```

## 🎯 Próximas Melhorias

- [ ] Adicionar dark/light theme toggle
- [ ] Implementar envio de formulário de contato
- [ ] Adicionar mais comandos no terminal
- [ ] Integrar com API do GitHub para mostrar projetos reais
- [ ] Adicionar animação de loading
- [ ] PWA support

## 🎨 Demonstração de Expertise

Este portfólio demonstra:

### ✅ React Avançado
- Hooks personalizados (useState, useEffect, useRef)
- Componentes reutilizáveis e componentização
- Props e TypeScript interfaces
- Conditional rendering e AnimatePresence

### ✅ Framer Motion
- Animações declarativas com variants
- Scroll-based animations (whileInView)
- Gesture animations (whileHover, whileTap)
- Layout animations com layoutId
- Stagger children animations

### ✅ TypeScript
- Tipagem forte em todos os componentes
- Interfaces e Types customizados
- Type-safe props e state management

### ✅ Mobile-First & Responsive
- Breakpoints do Tailwind (sm, md, lg)
- Grid e Flexbox responsivos
- Touch gestures otimizados
- Performance em dispositivos móveis

### ✅ UX/UI Avançado
- Micro-interações
- Feedback visual
- Transições suaves
- Estados de hover/focus/active
- Acessibilidade básica

## 📄 Licença

MIT - Sinta-se livre para usar este projeto como base para seu portfólio!

## 👨‍💻 Autor

**Luiz Mendes**
- GitHub: [@Lzdevmendes](https://github.com/Lzdevmendes)
- Email: Lzmendestechdev@gmail.com

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
