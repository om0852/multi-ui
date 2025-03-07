"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_80';
import { FaSun, FaMoon, FaSnowflake, FaLightbulb, FaArrowRotateRight, FaPalette, FaGem } from 'react-icons/fa6';

const Example_80: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clipboardExamples = [
    {
      text: "Kaleidoscope clipboard",
      onCopy: () => console.log("Copied: Kaleidoscope clipboard")
    },
    {
      text: "Rotating segments example",
      onCopy: () => console.log("Copied: Rotating segments example")
    },
    {
      text: "Morphing patterns demo",
      onCopy: () => console.log("Copied: Morphing patterns demo")
    },
    {
      text: "Reflective light button",
      onCopy: () => console.log("Copied: Reflective light button")
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
          <h1 className="text-4xl font-bold mb-4">Kaleidoscope Clipboard</h1>
          <p className="text-lg opacity-80">
            A mesmerizing clipboard component featuring rotating kaleidoscope segments, morphing patterns, and light reflections.
            Hover over the buttons to reveal the kaleidoscopic animation effect.
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
          <h2 className="text-2xl font-bold mb-4">Kaleidoscope Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-rose-500"><FaSnowflake /></span>
              <span>Rotating kaleidoscope segments</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-rose-400"><FaGem /></span>
              <span>Morphing geometric patterns</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-rose-500"><FaArrowRotateRight /></span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-rose-400"><FaPalette /></span>
              <span>Rose red color scheme</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-rose-500"><FaLightbulb /></span>
              <span>Light reflection effects</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_80; 