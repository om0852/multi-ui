"use client"

import React, { useState } from 'react';
import ColorPicker_10 from '../_components/ColorPicker_10';

export default function Example_10() {
  const [selectedColor, setSelectedColor] = useState('#14b8a6');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen p-3 sm:p-4 md:p-6 transition-colors duration-300 ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">Color Scheme Generator</h2>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
        <div 
          className="h-24 sm:h-28 md:h-32 rounded-lg mb-3 sm:mb-4 shadow-md transition-all"
          style={{ backgroundColor: selectedColor }}
        />
        <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md">
          <ColorPicker_10 
            onChange={setSelectedColor}
          />
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 480px) {
          .xs\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  );
} 