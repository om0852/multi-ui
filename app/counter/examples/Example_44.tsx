"use client"

import React from 'react';
import Counter_44 from '../_components/Counter_44';

const Example_44: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-green-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-green-800">pH Level</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-green-800">Target pH</h2>
            <Counter_44 
              initialValue={7}
              min={0}
              max={14}
              step={0.1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Set target pH level with 0.1 precision.</p>
            <p>Monitor pH from acidic to alkaline (0-14).</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_44;
