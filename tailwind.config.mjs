/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#060e20",
        primary: "#a3a6ff",
        secondary: "#53ddfc",
        "on-primary": "#0f00a4",
        "on-surface": "#dee5ff",
        "on-surface-variant": "#a3aac4",
        surface: "#060e20",
        "surface-container": "#0f1930",
        "surface-container-low": "#091328",
        "surface-container-high": "#141f38",
        "surface-container-lowest": "#000000",
        "surface-bright": "#1f2b49",
        "outline-variant": "#40485d",
        tertiary: "#ffa5d9",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-lg": [
          "3.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "headline-md": ["1.75rem", { lineHeight: "1.2" }],
        "body-lg": ["1rem", { lineHeight: "1.6" }],
        "label-md": ["0.75rem", { lineHeight: "1.4" }],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
        md: "0.375rem",
      },
      boxShadow: {
        "ambient-float": "0 20px 40px rgba(0, 0, 0, 0.4)",
      },
    },
  },
};

export default config;
