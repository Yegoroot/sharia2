import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import MobileMenu from './MobileMenu';

interface MenuItem {
  path: string;
  label: string;
}

const menuItems: MenuItem[] = [
  { path: '/', label: 'Главная' },
  { path: '/about', label: 'О нас' },
  { path: '/services', label: 'Услуги' },
  { path: '/contact', label: 'Контакты' },
];

const Header: React.FC = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  const isActive = (path: string): boolean => location.pathname === path;

  const renderMenuItem = (item: MenuItem) => (
    <Link 
      key={item.path}
      to={item.path} 
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        isActive(item.path) 
          ? 'bg-gray-900 text-white' 
          : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
      }`}
    >
      {item.label}
    </Link>
  );

  return (
    <>
      <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-gray-800 dark:text-gray-200 text-lg font-semibold">
                Салман АбуДауд
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map(renderMenuItem)}
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-800 dark:text-gray-200 text-xl mr-2 focus:outline-none"
              >
                {theme === 'light' ? '🌛' : '☀️'}
              </button>
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 
                  hover:text-white hover:bg-gray-700 focus:outline-none"
                >
                  <span className="sr-only">Открыть главное меню</span>
                  <svg 
                    className="block h-6 w-6" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} 
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} isActive={isActive} menuItems={menuItems} />
    </>
  );
};

export default Header;
