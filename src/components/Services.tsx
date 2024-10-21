import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Services: React.FC = (): JSX.Element => {
  return (
    <div className="services-page">
      <h1 className="text-3xl font-bold mb-6">Консультации</h1>
      <ul className="list-disc list-inside space-y-2 text-lg mb-8">
        <li>Консультации по исламскому праву</li>
        <li>Разрешение семейных споров</li>
        <li>Помощь в составлении исламских контрактов</li>
        <li>Исследования в области исламского права</li>
        <li>И другие</li>
      </ul>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Контакт для консультаций</h2>
        <div className="flex items-center text-xl">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-accent-light dark:text-accent-dark" />
          <a href="mailto:salman.abudavud@gmail.com" className="hover:text-accent-light dark:hover:text-accent-dark">
            salman.abudavud@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
