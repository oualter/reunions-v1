import type { Config } from "tailwindcss"
const { nextui } = require('@nextui-org/theme')

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/components/slider.js',
    './node_modules/@nextui-org/theme/dist/components/(slider|snippet|code|input).js',
  ],
  theme: {
    extend: {
      fontFamily: {
        archisticonormal: ['archisticonormal', 'cursive'],
        typewriter: ['Courier', 'Courier New', 'Didot', 'Serif'],
      },
    },
  },

  plugins: [require('tailwindcss-animate'), nextui()],
}

export default config