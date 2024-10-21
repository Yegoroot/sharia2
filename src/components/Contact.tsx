import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <h1 className="text-3xl font-bold mb-6">Контакты</h1>
      <div className="mb-8">
        <p className="text-lg mb-4">
          Если у вас есть вопросы или вам нужна консультация, пожалуйста, свяжитесь со мной по электронной почте:
        </p>
        <div className="flex items-center text-xl">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-accent-light dark:text-accent-dark" />
          <a href="mailto:salman.abudavud@gmail.com" className="hover:text-accent-light dark:hover:text-accent-dark">
            salman.abudavud@gmail.com
          </a>
        </div>
      </div>
      <p className="text-lg">
        Я постараюсь ответить на ваше сообщение как можно скорее.
      </p>
    </div>
  );
};

export default Contact;
