"use client"

import React, { useState } from 'react';
import ColorPicker_3 from '../tsx/ColorPicker_3';

export default function Example_3() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`p-4 ${darkMode ? "dark" : ""}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Material Design Color Picker</h2>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="max-w-2xl mx-auto">
        <ColorPicker_3 
          initialColor="#2196f3"
          className="w-full"
        />
      </div>
    </div>
  );
} 