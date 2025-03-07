"use client";

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_18';

const Example_18: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for better contrast

  const clipboardExamples = [
    {
      text: "Rounded design",
      onCopy: () => console.log("Design copied!")
    },
    {
      text: "Pill button",
      onCopy: () => console.log("Button copied!")
    },
    {
      text: "Clean style",
      onCopy: () => console.log("Style copied!")
    },
    {
      text: "Modern look",
      onCopy: () => console.log("Look copied!")
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
            Pill Clipboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Modern clipboard with pill-shaped design and smooth transitions.
          </p>
        </div>

        {/* Examples */}
        <div className="grid grid-cols-2 gap-8">
          {clipboardExamples.map((example, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
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
        <div className="mt-12 p-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg border border-gray-600 shadow-[0_0_15px_rgba(75,85,99,0.3)]">
          <h2 className="text-lg font-semibold text-gray-100 mb-4">
            Pill Features
          </h2>
          <ul className="space-y-2 text-gray-200">
            <li className="flex items-center">
              <span className="mr-2">💊</span>
              Pill-shaped container
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔄</span>
              Smooth hover transitions
            </li>
            <li className="flex items-center">
              <span className="mr-2">✨</span>
              Clean monochrome design
            </li>
            <li className="flex items-center">
              <span className="mr-2">👆</span>
              Responsive interactions
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎨</span>
              Modern color scheme
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_18; 