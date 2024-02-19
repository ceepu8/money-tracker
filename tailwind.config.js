const { fontFamily } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/contexts/**/*.{js,ts,jsx,tsx}',
    './src/views/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      height: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        serif: ['var(--font-serif)'],
      },
      colors: {
        black: 'var(--black)',
        white: 'var(--white)',
        blue: 'var(--blue)',

        primary: 'var(--main)',
        secondary: 'var(--secondary)',

        'light-gray': 'var(--light-gray)',
      },
      textColor: {
        // dùng chung với colors luôn vậy
      },
      borderColor: {},
      boxShadow: {},
      borderRadius: {},
    },
  },

  plugins: [
    plugin(({ addVariant }) => {
      addVariant('mac', '.mac &')
      addVariant('windows', '.windows &')
      addVariant('ios', '.ios &')
    }),
    require('tailwindcss-animate'),
  ],
}
