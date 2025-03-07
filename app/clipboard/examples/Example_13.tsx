"use client";

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_13';

const Example_13: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for better quantum effects

  const clipboardExamples = [
    {
      text: "QUANTUM.COPY",
      onCopy: () => console.log("Quantum state copied!")
    },
    {
      text: "WAVE.FUNCTION()",
      onCopy: () => console.log("Wave function collapsed!")
    },
    {
      text: "PARTICLE.SYNC",
      onCopy: () => console.log("Particles synchronized!")
    },
    {
      text: "ENTANGLE.DATA",
      onCopy: () => console.log("Data entanglement complete!")
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
            Quantum Clipboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Advanced clipboard with quantum particle animations and wave functions.
          </p>
        </div>

        {/* Examples */}
        <div className="grid grid-cols-2 gap-8">
          {clipboardExamples.map((example, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                State {index + 1}
              </h2>
              <Clipboard
                text={example.text}
                onCopy={example.onCopy}
              />
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="mt-12 p-6 bg-gradient-to-br from-cyan-900 to-blue-800 rounded-lg border border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          <h2 className="text-lg font-semibold text-cyan-100 mb-4">
            Quantum Features
          </h2>
          <ul className="space-y-2 text-cyan-200">
            <li className="flex items-center">
              <span className="mr-2">⚛️</span>
              Quantum particle animations
            </li>
            <li className="flex items-center">
              <span className="mr-2">〰️</span>
              Wave function effects
            </li>
            <li className="flex items-center">
              <span className="mr-2">🌌</span>
              Probability cloud display
            </li>
            <li className="flex items-center">
              <span className="mr-2">✨</span>
              Energy state transitions
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎨</span>
              Quantum-inspired color scheme
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_13; 