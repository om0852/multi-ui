"use client"

import React, { useState } from 'react';
import Confetti_8 from '../_components/Confetti_8';

const Example_8: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);

  const handleToss = () => {
    setIsConfettiVisible(true);
    
    // Hide confetti after 5 seconds
    setTimeout(() => {
      setIsConfettiVisible(false);
    }, 5000);
  };

  return (
    <div className={`min-h-screen p-4 sm:p-6 md:p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} transition-colors duration-300`}>
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold">Graduation Day</h1>
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Class of 2023</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Congratulations on your achievement!</p>
            <div className="mt-4 flex justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-800 rounded-full flex items-center justify-center transition-all">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <div className="text-blue-800 text-xl sm:text-2xl font-bold">2023</div>
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleToss}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-lg text-sm sm:text-base font-semibold hover:from-blue-800 hover:to-blue-950 active:scale-95 transition-all"
          >
            Toss Your Cap! 🎓
          </button>

          {isConfettiVisible && <Confetti_8 />}
        </div>
      </div>
    </div>
  );
};

export default Example_8; 