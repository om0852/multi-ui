"use client";

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_10';

const Example_10: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for better matrix effect visibility

  const clipboardExamples = [
    {
      text: "MATRIX.COPY",
      onCopy: () => console.log("Entering the Matrix...")
    },
    {
      text: "SYSTEM.HACK()",
      onCopy: () => console.log("System breach initiated!")
    },
    {
      text: "DATA.STREAM",
      onCopy: () => console.log("Data stream intercepted!")
    },
    {
      text: "CODE.INJECT",
      onCopy: () => console.log("Code injection complete!")
    }
  ];

  return (
    <div className={`p-8 min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
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
            Matrix Clipboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Digital rain interface with matrix-style animations and effects.
          </p>
        </div>

        {/* Examples */}
        <div className="grid grid-cols-2 gap-8">
          {clipboardExamples.map((example, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                System {index + 1}
              </h2>
              <Clipboard
                text={example.text}
                onCopy={example.onCopy}
              />
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="mt-12 p-6 bg-gradient-to-br from-green-900 to-green-800 rounded-lg border border-green-600 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
          <h2 className="text-lg font-semibold text-green-100 mb-4">
            Matrix Features
          </h2>
          <ul className="space-y-2 text-green-200">
            <li className="flex items-center">
              <span className="mr-2">🌧️</span>
              Digital rain animation
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔲</span>
              Grid overlay with pulsing cells
            </li>
            <li className="flex items-center">
              <span className="mr-2">📝</span>
              Matrix-style characters
            </li>
            <li className="flex items-center">
              <span className="mr-2">✨</span>
              Glowing neon effects
            </li>
            <li className="flex items-center">
              <span className="mr-2">💻</span>
              Monospace font styling
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_10; 