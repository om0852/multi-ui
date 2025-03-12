"use client"

import React from 'react';
import Counter_69 from '../_components/Counter_69';

const Example_69: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-yellow-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-yellow-800">Brightness Control</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-yellow-800">Brightness (%)</h2>
            <Counter_69 
              initialValue={50}
              min={0}
              max={100}
              step={5}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Adjust screen brightness level.</p>
            <p>Range from 0% to 100% in 5% increments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_69;
