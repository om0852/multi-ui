"use client";

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_6';

const Example_6: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for better neon effect visibility

  const clipboardExamples = [
    {
      text: "COPY-2077",
      onCopy: () => console.log("Cyberpunk style copied!")
    },
    {
      text: "NEON::DATA",
      onCopy: () => console.log("Neon data copied!")
    },
    {
      text: "MATRIX.init()",
      onCopy: () => console.log("Matrix initialized!")
    },
    {
      text: "SYS.COPY()",
      onCopy: () => console.log("System copy executed!")
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
            Cyberpunk Clipboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Futuristic clipboard components with neon effects and animations.
          </p>
        </div>

        {/* Examples */}
        <div className="grid grid-cols-2 gap-8">
          {clipboardExamples.map((example, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Variant {index + 1}
              </h2>
              <Clipboard
                text={example.text}
                onCopy={example.onCopy}
              />
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="mt-12 p-6 bg-gray-800 rounded-lg border border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]">
          <h2 className="text-lg font-semibold text-white mb-4">
            Cyberpunk Features
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center">
              <span className="mr-2">💫</span>
              Neon glow effects
            </li>
            <li className="flex items-center">
              <span className="mr-2">〽️</span>
              Animated neon lines
            </li>
            <li className="flex items-center">
              <span className="mr-2">✨</span>
              Pulsing text and icons
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔄</span>
              Interactive hover states
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎨</span>
              Cyberpunk-themed styling
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_6; 