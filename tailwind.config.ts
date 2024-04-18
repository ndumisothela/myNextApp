// import Script from 'next/script'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.tsx',
    './src/**/*.tsx',
    'components/**/*.tsx'
  ],
  theme: {
    fontFamily :
      {
        'kaushan': ['kaushan Script']
      }
    ,
    extend: { 
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
