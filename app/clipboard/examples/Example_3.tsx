"use client";

import React, { useState } from 'react';
import ClipboardButton from '../_components/Clipboard_3';

const Example_3: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const buttonExamples = [
    {
      text: "Copy this text",
      className: "mb-4"
    },
    {
      text: "npm install @modern/ui",
      className: "font-mono mb-4"
    },
    {
      text: "With custom width",
      className: "w-48 mb-4"
    },
    {
      text: "Elevated style",
      className: "shadow-md hover:shadow-lg mb-4"
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
            Minimalist Clipboard Buttons
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Clean and modern clipboard buttons with smooth animations.
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
            Design Features
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-center">
              <span className="mr-2">🎯</span>
              Clean, modern interface
            </li>
            <li className="flex items-center">
              <span className="mr-2">🌓</span>
              Dark mode support
            </li>
            <li className="flex items-center">
              <span className="mr-2">✨</span>
              Smooth icon transitions
            </li>
            <li className="flex items-center">
              <span className="mr-2">👆</span>
              Subtle hover and tap effects
            </li>
            <li className="flex items-center">
              <span className="mr-2">📋</span>
              Elegant copy feedback
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_3; 