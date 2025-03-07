"use client";

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_43';

const Example_43: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const clipboardExamples = [
    {
      text: "Radar scan",
      onCopy: () => console.log("Radar scan copied!")
    },
    {
      text: "Pulsing rings",
      onCopy: () => console.log("Pulsing rings copied!")
    },
    {
      text: "Scanning effect",
      onCopy: () => console.log("Scanning effect copied!")
    },
    {
      text: "Tech radar",
      onCopy: () => console.log("Tech radar copied!")
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
            Radar Clipboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Modern clipboard with radar scanning animations and pulsing ring effects.
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
        <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-teal-200 dark:border-teal-900">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Radar Features
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li className="flex items-center">
              <span className="mr-2">📡</span>
              Radar scanning animation
            </li>
            <li className="flex items-center">
              <span className="mr-2">⭕</span>
              Pulsing ring effects
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔄</span>
              Rotating icon animation
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎨</span>
              Teal color scheme
            </li>
            <li className="flex items-center">
              <span className="mr-2">✨</span>
              Conic gradient sweep
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_43; 