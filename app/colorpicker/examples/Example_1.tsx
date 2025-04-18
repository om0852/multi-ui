"use client"

import React, { useState } from 'react';
import ColorPicker_1 from '../_components/ColorPicker_1';

const Example_1: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('#4A90E2');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Basic Color Picker</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg ${
              darkMode 
                ? 'bg-gray-800 text-white border border-gray-700' 
                : 'bg-white text-gray-900 border border-gray-200'
            } shadow-sm`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">Selected Color</h2>
              <span className="text-sm font-mono">{selectedColor}</span>
            </div>
            <div 
              className="h-24 rounded-lg shadow-inner"
              style={{ backgroundColor: selectedColor }}
            />
          </div>

          <ColorPicker_1
            onChange={setSelectedColor}
          />

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">RGB Values</span>
              <span className="text-sm font-mono">
                {selectedColor.match(/\w\w/g)?.map(hex => parseInt(hex, 16)).join(', ')}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">HEX Value</span>
              <span className="text-sm font-mono">{selectedColor.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_1; 