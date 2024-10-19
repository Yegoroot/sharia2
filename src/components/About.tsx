import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">О нас</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">Образование</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Я студент Исламского университета Медины, специализирующийся на шариатском праве с уклоном в судебное дело. Мое обучение сосредоточено на глубоком понимании исламского права и его применении в современном мире.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">Специализация</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Моя специализация включает в себя изучение различных школ исламского права, методологию вынесения фетв (исламских правовых заключений), а также современные вызовы в области исламского правосудия.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">Цели</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Моя цель - стать квалифицированным специалистом в области исламского права, способным справедливо и мудро решать сложные правовые вопросы в соответствии с принципами шариата и с учетом современных реалий.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">Навыки</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            <li>Глубокое знание Корана и Сунны</li>
            <li>Понимание различных школ исламского права</li>
            <li>Аналитическое мышление и способность к интерпретации текстов</li>
            <li>Знание арабского языка</li>
            <li>Понимание современных правовых систем</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">Контакты</h2>
          <p className="text-gray-600 dark:text-gray-300">
            <FontAwesomeIcon icon="envelope" className="mr-2" />
            email@example.com
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            <FontAwesomeIcon icon="phone" className="mr-2" />
            +7 (123) 456-7890
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
