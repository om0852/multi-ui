"use client"

import React from 'react';
import Counter_30 from '../_components/Counter_30';

const Example_30: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-yellow-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-yellow-800">Score Multiplier</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-yellow-800">Multiplier Level</h2>
            <Counter_30 
              initialValue={1}
              min={1}
              max={5}
              step={1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Set game score multiplier from 1x to 5x.</p>
            <p>Increase your points with higher multipliers!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_30;
