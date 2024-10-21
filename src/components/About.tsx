import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h1 className="text-3xl font-bold mb-6">Обо мне:</h1>
      <div className="mb-8">
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Специальность:</strong> Шариат</li>
          <li><strong>Направление:</strong> Судопроизводство</li>
          <li><strong>Научная степень:</strong> Доктор (ожидаю защиты)</li>
          <li><strong>ВУЗ:</strong> Исламский университет в Медине</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Контакт</h2>
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

export default About;
