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
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleDarkMode}
            className="flex items-center space-x-2 bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity"
            aria-label={`Toggle ${darkMode ? 'light' : 'dark'} mode`}
          >
            {darkMode ? (
              <FaToggleOn className="text-xl sm:text-2xl text-blue-400" />
            ) : (
              <FaToggleOff className="text-xl sm:text-2xl text-gray-400" />
            )}
            <span className="text-sm sm:text-base">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
          </button>
        </div>

        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-blue-500" />
            Numeric Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Default Style */}
          <div className={`p-4 sm:p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-colors duration-300`}>
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Default Style</h2>
            <div className="h-32 sm:h-40 flex items-center justify-center">
              <NumericClock 
                containerClassName="flex justify-center items-center" 
                digitClassName="text-3xl sm:text-4xl font-bold text-blue-500 mx-1"
              />
            </div>
          </div>

          {/* Neon Style */}
          <div className={`p-4 sm:p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-colors duration-300`}>
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Neon Style</h2>
            <div className="h-32 sm:h-40 flex items-center justify-center bg-black rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center" 
                digitClassName="text-3xl sm:text-4xl font-bold text-green-400 mx-1 glow"
                interval={500}
              />
            </div>
            <style jsx global>{`
              .glow {
                text-shadow: 0 0 5px #4ade80, 0 0 10px #4ade80, 0 0 15px #4ade80;
              }
            `}</style>
          </div>

          {/* 12-Hour Format */}
          <div className={`p-4 sm:p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-colors duration-300`}>
            <h2 className="text-lg sm:text-xl font-semibold mb-4">12-Hour Format</h2>
            <div className="h-32 sm:h-40 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <NumericClock 
                  containerClassName="flex justify-center items-center" 
                  digitClassName="text-3xl sm:text-4xl font-bold text-purple-500 mx-1"
                  formatter={hourFormatter}
                />
                <div className="mt-2 text-base sm:text-lg text-purple-500">
                  {new Date().getHours() >= 12 ? 'PM' : 'AM'}
                </div>
              </div>
            </div>
          </div>

          {/* Minimal Style */}
          <div className={`p-4 sm:p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-colors duration-300`}>
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Minimal Style</h2>
            <div className="h-32 sm:h-40 flex items-center justify-center">
              <NumericClock 
                containerClassName="flex justify-center items-center" 
                digitClassName={`text-3xl sm:text-4xl font-light ${darkMode ? 'text-gray-300' : 'text-gray-700'} mx-1 transition-colors duration-300`}
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