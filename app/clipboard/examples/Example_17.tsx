"use client";

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_17';

const Example_17: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for better gradient visibility

  const clipboardExamples = [
    {
      text: "Gradient outline",
      onCopy: () => console.log("Outline copied!")
    },
    {
      text: "Smooth transitions",
      onCopy: () => console.log("Transitions copied!")
    },
    {
      text: "Clean borders",
      onCopy: () => console.log("Borders copied!")
    },
    {
      text: "Modern design",
      onCopy: () => console.log("Design copied!")
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
            Outline Clipboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Modern clipboard with gradient outlines and smooth transitions.
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
        <div className="mt-12 p-6 bg-gradient-to-br from-indigo-900 to-blue-800 rounded-lg border border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
          <h2 className="text-lg font-semibold text-indigo-100 mb-4">
            Outline Features
          </h2>
          <ul className="space-y-2 text-indigo-200">
            <li className="flex items-center">
              <span className="mr-2">🎨</span>
              Gradient border effects
            </li>
            <li className="flex items-center">
              <span className="mr-2">✨</span>
              Smooth color transitions
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔲</span>
              Clean outline design
            </li>
            <li className="flex items-center">
              <span className="mr-2">👆</span>
              Interactive hover states
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎯</span>
              Minimalist aesthetics
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_17; 