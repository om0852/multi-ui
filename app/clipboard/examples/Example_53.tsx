"use client";

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_53';

const Example_53: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for better hologram visibility

  const clipboardExamples = [
    {
      text: "HOLOGRAM::INIT",
      onCopy: () => console.log("HOLOGRAM::INIT copied!")
    },
    {
      text: "SCAN.COMPLETE",
      onCopy: () => console.log("SCAN.COMPLETE copied!")
    },
    {
      text: "FUTURE.TECH",
      onCopy: () => console.log("FUTURE.TECH copied!")
    },
    {
      text: "SCI-FI.DATA",
      onCopy: () => console.log("SCI-FI.DATA copied!")
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
            Hologram Clipboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Futuristic clipboard with holographic scanlines and flickering effects.
          </p>
        </div>

        {/* Examples */}
        <div className="grid grid-cols-2 gap-8">
          {clipboardExamples.map((example, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Holo {index + 1}
              </h2>
              <Clipboard
                text={example.text}
                onCopy={example.onCopy}
              />
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="mt-12 p-6 bg-black/80 backdrop-blur-sm rounded-lg border border-cyan-500/20">
          <h2 className="text-lg font-semibold text-cyan-400 mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">
            Hologram Features
          </h2>
          <ul className="space-y-2 text-cyan-300">
            <li className="flex items-center">
              <span className="mr-2">📺</span>
              Holographic scanlines
            </li>
            <li className="flex items-center">
              <span className="mr-2">✨</span>
              Flickering light effects
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔄</span>
              Rotating icon animation
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎨</span>
              Cyan and magenta scheme
            </li>
            <li className="flex items-center">
              <span className="mr-2">📱</span>
              Futuristic interface design
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_53; 