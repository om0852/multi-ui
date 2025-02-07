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
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        magnetic: {
          '0%': { transform: 'scale(1)', opacity: '0.3' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        hologram: {
          '0%, 100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' },
          '50%': { clipPath: 'polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%)' },
        },
        soundwave: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(0.5)' },
        },
        shatter: {
          '0%': { transform: 'rotate(0deg) scale(1)', opacity: '1' },
          '100%': { transform: 'rotate(45deg) scale(1.5)', opacity: '0' },
        },
        smoke: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { transform: 'translateY(-20px) scale(1.5)', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pixelate: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        flash: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        lightning: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        spark: {
          '0%, 100%': { opacity: '0.5', height: '100%' },
          '50%': { opacity: '1', height: '50%' },
        },
        portal: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.5) rotate(180deg)' },
        },
        circuit: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(100%) translateY(0)' },
          '50%': { transform: 'translateX(100%) translateY(100%)' },
          '75%': { transform: 'translateX(0) translateY(100%)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
        fold: {
          '0%': { transform: 'perspective(500px) rotateX(0)' },
          '100%': { transform: 'perspective(500px) rotateX(-90deg)' },
        },
        unfold: {
          '0%': { transform: 'perspective(500px) rotateX(90deg)' },
          '100%': { transform: 'perspective(500px) rotateX(0)' },
        },
        bubble: {
          '0%': { transform: 'scale(1) translateY(0)', opacity: '0.5' },
          '100%': { transform: 'scale(0) translateY(-100px)', opacity: '0' },
        },
        splash: {
          '0%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { transform: 'scale(1.5) rotate(45deg)', opacity: '0' },
        },
        vhsNoise: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(2px)' },
        },
        vhsOffset: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-2px)' },
        },
        vhsGlitch: {
          '0%, 100%': { clipPath: 'inset(0 0 0 0)' },
          '50%': { clipPath: 'inset(10% 0 10% 0)' },
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
        'scan': 'scan 2s linear infinite',
        'magnetic': 'magnetic 1s ease-out infinite',
        'flicker': 'flicker 2s ease-in-out infinite',
        'hologram': 'hologram 2s ease-in-out infinite',
        'soundwave': 'soundwave 1s ease-in-out infinite',
        'shatter': 'shatter 0.5s ease-out forwards',
        'smoke': 'smoke 1s ease-out forwards',
        'fadeIn': 'fadeIn 0.3s ease-out forwards',
        'pixelate': 'pixelate 0.5s ease-out forwards',
        'flash': 'flash 0.3s ease-out',
        'lightning': 'lightning 0.5s ease-out',
        'spark': 'spark 0.2s ease-out infinite',
        'portal': 'portal 1s ease-out infinite',
        'circuit': 'circuit 2s linear infinite',
        'fold': 'fold 0.3s ease-out forwards',
        'unfold': 'unfold 0.3s ease-out forwards',
        'bubble': 'bubble 1s ease-out forwards',
        'splash': 'splash 0.5s ease-out forwards',
        'vhsNoise': 'vhsNoise 0.2s steps(2) infinite',
        'vhsOffset': 'vhsOffset 0.2s ease-out infinite',
        'vhsGlitch': 'vhsGlitch 0.2s ease-out infinite',
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
