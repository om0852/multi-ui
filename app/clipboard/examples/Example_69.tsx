"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_69';
import { FaSun, FaMoon, FaStar, FaStarHalfStroke, FaArrowRotateRight, FaPalette, FaLine } from 'react-icons/fa6';

const Example_69: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clipboardExamples = [
    {
      text: "Constellation clipboard",
      onCopy: () => console.log("Copied: Constellation clipboard")
    },
    {
      text: "Starry sky example",
      onCopy: () => console.log("Copied: Starry sky example")
    },
    {
      text: "Celestial animation demo",
      onCopy: () => console.log("Copied: Celestial animation demo")
    },
    {
      text: "Cosmic copy button",
      onCopy: () => console.log("Copied: Cosmic copy button")
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
          <h1 className="text-4xl font-bold mb-4">Constellation Clipboard</h1>
          <p className="text-lg opacity-80">
            A celestial clipboard component featuring twinkling stars and connecting constellation lines.
            Hover over the buttons to reveal the starry animation effect.
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
          <h2 className="text-2xl font-bold mb-4">Constellation Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-amber-500"><FaStar /></span>
              <span>Twinkling star animations</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-amber-400"><FaLine /></span>
              <span>Connecting constellation lines</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-amber-500"><FaArrowRotateRight /></span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-amber-400"><FaPalette /></span>
              <span>Amber gold color scheme</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-amber-500"><FaStarHalfStroke /></span>
              <span>Glowing star effect</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_69; 