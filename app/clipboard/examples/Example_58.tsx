"use client";

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_58';

const Example_58: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for better cosmic visibility

  const clipboardExamples = [
    {
      text: "COSMIC.SPACE",
      onCopy: () => console.log("COSMIC.SPACE copied!")
    },
    {
      text: "STAR.SYSTEM",
      onCopy: () => console.log("STAR.SYSTEM copied!")
    },
    {
      text: "NEBULA.CLOUD",
      onCopy: () => console.log("NEBULA.CLOUD copied!")
    },
    {
      text: "GALAXY.CLUSTER",
      onCopy: () => console.log("GALAXY.CLUSTER copied!")
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
            Cosmic Clipboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Celestial clipboard with star twinkle animations and nebula effects.
          </p>
        </div>

        {/* Examples */}
        <div className="grid grid-cols-2 gap-8">
          {clipboardExamples.map((example, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Space {index + 1}
              </h2>
              <Clipboard
                text={example.text}
                onCopy={example.onCopy}
              />
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="mt-12 p-6 bg-black/80 backdrop-blur-sm rounded-lg border border-purple-500/20">
          <h2 className="text-lg font-semibold text-purple-400 mb-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
            Cosmic Features
          </h2>
          <ul className="space-y-2 text-indigo-300">
            <li className="flex items-center">
              <span className="mr-2">✨</span>
              Twinkling star animations
            </li>
            <li className="flex items-center">
              <span className="mr-2">🌌</span>
              Rotating nebula effect
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔄</span>
              Rotating icon animation
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎨</span>
              Purple and indigo scheme
            </li>
            <li className="flex items-center">
              <span className="mr-2">💫</span>
              Pulsing cosmic glow
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_58; 