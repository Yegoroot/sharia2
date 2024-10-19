import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-light dark:bg-primary-dark text-secondary-light dark:text-secondary-dark">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Салман АбуДауд</h3>
            <p className="mt-2">Юридические услуги высшего качества</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <nav className="flex flex-wrap justify-center">
              <Link to="/" className="mx-2 hover:text-accent-light dark:hover:text-accent-dark">Главная</Link>
              <Link to="/about" className="mx-2 hover:text-accent-light dark:hover:text-accent-dark">О нас</Link>
              <Link to="/services" className="mx-2 hover:text-accent-light dark:hover:text-accent-dark">Услуги</Link>
              <Link to="/contact" className="mx-2 hover:text-accent-light dark:hover:text-accent-dark">Контакты</Link>
            </nav>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Свяжитесь с нами</h4>
            <p className="mb-2">
              <FontAwesomeIcon icon="envelope" className="mr-2" />
              info@salmanabudaud.com
            </p>
            <p>
              <FontAwesomeIcon icon="phone" className="mr-2" />
              +7 (123) 456-7890
            </p>
          </div>
        </div>
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Салман АбуДауд. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
