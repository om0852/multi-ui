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
      },
      animation: {
        wiggle: 'wiggle 0.3s ease-in-out infinite',
        progress: 'progress 4000ms linear forwards',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
