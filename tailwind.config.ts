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
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20%)' },
        },
        spotlight: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        particle: {
          '0%': { transform: 'scale(0) translate(0, 0)' },
          '100%': { transform: 'scale(1) translate(50px, -50px)' },
        },
        'glitch-1': {
          '0%, 100%': { transform: 'none' },
          '33%': { transform: 'translateX(2px)' },
          '66%': { transform: 'translateX(-2px)' },
        },
        'glitch-2': {
          '0%, 100%': { transform: 'none' },
          '33%': { transform: 'translateX(-2px)' },
          '66%': { transform: 'translateX(2px)' },
        },
        'glitch-3': {
          '0%, 100%': { transform: 'none' },
          '33%': { transform: 'translateY(2px)' },
          '66%': { transform: 'translateY(-2px)' },
        },
        'radar-scan': {
          '0%': { transform: 'scale(0.5)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        fire: {
          '0%': { transform: 'scaleY(1)', opacity: '0.5' },
          '100%': { transform: 'scaleY(1.2)', opacity: '0' },
        },
        rainbow: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
        matrix: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.5)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
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
        'gradient': 'gradient 3s ease infinite',
        'wave': 'wave 8s ease-in-out infinite',
        'spotlight': 'spotlight 2s ease-in-out infinite',
        'particle': 'particle 1s ease-in-out infinite',
        'glitch-1': 'glitch-1 0.2s ease-in-out infinite',
        'glitch-2': 'glitch-2 0.3s ease-in-out infinite',
        'glitch-3': 'glitch-3 0.3s ease-in-out infinite',
        'radar-scan': 'radar-scan 1.5s ease-out infinite',
        'fire': 'fire 0.5s ease-out forwards',
        'rainbow': 'rainbow 0.5s ease-out forwards',
        'matrix': 'matrix 0.5s ease-out forwards',
        'twinkle': 'twinkle 1s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
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
