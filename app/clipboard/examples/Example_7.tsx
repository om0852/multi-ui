"use client";

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_7';

const Example_7: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for better holographic effect visibility

  const clipboardExamples = [
    {
      text: "HOLO::COPY",
      onCopy: () => console.log("Holographic copy initiated!")
    },
    {
      text: "DATA.TRANSFER()",
      onCopy: () => console.log("Data transfer complete!")
    },
    {
      text: "SCAN.SEQUENCE",
      onCopy: () => console.log("Scan sequence activated!")
    },
    {
      text: "GRID.SYNC()",
      onCopy: () => console.log("Grid synchronization complete!")
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
            Holographic Clipboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Advanced holographic interface with glitch effects and data visualization.
          </p>
        </div>

        {/* Examples */}
        <div className="grid grid-cols-2 gap-8">
          {clipboardExamples.map((example, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Interface {index + 1}
              </h2>
              <Clipboard
                text={example.text}
                onCopy={example.onCopy}
              />
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="mt-12 p-6 bg-gray-800 rounded-lg border border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
          <h2 className="text-lg font-semibold text-white mb-4">
            Holographic Features
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center">
              <span className="mr-2">📺</span>
              Scan line effect
            </li>
            <li className="flex items-center">
              <span className="mr-2">⚡</span>
              Glitch animations
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔲</span>
              Data grid with pulsing cells
            </li>
            <li className="flex items-center">
              <span className="mr-2">✨</span>
              Text flicker effect
            </li>
            <li className="flex items-center">
              <span className="mr-2">💫</span>
              Holographic glow and hover states
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_7; 