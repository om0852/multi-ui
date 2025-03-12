"use client"

import React from 'react';
import Counter_58 from '../_components/Counter_58';

const Example_58: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-blue-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-800">Depth Gauge</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">Depth (meters)</h2>
            <Counter_58 
              initialValue={10}
              min={0}
              max={100}
              step={1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Monitor diving depth in meters.</p>
            <p>Track depths from surface to 100m.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_58;
