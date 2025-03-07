"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_95';
import { FaToggleOn, FaToggleOff, FaSun } from 'react-icons/fa6';

const Example_95: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const clipboardExamples = [
    { text: "Vaporwave clipboard", onCopy: () => console.log("Copied vaporwave text!") },
    { text: "Retro grid effect", onCopy: () => console.log("Copied grid text!") },
    { text: "Synthwave demo", onCopy: () => console.log("Copied synthwave text!") },
    { text: "Aesthetic interface", onCopy: () => console.log("Copied aesthetic text!") },
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
            <FaSun className="mr-2 text-pink-500" />
            Vaporwave Clipboard
          </h1>
          <p className="text-lg opacity-80">
            A retro-futuristic clipboard with grid perspective and neon sun effects
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
          <h2 className="text-2xl font-bold mb-4">Vaporwave Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              <span>Retro grid perspective</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              <span>Neon sun background</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              <span>Pink & cyan color scheme</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              <span>Text shadow effects</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_95; 