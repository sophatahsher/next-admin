import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: {
          accent: "hsl(var(--sidebar-accent))", // Custom blue
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))", // Light text
          link: "hsl(var(--color-sidebar-link))", // Link text
          label: "hsl(var(--color-sidebar-label))", // Label text
        },
        header: {
          accent: "hsl(var(--header-accent))", // Custom blue
          "accent-foreground": "hsl(var(--header-accent-foreground))", // Light text
        },

        table: {
          accent: "hsl(var(--table-accent))", // Custom blue
          "accent-foreground": "hsl(var(--table-accent-foreground))", // Light text
        },
        // background: "hsl(var(--background))",
        // foreground: "hsl(var(--foreground))",
      },
      keyframes: {
        vibrate: {
          '0%, 100%': { transform: 'translate(0)' },
          '10%': { transform: 'translate(-1px, -1px)' },
          '20%': { transform: 'translate(1px, -1px)' },
          '30%': { transform: 'translate(-1px, 1px)' },
          '40%': { transform: 'translate(1px, 1px)' },
          '50%': { transform: 'translate(-1px, -1px)' },
          '60%': { transform: 'translate(1px, -1px)' },
          '70%': { transform: 'translate(-1px, 1px)' },
          '80%': { transform: 'translate(1px, 1px)' },
          '90%': { transform: 'translate(-1px, -1px)' },
        },
        // Alternative bell shake animation
        shake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-15deg)' },
          '75%': { transform: 'rotate(15deg)' },
        },
        // Bell ring animation (more realistic)
        ring: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(10deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(6deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(2deg)' },
          '60%': { transform: 'rotate(-1deg)' },
          '70%': { transform: 'rotate(1deg)' },
          '80%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        }
      },
      animation: {
        vibrate: 'vibrate 0.6s ease-in-out infinite',
        shake: 'shake 0.5s ease-in-out',
        ring: 'ring 1s ease-in-out',
      }
    },
  },
  plugins: [],
};
export default config;
