/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#B81828',
        'brand-red-dark': '#9E1422',
        'brand-red-hover': '#85101C',
        'brand-red-light': '#FDE8EA',
        'brand-black': '#0E1116',
        'brand-dark': '#161920',
        'brand-charcoal': '#1F242D',
        'brand-slate': '#484848',
        'brand-gray': '#8C9099',
        'canvas-warm': '#FAFAF8',
        'canvas-card': '#FFFFFF',
        'ink-primary': '#14171E',
        'ink-secondary': '#555B66',
        'ink-muted': '#7E8594',
        'border-subtle': '#E8E6E1',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Manrope"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        architectural: '0.15em',
        luxury: '0.2em',
      }
    },
  },
  plugins: [],
}
