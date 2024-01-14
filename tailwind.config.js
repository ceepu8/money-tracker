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
        main: 'hsl(var(--main) / <alpha-value>)',
        main: 'hsl(var(--main) / <alpha-value>)',
        primary: 'hsl(var(--primary) / <alpha-value>)',
        secondary: 'hsl(var(--secondary) / <alpha-value>)',
        outline: 'hsl(var(--outline) / <alpha-value>)',
        danger: 'hsl(var(--danger) / <alpha-value>)',
        silver: 'hsl(var(--silver) / <alpha-value>)',
        'dark-gray': 'hsl(var(--dark-gray) / <alpha-value>)',
        'light-gray': 'hsl(var(--light-gray) / <alpha-value>)',
        background: 'hsl(var(--bg-background) / <alpha-value>)',
        'secondary-bg': 'hsl(var(--bg-secondary) / <alpha-value>)',
        'light-bg': 'hsl(var(--bg-light) / <alpha-value>)',
        'button-primary-bg': 'hsl(var(--bg-button-primary) / <alpha-value>)',
        'button-secondary-bg': 'hsl(var(--bg-button-secondary) / <alpha-value>)',
        'border-gray': 'hsl(var(--border-gray) / var(--border-gray-alpha))',
        'border-dark-gray': 'hsl(var(--border-dark-gray) / <alpha-value>)',
        'border-dark': 'hsl(var(--border-dark) / <alpha-value>)',
        'border-red': 'hsl(var(--border-red) / <alpha-value>)',
      },
      textColor: {
        primary: 'hsl(var(--text-primary) / <alpha-value>)',
        secondary: 'hsl(var(--text-secondary) / <alpha-value>)',
        white: 'hsl(var(--white) / <alpha-value>)',
        black: 'hsl(var(--black) / <alpha-value>)',
        main: 'hsl(var(--text-main) / <alpha-value>)',
        text_black: 'hsl(var(--text-black) / <alpha-value>)',
        text_gray: 'hsl(var(--text-gray) / <alpha-value>)',
      },
      borderColor: {
        gray: 'hsl(var(--border-gray) / <alpha-value>)',
        'dark-gray': 'hsl(var(--border-dark-gray) / <alpha-value>)',
        dark: 'hsl(var(--border-dark) / <alpha-value>)',
        red: 'hsl(var(--border-red) / <alpha-value>)',
      },
      boxShadow: {
        drop: 'var(--shadow-drop)',
        card: 'var(--shadow-card)',
      },
      borderRadius: {
        button: 'var(--radius-button)',
        input: 'var(--radius-input)',
      },
    },
  },

  plugins: [
    plugin(({ addVariant }) => {
      addVariant('mac', '.mac &')
      addVariant('windows', '.windows &')
      addVariant('ios', '.ios &')
    }),
    require('tailwindcss-animate'),
    require('daisyui'),
  ],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: ['light', 'dark', 'ceepu', 'tist'],
    // themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'dark', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
  },
}
