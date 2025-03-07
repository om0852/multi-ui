"use client";

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_1';

const Example_1: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const sampleTexts = [
    { text: "Hello, World!", className: "mb-4" },
    { text: "npm install @awesome/package", className: "font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded mb-4" },
    { text: "https://example.com/api/v1", className: "text-blue-600 dark:text-blue-400 mb-4" },
    { text: "Lorem ipsum dolor sit amet", className: "italic mb-4" },
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
            Clipboard Component Examples
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Click the copy button to copy text to clipboard. Each example showcases different styling options.
          </p>
        </div>

        {/* Examples */}
        <div className="space-y-8">
          {/* Basic text */}
          <div className="space-y-2">
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">Basic Text</h2>
            <Clipboard text={sampleTexts[0].text} className={sampleTexts[0].className} />
          </div>

          {/* Code snippet */}
          <div className="space-y-2">
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">Code Snippet</h2>
            <Clipboard text={sampleTexts[1].text} className={sampleTexts[1].className} />
          </div>

          {/* URL */}
          <div className="space-y-2">
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">URL</h2>
            <Clipboard text={sampleTexts[2].text} className={sampleTexts[2].className} />
          </div>

          {/* Styled text */}
          <div className="space-y-2">
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">Styled Text</h2>
            <Clipboard text={sampleTexts[3].text} className={sampleTexts[3].className} />
          </div>
        </div>

        {/* Features List */}
        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Component Features
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-center">
              <span className="mr-2">✨</span>
              Smooth text fade-in animation
            </li>
            <li className="flex items-center">
              <span className="mr-2">👆</span>
              Interactive button with hover and tap effects
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              Visual feedback on successful copy
            </li>
            <li className="flex items-center">
              <span className="mr-2">🌓</span>
              Dark mode support
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎨</span>
              Customizable styling through className
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_1; 