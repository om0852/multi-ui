"use client"

import React, { useState } from 'react';
import Clock_32 from '../_components/Clock_32';
import { FaToggleOn, FaToggleOff, FaRotate } from 'react-icons/fa6';

const Example_32: React.FC = () => {
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
            <FaRotate className="mr-2 text-violet-500" />
            Rotating Number Clock
          </h1>
          <p className="text-lg opacity-80">
            A modern clock with 3D rotating number transitions and violet-indigo gradient
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12">
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Violet-Indigo Gradient</h2>
            <div className="flex justify-center items-center py-8">
              <Clock_32 />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Clock Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="text-violet-500 mr-2">•</span>
              <span>3D rotating number transitions</span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-500 mr-2">•</span>
              <span>Violet-indigo gradient background</span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-500 mr-2">•</span>
              <span>Individual digit containers with scale effects</span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-500 mr-2">•</span>
              <span>Shiny edge lighting effects</span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-500 mr-2">•</span>
              <span>180° rotation animation on digit change</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_32; 