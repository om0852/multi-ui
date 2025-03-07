"use client";

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_57';

const Example_57: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for better circuit visibility

  const clipboardExamples = [
    {
      text: "CIRCUIT.BOARD",
      onCopy: () => console.log("CIRCUIT.BOARD copied!")
    },
    {
      text: "DATA.TRANSFER",
      onCopy: () => console.log("DATA.TRANSFER copied!")
    },
    {
      text: "TECH.CONNECT",
      onCopy: () => console.log("TECH.CONNECT copied!")
    },
    {
      text: "NODE.NETWORK",
      onCopy: () => console.log("NODE.NETWORK copied!")
    }
  ];

  return (
    <div className={`p-8 min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Dark mode toggle */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white
                     hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Circuit Clipboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Futuristic clipboard with glowing circuit paths and node animations.
          </p>
        </div>

        {/* Examples */}
        <div className="grid grid-cols-2 gap-8">
          {clipboardExamples.map((example, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Circuit {index + 1}
              </h2>
              <Clipboard
                text={example.text}
                onCopy={example.onCopy}
              />
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="mt-12 p-6 bg-black/80 backdrop-blur-sm rounded-lg border border-cyan-500/20">
          <h2 className="text-lg font-semibold text-cyan-400 mb-4 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
            Circuit Features
          </h2>
          <ul className="space-y-2 text-cyan-300">
            <li className="flex items-center">
              <span className="mr-2">🔌</span>
              Glowing circuit paths
            </li>
            <li className="flex items-center">
              <span className="mr-2">💡</span>
              Illuminated node points
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔄</span>
              Rotating icon animation
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎨</span>
              Cyan tech color scheme
            </li>
            <li className="flex items-center">
              <span className="mr-2">✨</span>
              Pulsing radial effect
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_57; 