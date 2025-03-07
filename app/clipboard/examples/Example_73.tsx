"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_73';
import { FaSun, FaMoon, FaTableCells, FaTableCellsLarge, FaArrowRotateRight, FaPalette, FaCircleDot } from 'react-icons/fa6';

const Example_73: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clipboardExamples = [
    {
      text: "Grid clipboard",
      onCopy: () => console.log("Copied: Grid clipboard")
    },
    {
      text: "Scanning lines example",
      onCopy: () => console.log("Copied: Scanning lines example")
    },
    {
      text: "Intersection points demo",
      onCopy: () => console.log("Copied: Intersection points demo")
    },
    {
      text: "Tech grid button",
      onCopy: () => console.log("Copied: Tech grid button")
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
          <h1 className="text-4xl font-bold mb-4">Grid Clipboard</h1>
          <p className="text-lg opacity-80">
            A technical clipboard component featuring scanning grid lines and pulsing intersection points.
            Hover over the buttons to reveal the grid animation effect.
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
          <h2 className="text-2xl font-bold mb-4">Grid Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-cyan-500"><FaTableCells /></span>
              <span>Scanning grid line animations</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-cyan-400"><FaCircleDot /></span>
              <span>Pulsing intersection points</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-cyan-500"><FaArrowRotateRight /></span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-cyan-400"><FaPalette /></span>
              <span>Cyan color scheme</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-cyan-500"><FaTableCellsLarge /></span>
              <span>Technical grid pattern</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_73; 