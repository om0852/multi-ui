"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_62';
import { FaSun, FaMoon, FaRainbow, FaStar, FaArrowRotateRight, FaPalette, FaWandSparkles } from 'react-icons/fa6';

const Example_62: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clipboardExamples = [
    {
      text: "Rainbow effect clipboard",
      onCopy: () => console.log("Copied: Rainbow effect clipboard")
    },
    {
      text: "Colorful gradient example",
      onCopy: () => console.log("Copied: Colorful gradient example")
    },
    {
      text: "Shine animation demo",
      onCopy: () => console.log("Copied: Shine animation demo")
    },
    {
      text: "Rotating colors button",
      onCopy: () => console.log("Copied: Rotating colors button")
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
          <h1 className="text-4xl font-bold mb-4">Rainbow Clipboard</h1>
          <p className="text-lg opacity-80">
            A vibrant clipboard component featuring rotating rainbow gradients and shine effects.
            Hover over the buttons to reveal the full spectrum of colors.
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
          <h2 className="text-2xl font-bold mb-4">Rainbow Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-red-500"><FaRainbow /></span>
              <span>Rotating rainbow gradient</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-yellow-400"><FaStar /></span>
              <span>Shine animation effect</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500"><FaArrowRotateRight /></span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-400"><FaPalette /></span>
              <span>Full spectrum color scheme</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-500"><FaWandSparkles /></span>
              <span>Animated border effects</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_62; 