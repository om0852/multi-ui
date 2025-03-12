"use client"

import React from 'react';
import Counter_57 from '../_components/Counter_57';

const Example_57: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-rose-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-rose-800">Speed Limit</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-rose-800">Limit (mph)</h2>
            <Counter_57 
              initialValue={55}
              min={5}
              max={85}
              step={5}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Set speed limits in 5 mph increments.</p>
            <p>Configure limits from 5 to 85 mph.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_57;
