"use client";

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_12';

const Example_12: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for better synthwave visibility

  const clipboardExamples = [
    {
      text: "RETRO.COPY",
      onCopy: () => console.log("Retro vibes copied!")
    },
    {
      text: "SYNTH.WAVE()",
      onCopy: () => console.log("Synthwave initiated!")
    },
    {
      text: "SUNSET.GRID",
      onCopy: () => console.log("Grid perspective activated!")
    },
    {
      text: "NEON.DREAMS",
      onCopy: () => console.log("Neon dreams captured!")
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
            Synthwave Clipboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Retro-futuristic clipboard with sunset gradients and perspective grids.
          </p>
        </div>

        {/* Examples */}
        <div className="grid grid-cols-2 gap-8">
          {clipboardExamples.map((example, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Retro {index + 1}
              </h2>
              <Clipboard
                text={example.text}
                onCopy={example.onCopy}
              />
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="mt-12 p-6 bg-gradient-to-br from-purple-900 to-blue-800 rounded-lg border border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
          <h2 className="text-lg font-semibold text-purple-100 mb-4">
            Synthwave Features
          </h2>
          <ul className="space-y-2 text-purple-200">
            <li className="flex items-center">
              <span className="mr-2">🌅</span>
              Retro sunset gradient
            </li>
            <li className="flex items-center">
              <span className="mr-2">🏔️</span>
              Mountain silhouettes
            </li>
            <li className="flex items-center">
              <span className="mr-2">📐</span>
              Perspective grid animation
            </li>
            <li className="flex items-center">
              <span className="mr-2">✨</span>
              Neon glow effects
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎨</span>
              80s color palette
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_12; 