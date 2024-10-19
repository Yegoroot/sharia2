import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faFileContract, faBuilding, faGavel } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {
  const activities = [
    { icon: faBalanceScale, title: 'КОНСУЛЬТАЦИЯ', description: 'Юридическая консультация помогает нам воплощать в жизнь миссию нашей компании - делать решение любых юридических вопросов простым, безопасным и эффективным.' },
    { icon: faFileContract, title: 'ЛИЦЕНЗИЯ', description: 'Наша фирма предлагает услуги по лицензированию деятельности самых разных направлений.' },
    { icon: faBuilding, title: 'РЕГИСТРАЦИЯ', description: 'Помощь с регистрацией ООО, ФЛП или проведением любых регистрационных действий.' },
  ];

  return (
    <div className="flex flex-col">
      {/* Background image */}
      <div 
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/home.jpg)` }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col">
        {/* Hero section */}
        <div className="flex-grow flex items-center justify-center bg-transparent md:bg-black md:bg-opacity-30 px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 shadow-text leading-tight">
              ЮРИДИЧЕСКИЕ УСЛУГИ
            </h1>
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-accent-light dark:text-accent-dark text-lg sm:text-xl md:text-2xl lg:text-3xl shadow-text">
              <span className="mb-2">КОНСУЛЬТАЦИЯ</span>
              <span className="mb-2">ЮР. СОПРОВОЖДЕНИЕ</span>
            </div>
          </div>
        </div>

        {/* Our services section */}
        <div className="bg-white dark:bg-gray-800 text-secondary-light dark:text-secondary-dark py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">НАША ДЕЯТЕЛЬНОСТЬ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity, index) => (
                <div key={index} className="text-center">
                  <div className="text-accent-light dark:text-accent-dark text-3xl sm:text-4xl mb-4">
                    <FontAwesomeIcon icon={activity.icon} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{activity.title}</h3>
                  <p className="text-sm sm:text-base text-secondary-light dark:text-secondary-dark">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
