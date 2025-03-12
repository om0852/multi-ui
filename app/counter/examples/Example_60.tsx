"use client"

import React from 'react';
import Counter_60 from '../_components/Counter_60';

const Example_60: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-red-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-red-800">Power Level</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-red-800">Output (watts)</h2>
            <Counter_60 
              initialValue={500}
              min={100}
              max={2000}
              step={100}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Adjust power output in watts.</p>
            <p>Control from 100W to 2000W in 100W steps.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_60;
