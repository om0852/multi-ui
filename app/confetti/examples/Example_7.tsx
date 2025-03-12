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
  };

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Product Launch</h1>
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
            <h2 className="text-3xl font-bold mb-2">Nova X1</h2>
            <p className="text-gray-600 dark:text-gray-400">The next generation of smart devices</p>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={handleLaunch}
              disabled={isLaunched}
              className={`px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold transition-all ${
                isLaunched 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:from-cyan-600 hover:to-blue-600'
              }`}
            >
              {isLaunched ? 'Product Launched! 🚀' : 'Launch Product! 🚀'}
            </button>
          </div>

          {isConfettiVisible && (
            <div className="absolute inset-0">
              <Confetti_7 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Example_7; 