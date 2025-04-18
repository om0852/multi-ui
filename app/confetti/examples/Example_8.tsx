"use client"

import React, { useState } from 'react';
import Confetti_8 from '../_components/Confetti_8';

const Example_8: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Graduation Day</h1>
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
            <h2 className="text-3xl font-bold mb-2">Class of 2023</h2>
            <p className="text-gray-600 dark:text-gray-400">Congratulations on your achievement!</p>
            <div className="mt-4 flex justify-center">
              <div className="w-24 h-24 bg-blue-800 rounded-full flex items-center justify-center">
                <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <div className="text-blue-800 text-2xl font-bold">2023</div>
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => setIsConfettiVisible(true)}
            className="px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-lg font-semibold hover:from-blue-800 hover:to-blue-950 transition-all"
          >
            Toss Your Cap! 🎓
          </button>

          {isConfettiVisible && (
            <div className="absolute inset-0">
              <Confetti_8 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Example_8; 