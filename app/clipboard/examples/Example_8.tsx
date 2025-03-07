"use client";

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_8';

const Example_8: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const clipboardExamples = [
    {
      text: "Crystal Copy",
      onCopy: () => console.log("Crystal clear copy!")
    },
    {
      text: "Prismatic Text",
      onCopy: () => console.log("Prismatic effect activated!")
    },
    {
      text: "Refract.copy()",
      onCopy: () => console.log("Refracting content...")
    },
    {
      text: "Crystalline Data",
      onCopy: () => console.log("Data crystallized!")
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
            Crystal Clipboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Crystalline interface with light refraction and shimmer effects.
          </p>
        </div>

        {/* Examples */}
        <div className="grid grid-cols-2 gap-8">
          {clipboardExamples.map((example, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Crystal {index + 1}
              </h2>
              <Clipboard
                text={example.text}
                onCopy={example.onCopy}
              />
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="mt-12 p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg border border-blue-200 dark:border-blue-700 shadow-lg">
          <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
            Crystal Features
          </h2>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li className="flex items-center">
              <span className="mr-2">💎</span>
              Crystal facets with shimmer
            </li>
            <li className="flex items-center">
              <span className="mr-2">✨</span>
              Light reflections and refractions
            </li>
            <li className="flex items-center">
              <span className="mr-2">🌈</span>
              Gradient overlays
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔄</span>
              Smooth hover transitions
            </li>
            <li className="flex items-center">
              <span className="mr-2">💫</span>
              Crystalline glow effects
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_8; 