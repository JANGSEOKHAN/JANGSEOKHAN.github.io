/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Pretendard Variable"',
          'Pretendard',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
      },
      colors: {
        base: {
          950: '#f8fbff',
          900: '#ffffff',
          850: '#eef4fb',
          800: '#e5edf7',
        },
        signal: {
          cyan: '#0284c7',
          green: '#059669',
          amber: '#d97706',
          rose: '#e11d48',
          violet: '#7c3aed',
        },
      },
      boxShadow: {
        glow: '0 18px 55px rgba(15, 23, 42, 0.12)',
      },
      backgroundImage: {
        'grid-radial':
          'radial-gradient(circle at top left, rgba(2, 132, 199, 0.12), transparent 28rem), radial-gradient(circle at bottom right, rgba(5, 150, 105, 0.1), transparent 24rem)',
      },
    },
  },
  plugins: [],
};
