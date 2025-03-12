"use client"

import React from 'react';
import Counter_24 from '../_components/Counter_24';

const Example_24: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-red-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-red-800">Temperature Control</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-red-800">Temperature (°C)</h2>
            <Counter_24 
              initialValue={20}
              min={16}
              max={30}
              step={0.5}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Adjust room temperature with precision control.</p>
            <p>Half-degree increments for optimal comfort settings.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_24; 