"use client"

import React from 'react';
import Counter_61 from '../_components/Counter_61';

const Example_61: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-amber-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-amber-800">Temperature Range</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-amber-800">Range (°F)</h2>
            <Counter_61 
              initialValue={72}
              min={50}
              max={90}
              step={1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Set comfortable temperature range.</p>
            <p>Adjust from 50°F to 90°F for optimal comfort.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_61;
