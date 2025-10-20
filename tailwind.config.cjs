/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8f8fb',        // Fondo principal profesional
        'background-alt': '#f4f5f7', // Fondo alternativo cálido
        'background-deep': '#e9e6ff', // Violeta muy sutil
        border: '#e2e3e8',           // Gris complementario
        primary: '#5b3a9e',          // Violeta corporativo principal
        accent: '#7c5fd3',           // Violeta claro para hover
        secondary: '#2a2a72',        // Azul violeta oscuro
        foreground: '#1a1a1a',       // Texto oscuro elegante
        muted: '#6b7280',           // Texto muted profesional
        success: '#00b894',         // Verde azulado profesional
        warning: '#f59e0b',         // Naranja profesional
        danger: '#e74c3c',          // Rojo coral elegante
      },
      boxShadow: {
        'professional': '0 4px 16px rgba(91, 58, 158, 0.08)',
        'professional-lg': '0 8px 32px rgba(91, 58, 158, 0.12)',
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'ui-sans-serif', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'ui-sans-serif', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      maxWidth: {
        'content': '1200px',
        '7xl': '80rem',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeUp: 'fadeUp .6s ease-out both'
      }
    },
  },
  plugins: [],
};