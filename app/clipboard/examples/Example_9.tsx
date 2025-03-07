"use client";

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_9';

const Example_9: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for better plasma effect visibility

  const clipboardExamples = [
    {
      text: "PLASMA::COPY",
      onCopy: () => console.log("Plasma transfer initiated!")
    },
    {
      text: "ENERGY.SYNC()",
      onCopy: () => console.log("Energy synchronized!")
    },
    {
      text: "ATOM.TRANSFER",
      onCopy: () => console.log("Atomic transfer complete!")
    },
    {
      text: "QUANTUM.COPY",
      onCopy: () => console.log("Quantum state copied!")
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
            Plasma Clipboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            High-energy clipboard with atomic animations and plasma effects.
          </p>
        </div>

        {/* Examples */}
        <div className="grid grid-cols-2 gap-8">
          {clipboardExamples.map((example, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Energy State {index + 1}
              </h2>
              <Clipboard
                text={example.text}
                onCopy={example.onCopy}
              />
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="mt-12 p-6 bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg border border-purple-600 shadow-[0_0_15px_rgba(147,51,234,0.3)]">
          <h2 className="text-lg font-semibold text-purple-100 mb-4">
            Plasma Features
          </h2>
          <ul className="space-y-2 text-purple-200">
            <li className="flex items-center">
              <span className="mr-2">⚡</span>
              Energy field with pulsing rings
            </li>
            <li className="flex items-center">
              <span className="mr-2">⚛️</span>
              Atomic core with orbiting electrons
            </li>
            <li className="flex items-center">
              <span className="mr-2">✨</span>
              Plasma glow effects
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎨</span>
              Color transitions on hover
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔄</span>
              Smooth energy animations
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_9; 