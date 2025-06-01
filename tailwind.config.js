import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",   // 12px
          small: "0.875rem", // 14px
          medium: "0.9375rem", // 15px
          large: "1.125rem", // 18px
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "6px", 
          medium: "8px", 
          large: "12px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        dark: {
          colors: {
            "background": {
              "DEFAULT": "#050505"
            },
            "content1": {
              "DEFAULT": "#0a0a0a",
              "foreground": "#f0f0f0"
            },
            "content2": {
              "DEFAULT": "#121212",
              "foreground": "#f0f0f0"
            },
            "content3": {
              "DEFAULT": "#1a1a1a",
              "foreground": "#e4e4e7"
            },
            "content4": {
              "DEFAULT": "#242424",
              "foreground": "#d4d4d8"
            },
            "divider": {
              "DEFAULT": "rgba(255, 255, 255, 0.1)"
            },
            "focus": {
              "DEFAULT": "#06b6d4"
            },
            "foreground": {
              "50": "#18181b",
              "100": "#27272a",
              "200": "#3f3f46",
              "300": "#52525b",
              "400": "#71717a",
              "500": "#a1a1aa",
              "600": "#d4d4d8",
              "700": "#e4e4e7",
              "800": "#f4f4f5",
              "900": "#fafafa",
              "DEFAULT": "#f0f0f0"
            },
            "primary": {
              "50": "#001a1a",
              "100": "#003333",
              "200": "#004d4d",
              "300": "#006666",
              "400": "#008080",
              "500": "#06b6d4",
              "600": "#22d3ee",
              "700": "#67e8f9",
              "800": "#a5f3fc",
              "900": "#cffafe",
              "DEFAULT": "#06b6d4",
              "foreground": "#000000"
            },
            "secondary": {
              "50": "#180828",
              "100": "#301050",
              "200": "#481878",
              "300": "#6020a0",
              "400": "#7828c8",
              "500": "#9333ea",
              "600": "#a855f7",
              "700": "#c084fc",
              "800": "#d8b4fe",
              "900": "#f3e8ff",
              "DEFAULT": "#9333ea",
              "foreground": "#ffffff"
            }
          }
        }
      }
    })
  ]
}
