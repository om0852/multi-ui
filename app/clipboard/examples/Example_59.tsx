"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_59';
import { FaSun, FaMoon, FaFire, FaFireFlameCurved, FaArrowRotateRight, FaPalette, FaWind } from 'react-icons/fa6';

const Example_59: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clipboardExamples = [
    {
      text: "Flame effect clipboard",
      onCopy: () => console.log("Copied: Flame effect clipboard")
    },
    {
      text: "Fire animation example",
      onCopy: () => console.log("Copied: Fire animation example")
    },
    {
      text: "Ember particles demo",
      onCopy: () => console.log("Copied: Ember particles demo")
    },
    {
      text: "Fiery copy button",
      onCopy: () => console.log("Copied: Fiery copy button")
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
          <h1 className="text-4xl font-bold mb-4">Fire-Themed Clipboard</h1>
          <p className="text-lg opacity-80">
            A dynamic clipboard component featuring animated flames and rising ember particles.
            Hover over the buttons to reveal the fiery animation effect.
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
          <h2 className="text-2xl font-bold mb-4">Fire Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-orange-500"><FaFire /></span>
              <span>Animated flame effect on hover</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-yellow-400"><FaFireFlameCurved /></span>
              <span>Rising ember particles</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-orange-500"><FaArrowRotateRight /></span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-orange-400"><FaPalette /></span>
              <span>Orange and red color scheme</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-yellow-500"><FaWind /></span>
              <span>Flickering flame animation</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_59; 