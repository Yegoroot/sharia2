import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background image */}
      <div 
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/home.jpg)` }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 flex-grow flex flex-col">
        {/* Hero section */}
        <div className="flex-grow flex items-center justify-center bg-transparent md:bg-black md:bg-opacity-30 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 shadow-text">ЮРИДИЧЕСКИЕ УСЛУГИ</h1>
            <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 text-accent-light dark:text-accent-dark text-sm sm:text-base md:text-lg lg:text-xl shadow-text mt-8 md:mt-0 mb-8 md:mb-0">
              <span>КОНСУЛЬТАЦИЯ</span>
              <span>ЛИЦЕНЗИЯ</span>
              <span>РЕГИСТРАЦИЯ</span>
              <span>ПРАКТИКИ</span>
            </div>
          </div>
        </div>

        {/* Our services section */}
        <div className="bg-primary-light dark:bg-primary-dark text-secondary-light dark:text-secondary-dark py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">НАША ДЕЯТЕЛЬНОСТЬ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-accent-light dark:text-accent-dark text-3xl sm:text-4xl mb-4">🏆</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">КОНСУЛЬТАЦИЯ</h3>
                <p className="text-sm sm:text-base text-secondary-light dark:text-secondary-dark">Юридическая консультация помогает нам воплощать в жизнь миссию нашей компании - делать решение любых юридических вопросов простым, безопасным и эффективным.</p>
                <ul className="mt-4 text-sm sm:text-base text-accent-light dark:text-accent-dark">
                  <li>Что мы делаем</li>
                  <li>Наш опыт</li>
                  <li>Наша команда</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-accent-light dark:text-accent-dark text-3xl sm:text-4xl mb-4">📄</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">ЛИЦЕНЗИЯ</h3>
                <p className="text-sm sm:text-base text-secondary-light dark:text-secondary-dark">Наша фирма предлагает услуги по лицензированию деятельности самых разных направлений.</p>
                <ul className="mt-4 text-sm sm:text-base text-accent-light dark:text-accent-dark">
                  <li>Мед. практика</li>
                  <li>Аптека</li>
                  <li>Лекарства</li>
                  <li>Гигиена</li>
                  <li>Мед. техника</li>
                </ul>
              </div>
              <div className="text-center md:col-span-2 lg:col-span-1">
                <div className="text-accent-light dark:text-accent-dark text-3xl sm:text-4xl mb-4">🔑</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">РЕГИСТРАЦИЯ</h3>
                <p className="text-sm sm:text-base text-secondary-light dark:text-secondary-dark">Помощь с регистрацией ООО, ФЛП или проведением любых регистрационных действий.</p>
                <ul className="mt-4 text-sm sm:text-base text-accent-light dark:text-accent-dark">
                  <li>Организаций</li>
                  <li>Информ. агентств</li>
                  <li>Печатных изданий</li>
                  <li>Профсоюзов</li>
                  <li>Полит. партий</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
