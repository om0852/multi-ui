"use client"

import React from 'react';
import Counter_67 from '../_components/Counter_67';

const Example_67: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-rose-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-rose-800">Age Selector</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-rose-800">Age (years)</h2>
            <Counter_67 
              initialValue={25}
              min={0}
              max={120}
              step={1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Select age in years.</p>
            <p>From birth to centenarian.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_67;
