"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_86';
import { FaSun, FaMoon, FaCircle, FaLightbulb, FaArrowRotateRight, FaPalette, FaBolt } from 'react-icons/fa6';

const Example_86: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clipboardExamples = [
    {
      text: "Neon ripple clipboard",
      onCopy: () => console.log("Copied: Neon ripple clipboard")
    },
    {
      text: "Electric waves example",
      onCopy: () => console.log("Copied: Electric waves example")
    },
    {
      text: "Color transition demo",
      onCopy: () => console.log("Copied: Color transition demo")
    },
    {
      text: "Glowing effect button",
      onCopy: () => console.log("Copied: Glowing effect button")
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
          <h1 className="text-4xl font-bold mb-4">Neon Ripple Clipboard</h1>
          <p className="text-lg opacity-80">
            A vibrant clipboard component featuring electric circular ripples and neon color transitions.
            Hover over the buttons to reveal the glowing animation effect.
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
          <h2 className="text-2xl font-bold mb-4">Neon Ripple Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-fuchsia-500"><FaCircle /></span>
              <span>Electric circular ripples</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-cyan-400"><FaLightbulb /></span>
              <span>Glowing neon effects</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-fuchsia-500"><FaArrowRotateRight /></span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-cyan-400"><FaPalette /></span>
              <span>Magenta to cyan transitions</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-fuchsia-500"><FaBolt /></span>
              <span>Electric glow shadows</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_86; 