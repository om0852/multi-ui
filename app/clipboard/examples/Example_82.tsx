"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_82';
import { FaSun, FaMoon, FaGem, FaLightbulb, FaArrowRotateRight, FaPalette, FaCube } from 'react-icons/fa6';

const Example_82: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clipboardExamples = [
    {
      text: "Prism effect clipboard",
      onCopy: () => console.log("Copied: Prism effect clipboard")
    },
    {
      text: "Light refraction example",
      onCopy: () => console.log("Copied: Light refraction example")
    },
    {
      text: "3D triangular demo",
      onCopy: () => console.log("Copied: 3D triangular demo")
    },
    {
      text: "Rainbow beam button",
      onCopy: () => console.log("Copied: Rainbow beam button")
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
          <h1 className="text-4xl font-bold mb-4">Prism Effect Clipboard</h1>
          <p className="text-lg opacity-80">
            A colorful clipboard component featuring rotating 3D triangular prisms and rainbow light beams.
            Hover over the buttons to reveal the prismatic animation effect.
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
          <h2 className="text-2xl font-bold mb-4">Prism Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-pink-500"><FaGem /></span>
              <span>Rotating 3D triangular prisms</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-pink-400"><FaLightbulb /></span>
              <span>Colorful light beam effects</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-pink-500"><FaArrowRotateRight /></span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-pink-400"><FaPalette /></span>
              <span>Pink prism color scheme</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-pink-500"><FaCube /></span>
              <span>3D perspective rendering</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_82; 