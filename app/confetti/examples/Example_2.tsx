"use client"

import React, { useState } from 'react';
import Confetti_2 from '../_components/Confetti_2';

const Example_2: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Birthday Celebration</h1>
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
            <h2 className="text-3xl font-bold mb-2">Happy Birthday!</h2>
            <p className="text-gray-600 dark:text-gray-400">Click the button to celebrate with confetti!</p>
          </div>
          
          <button
            onClick={() => setIsConfettiVisible(true)}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-teal-600 transition-all"
          >
            Make a Wish! 🎂
          </button>

          {isConfettiVisible && (
            <div className="absolute inset-0">
              <Confetti_2 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Example_2; 