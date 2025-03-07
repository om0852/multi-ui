"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_66';
import { FaSun, FaMoon, FaBolt, FaNetworkWired, FaArrowRotateRight, FaPalette, FaRadio } from 'react-icons/fa6';

const Example_66: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clipboardExamples = [
    {
      text: "CYBER::COPY",
      onCopy: () => console.log("Copied: CYBER::COPY")
    },
    {
      text: "GLITCH.EXE",
      onCopy: () => console.log("Copied: GLITCH.EXE")
    },
    {
      text: "NEON.SYS",
      onCopy: () => console.log("Copied: NEON.SYS")
    },
    {
      text: "HACK://CLIPBOARD",
      onCopy: () => console.log("Copied: HACK://CLIPBOARD")
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
          <h1 className="text-4xl font-bold mb-4">Cyberpunk Clipboard</h1>
          <p className="text-lg opacity-80">
            A futuristic clipboard component featuring glitch effects, scanlines, and neon colors.
            Hover over the buttons to reveal the cyberpunk animation.
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
          <h2 className="text-2xl font-bold mb-4">Cyberpunk Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-fuchsia-500"><FaNetworkWired /></span>
              <span>Glitch block animations</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-cyan-400"><FaRadio /></span>
              <span>Scanline effect</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-fuchsia-500"><FaArrowRotateRight /></span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-cyan-400"><FaPalette /></span>
              <span>Magenta and cyan neon colors</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-fuchsia-500"><FaBolt /></span>
              <span>Border glitch effect</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_66; 