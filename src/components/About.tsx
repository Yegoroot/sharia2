import React from 'react';

const About: React.FC = (): JSX.Element => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-md 
    transition-colors duration-200">
      <h1 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
        О нас
      </h1>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
        Мы - команда разработчиков, создающая удивительные веб-приложения с использованием 
        React, TypeScript и Tailwind CSS.
      </p>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
        И мы благодарны судьбе за то, что можем заниматься любимым делом и создавать 
        продукты, которые приносят пользу людям.
      </p>
    </div>
  );
};

export default About;
