"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_87';
import { FaSun, FaMoon, FaGem, FaRainbow, FaArrowRotateRight, FaPalette, FaGlasses } from 'react-icons/fa6';

const Example_87: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clipboardExamples = [
    {
      text: "Holographic clipboard",
      onCopy: () => console.log("Copied: Holographic clipboard")
    },
    {
      text: "Rainbow shimmer example",
      onCopy: () => console.log("Copied: Rainbow shimmer example")
    },
    {
      text: "Prismatic effect demo",
      onCopy: () => console.log("Copied: Prismatic effect demo")
    },
    {
      text: "Iridescent button",
      onCopy: () => console.log("Copied: Iridescent button")
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
          <h1 className="text-4xl font-bold mb-4">Holographic Clipboard</h1>
          <p className="text-lg opacity-80">
            A futuristic clipboard component featuring rainbow shimmer and prismatic light effects.
            Hover over the buttons to reveal the holographic animation effect.
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
          <h2 className="text-2xl font-bold mb-4">Holographic Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-white"><FaGem /></span>
              <span>Translucent holographic surface</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white"><FaRainbow /></span>
              <span>Rainbow shimmer effect</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white"><FaArrowRotateRight /></span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white"><FaPalette /></span>
              <span>Iridescent color scheme</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white"><FaGlasses /></span>
              <span>Prismatic light reflections</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_87; 