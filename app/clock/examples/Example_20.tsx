"use client"

import React, { useState } from 'react';
import DecorativeDigitalClock from '../tsx/Clock_20';
import { FaToggleOn, FaToggleOff, FaCircleNotch } from 'react-icons/fa6';

const Example_20: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleDarkMode}
            className="flex items-center space-x-2 bg-transparent border-none cursor-pointer"
          >
            {darkMode ? (
              <FaToggleOn className="text-2xl text-blue-400" />
            ) : (
              <FaToggleOff className="text-2xl text-gray-400" />
            )}
            <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
          </button>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center">
            <FaCircleNotch className="mr-2 text-pink-500 animate-spin" />
            Decorative Rotating Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Small Size */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Small Size</h2>
            <div className="h-48 overflow-hidden rounded-lg">
              <DecorativeDigitalClock 
              />
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Example_20; 