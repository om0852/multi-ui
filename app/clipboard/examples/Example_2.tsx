"use client";

import React, { useState } from 'react';
import ClipboardButton from '../_components/Clipboard_2';

const Example_2: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const buttonExamples = [
    {
      text: "Click to copy!",
      className: "bg-gradient-to-r from-blue-500 to-indigo-600 mb-4 w-40"
    },
    {
      text: "Copy with custom gradient",
      className: "bg-gradient-to-r from-purple-500 to-pink-600 mb-4 w-48"
    },
    {
      text: "Hover me!",
      className: "bg-gradient-to-r from-green-500 to-teal-600 mb-4 w-36"
    },
    {
      text: "With shadow effect",
      className: "bg-gradient-to-r from-orange-500 to-red-600 shadow-lg mb-4 w-44"
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
            Animated Clipboard Buttons
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Interactive clipboard buttons with smooth animations and gradient effects.
          </p>
        </div>

        {/* Examples */}
        <div className="grid grid-cols-2 gap-8">
          {buttonExamples.map((example, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Example {index + 1}
              </h2>
              <ClipboardButton
                text={example.text}
                className={example.className}
              />
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Button Features
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-center">
              <span className="mr-2">🎨</span>
              Beautiful gradient backgrounds
            </li>
            <li className="flex items-center">
              <span className="mr-2">✨</span>
              Smooth hover and tap animations
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔄</span>
              Elegant state transitions
            </li>
            <li className="flex items-center">
              <span className="mr-2">📋</span>
              Copy feedback animation
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎯</span>
              Customizable styling
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_2; 