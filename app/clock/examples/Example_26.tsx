"use client"

import React, { useState } from 'react';
import Clock_26 from '../tsx/Clock_26';
import { FaToggleOn, FaToggleOff, FaGears } from 'react-icons/fa6';

const Example_26: React.FC = () => {
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
            <FaGears className="mr-2 text-amber-700" />
            Steampunk Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Steampunk Style */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Brass & Copper</h2>
            <div className="flex justify-center items-center py-8">
              <Clock_26 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_26; 