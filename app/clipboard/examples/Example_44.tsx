"use client";

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_44';

const Example_44: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for better lightning visibility

  const clipboardExamples = [
    {
      text: "Lightning bolts",
      onCopy: () => console.log("Lightning bolts copied!")
    },
    {
      text: "Electric effect",
      onCopy: () => console.log("Electric effect copied!")
    },
    {
      text: "Energy strike",
      onCopy: () => console.log("Energy strike copied!")
    },
    {
      text: "Power surge",
      onCopy: () => console.log("Power surge copied!")
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
            Lightning Clipboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Modern clipboard with electric bolt animations and glowing effects.
          </p>
        </div>

        {/* Examples */}
        <div className="grid grid-cols-2 gap-8">
          {clipboardExamples.map((example, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Style {index + 1}
              </h2>
              <Clipboard
                text={example.text}
                onCopy={example.onCopy}
              />
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="mt-12 p-6 bg-black/20 backdrop-blur-sm rounded-lg border border-yellow-500/20">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-yellow-400 mb-4">
            Lightning Features
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-center">
              <span className="mr-2">⚡</span>
              Electric bolt animations
            </li>
            <li className="flex items-center">
              <span className="mr-2">✨</span>
              Glowing light effects
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔄</span>
              Rotating icon animation
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎨</span>
              Golden yellow theme
            </li>
            <li className="flex items-center">
              <span className="mr-2">💫</span>
              Dynamic strike patterns
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_44; 