"use client"

import React, { useState } from 'react';
import Clock_38 from '../_components/Clock_38';
import { FaToggleOn, FaToggleOff, FaTicket } from 'react-icons/fa6';

const Example_38: React.FC = () => {
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
            <FaTicket className="mr-2 text-zinc-400" />
            Split-Flap Clock
          </h1>
          <p className="text-lg opacity-80">
            A retro-inspired clock with mechanical split-flap animation like airport displays
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12">
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Mechanical Display</h2>
            <div className="flex justify-center items-center py-8">
              <Clock_38 />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Clock Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="text-zinc-400 mr-2">•</span>
              <span>Realistic split-flap mechanical animation</span>
            </li>
            <li className="flex items-start">
              <span className="text-zinc-400 mr-2">•</span>
              <span>3D perspective for authentic appearance</span>
            </li>
            <li className="flex items-start">
              <span className="text-zinc-400 mr-2">•</span>
              <span>Industrial zinc color scheme</span>
            </li>
            <li className="flex items-start">
              <span className="text-zinc-400 mr-2">•</span>
              <span>Subtle shine and shadow effects</span>
            </li>
            <li className="flex items-start">
              <span className="text-zinc-400 mr-2">•</span>
              <span>Synchronized top and bottom flap movements</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_38; 