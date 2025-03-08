"use client"

import React, { useState } from 'react';
import NumericClock from '../_components/Clock_2';
import { FaToggleOn, FaToggleOff, FaClock } from 'react-icons/fa6';

const Example_2: React.FC = () => {
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
            <FaClock className="mr-2 text-purple-500" />
            Animated Numeric Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gradient Style */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Gradient Style</h2>
            <div className="h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-gradient-to-r from-blue-500 to-purple-700" 
                digitClassName="text-4xl font-extrabold text-white mx-1"
              />
            </div>
          </div>

          {/* 12-Hour Format */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">12-Hour Format</h2>
            <div className="h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-gradient-to-r from-pink-500 to-orange-500" 
                digitClassName="text-4xl font-extrabold text-white mx-1"
                is12HourFormat={true}
              />
            </div>
          </div>

          {/* Dark Theme */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Dark Theme</h2>
            <div className="h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-gray-900" 
                digitClassName="text-4xl font-extrabold text-green-400 mx-1"
                interval={500}
              />
            </div>
          </div>

          {/* Custom Formatter */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Custom Formatter</h2>
            <div className="h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-gradient-to-r from-indigo-500 to-cyan-400" 
                digitClassName="text-4xl font-extrabold text-white mx-1"
                formatter={(value) => value.toString().padStart(2, '•')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_2; 