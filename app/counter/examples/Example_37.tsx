"use client"

import React from 'react';
import Counter_37 from '../_components/Counter_37';

const Example_37: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-violet-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-violet-800">Temperature Threshold</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-violet-800">Alert Threshold (°C)</h2>
            <Counter_37 
              initialValue={25}
              min={-20}
              max={50}
              step={1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Set temperature alert threshold.</p>
            <p>Monitor temperatures from -20°C to 50°C.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_37;
