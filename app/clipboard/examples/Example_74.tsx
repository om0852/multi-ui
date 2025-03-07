"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_74';
import { FaSun, FaMoon, FaBolt, FaAtom, FaArrowRotateRight, FaPalette, FaWaveSquare } from 'react-icons/fa6';

const Example_74: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clipboardExamples = [
    {
      text: "Plasma clipboard",
      onCopy: () => console.log("Copied: Plasma clipboard")
    },
    {
      text: "Energy waves example",
      onCopy: () => console.log("Copied: Energy waves example")
    },
    {
      text: "Electric arc demo",
      onCopy: () => console.log("Copied: Electric arc demo")
    },
    {
      text: "Particle energy button",
      onCopy: () => console.log("Copied: Particle energy button")
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
          <h1 className="text-4xl font-bold mb-4">Plasma Clipboard</h1>
          <p className="text-lg opacity-80">
            An energetic clipboard component featuring plasma waves, electric arcs, and energy particles.
            Hover over the buttons to reveal the plasma animation effect.
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
          <h2 className="text-2xl font-bold mb-4">Plasma Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-purple-500"><FaWaveSquare /></span>
              <span>Pulsing plasma waves</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-400"><FaBolt /></span>
              <span>Electric arc animations</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-500"><FaArrowRotateRight /></span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-400"><FaPalette /></span>
              <span>Purple energy color scheme</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-500"><FaAtom /></span>
              <span>Flying energy particles</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_74; 