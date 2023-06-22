/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gradientColorStops: (theme) => ({
        ...theme('colors'),
        'pink-light': '#F9A8D4',
        'pink-dark': '#E879A7',
      }),
      backgroundOpacity: {
        '40': '0.4',
      },
    },
    container: {
      center: true,
    }
  },
  variants: {
    extend: {
      mixBlendMode: ['responsive'],
  },
 
  },
  plugins: [],
};
