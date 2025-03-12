"use client"

import React, { useState } from 'react';
import Confetti_10 from '../_components/Confetti_10';

const Example_10: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);
  const [selectedHoliday, setSelectedHoliday] = useState('');

  const handleCelebrate = (holiday: string) => {
    setSelectedHoliday(holiday);
    setIsConfettiVisible(true);
  };

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Holiday Celebrations</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg ${
              darkMode 
                ? 'bg-gray-800 text-white border border-gray-700' 
                : 'bg-white text-gray-900 border border-gray-200'
            } shadow-sm`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center relative overflow-hidden">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-4">Choose a Holiday</h2>
            {selectedHoliday ? (
              <p className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                Celebrating {selectedHoliday}! 🎉
              </p>
            ) : (
              <p className="text-gray-600 dark:text-gray-400">Select a holiday to celebrate with confetti!</p>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleCelebrate('Christmas')}
              className="px-4 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all"
            >
              Christmas 🎄
            </button>
            <button
              onClick={() => handleCelebrate('Halloween')}
              className="px-4 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all"
            >
              Halloween 🎃
            </button>
            <button
              onClick={() => handleCelebrate('Valentine\'s Day')}
              className="px-4 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-all"
            >
              Valentine&apos;s ❤️
            </button>
            <button
              onClick={() => handleCelebrate('St. Patrick\'s Day')}
              className="px-4 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all"
            >
              St. Patrick&apos;s ☘️
            </button>
          </div>

          {isConfettiVisible && (
            <div className="absolute inset-0">
              <Confetti_10 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Example_10; 