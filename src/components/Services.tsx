import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBalanceScale, faFileContract, faHandshake } from '@fortawesome/free-solid-svg-icons';

const Services: React.FC = (): JSX.Element => {
  const consultations = [
    { icon: faBalanceScale, description: 'Консультации по исламскому гражданскому праву' },
    { icon: faFileContract, description: 'Составление договоров' },
    { icon: faHandshake, description: 'Урегулирование споров в гражданском праве' },
  ];

  return (
    <div className="services-page pb-16">
      <h1 className="text-3xl font-bold mb-12">Консультации</h1>
      <div className="space-y-6 mb-8">
        {consultations.map((consultation, index) => (
          <div key={index} className="flex items-center">
            <div className="text-accent-light dark:text-accent-dark text-3xl sm:text-4xl mr-4">
              <FontAwesomeIcon icon={consultation.icon} />
            </div>
            <p className="text-lg">{consultation.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-16">
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
