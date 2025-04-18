"use client"

import React, { useState } from 'react';
import Confetti_9 from '../_components/Confetti_9';

const Example_9: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Career Milestone</h1>
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
            <div className="inline-block p-3 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-2">You Got Promoted!</h2>
            <p className="text-gray-600 dark:text-gray-400">Congratulations on your new role as Senior Developer</p>
          </div>
          
          <button
            onClick={() => setIsConfettiVisible(true)}
            className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-700 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-amber-800 transition-all"
          >
            Celebrate Your Success! 🌟
          </button>

          {isConfettiVisible && (
            <div className="absolute inset-0">
              <Confetti_9 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Example_9; 