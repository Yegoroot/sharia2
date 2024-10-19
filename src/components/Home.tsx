import React from 'react';

const Home: React.FC = (): JSX.Element => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-md 
    transition-colors duration-200">
      <h1 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
        Добро пожаловать на главную страницу
      </h1>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
        Это главная страница нашего React приложения с TypeScript и Tailwind CSS.
      </p>
    </div>
  );
};

export default Home;
