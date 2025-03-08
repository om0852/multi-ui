"use client"

import React, { useState } from 'react';
import Clock_5 from '../_components/Clock_5';
import { FaToggleOn, FaToggleOff, FaClock } from 'react-icons/fa6';

const Example_5: React.FC = () => {
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
            <FaClock className="mr-2 text-indigo-500" />
            Digital Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Default Style */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Default Style</h2>
            <div className="flex justify-center">
              <Clock_5 
                containerClassName="flex justify-center items-center"
                digitClassName="text-4xl font-bold text-indigo-500"
              />
            </div>
          </div>

          {/* 12-Hour Format */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">12-Hour Format</h2>
            <div className="flex justify-center">
              <Clock_5 
                containerClassName="flex justify-center items-center"
                digitClassName="text-4xl font-bold text-pink-500"
                is12HourFormat={true}
              />
            </div>
          </div>

          {/* Custom Formatter */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Custom Formatter</h2>
            <div className="flex justify-center">
              <Clock_5 
                containerClassName="flex justify-center items-center"
                digitClassName="text-4xl font-bold text-purple-500"
                formatter={(value) => value.toString().padStart(2, '•')}
              />
            </div>
          </div>

          {/* Fast Update */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Fast Update</h2>
            <div className="flex justify-center">
              <Clock_5 
                containerClassName="flex justify-center items-center"
                digitClassName="text-4xl font-bold text-blue-500"
                interval={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_5; 