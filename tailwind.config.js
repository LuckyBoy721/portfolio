/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neo: {
          bg: '#F6F4EE',        // Warm soft parchment / natural linen (easy on the eyes)
          darkbg: '#18181B',    // Soft dark charcoal (avoids harsh pitch black)
          card: '#FFFFFF',
          darkcard: '#222226',
          black: '#202024',     // Deep soft graphite-ink (replaces harsh jet black)
          yellow: '#F0D88B',    // Muted warm honey / cream butter
          green: '#9BC49B',     // Calming sage / soft eucalyptus green
          cyan: '#92B8C9',      // Soft dusty blue / coastal slate
          orange: '#E29578',    // Warm terracotta / muted apricot
          purple: '#B8AFD4',    // Muted dusty lavender
          pink: '#DC9B9B',      // Soft dusty rose / blush
          border: '#26262B',    // Refined soft-black border
          darkborder: '#D4D4D8' // Soft contrast border for dark mode
        }
      },
      boxShadow: {
        'neo': '3.5px 3.5px 0px #26262B',
        'neo-sm': '2px 2px 0px #26262B',
        'neo-lg': '5px 5px 0px #26262B',
        'neo-xl': '7px 7px 0px #26262B',
        'neo-dark': '3.5px 3.5px 0px #D4D4D8',
        'neo-dark-sm': '2px 2px 0px #D4D4D8',
        'neo-dark-lg': '5px 5px 0px #D4D4D8',
        'neo-dark-xl': '7px 7px 0px #D4D4D8',
      },
      borderWidth: {
        '3': '2.5px',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      }
    },
  },
  plugins: [],
}
