"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_91';
import { FaToggleOn, FaToggleOff, FaTerminal } from 'react-icons/fa6';

const Example_91: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const clipboardExamples = [
    { text: "Matrix clipboard", onCopy: () => console.log("Copied matrix text!") },
    { text: "Digital rain effect", onCopy: () => console.log("Copied digital rain text!") },
    { text: "Cyber code example", onCopy: () => console.log("Copied cyber code!") },
    { text: "System override", onCopy: () => console.log("Copied system override!") },
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
            <FaTerminal className="mr-2 text-green-500" />
            Matrix Digital Rain Clipboard
          </h1>
          <p className="text-lg opacity-80">
            A cyberpunk clipboard with falling digital characters and green glow effects
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
          <h2 className="text-2xl font-bold mb-4">Matrix Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Falling digital rain characters</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Japanese-inspired symbols</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Neon green color scheme</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Cyberpunk text glow effects</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_91; 