"use client"

import React, { useState } from 'react';
import ColorPicker_2 from '../_components/ColorPicker_2';

const Example_2: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('#FF5F6D');

  return (
    <div className={`min-h-screen p-8 ${true ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-md mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="mb-6">
            <div className="h-32 rounded-lg"
              style={{ 
                background: selectedColor
              }}
            />
          </div>

          <ColorPicker_2
            onChange={setSelectedColor}
          />
        </div>
      </div>
    </div>
  );
};

export default Example_2; 