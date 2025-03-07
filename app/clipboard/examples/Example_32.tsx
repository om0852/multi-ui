"use client";

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_32';

const Example_32: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const clipboardExamples = [
    {
      text: "Paper layers",
      onCopy: () => console.log("Paper layers copied!")
    },
    {
      text: "Stacked effect",
      onCopy: () => console.log("Stacked effect copied!")
    },
    {
      text: "Depth design",
      onCopy: () => console.log("Depth design copied!")
    },
    {
      text: "Page style",
      onCopy: () => console.log("Page style copied!")
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
            Paper Clipboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Modern clipboard with layered paper effects and stacked animations.
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
        <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Paper Features
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li className="flex items-center">
              <span className="mr-2">📄</span>
              Stacked paper layers
            </li>
            <li className="flex items-center">
              <span className="mr-2">📚</span>
              Depth animation effects
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔄</span>
              Rotating icon animation
            </li>
            <li className="flex items-center">
              <span className="mr-2">⬇️</span>
              Press-down interaction
            </li>
            <li className="flex items-center">
              <span className="mr-2">✨</span>
              Smooth layer transitions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_32; 