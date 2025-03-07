"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_77';
import { FaSun, FaMoon, FaSnowflake, FaSquare, FaArrowRotateRight, FaPalette, FaShapes } from 'react-icons/fa6';

const Example_77: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clipboardExamples = [
    {
      text: "Fractal clipboard",
      onCopy: () => console.log("Copied: Fractal clipboard")
    },
    {
      text: "Morphing patterns example",
      onCopy: () => console.log("Copied: Morphing patterns example")
    },
    {
      text: "Geometric shapes demo",
      onCopy: () => console.log("Copied: Geometric shapes demo")
    },
    {
      text: "Recursive design button",
      onCopy: () => console.log("Copied: Recursive design button")
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-800'}`}
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Fractal Clipboard</h1>
          <p className="text-lg opacity-80">
            A mathematical clipboard component featuring morphing fractal patterns and rotating geometric shapes.
            Hover over the buttons to reveal the recursive animation effect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {clipboardExamples.map((example, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              <Clipboard text={example.text} onCopy={example.onCopy} />
            </div>
          ))}
        </div>

        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800/50' : 'bg-white'} shadow-lg mb-8`}>
          <h2 className="text-2xl font-bold mb-4">Fractal Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-purple-500"><FaSnowflake /></span>
              <span>Morphing fractal patterns</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-400"><FaSquare /></span>
              <span>Rotating geometric shapes</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-500"><FaArrowRotateRight /></span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-400"><FaPalette /></span>
              <span>Purple fractal color scheme</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-500"><FaShapes /></span>
              <span>Recursive design elements</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_77; 