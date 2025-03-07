"use client";

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_11';

const Example_11: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for better circuit visibility

  const clipboardExamples = [
    {
      text: "CIRCUIT.COPY",
      onCopy: () => console.log("Circuit data copied!")
    },
    {
      text: "DATA.STREAM()",
      onCopy: () => console.log("Data stream initiated!")
    },
    {
      text: "GRID.SYNC",
      onCopy: () => console.log("Grid synchronized!")
    },
    {
      text: "CYBER.TRANSFER",
      onCopy: () => console.log("Cyber transfer complete!")
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
            Circuit Grid Clipboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            High-tech clipboard with circuit patterns and data stream animations.
          </p>
        </div>

        {/* Examples */}
        <div className="grid grid-cols-2 gap-8">
          {clipboardExamples.map((example, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
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
        <div className="mt-12 p-6 bg-gradient-to-br from-pink-900 to-pink-800 rounded-lg border border-pink-600 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
          <h2 className="text-lg font-semibold text-pink-100 mb-4">
            Circuit Features
          </h2>
          <ul className="space-y-2 text-pink-200">
            <li className="flex items-center">
              <span className="mr-2">🔌</span>
              Animated circuit grid patterns
            </li>
            <li className="flex items-center">
              <span className="mr-2">📡</span>
              Data stream flow effects
            </li>
            <li className="flex items-center">
              <span className="mr-2">⚡</span>
              Glitch icon animations
            </li>
            <li className="flex items-center">
              <span className="mr-2">💫</span>
              Pulsing neon highlights
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎨</span>
              Cyberpunk color scheme
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_11; 