"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_67';
import { FaSun, FaMoon, FaWaveSquare, FaCircle, FaArrowRotateRight, FaPalette, FaWifi } from 'react-icons/fa6';

const Example_67: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clipboardExamples = [
    {
      text: "Pulse wave clipboard",
      onCopy: () => console.log("Copied: Pulse wave clipboard")
    },
    {
      text: "Expanding circles example",
      onCopy: () => console.log("Copied: Expanding circles example")
    },
    {
      text: "Radial pulse demo",
      onCopy: () => console.log("Copied: Radial pulse demo")
    },
    {
      text: "Wave effect button",
      onCopy: () => console.log("Copied: Wave effect button")
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
          <h1 className="text-4xl font-bold mb-4">Pulse Wave Clipboard</h1>
          <p className="text-lg opacity-80">
            A dynamic clipboard component featuring expanding circular waves and glowing pulse particles.
            Hover over the buttons to reveal the wave animation effect.
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
          <h2 className="text-2xl font-bold mb-4">Pulse Wave Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-indigo-500"><FaWaveSquare /></span>
              <span>Expanding circular waves</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-indigo-400"><FaCircle /></span>
              <span>Glowing pulse particles</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-indigo-500"><FaArrowRotateRight /></span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-indigo-400"><FaPalette /></span>
              <span>Indigo color scheme</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-indigo-500"><FaWifi /></span>
              <span>Radial emission effect</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_67; 