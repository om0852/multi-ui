"use client"

import React, { useState } from 'react';
import Clock_47 from '../_components/Clock_47';
import { FaToggleOn, FaToggleOff, FaSmog } from 'react-icons/fa6';

const Example_47: React.FC = () => {
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
            <FaSmog className="mr-2 text-neutral-400" />
            Smoke Dissolve Clock
          </h1>
          <p className="text-lg opacity-80">
            An atmospheric clock with elegant smoke particle animations
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12">
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Dissolving Smoke</h2>
            <div className="flex justify-center items-center py-8">
              <Clock_47 />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Clock Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="text-neutral-400 mr-2">•</span>
              <span>Smoke particle dissolve animation</span>
            </li>
            <li className="flex items-start">
              <span className="text-neutral-400 mr-2">•</span>
              <span>Subtle blur transitions between digits</span>
            </li>
            <li className="flex items-start">
              <span className="text-neutral-400 mr-2">•</span>
              <span>Elegant neutral color scheme</span>
            </li>
            <li className="flex items-start">
              <span className="text-neutral-400 mr-2">•</span>
              <span>Textured background for depth</span>
            </li>
            <li className="flex items-start">
              <span className="text-neutral-400 mr-2">•</span>
              <span>Randomized particle movement patterns</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_47; 