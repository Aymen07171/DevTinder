/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"; // Use import instead of require

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust based on your file types
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // Use the imported variable
};
