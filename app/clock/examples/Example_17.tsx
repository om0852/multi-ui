"use client"

import React, { useState } from 'react';
import BinaryDigitalClock from '../_components/Clock_17';
import { FaToggleOn, FaToggleOff, FaMicrochip } from 'react-icons/fa6';

const Example_17: React.FC = () => {
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
            <FaMicrochip className="mr-2 text-green-500" />
            Binary Digital Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Default Binary Clock */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Default Binary Clock</h2>
            <div className="h-48 overflow-hidden rounded-lg">
              <BinaryDigitalClock 
                containerClass="h-full"
                backgroundColor="bg-gray-900"
                hourColor="text-green-500"
                minuteColor="text-green-400"
                secondColor="text-green-300"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm opacity-80">
                Hours (top) - Minutes (middle) - Seconds (bottom)
              </p>
            </div>
          </div>

          {/* Colorful Binary Clock */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Colorful Binary Clock</h2>
            <div className="h-48 overflow-hidden rounded-lg">
              <BinaryDigitalClock 
                containerClass="h-full"
                backgroundColor="bg-black"
                hourColor="text-blue-500"
                minuteColor="text-purple-500"
                secondColor="text-pink-500"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm opacity-80">
                Hours (blue) - Minutes (purple) - Seconds (pink)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_17; 