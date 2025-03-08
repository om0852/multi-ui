"use client"

import React, { useState } from 'react';
import DigitalClock from '../_components/Clock_4';
import { FaToggleOn, FaToggleOff, FaCalendarDay } from 'react-icons/fa6';

const Example_4: React.FC = () => {
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
            <FaCalendarDay className="mr-2 text-cyan-500" />
            Date & Time Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Default Style */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Default Style</h2>
            <div className="h-48 overflow-hidden rounded-lg">
              <DigitalClock 
                containerClassName="flex justify-center items-center h-full bg-gradient-to-br from-teal-500 to-blue-600" 
                digitClassName="text-4xl font-bold text-white"
              />
            </div>
          </div>

          {/* Neon Style */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Neon Style</h2>
            <div className="h-48 overflow-hidden rounded-lg">
              <DigitalClock 
                containerClassName="flex justify-center items-center h-full bg-black" 
                digitClassName="text-4xl font-bold text-pink-500"
                is12HourFormat={true}
              />
            </div>
          </div>

          {/* Minimal Style */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Minimal Style</h2>
            <div className="h-48 overflow-hidden rounded-lg">
              <DigitalClock 
                containerClassName="flex justify-center items-center h-full bg-gray-100" 
                digitClassName="text-4xl font-light text-gray-800"
                formatter={(value) => value.toString()}
              />
            </div>
          </div>

          {/* Sunset Theme */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Sunset Theme</h2>
            <div className="h-48 overflow-hidden rounded-lg">
              <DigitalClock 
                containerClassName="flex justify-center items-center h-full bg-gradient-to-br from-orange-400 to-pink-600" 
                digitClassName="text-4xl font-bold text-white"
                interval={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_4; 