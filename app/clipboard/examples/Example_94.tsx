"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_94';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa6';

const Example_94: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const clipboardExamples = [
    { text: "Digital glitch clipboard", onCopy: () => console.log("Copied glitch text!") },
    { text: "Distortion effect demo", onCopy: () => console.log("Copied distortion text!") },
    { text: "RGB shift example", onCopy: () => console.log("Copied RGB shift text!") },
    { text: "Corrupted interface", onCopy: () => console.log("Copied corrupted text!") },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleDarkMode}
            className="flex items-center space-x-2 bg-transparent border-none cursor-pointer"
          >
            {darkMode ? (
              <FaToggleOn className="text-2xl text-blue-400" />
            ) : (
              <FaToggleOff className="text-2xl text-gray-400" />
            )}
            <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
          </button>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4h16v16H4z" opacity="0.4" />
              <path d="M3 7h18M7 3v18M13 3v18M3 13h18M3 17h18" strokeWidth="1" stroke="currentColor" />
            </svg>
            Digital Glitch Clipboard
          </h1>
          <p className="text-lg opacity-80">
            A corrupted clipboard with RGB shift effects and distorted animations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {clipboardExamples.map((example, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg transition-all duration-300 hover:shadow-xl`}
            >
              <Clipboard text={example.text} onCopy={example.onCopy} />
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Glitch Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>RGB color shift effects</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Distorted layer animations</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Text corruption effects</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Neon glow highlights</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Multi-colored digital artifacts</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_94; 