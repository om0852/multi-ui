"use client";

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_33';

const Example_33: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for better glitch effect visibility

  const clipboardExamples = [
    {
      text: "Glitch effect",
      onCopy: () => console.log("Glitch effect copied!")
    },
    {
      text: "Digital distortion",
      onCopy: () => console.log("Digital distortion copied!")
    },
    {
      text: "Error animation",
      onCopy: () => console.log("Error animation copied!")
    },
    {
      text: "Cyberpunk style",
      onCopy: () => console.log("Cyberpunk style copied!")
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
            Glitch Clipboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Modern clipboard with digital distortion and glitch animations.
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
        <div className="mt-12 p-6 bg-black/20 backdrop-blur-sm rounded-lg border border-cyan-500/20">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-cyan-400 mb-4">
            Glitch Features
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-center">
              <span className="mr-2">🔮</span>
              Digital distortion effects
            </li>
            <li className="flex items-center">
              <span className="mr-2">⚡</span>
              Glitchy layer animations
            </li>
            <li className="flex items-center">
              <span className="mr-2">📺</span>
              Screen shake effect
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎭</span>
              Color blend modes
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎯</span>
              Cyberpunk aesthetic
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_33; 