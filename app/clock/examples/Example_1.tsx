"use client"

import React, { useState, useEffect } from 'react';
import NumericClock from '../_components/Clock_1';
import { FaToggleOn, FaToggleOff, FaClock } from 'react-icons/fa6';

const Example_1: React.FC = () => {
  // Initialize dark mode based on system preference
  const [darkMode, setDarkMode] = useState(
    typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : true
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Custom formatter that adds AM/PM
  const hourFormatter = (value: number) => {
    const hour = value > 12 ? value - 12 : value === 0 ? 12 : value;
    return hour.toString().padStart(2, "0");
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-6">
        <div className="flex justify-end mb-3 sm:mb-4">
          <button
            onClick={toggleDarkMode}
            className="flex items-center space-x-1 sm:space-x-2 bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity"
            aria-label={`Toggle ${darkMode ? 'light' : 'dark'} mode`}
          >
            {darkMode ? (
              <FaToggleOn className="text-lg sm:text-xl md:text-2xl text-blue-400" />
            ) : (
              <FaToggleOff className="text-lg sm:text-xl md:text-2xl text-gray-400" />
            )}
            <span className="text-xs sm:text-sm md:text-base">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
          </button>
        </div>

        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-blue-500" />
            Numeric Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {/* Default Style */}
          <div className={`p-3 sm:p-4 md:p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-colors duration-300`}>
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Default Style</h2>
            <div className="h-24 sm:h-32 md:h-40 flex items-center justify-center">
              <NumericClock 
                containerClassName="flex justify-center items-center" 
                digitClassName="text-xl sm:text-2xl md:text-4xl font-bold text-blue-500 mx-0.5 sm:mx-1"
              />
            </div>
          </div>

          {/* Neon Style */}
          <div className={`p-3 sm:p-4 md:p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-colors duration-300`}>
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Neon Style</h2>
            <div className="h-24 sm:h-32 md:h-40 flex items-center justify-center bg-black rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center" 
                digitClassName="text-xl sm:text-2xl md:text-4xl font-bold text-green-400 mx-0.5 sm:mx-1 glow"
                interval={500}
              />
            </div>
            <style jsx global>{`
              .glow {
                text-shadow: 0 0 3px #4ade80, 0 0 6px #4ade80, 0 0 9px #4ade80;
              }
              @media (min-width: 640px) {
                .glow {
                  text-shadow: 0 0 5px #4ade80, 0 0 10px #4ade80, 0 0 15px #4ade80;
                }
              }
            `}</style>
          </div>

          {/* 12-Hour Format */}
          <div className={`p-3 sm:p-4 md:p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-colors duration-300`}>
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">12-Hour Format</h2>
            <div className="h-24 sm:h-32 md:h-40 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <NumericClock 
                  containerClassName="flex justify-center items-center" 
                  digitClassName="text-xl sm:text-2xl md:text-4xl font-bold text-purple-500 mx-0.5 sm:mx-1"
                  formatter={hourFormatter}
                />
                <div className="mt-1 sm:mt-2 text-sm sm:text-base md:text-lg text-purple-500">
                  {new Date().getHours() >= 12 ? 'PM' : 'AM'}
                </div>
              </div>
            </div>
          </div>

          {/* Minimal Style */}
          <div className={`p-3 sm:p-4 md:p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-colors duration-300`}>
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Minimal Style</h2>
            <div className="h-24 sm:h-32 md:h-40 flex items-center justify-center">
              <NumericClock 
                containerClassName="flex justify-center items-center" 
                digitClassName={`text-xl sm:text-2xl md:text-4xl font-light ${darkMode ? 'text-gray-300' : 'text-gray-700'} mx-0.5 sm:mx-1 transition-colors duration-300`}
                formatter={(value) => value.toString()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_1; 