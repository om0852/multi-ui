"use client"

import React from 'react';
import Counter_41 from '../_components/Counter_41';

const Example_41: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-pink-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-pink-800">Sleep Timer</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-pink-800">Sleep Duration (hrs)</h2>
            <Counter_41 
              initialValue={8}
              min={0.5}
              max={12}
              step={0.5}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Set sleep timer duration in hours.</p>
            <p>Plan your rest from 30 minutes to 12 hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_41;
