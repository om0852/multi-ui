"use client"

import React from 'react';
import Counter_51 from '../_components/Counter_51';

const Example_51: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-violet-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-violet-800">Study Timer</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-violet-800">Study Session (min)</h2>
            <Counter_51 
              initialValue={25}
              min={5}
              max={120}
              step={5}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Set study session duration in minutes.</p>
            <p>Focus periods from 5 to 120 minutes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_51;
