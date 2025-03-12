"use client"

import React from 'react';
import Counter_65 from '../_components/Counter_65';

const Example_65: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-indigo-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-indigo-800">Height Adjuster</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-indigo-800">Height (cm)</h2>
            <Counter_65 
              initialValue={170}
              min={100}
              max={220}
              step={1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Set height in centimeters.</p>
            <p>Range from 100cm to 220cm.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_65;
