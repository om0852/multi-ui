"use client";

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_52';

const Example_52: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for better glitch visibility

  const clipboardExamples = [
    {
      text: "CYBERPUNK",
      onCopy: () => console.log("CYBERPUNK copied!")
    },
    {
      text: "GLITCH.EXE",
      onCopy: () => console.log("GLITCH.EXE copied!")
    },
    {
      text: "ERROR_404",
      onCopy: () => console.log("ERROR_404 copied!")
    },
    {
      text: "SYSTEM_FAILURE",
      onCopy: () => console.log("SYSTEM_FAILURE copied!")
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
            Cyberpunk Glitch Clipboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Futuristic clipboard with text distortion and slice animations.
          </p>
        </div>

        {/* Examples */}
        <div className="grid grid-cols-2 gap-8">
          {clipboardExamples.map((example, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Glitch {index + 1}
              </h2>
              <Clipboard
                text={example.text}
                onCopy={example.onCopy}
              />
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="mt-12 p-6 bg-black rounded-lg border border-red-500/20">
          <h2 className="text-lg font-semibold text-red-500 mb-4">
            Cyberpunk Glitch Features
          </h2>
          <ul className="space-y-2 text-cyan-400">
            <li className="flex items-center">
              <span className="mr-2">🔮</span>
              Text distortion effects
            </li>
            <li className="flex items-center">
              <span className="mr-2">📺</span>
              RGB slice animations
            </li>
            <li className="flex items-center">
              <span className="mr-2">⚡</span>
              Random glitch timing
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔄</span>
              Rotating icon animation
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎨</span>
              Red and cyan color scheme
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_52; 