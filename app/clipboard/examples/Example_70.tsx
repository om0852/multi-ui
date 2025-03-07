"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_70';
import { FaSun, FaMoon, FaShapes, FaCircleDot, FaArrowRotateRight, FaPalette, FaGem } from 'react-icons/fa6';

const Example_70: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clipboardExamples = [
    {
      text: "Hexagon clipboard",
      onCopy: () => console.log("Copied: Hexagon clipboard")
    },
    {
      text: "Geometric shapes example",
      onCopy: () => console.log("Copied: Geometric shapes example")
    },
    {
      text: "Rotating pattern demo",
      onCopy: () => console.log("Copied: Rotating pattern demo")
    },
    {
      text: "Glowing points button",
      onCopy: () => console.log("Copied: Glowing points button")
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
          <h1 className="text-4xl font-bold mb-4">Hexagon Clipboard</h1>
          <p className="text-lg opacity-80">
            A geometric clipboard component featuring rotating hexagons and pulsing glow points.
            Hover over the buttons to reveal the hexagonal animation effect.
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
          <h2 className="text-2xl font-bold mb-4">Hexagon Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-teal-500"><FaShapes /></span>
              <span>Rotating hexagon animations</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-teal-400"><FaCircleDot /></span>
              <span>Glowing orbital points</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-teal-500"><FaArrowRotateRight /></span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-teal-400"><FaPalette /></span>
              <span>Teal color scheme</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-teal-500"><FaGem /></span>
              <span>Geometric pattern design</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_70; 