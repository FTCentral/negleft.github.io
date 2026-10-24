const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './themes/tailbliss/layouts/**/*.html',
    './content/**/*.md',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Neon green accent palette. Black stays pure black everywhere else.
        primary: {
          50: '#effef5',
          100: '#d8ffe7',
          200: '#b4ffd2',
          300: '#7bf9b2',
          400: '#3ceb8b',
          500: '#16d46b',
          600: '#0ab055',
          700: '#0b8b47',
          800: '#0e6d3c',
          900: '#0d5a34',
          950: '#022c19',
        },
        accent: '#39ff88',
        ink: {
          50: '#f6f6f7',
          100: '#e2e2e5',
          200: '#c6c6cb',
          300: '#a1a1a8',
          400: '#7c7c85',
          500: '#61616a',
          600: '#4c4c54',
          700: '#3e3e44',
          800: '#1c1c20',
          900: '#101013',
          950: '#050506',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['"Space Grotesk"', 'Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'glow-sm': '0 0 18px -4px rgba(22, 212, 107, 0.45)',
        glow: '0 0 30px -6px rgba(22, 212, 107, 0.55), 0 0 70px -20px rgba(57, 255, 136, 0.35)',
        'glow-lg': '0 0 40px -4px rgba(22, 212, 107, 0.5), 0 0 120px -20px rgba(57, 255, 136, 0.45)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)',
        'green-radial':
          'radial-gradient(60% 60% at 50% 0%, rgba(22,212,107,0.18) 0%, rgba(5,5,6,0) 70%)',
      },
      backgroundSize: {
        grid: '56px 56px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.zinc[300]'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-lead': theme('colors.zinc[300]'),
            '--tw-prose-links': theme('colors.primary[400]'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-counters': theme('colors.primary[400]'),
            '--tw-prose-bullets': theme('colors.primary[600]'),
            '--tw-prose-hr': 'rgba(255,255,255,0.10)',
            '--tw-prose-quotes': theme('colors.zinc[200]'),
            '--tw-prose-quote-borders': theme('colors.primary[500]'),
            '--tw-prose-captions': theme('colors.zinc[400]'),
            '--tw-prose-code': theme('colors.primary[300]'),
            '--tw-prose-pre-code': theme('colors.zinc[200]'),
            '--tw-prose-pre-bg': '#0a0a0c',
            '--tw-prose-th-borders': 'rgba(255,255,255,0.15)',
            '--tw-prose-td-borders': 'rgba(255,255,255,0.10)',
            '--tw-prose-invert-body': theme('colors.zinc[300]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.zinc[300]'),
            '--tw-prose-invert-links': theme('colors.primary[400]'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.primary[400]'),
            '--tw-prose-invert-bullets': theme('colors.primary[600]'),
            '--tw-prose-invert-hr': 'rgba(255,255,255,0.10)',
            '--tw-prose-invert-quotes': theme('colors.zinc[200]'),
            '--tw-prose-invert-quote-borders': theme('colors.primary[500]'),
            '--tw-prose-invert-captions': theme('colors.zinc[400]'),
            '--tw-prose-invert-code': theme('colors.primary[300]'),
            '--tw-prose-invert-pre-code': theme('colors.zinc[200]'),
            '--tw-prose-invert-pre-bg': '#0a0a0c',
            '--tw-prose-invert-th-borders': 'rgba(255,255,255,0.15)',
            '--tw-prose-invert-td-borders': 'rgba(255,255,255,0.10)',
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
