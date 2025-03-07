"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_99';
import { FaToggleOn, FaToggleOff, FaCube } from 'react-icons/fa6';

const Example_99: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const clipboardExamples = [
    { text: "Wireframe clipboard", onCopy: () => console.log("Copied wireframe text!") },
    { text: "Neon grid system", onCopy: () => console.log("Copied grid text!") },
    { text: "Glowing lines", onCopy: () => console.log("Copied lines text!") },
    { text: "Tech interface", onCopy: () => console.log("Copied tech text!") },
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
            <FaCube className="mr-2 text-green-400" />
            Wireframe Clipboard
          </h1>
          <p className="text-lg opacity-80">
            A futuristic clipboard with glowing wireframe lines and animated connection points
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
          <h2 className="text-2xl font-bold mb-4">Wireframe Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <span>Animated grid lines</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <span>Glowing connection points</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <span>3D perspective effects</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <span>Neon tri-color scheme</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-400 mr-2">•</span>
              <span>Dynamic line animations</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_99; 