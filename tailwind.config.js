/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // Strictly .js and .jsx
  ],
  theme: {
    extend: {
      colors: {
        'background': '#121212', // Deep black
        'primary': '#FFFFFF',     // Primary text
        'secondary': '#a0a0a0',   // Softer secondary text
        'surface': '#1e1e1e',     // Card backgrounds
        'accent': '#007aff',      // A vibrant blue accent
        'accent-hover': '#0056b3',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // A clean, modern font
      },
      // A subtle glow effect for the "surprise"
      boxShadow: {
        'glow-accent': '0 0 15px 5px rgba(0, 122, 255, 0.3)',
        'glow-accent-hover': '0 0 25px 8px rgba(0, 122, 255, 0.5)',
      },
    },
  },
  plugins: [],
}