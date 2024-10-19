import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import { ThemeProvider } from './contexts/ThemeContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const MainContent: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <main className={`flex-grow ${!isHomePage ? 'container mx-auto px-4 sm:px-6 lg:px-8 pt-16' : ''}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </main>
  );
};

const App: React.FC = (): JSX.Element => {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
          <Header />
          <MainContent />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
