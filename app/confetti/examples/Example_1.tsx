"use client"

import React, { useState } from 'react';
import Confetti_1 from '../_components/Confetti_1';

const Example_1: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Basic Confetti Animation</h1>
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

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center relative">
          <button
            onClick={() => setIsConfettiVisible(true)}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            Start Celebration! 🎉
          </button>

          {isConfettiVisible && (
            <div className="absolute inset-0">
              <Confetti_1 />
            </div>
          )}
        </div>

        <div className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
          Click the button to see a colorful confetti animation using Framer Motion!
        </div>
      </div>
    </div>
  );
};

export default Example_1; 