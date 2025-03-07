"use client";

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_19';

const Example_19: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for better glass effect

  const clipboardExamples = [
    {
      text: "Glass effect",
      onCopy: () => console.log("Glass effect copied!")
    },
    {
      text: "Frosted surface",
      onCopy: () => console.log("Frosted surface copied!")
    },
    {
      text: "Transparent look",
      onCopy: () => console.log("Transparent look copied!")
    },
    {
      text: "Modern glass",
      onCopy: () => console.log("Modern glass copied!")
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
            Glass Clipboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Modern clipboard with frosted glass effect and subtle transparency.
          </p>
        </div>

        {/* Examples */}
        <div className="grid grid-cols-2 gap-8">
          {clipboardExamples.map((example, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Glass {index + 1}
              </h2>
              <Clipboard
                text={example.text}
                onCopy={example.onCopy}
              />
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="mt-12 p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-lg border border-white/20 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-white/90 mb-4">
            Glass Features
          </h2>
          <ul className="space-y-2 text-white/80">
            <li className="flex items-center">
              <span className="mr-2">🪟</span>
              Frosted glass effect
            </li>
            <li className="flex items-center">
              <span className="mr-2">✨</span>
              Subtle transparency
            </li>
            <li className="flex items-center">
              <span className="mr-2">💫</span>
              Smooth backdrop blur
            </li>
            <li className="flex items-center">
              <span className="mr-2">👆</span>
              Interactive states
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎨</span>
              Modern glass aesthetics
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_19; 