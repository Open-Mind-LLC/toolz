/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  theme: {
    extend: {
      colors: {
        'primary': "#0072BA",
        'primary-600': "#0073ba9f",
        'secondary': "#f7c86d",
        'black-100': "#121212",
        'gray-100': "#d2cfcf",
        'gray-200': "#757575",
        'orange-100': "#f7c86d",
        'purple-100': "#cea9f3",
      },
    },
  },
  plugins: [],
};

