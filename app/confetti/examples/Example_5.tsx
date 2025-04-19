"use client"

import React, { useState } from 'react';
import Confetti_5 from '../tsx/Confetti_5';

const Example_5: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);
  const [score, setScore] = useState(950);

  const handleWin = () => {
    setScore(1000);
    setIsConfettiVisible(true);
  };

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Game Victory</h1>
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
            <h2 className="text-3xl font-bold mb-2">Level Complete!</h2>
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="text-lg">Score:</div>
              <div className={`text-2xl font-bold ${score === 1000 ? 'text-yellow-500' : ''}`}>
                {score} / 1000
              </div>
            </div>
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-yellow-500 transition-all duration-1000" 
                style={{ width: `${(score / 1000) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <button
            onClick={handleWin}
            disabled={score === 1000}
            className={`px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold transition-all ${
              score === 1000 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:from-indigo-600 hover:to-purple-600'
            }`}
          >
            {score === 1000 ? 'Victory Achieved! 🏆' : 'Complete Level! 🎮'}
          </button>

          {isConfettiVisible && (
            <div className="absolute inset-0">
              <Confetti_5 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Example_5; 