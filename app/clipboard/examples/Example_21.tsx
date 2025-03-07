"use client";

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_21';

const Example_21: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false); // Default to light mode for material design

  const clipboardExamples = [
    {
      text: "Material design",
      onCopy: () => console.log("Material design copied!")
    },
    {
      text: "Ripple effect",
      onCopy: () => console.log("Ripple effect copied!")
    },
    {
      text: "Elevation shadow",
      onCopy: () => console.log("Elevation shadow copied!")
    },
    {
      text: "Modern material",
      onCopy: () => console.log("Modern material copied!")
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
            Material Clipboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Modern clipboard with material design and ripple effects.
          </p>
        </div>

        {/* Examples */}
        <div className="grid grid-cols-2 gap-8">
          {clipboardExamples.map((example, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Material {index + 1}
              </h2>
              <Clipboard
                text={example.text}
                onCopy={example.onCopy}
              />
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="mt-12 p-6 bg-gradient-to-br from-purple-600 to-purple-500 rounded-lg border border-purple-400 shadow-lg">
          <h2 className="text-lg font-semibold text-white mb-4">
            Material Features
          </h2>
          <ul className="space-y-2 text-white">
            <li className="flex items-center">
              <span className="mr-2">🌊</span>
              Ripple effect feedback
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎭</span>
              Dynamic elevation
            </li>
            <li className="flex items-center">
              <span className="mr-2">✨</span>
              Material surface design
            </li>
            <li className="flex items-center">
              <span className="mr-2">👆</span>
              Interactive states
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎨</span>
              Material color scheme
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_21; 