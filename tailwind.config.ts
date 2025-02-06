import type { Config } from "tailwindcss";


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        progress: {
          '0%': { width: '100%' },
          '100%': { width: '0%' },
        },
        'neon-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.8' }
        },
        ripple: {
          '0%': { transform: 'scale(1)', opacity: '0.4' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(-4px)' },
          '50%': { transform: 'translateY(0)' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'rotate-y': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.3s ease-in-out infinite',
        progress: 'progress 4000ms linear forwards',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'ripple': 'ripple 0.6s linear',
        'float': 'float 3s ease-in-out infinite',
        'typing': 'typing 1s steps(20, end)',
        'blink': 'blink 1s step-end infinite',
        'rotate-y': 'rotate-y 0.5s ease-in-out',
        'slideDown': 'slideDown 0.5s ease-out',
        'gradient': 'gradient 15s ease infinite',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      transform: {
        'rotate-y-180': 'rotateY(180deg)',
      },
      backfaceVisibility: {
        'hidden': 'hidden'
      },
      perspective: {
        'default': '1000px'
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      translate: {
        'z-12': '12px',
      },
    },
  },
  plugins: [
    function({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.perspective': {
          'perspective': '1000px',
        },
        '.rotate-y-180': {
          'transform': 'rotateY(180deg)',
        },
      });
    },
  ],
} satisfies Config;
