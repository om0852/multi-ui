"use client"

import React, { useState } from 'react';
import Clock3 from '../_components/Clock_3';
import { FaToggleOn, FaToggleOff, FaClock } from 'react-icons/fa6';

const Example_3: React.FC = () => {
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
            <FaClock className="mr-2 text-teal-500" />
            Spring Animation Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Default Style */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Default Style</h2>
            <div className="h-40 overflow-hidden rounded-lg">
              <Clock3 
                containerClassName="flex justify-center items-center h-full bg-gradient-to-br from-teal-400 to-blue-600" 
                digitClassName="text-3xl font-semibold text-white mx-1"
              />
            </div>
          </div>

          {/* Cyberpunk Theme */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Cyberpunk Theme</h2>
            <div className="h-40 overflow-hidden rounded-lg">
              <Clock3 
                containerClassName="flex justify-center items-center h-full bg-black" 
                digitClassName="text-3xl font-bold text-pink-500 mx-1"
                interval={500}
                is12HourFormat={true}
              />
            </div>
          </div>

          {/* Pastel Theme */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Pastel Theme</h2>
            <div className="h-40 overflow-hidden rounded-lg">
              <Clock3 
                containerClassName="flex justify-center items-center h-full bg-gradient-to-br from-purple-300 to-pink-200" 
                digitClassName="text-3xl font-semibold text-purple-800 mx-1"
                formatter={(value) => value.toString().padStart(2, '0')}
              />
            </div>
          </div>

          {/* Minimal Dark */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Minimal Dark</h2>
            <div className="h-40 overflow-hidden rounded-lg">
              <Clock3 
                containerClassName="flex justify-center items-center h-full bg-gray-900" 
                digitClassName="text-3xl font-light text-gray-300 mx-1"
                formatter={(value) => value.toString()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_3; 