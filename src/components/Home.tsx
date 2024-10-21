import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faHandshake, faFileContract, faSearch } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {
  const consultations = [
    { icon: faBalanceScale, description: 'Консультации по исламскому праву' },
    { icon: faHandshake, description: 'Разрешение семейных споров' },
    { icon: faFileContract, description: 'Помощь в составлении исламских контрактов' },
    { icon: faSearch, description: 'Исследования в области исламского права' },
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
        <div className="flex-grow flex items-center justify-center bg-transparent md:bg-black md:bg-opacity-30 px-4 sm:px-6 lg:px-8 pt-4 pb-8 sm:py-16 md:py-32">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 shadow-text leading-tight">
              ШАРИАТСКИЕ КОНСУЛЬТАЦИИ
            </h1>
            <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 text-accent-light dark:text-accent-dark text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl shadow-text">
              <span className="mb-2">шариатское,</span>
              <span className="mb-2">юридическое сопровождение</span>
            </div>
          </div>
        </div>

        {/* Consultations section */}
        <div className="bg-white dark:bg-gray-800 text-secondary-light dark:text-secondary-dark py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">КОНСУЛЬТАЦИИ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultations.map((consultation, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="text-accent-light dark:text-accent-dark text-4xl sm:text-5xl mb-4">
                    <FontAwesomeIcon icon={consultation.icon} />
                  </div>
                  <p className="text-sm sm:text-base text-secondary-light dark:text-secondary-dark">{consultation.description}</p>
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
