"use client"

import React, { useState } from 'react';
import ColorPicker_12 from '../_components/ColorPicker_12';

export default function Example_12() {
  const [selectedColor, setSelectedColor] = useState('#a855f7');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`p-4 ${darkMode ? "dark" : ""}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Temperature Color Picker</h2>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="max-w-2xl mx-auto">
        <div 
          className="h-32 rounded-lg mb-4"
          style={{ backgroundColor: selectedColor }}
        />
        <ColorPicker_12 
          onChange={setSelectedColor}
        />
      </div>
    </div>
  );
} 