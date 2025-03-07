"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_71';
import { FaSun, FaMoon, FaCircleNotch, FaAtom, FaArrowRotateRight, FaPalette, FaCube } from 'react-icons/fa6';

const Example_71: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clipboardExamples = [
    {
      text: "3D tunnel clipboard",
      onCopy: () => console.log("Copied: 3D tunnel clipboard")
    },
    {
      text: "Vortex animation example",
      onCopy: () => console.log("Copied: Vortex animation example")
    },
    {
      text: "Particle effect demo",
      onCopy: () => console.log("Copied: Particle effect demo")
    },
    {
      text: "Depth illusion button",
      onCopy: () => console.log("Copied: Depth illusion button")
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
          <h1 className="text-4xl font-bold mb-4">3D Tunnel Clipboard</h1>
          <p className="text-lg opacity-80">
            An immersive clipboard component featuring a 3D tunnel effect with rotating layers and flying particles.
            Hover over the buttons to reveal the depth animation effect.
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
          <h2 className="text-2xl font-bold mb-4">3D Tunnel Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-pink-500"><FaCircleNotch /></span>
              <span>Rotating tunnel layers</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-pink-400"><FaAtom /></span>
              <span>Flying particle effects</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-pink-500"><FaArrowRotateRight /></span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-pink-400"><FaPalette /></span>
              <span>Pink color scheme</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-pink-500"><FaCube /></span>
              <span>3D perspective depth</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_71; 