import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto z-10 relative">
      <div className="container mx-auto px-4 pt-8"> {/* Добавлен pt-8 для верхнего отступа */}
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Шариатские консультации</h3>
            <p className="text-sm">Юридические услуги высшего качества</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Быстрые ссылки</h4>
            <ul className="text-sm">
              <li><Link to="/" className="hover:text-accent-light">Главная</Link></li>
              <li><Link to="/about" className="hover:text-accent-light">О нас</Link></li>
              <li><Link to="/services" className="hover:text-accent-light">Услуги</Link></li>
              <li><Link to="/contact" className="hover:text-accent-light">Контакты</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Контакты</h4>
            <p className="text-sm mb-2">
              <FontAwesomeIcon icon="envelope" className="mr-2" />
              info@salmanabudaud.com
            </p>
            <p className="text-sm">
              <FontAwesomeIcon icon="phone" className="mr-2" />
              +7 (123) 456-7890
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Салман АбуДауд. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
