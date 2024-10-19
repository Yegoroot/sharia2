import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import MobileMenu from './MobileMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  const isActive = (path: string): boolean => location.pathname === path;
  const isHomePage = location.pathname === '/';

  const getTextColorClass = () => {
    if (isScrolled || !isHomePage) {
      return theme === 'light'
        ? 'text-secondary-light'
        : 'text-secondary-dark';
    }
    return 'text-white';
  };

  return (
    <>
      <header className="bg-primary text-white py-4 shadow-md fixed top-0 left-0 right-0 z-50">
        <nav className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 
          ${isScrolled 
      ? 'bg-primary-light dark:bg-primary-dark shadow-lg' 
      : 'bg-transparent'
    }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold">
                  <span className={`transition-colors duration-300 ${getTextColorClass()}`}>
                    Салман
                  </span>{' '}
                  <span className="bg-accent-light dark:bg-accent-dark text-primary-light dark:text-primary-dark px-1">
                    АбуДауд
                  </span>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        isActive(item.path)
                          ? 'text-accent-light dark:text-accent-dark'
                          : `${getTextColorClass()} hover:text-accent-light dark:hover:text-accent-dark`
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={toggleTheme}
                  className={`p-2 focus:outline-none ${getTextColorClass()} hover:text-accent-light dark:hover:text-accent-dark`}
                >
                  <FontAwesomeIcon icon={theme === 'light' ? 'moon' : 'sun'} />
                </button>
                <button
                  onClick={toggleMobileMenu}
                  className={`md:hidden ml-4 inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${getTextColorClass()} hover:text-accent-light dark:hover:text-accent-dark`}
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
        </nav>
        <div className="h-8"></div>
        <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} isActive={isActive} menuItems={menuItems} />
      </header>
    </>
  );
};

export default Header;
