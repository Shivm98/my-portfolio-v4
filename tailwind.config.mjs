/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        secondary: "#53ddfc",
        tertiary: "#ffa5d9",
        surface: "#060e20",
        "on-surface": "#dee5ff",
        "on-surface-variant": "#a3aac4",
        "surface-container-low": "#091328",
        "on-primary": "#ffffff",
        "outline-variant": "#40485d",
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
    },
  },
};

export default config;
