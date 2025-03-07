"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_68';
import { FaSun, FaMoon, FaFolderOpen, FaShapes, FaArrowRotateRight, FaPalette, FaPaperPlane } from 'react-icons/fa6';

const Example_68: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clipboardExamples = [
    {
      text: "Origami clipboard",
      onCopy: () => console.log("Copied: Origami clipboard")
    },
    {
      text: "Folding shapes example",
      onCopy: () => console.log("Copied: Folding shapes example")
    },
    {
      text: "Paper animation demo",
      onCopy: () => console.log("Copied: Paper animation demo")
    },
    {
      text: "Geometric copy button",
      onCopy: () => console.log("Copied: Geometric copy button")
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
          <h1 className="text-4xl font-bold mb-4">Origami Clipboard</h1>
          <p className="text-lg opacity-80">
            An elegant clipboard component featuring folding triangles and transforming geometric shapes.
            Hover over the buttons to reveal the origami animation effect.
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
          <h2 className="text-2xl font-bold mb-4">Origami Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-sky-500"><FaFolderOpen /></span>
              <span>Folding triangle animations</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-sky-400"><FaShapes /></span>
              <span>Transforming geometric shapes</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-sky-500"><FaArrowRotateRight /></span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-sky-400"><FaPalette /></span>
              <span>Sky blue color scheme</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-sky-500"><FaPaperPlane /></span>
              <span>Paper-like folding effects</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_68; 