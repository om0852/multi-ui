"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_63';
import { FaSun, FaMoon, FaSquare, FaGamepad, FaArrowRotateRight, FaPalette, FaChessBoard } from 'react-icons/fa6';

const Example_63: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clipboardExamples = [
    {
      text: "Pixel art clipboard",
      onCopy: () => console.log("Copied: Pixel art clipboard")
    },
    {
      text: "8-bit style example",
      onCopy: () => console.log("Copied: 8-bit style example")
    },
    {
      text: "Pixelated animation demo",
      onCopy: () => console.log("Copied: Pixelated animation demo")
    },
    {
      text: "Retro gaming button",
      onCopy: () => console.log("Copied: Retro gaming button")
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
          <h1 className="text-4xl font-bold mb-4">Pixel Art Clipboard</h1>
          <p className="text-lg opacity-80">
            A retro-inspired clipboard component featuring animated pixel effects and 8-bit styling.
            Hover over the buttons to reveal the pixelated animation.
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
          <h2 className="text-2xl font-bold mb-4">Pixel Art Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-green-500"><FaSquare /></span>
              <span>Animated pixel blocks</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400"><FaGamepad /></span>
              <span>Retro gaming aesthetic</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500"><FaArrowRotateRight /></span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400"><FaPalette /></span>
              <span>Green pixel color scheme</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500"><FaChessBoard /></span>
              <span>Grid-based animation pattern</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_63; 