/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0F12',
        surface: '#11161C',
        elevated: '#171D24',
        border: '#232A33',
        text: {
          primary: '#E8E9EE',
          secondary: '#A1A7B3',
        },
        accent: {
          DEFAULT: '#22C55E',
          hover: '#16A34A',
        },
        success: '#10B981',
        warning: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
