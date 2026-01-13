/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0176D3", // Salesforce-like blue
        secondary: "#0B5CAB",
        "background-light": "#FFFFFF",
        "background-dark": "#111827", // Gray-900
        "surface-light": "#F3F4F6", // Gray-100
        "surface-dark": "#1F2937", // Gray-800
        "text-light": "#1F2937",
        "text-dark": "#F9FAFB",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
};

