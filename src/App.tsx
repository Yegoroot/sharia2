import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';
import { AppRoutes } from './routes';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = (): JSX.Element => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
          <Header />
          <div className="container mx-auto px-6 py-8">
            <AppRoutes />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
