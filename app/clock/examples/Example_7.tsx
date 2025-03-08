"use client"

import React, { useState } from 'react';
import NumericClock from '../_components/Clock_7';
import { FaToggleOn, FaToggleOff, FaClock } from 'react-icons/fa6';

const Example_7: React.FC = () => {
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
            <FaClock className="mr-2 text-pink-500" />
            Neon Digital Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pink Neon */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Pink Neon</h2>
            <div className="h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-black" 
                digitClassName="text-4xl font-bold text-pink-500 neon-pink"
              />
            </div>
            <style jsx global>{`
              .neon-pink {
                text-shadow: 0 0 5px #ec4899, 0 0 10px #ec4899, 0 0 20px #ec4899, 0 0 40px #ec4899;
              }
            `}</style>
          </div>

          {/* Blue Neon */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Blue Neon</h2>
            <div className="h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-black" 
                digitClassName="text-4xl font-bold text-blue-500 neon-blue"
                is12HourFormat={true}
              />
            </div>
            <style jsx global>{`
              .neon-blue {
                text-shadow: 0 0 5px #3b82f6, 0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 40px #3b82f6;
              }
            `}</style>
          </div>

          {/* Green Neon */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Green Neon</h2>
            <div className="h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-black" 
                digitClassName="text-4xl font-bold text-green-500 neon-green"
                interval={500}
              />
            </div>
            <style jsx global>{`
              .neon-green {
                text-shadow: 0 0 5px #10b981, 0 0 10px #10b981, 0 0 20px #10b981, 0 0 40px #10b981;
              }
            `}</style>
          </div>

          {/* Purple Neon */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Purple Neon</h2>
            <div className="h-40 overflow-hidden rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center h-full bg-black" 
                digitClassName="text-4xl font-bold text-purple-500 neon-purple"
                formatter={(value) => value.toString()}
              />
            </div>
            <style jsx global>{`
              .neon-purple {
                text-shadow: 0 0 5px #8b5cf6, 0 0 10px #8b5cf6, 0 0 20px #8b5cf6, 0 0 40px #8b5cf6;
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_7; 