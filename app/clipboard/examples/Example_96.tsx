"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_96';
import { FaToggleOn, FaToggleOff, FaGem } from 'react-icons/fa6';

const Example_96: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const clipboardExamples = [
    { text: "Crystal clipboard", onCopy: () => console.log("Copied crystal text!") },
    { text: "Prismatic effect", onCopy: () => console.log("Copied prismatic text!") },
    { text: "Glass interface", onCopy: () => console.log("Copied glass text!") },
    { text: "Transparent design", onCopy: () => console.log("Copied transparent text!") },
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
            <FaGem className="mr-2 text-blue-300" />
            Crystal Clipboard
          </h1>
          <p className="text-lg opacity-80">
            A transparent clipboard with prismatic facets and light refraction effects
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
          <h2 className="text-2xl font-bold mb-4">Crystal Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="text-blue-300 mr-2">•</span>
              <span>Rotating crystal facets</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-300 mr-2">•</span>
              <span>Light refraction effects</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-300 mr-2">•</span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-300 mr-2">•</span>
              <span>Transparent glass design</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-300 mr-2">•</span>
              <span>Prismatic shine effects</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_96; 