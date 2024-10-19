import React from 'react';

const Services: React.FC = (): JSX.Element => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-md 
    transition-colors duration-200">
      <h1 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
        Наши услуги
      </h1>
      <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 dark:text-gray-400">
        <li className="mb-2">Консультации по исламскому праву</li>
        <li className="mb-2">Образовательные курсы по фикху</li>
        <li className="mb-2">Разрешение семейных споров</li>
        <li className="mb-2">Помощь в составлении исламских контрактов</li>
        <li>Исследования в области исламского права</li>
      </ul>
    </div>
  );
};

export default Services;
