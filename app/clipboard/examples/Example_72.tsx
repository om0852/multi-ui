"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_72';
import { FaSun, FaMoon, FaCode, FaTerminal, FaArrowRotateRight, FaPalette, FaLaptopCode } from 'react-icons/fa6';

const Example_72: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clipboardExamples = [
    {
      text: "Digital rain clipboard",
      onCopy: () => console.log("Copied: Digital rain clipboard")
    },
    {
      text: "Matrix-style example",
      onCopy: () => console.log("Copied: Matrix-style example")
    },
    {
      text: "Falling code demo",
      onCopy: () => console.log("Copied: Falling code demo")
    },
    {
      text: "Cyber text button",
      onCopy: () => console.log("Copied: Cyber text button")
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
          <h1 className="text-4xl font-bold mb-4">Digital Rain Clipboard</h1>
          <p className="text-lg opacity-80">
            A cyberpunk clipboard component featuring falling digital characters and glowing trails.
            Hover over the buttons to reveal the matrix-style animation effect.
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
          <h2 className="text-2xl font-bold mb-4">Digital Rain Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-green-500"><FaCode /></span>
              <span>Falling character animations</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400"><FaTerminal /></span>
              <span>Japanese character symbols</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500"><FaArrowRotateRight /></span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400"><FaPalette /></span>
              <span>Green matrix color scheme</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500"><FaLaptopCode /></span>
              <span>Glowing trail effects</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_72; 