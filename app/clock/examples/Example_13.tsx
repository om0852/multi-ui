"use client"

import React, { useState } from 'react';
import FlipClock from '../_components/Clock_13';
import { FaToggleOn, FaToggleOff, FaClockRotateLeft } from 'react-icons/fa6';

const Example_13: React.FC = () => {
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
            <FaClockRotateLeft className="mr-2 text-green-500" />
            Flip Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Default Style */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Default Style</h2>
            <div className="flex justify-center">
              <FlipClock 
                size="large"
                containerClassName="flex justify-center items-center"
                digitContainerClassName="bg-gray-900"
                digitClassName="text-white"
                labelClassName="text-gray-400"
              />
            </div>
          </div>

          {/* Dark Theme */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Dark Theme</h2>
            <div className="flex justify-center">
              <FlipClock 
                size="large"
                containerClassName="flex justify-center items-center"
                digitContainerClassName="bg-gray-800"
                digitClassName="text-white"
                labelClassName="text-gray-400"
              />
            </div>
          </div>

          {/* Colorful Theme */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Colorful Theme</h2>
            <div className="flex justify-center">
              <FlipClock 
                size="large"
                containerClassName="flex justify-center items-center"
                digitContainerClassName="bg-blue-600"
                digitClassName="text-white"
                labelClassName="text-blue-200"
              />
            </div>
          </div>

          {/* Minimal Theme */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Minimal Theme</h2>
            <div className="flex justify-center">
              <FlipClock 
                size="large"
                containerClassName="flex justify-center items-center"
                digitContainerClassName="bg-violet-100"
                digitClassName="text-violet-900"
                labelClassName="text-violet-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_13; 