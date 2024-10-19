import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const MainContent: React.FC = () => {
  const { theme } = useTheme();

  return (
    <main className={`flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16 ${
      theme === 'dark' 
        ? 'bg-gray-900 text-gray-300'
        : 'bg-white text-black'
    }`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </main>
  );
};

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Router>
      <div className={`flex flex-col min-h-screen ${
        theme === 'dark' 
          ? 'bg-gray-900 text-gray-300'
          : 'bg-white text-black'
      }`}>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
};

const AppWrapper: React.FC = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default AppWrapper;
