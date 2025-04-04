"use client"

import React, { useState } from 'react';
import Clipboard from '../tsx/Clipboard_81';
import { FaSun, FaMoon, FaWater, FaCircle, FaArrowRotateRight, FaPalette, FaRadiation } from 'react-icons/fa6';

const Example_81: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clipboardExamples = [
    {
      text: "Ripple effect clipboard",
      onCopy: () => console.log("Copied: Ripple effect clipboard")
    },
    {
      text: "Expanding circles example",
      onCopy: () => console.log("Copied: Expanding circles example")
    },
    {
      text: "Radiating particles demo",
      onCopy: () => console.log("Copied: Radiating particles demo")
    },
    {
      text: "Water ripple button",
      onCopy: () => console.log("Copied: Water ripple button")
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
          <h1 className="text-4xl font-bold mb-4">Ripple Effect Clipboard</h1>
          <p className="text-lg opacity-80">
            A dynamic clipboard component featuring expanding ripple circles and radiating particles.
            Hover over the buttons to reveal the ripple animation effect.
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
          <h2 className="text-2xl font-bold mb-4">Ripple Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-purple-500"><FaWater /></span>
              <span>Expanding ripple circles</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-400"><FaRadiation /></span>
              <span>Radiating particle effects</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-500"><FaArrowRotateRight /></span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-400"><FaPalette /></span>
              <span>Purple ripple color scheme</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-500"><FaCircle /></span>
              <span>Concentric circle pattern</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_81; 