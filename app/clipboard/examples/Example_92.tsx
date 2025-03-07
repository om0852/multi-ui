"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_92';
import { FaToggleOn, FaToggleOff, FaRadiation } from 'react-icons/fa6';

const Example_92: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const clipboardExamples = [
    { text: "Neon pulse clipboard", onCopy: () => console.log("Copied neon text!") },
    { text: "Radial wave effect", onCopy: () => console.log("Copied radial wave text!") },
    { text: "Glowing ring demo", onCopy: () => console.log("Copied glowing ring text!") },
    { text: "Pulsating interface", onCopy: () => console.log("Copied pulsating text!") },
  ];

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
            <FaRadiation className="mr-2 text-pink-500" />
            Neon Pulse Clipboard
          </h1>
          <p className="text-lg opacity-80">
            A vibrant clipboard with pulsating rings and radial glow effects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {clipboardExamples.map((example, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg transition-all duration-300 hover:shadow-xl`}
            >
              <Clipboard text={example.text} onCopy={example.onCopy} />
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Neon Pulse Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              <span>Expanding pulse ring animations</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              <span>Radial glow effect</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              <span>Pink & teal neon color scheme</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              <span>Color transition effects</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_92; 