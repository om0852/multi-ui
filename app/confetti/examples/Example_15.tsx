"use client"

import React, { useState, useEffect } from 'react';
import Confetti_15 from '../_components/Confetti_15';

const Example_15: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isCountdownActive && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (isCountdownActive && timeLeft === 0) {
      setIsConfettiVisible(true);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isCountdownActive, timeLeft]);

  const handleStartCountdown = () => {
    setIsCountdownActive(true);
  };

  const handleReset = () => {
    setIsCountdownActive(false);
    setTimeLeft(10);
    setIsConfettiVisible(false);
  };

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Countdown Timer</h1>
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
            <h2 className="text-2xl font-bold mb-4">New Year Countdown</h2>
            
            <div className="flex justify-center items-center my-8">
              <div className="text-7xl font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                {timeLeft}
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {timeLeft === 0 
                ? "Happy New Year! 🎉" 
                : isCountdownActive 
                  ? "Get ready to celebrate!" 
                  : "Start the countdown to begin the celebration!"}
            </p>
          </div>
          
          <div className="flex justify-center gap-4">
            {timeLeft > 0 && !isCountdownActive && (
              <button
                onClick={handleStartCountdown}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all"
              >
                Start Countdown
              </button>
            )}
            
            {(timeLeft === 0 || isCountdownActive) && (
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg font-semibold hover:from-gray-600 hover:to-gray-700 transition-all"
              >
                Reset
              </button>
            )}
          </div>

          {isConfettiVisible && (
            <div className="absolute inset-0">
              <Confetti_15 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Example_15; 