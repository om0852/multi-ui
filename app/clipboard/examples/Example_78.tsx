"use client"

import React, { useState } from 'react';
import Clipboard from '../tsx/Clipboard_78';
import { FaSun, FaMoon, FaDiagramProject, FaCircleDot, FaArrowRotateRight, FaPalette, FaNetworkWired } from 'react-icons/fa6';

const Example_78: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clipboardExamples = [
    {
      text: "Voronoi clipboard",
      onCopy: () => console.log("Copied: Voronoi clipboard")
    },
    {
      text: "Network diagram example",
      onCopy: () => console.log("Copied: Network diagram example")
    },
    {
      text: "Cell pattern demo",
      onCopy: () => console.log("Copied: Cell pattern demo")
    },
    {
      text: "Connected nodes button",
      onCopy: () => console.log("Copied: Connected nodes button")
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
          <h1 className="text-4xl font-bold mb-4">Voronoi Diagram Clipboard</h1>
          <p className="text-lg opacity-80">
            A network-inspired clipboard component featuring Voronoi cells, glowing nodes, and connecting edges.
            Hover over the buttons to reveal the diagram animation effect.
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
          <h2 className="text-2xl font-bold mb-4">Voronoi Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-sky-500"><FaDiagramProject /></span>
              <span>Animated Voronoi cells</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-sky-400"><FaCircleDot /></span>
              <span>Glowing network nodes</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-sky-500"><FaArrowRotateRight /></span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-sky-400"><FaPalette /></span>
              <span>Sky blue network color scheme</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-sky-500"><FaNetworkWired /></span>
              <span>Connecting edge animations</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_78; 