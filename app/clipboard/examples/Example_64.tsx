"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_64';
import { FaSun, FaMoon, FaSmog, FaWind, FaArrowRotateRight, FaPalette, FaCloud } from 'react-icons/fa6';

const Example_64: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clipboardExamples = [
    {
      text: "Smoke effect clipboard",
      onCopy: () => console.log("Copied: Smoke effect clipboard")
    },
    {
      text: "Misty animation example",
      onCopy: () => console.log("Copied: Misty animation example")
    },
    {
      text: "Particle effect demo",
      onCopy: () => console.log("Copied: Particle effect demo")
    },
    {
      text: "Smoky copy button",
      onCopy: () => console.log("Copied: Smoky copy button")
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-800'}`}
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Smoke Effect Clipboard</h1>
          <p className="text-lg opacity-80">
            An atmospheric clipboard component featuring rising smoke particles and misty effects.
            Hover over the buttons to reveal the smoky animation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {clipboardExamples.map((example, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              <Clipboard text={example.text} onCopy={example.onCopy} />
            </div>
          ))}
        </div>

        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800/50' : 'bg-white'} shadow-lg mb-8`}>
          <h2 className="text-2xl font-bold mb-4">Smoke Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-gray-400"><FaSmog /></span>
              <span>Rising smoke particles</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gray-500"><FaWind /></span>
              <span>Misty blur effect</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gray-400"><FaArrowRotateRight /></span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gray-500"><FaPalette /></span>
              <span>Slate gray color scheme</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gray-400"><FaCloud /></span>
              <span>Fading opacity transitions</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_64; 