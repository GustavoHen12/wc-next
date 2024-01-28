import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['var(--font-poppins)', 'sans-serif'],
      'display': ['var(--font-raleway), sans-serif'],
    },
    extend: {
      colors: {
        'white': '#ffffff',
        'black': '#161B33',
        'dark-purple': '#330259',
        'white-purple': '#D5DBFC',
        'accent-green': '#01F7B6',
        'background': '#0D0116',
      },
      backgroundColor: {
        'bg-white': '#ffffff',
        'bg-black': '#161B33',
        'bg-dark-purple': '#330259',
        'bg-white-purple': '#D5DBFC',
        'bg-accent-green': '#01F7B6',
        'bg-background': '#0D0116',
        'bg-button-bkg': '#B1B1B1',
      },
    },
  },
  plugins: [],
}
export default config
