"use client"

import React, { useState, useEffect } from 'react';
import Confetti_9 from '../_components/Confetti_9';

const Example_9: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const showConfetti = () => {
    setIsConfettiVisible(true);
    // Hide confetti after 5 seconds
    setTimeout(() => setIsConfettiVisible(false), 5000);
  };

  // Auto-trigger confetti when component mounts
  useEffect(() => {
    // Slight delay to ensure component is fully rendered
    const timer = setTimeout(() => {
      showConfetti();
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-full rounded-lg overflow-hidden transition-colors duration-300 relative ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
      style={{ minHeight: '300px' }}
    >
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${
            darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'
          }`}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center h-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-center">
          Promotion Celebration
        </h2>
        
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-sm sm:text-base md:text-lg mb-2">
            Congratulations on your promotion!
          </p>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            You&apos;ve earned this milestone
          </p>
        </div>

        <button
          onClick={showConfetti}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-white
            bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700
            transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
            text-sm sm:text-base`}
        >
          {isConfettiVisible ? "Celebrate Again! 🎉" : "Celebrate! 🎉"}
        </button>
      </div>

      <div className={`transition-opacity duration-300 ${isConfettiVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Confetti_9 />
      </div>
    </div>
  );
};

export default Example_9; 