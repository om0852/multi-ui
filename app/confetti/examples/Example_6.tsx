"use client"

import React, { useState } from 'react';
import Confetti_6 from '../tsx/Confetti_6';

const Example_6: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Wedding Celebration</h1>
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
            <h2 className="text-3xl font-bold mb-2">Just Married!</h2>
            <p className="text-gray-600 dark:text-gray-400">Sarah & Michael</p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">June 15, 2023</p>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={() => setIsConfettiVisible(true)}
              className="px-6 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-lg font-semibold hover:from-pink-500 hover:to-rose-500 transition-all"
            >
              Celebrate the Newlyweds! 💍
            </button>
          </div>

          {isConfettiVisible && (
            <div className="absolute inset-0">
              <Confetti_6 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Example_6; 