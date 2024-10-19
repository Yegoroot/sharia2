import React from 'react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  isActive: (path: string) => boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu, isActive }): JSX.Element => {
  return (
    <div 
      className={`fixed inset-0 bg-gray-800 bg-opacity-95 z-50 flex items-center justify-center
      transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <button
        onClick={toggleMenu}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
        aria-label="Закрыть меню"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="text-center">
        <Link
          to="/"
          className={`block px-3 py-2 text-2xl font-medium mb-4 ${
            isActive('/') 
              ? 'text-white border-b-2 border-white' 
              : 'text-gray-300 hover:text-white'
          }`}
          onClick={toggleMenu}
        >
          Главная
        </Link>
        <Link
          to="/about"
          className={`block px-3 py-2 text-2xl font-medium mb-4 ${
            isActive('/about') 
              ? 'text-white border-b-2 border-white' 
              : 'text-gray-300 hover:text-white'
          }`}
          onClick={toggleMenu}
        >
          О нас
        </Link>
        <Link
          to="/contact"
          className={`block px-3 py-2 text-2xl font-medium mb-4 ${
            isActive('/contact') 
              ? 'text-white border-b-2 border-white' 
              : 'text-gray-300 hover:text-white'
          }`}
          onClick={toggleMenu}
        >
          Контакты
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
