/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0c0614',
        menu: '#1A1521',
        card: '#29242F',
        subcard: '#37343C',
        hover: '#46434A',
        button: '#545257',
        buttonhover: '#636165',
        primary: '#E4E4E4',
        secondary: '#B2B2B2',
      },
      fontFamily: {
        open: ['Open Sans', 'sans-serif'],
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
