"use client";

import React, { useState } from 'react';
import ClipboardButton from '../_components/Clipboard_4';

const Example_4: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const buttonExamples = [
    {
      text: "Click for magic ✨",
      className: "mb-4"
    },
    {
      text: "Glowing effect",
      className: "from-green-500 via-emerald-500 to-teal-500 mb-4"
    },
    {
      text: "Custom size",
      className: "from-orange-500 via-red-500 to-pink-500 w-48 mb-4"
    },
    {
      text: "Extra glow",
      className: "from-violet-500 via-purple-500 to-fuchsia-500 shadow-xl mb-4"
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
            Glowing Clipboard Buttons
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Vibrant, animated clipboard buttons with gradient and glow effects.
          </p>
        </div>

        {/* Examples */}
        <div className="grid grid-cols-2 gap-8">
          {buttonExamples.map((example, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Style {index + 1}
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
            Visual Features
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-center">
              <span className="mr-2">🌈</span>
              Animated gradient backgrounds
            </li>
            <li className="flex items-center">
              <span className="mr-2">✨</span>
              Pulsing glow effect
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔄</span>
              Scale animations on interaction
            </li>
            <li className="flex items-center">
              <span className="mr-2">📝</span>
              Smooth text transitions
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎨</span>
              Modern, eye-catching design
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_4; 