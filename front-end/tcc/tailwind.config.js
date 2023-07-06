/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a237e', // Azul escuro
        secondary: '#ff5722', // Laranja
        accent: '#4caf50', // Verde
        background: '#f5f5f5', // Cinza claro
        text: '#333333', // Preto
      },
    },
  },
  plugins: [],
}
