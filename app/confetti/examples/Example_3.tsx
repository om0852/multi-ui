"use client"

import React, { useState } from 'react';
import Confetti_3 from '../tsx/Confetti_3';

const Example_3: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Achievement Unlocked</h1>
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
            <h2 className="text-3xl font-bold mb-2">Congratulations!</h2>
            <p className="text-gray-600 dark:text-gray-400">You&apos;ve completed all your tasks for today!</p>
          </div>
          
          <button
            onClick={() => setIsConfettiVisible(true)}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all"
          >
            Celebrate Success! 🏆
          </button>

          {isConfettiVisible && (
            <div className="absolute inset-0">
              <Confetti_3 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Example_3; 