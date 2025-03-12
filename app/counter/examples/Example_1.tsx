"use client"

import React from 'react';
import Counter_1 from '../_components/Counter_1';

const Example_1: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Basic Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Counter Example</h2>
            <Counter_1 
              initialValue={5}
              min={0}
              max={10}
              step={1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>This counter has a minimum value of 0 and maximum value of 10.</p>
            <p>The counter increments/decrements by 1 with each click.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_1; 