"use client"

import React, { useState } from 'react';
import Confetti_7 from '../_components/Confetti_7';

const Example_7: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);
  const [isLaunched, setIsLaunched] = useState(false);

  const handleLaunch = () => {
    setIsLaunched(true);
    setIsConfettiVisible(true);
    
    // Hide confetti after 6 seconds
    setTimeout(() => {
      setIsConfettiVisible(false);
    }, 6000);
  };

  return (
    <div className={`min-h-screen p-4 sm:p-6 md:p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} transition-colors duration-300`}>
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold">Product Launch</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-lg ${
              darkMode 
                ? 'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700' 
                : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'
            } shadow-sm transition-colors`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 text-center relative overflow-hidden transition-all">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Nova X1</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">The next generation of smart devices</p>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={handleLaunch}
              disabled={isLaunched}
              className={`px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg text-sm sm:text-base font-semibold transition-all ${
                isLaunched 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:from-cyan-600 hover:to-blue-600 active:scale-95'
              }`}
            >
              {isLaunched ? 'Product Launched! 🚀' : 'Launch Product! 🚀'}
            </button>
          </div>

          {isConfettiVisible && <Confetti_7 />}
        </div>
      </div>
    </div>
  );
};

export default Example_7; 