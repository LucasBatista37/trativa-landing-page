/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a5f',
        },
        // Azul-tinta da marca: fundo do hero e do CTA final
        ink: {
          DEFAULT: '#0A1630',
          soft: '#13244A',
          line: '#22355F',
        },
        paper: '#F5F7FB',
        line: '#E3E8F0',
        // Cores reais das etapas do funil (formatters.js do app)
        stage: {
          novo: '#3b82f6',
          atendimento: '#8b5cf6',
          contatado: '#6b7280',
          interessado: '#10b981',
          semresposta: '#f59e0b',
          reuniao: '#f97316',
          proposta: '#6366f1',
          convertido: '#059669',
          perdido: '#ef4444',
        },
        wa: {
          DEFAULT: '#0B5D4E',
          deep: '#06423A',
          light: '#D9FDD3',
        },
      },
      boxShadow: {
        frame: '0 1px 0 rgba(255,255,255,0.06) inset, 0 30px 60px -20px rgba(10,22,48,0.45), 0 12px 24px -12px rgba(10,22,48,0.35)',
        'frame-light': '0 1px 2px rgba(10,22,48,0.06), 0 24px 48px -24px rgba(10,22,48,0.28)',
        phone: '0 40px 80px -24px rgba(10,22,48,0.55), 0 16px 32px -16px rgba(10,22,48,0.4)',
      },
      backgroundImage: {
        // usado pela página /download
        'hero-gradient': 'linear-gradient(135deg, #0a0f1e 0%, #0d1530 40%, #050810 100%)',
      },
      keyframes: {
        'pin-pulse': {
          '0%': { transform: 'scale(1)', opacity: '0.55' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
      },
      animation: {
        'pin-pulse': 'pin-pulse 2.4s ease-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
