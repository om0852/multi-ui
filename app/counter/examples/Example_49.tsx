"use client"

import React from 'react';
import Counter_49 from '../_components/Counter_49';

const Example_49: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-indigo-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-indigo-800">Step Goal</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-indigo-800">Daily Steps</h2>
            <Counter_49 
              initialValue={10000}
              min={1000}
              max={30000}
              step={1000}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Set your daily step goal in 1,000 step increments.</p>
            <p>Stay active with goals from 1,000 to 30,000 steps.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_49;
