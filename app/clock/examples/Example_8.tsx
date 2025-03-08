"use client"

import React, { useState } from 'react';
import AnalogClock from '../_components/Clock_8';
import { FaToggleOn, FaToggleOff, FaClock } from 'react-icons/fa6';

const Example_8: React.FC = () => {
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
            <FaClock className="mr-2 text-orange-500" />
            Minimalist Analog Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Light Theme */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Light Theme</h2>
            <div className="flex justify-center">
              <AnalogClock 
                size={200}
                hourColor="#1f2937"
                minuteColor="#4b5563"
                secondColor="#ef4444"
                backgroundColor="#f9fafb"
                borderColor="border-gray-300"
              />
            </div>
          </div>

          {/* Dark Theme */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Dark Theme</h2>
            <div className="flex justify-center">
              <AnalogClock 
                size={200}
                hourColor="#f9fafb"
                minuteColor="#e5e7eb"
                secondColor="#ef4444"
                backgroundColor="#1f2937"
                borderColor="border-gray-600"
              />
            </div>
          </div>

          {/* Colorful Theme */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Colorful Theme</h2>
            <div className="flex justify-center">
              <AnalogClock 
                size={200}
                hourColor="#3b82f6"
                minuteColor="#8b5cf6"
                secondColor="#ec4899"
                backgroundColor="#0f172a"
                borderColor="border-indigo-600"
              />
            </div>
          </div>

          {/* Minimal Theme */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Minimal Theme</h2>
            <div className="flex justify-center">
              <AnalogClock 
                size={200}
                hourColor={darkMode ? "#f9fafb" : "#1f2937"}
                minuteColor={darkMode ? "#f9fafb" : "#1f2937"}
                secondColor={darkMode ? "#f9fafb" : "#1f2937"}
                backgroundColor="bg-transparent"
                borderColor="border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_8; 