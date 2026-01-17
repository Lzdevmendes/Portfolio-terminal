/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981', // emerald-500
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        secondary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1', // indigo-500
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        terminal: {
          glow: '#10b981',
          cursor: '#34d399',
          text: '#e5e7eb',
        },
      },
      fontFamily: {
        sans: ['JetBrains Mono', 'monospace'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      // Type Scale harmônico (proporção 1.25 - Major Third)
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.0125em' }],
        'base': ['1rem', { lineHeight: '1.625', letterSpacing: '0' }],
        'lg': ['1.125rem', { lineHeight: '1.625', letterSpacing: '-0.0125em' }],
        'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.0125em' }],
        '2xl': ['1.563rem', { lineHeight: '1.4', letterSpacing: '-0.025em' }],
        '3xl': ['1.953rem', { lineHeight: '1.3', letterSpacing: '-0.025em' }],
        '4xl': ['2.441rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        '5xl': ['3.052rem', { lineHeight: '1.15', letterSpacing: '-0.03em' }],
        '6xl': ['3.815rem', { lineHeight: '1.1', letterSpacing: '-0.035em' }],
      },
      // Spacing system consistente (base 4px)
      spacing: {
        '18': '4.5rem',   // 72px
        '88': '22rem',    // 352px
        '100': '25rem',   // 400px
        '104': '26rem',   // 416px
        '120': '30rem',   // 480px
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { 
            textShadow: '0 0 4px rgba(16, 185, 129, 0.5), 0 0 8px rgba(16, 185, 129, 0.3)' 
          },
          '50%': { 
            textShadow: '0 0 8px rgba(16, 185, 129, 0.8), 0 0 16px rgba(16, 185, 129, 0.5), 0 0 24px rgba(16, 185, 129, 0.3)' 
          },
        },
        'cursor-blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'terminal-grid': 'linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'terminal-grid': '20px 20px',
      },
      boxShadow: {
        'glow-sm': '0 0 8px rgba(16, 185, 129, 0.3)',
        'glow': '0 0 16px rgba(16, 185, 129, 0.4), 0 0 32px rgba(16, 185, 129, 0.2)',
        'glow-lg': '0 0 24px rgba(16, 185, 129, 0.5), 0 0 48px rgba(16, 185, 129, 0.3)',
      },
    },
  },
  plugins: [],
}

