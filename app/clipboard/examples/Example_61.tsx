"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_61';
import { FaSun, FaMoon, FaRing, FaLightbulb, FaArrowRotateRight, FaPalette, FaRadiation } from 'react-icons/fa6';

const Example_61: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clipboardExamples = [
    {
      text: "Neon ring clipboard",
      onCopy: () => console.log("Copied: Neon ring clipboard")
    },
    {
      text: "Rotating rings example",
      onCopy: () => console.log("Copied: Rotating rings example")
    },
    {
      text: "Pulsing glow demo",
      onCopy: () => console.log("Copied: Pulsing glow demo")
    },
    {
      text: "Pink neon effect",
      onCopy: () => console.log("Copied: Pink neon effect")
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
          <h1 className="text-4xl font-bold mb-4">Neon Ring Clipboard</h1>
          <p className="text-lg opacity-80">
            A vibrant clipboard component featuring rotating neon rings and pulsing glow effects.
            Hover over the buttons to reveal the neon animation effect.
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
          <h2 className="text-2xl font-bold mb-4">Neon Ring Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-pink-500"><FaRing /></span>
              <span>Rotating neon ring animations</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-pink-400"><FaLightbulb /></span>
              <span>Radial glow effect</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-pink-500"><FaArrowRotateRight /></span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-pink-400"><FaPalette /></span>
              <span>Pink neon color scheme</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-pink-500"><FaRadiation /></span>
              <span>Pulsing animation effects</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_61; 