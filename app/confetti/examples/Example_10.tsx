"use client"

import React, { useState } from 'react';
import Confetti_10 from '../tsx/Confetti_10';

const Example_10: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);
  const [selectedHoliday, setSelectedHoliday] = useState('');

  const handleCelebrate = (holiday: string) => {
    setSelectedHoliday(holiday);
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
          <h1 className="text-xl sm:text-2xl font-bold">Holiday Celebrations</h1>
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">Choose a Holiday</h2>
            {selectedHoliday ? (
              <p className="text-lg sm:text-xl font-semibold text-purple-600 dark:text-purple-400 animate-pulse">
                Celebrating {selectedHoliday}! 🎉
              </p>
            ) : (
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Select a holiday to celebrate with confetti!
              </p>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <button
              onClick={() => handleCelebrate('Christmas')}
              className="px-3 py-2 sm:px-4 sm:py-3 bg-red-600 text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-red-700 active:scale-95 transition-all"
            >
              Christmas 🎄
            </button>
            <button
              onClick={() => handleCelebrate('Halloween')}
              className="px-3 py-2 sm:px-4 sm:py-3 bg-orange-600 text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-orange-700 active:scale-95 transition-all"
            >
              Halloween 🎃
            </button>
            <button
              onClick={() => handleCelebrate('Valentine\'s Day')}
              className="px-3 py-2 sm:px-4 sm:py-3 bg-pink-600 text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-pink-700 active:scale-95 transition-all"
            >
              Valentine&apos;s ❤️
            </button>
            <button
              onClick={() => handleCelebrate('St. Patrick\'s Day')}
              className="px-3 py-2 sm:px-4 sm:py-3 bg-green-600 text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-green-700 active:scale-95 transition-all"
            >
              St. Patrick&apos;s ☘️
            </button>
          </div>

          {isConfettiVisible && (
            <Confetti_10 />
          )}
        </div>
      </div>
    </div>
  );
};

export default Example_10; 