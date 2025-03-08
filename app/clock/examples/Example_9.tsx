"use client"

import React, { useState } from 'react';
import EnhancedAnalogClock from '../_components/Clock_9';
import { FaToggleOn, FaToggleOff, FaClock } from 'react-icons/fa6';

const Example_9: React.FC = () => {
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
            Enhanced Analog Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Default Style */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Default Style</h2>
            <div className="h-40 overflow-hidden rounded-lg">
              <EnhancedAnalogClock 
                size={200}
                backgroundColor="bg-gradient-to-br from-purple-600 to-blue-600"
                hourHandColor="bg-white"
                minuteHandColor="bg-white"
                secondHandColor="bg-red-500"
                numberColor="text-white"
                markerColor="bg-white"
                borderColor="border-purple-400"
              />
            </div>
          </div>

          {/* Dark Theme */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Dark Theme</h2>
            <div className="h-40 overflow-hidden rounded-lg">
              <EnhancedAnalogClock 
                size={200}
                backgroundColor="bg-gray-900"
                hourHandColor="bg-white"
                minuteHandColor="bg-blue-400"
                secondHandColor="bg-red-500"
                numberColor="text-white"
                markerColor="bg-gray-600"
                borderColor="border-gray-700"
              />
            </div>
          </div>

          {/* Light Theme */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Light Theme</h2>
            <div className="h-40 overflow-hidden rounded-lg">
              <EnhancedAnalogClock 
                size={200}
                backgroundColor="bg-white"
                hourHandColor="bg-gray-800"
                minuteHandColor="bg-gray-600"
                secondHandColor="bg-red-500"
                numberColor="text-gray-800"
                markerColor="bg-gray-400"
                borderColor="border-gray-300"
              />
            </div>
          </div>

          {/* Colorful Theme */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Colorful Theme</h2>
            <div className="h-40 overflow-hidden rounded-lg">
              <EnhancedAnalogClock 
                size={200}
                backgroundColor="bg-gradient-to-br from-indigo-500 to-purple-500"
                hourHandColor="bg-yellow-400"
                minuteHandColor="bg-green-400"
                secondHandColor="bg-pink-400"
                numberColor="text-white"
                markerColor="bg-white"
                borderColor="border-indigo-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_9; 