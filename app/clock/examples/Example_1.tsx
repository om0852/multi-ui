"use client"

import React, { useState } from 'react';
import NumericClock from '../_components/Clock_1';
import { FaToggleOn, FaToggleOff, FaClock } from 'react-icons/fa6';

const Example_1: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Custom formatter that adds AM/PM
  const hourFormatter = (value: number) => {
    const hour = value > 12 ? value - 12 : value === 0 ? 12 : value;
    return hour.toString().padStart(2, "0");
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
            <FaClock className="mr-2 text-blue-500" />
            Numeric Clock
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Default Style */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Default Style</h2>
            <div className="h-40 flex items-center justify-center">
              <NumericClock 
                containerClassName="flex justify-center items-center" 
                digitClassName="text-4xl font-bold text-blue-500 mx-1"
              />
            </div>
          </div>

          {/* Neon Style */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Neon Style</h2>
            <div className="h-40 flex items-center justify-center bg-black rounded-lg">
              <NumericClock 
                containerClassName="flex justify-center items-center" 
                digitClassName="text-4xl font-bold text-green-400 mx-1 glow"
                interval={500}
              />
            </div>
            <style jsx global>{`
              .glow {
                text-shadow: 0 0 5px #4ade80, 0 0 10px #4ade80, 0 0 15px #4ade80;
              }
            `}</style>
          </div>

          {/* 12-Hour Format */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">12-Hour Format</h2>
            <div className="h-40 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <NumericClock 
                  containerClassName="flex justify-center items-center" 
                  digitClassName="text-4xl font-bold text-purple-500 mx-1"
                  formatter={hourFormatter}
                />
                <div className="mt-2 text-lg">
                  {new Date().getHours() >= 12 ? 'PM' : 'AM'}
                </div>
              </div>
            </div>
          </div>

          {/* Minimal Style */}
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Minimal Style</h2>
            <div className="h-40 flex items-center justify-center">
              <NumericClock 
                containerClassName="flex justify-center items-center" 
                digitClassName={`text-4xl font-light ${darkMode ? 'text-gray-300' : 'text-gray-700'} mx-1`}
                formatter={(value) => value.toString()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_1; 