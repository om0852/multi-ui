"use client"

import React from 'react';
import Counter_45 from '../_components/Counter_45';

const Example_45: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-purple-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-purple-800">Grade Calculator</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-purple-800">Score (%)</h2>
            <Counter_45 
              initialValue={85}
              min={0}
              max={100}
              step={0.5}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Calculate grades with 0.5% precision.</p>
            <p>Track academic performance from 0 to 100%.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_45;
