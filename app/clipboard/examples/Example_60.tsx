"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_60';
import { FaSun, FaMoon, FaDiamond, FaLightbulb, FaArrowRotateRight, FaPalette, FaWandMagicSparkles } from 'react-icons/fa6';

const Example_60: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clipboardExamples = [
    {
      text: "Crystal effect clipboard",
      onCopy: () => console.log("Copied: Crystal effect clipboard")
    },
    {
      text: "Faceted design example",
      onCopy: () => console.log("Copied: Faceted design example")
    },
    {
      text: "Sparkle animation demo",
      onCopy: () => console.log("Copied: Sparkle animation demo")
    },
    {
      text: "Reflective copy button",
      onCopy: () => console.log("Copied: Reflective copy button")
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
          <h1 className="text-4xl font-bold mb-4">Crystal-Themed Clipboard</h1>
          <p className="text-lg opacity-80">
            A stunning clipboard component featuring 3D crystal facets, light reflections, and sparkling animations.
            Hover over the buttons to reveal the crystalline effect.
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
          <h2 className="text-2xl font-bold mb-4">Crystal Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-blue-400"><FaDiamond /></span>
              <span>3D rotating crystal facets</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white"><FaLightbulb /></span>
              <span>Light reflection animations</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-500"><FaArrowRotateRight /></span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-400"><FaPalette /></span>
              <span>Blue and purple color scheme</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-300"><FaWandMagicSparkles /></span>
              <span>Twinkling sparkle effects</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_60; 