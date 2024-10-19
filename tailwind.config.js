module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ffffff',
          dark: '#000000',
        },
        secondary: {
          light: '#000000',
          dark: '#ffffff',
        },
        accent: {
          light: '#e65100', // Более контрастный оранжевый цвет для светлой темы
          dark: '#fbbf24', // Оставляем прежний желтый для темной темы
        },
      },
    },
  },
  plugins: [],
};
