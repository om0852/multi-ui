"use client"

import React from 'react';
import Counter_31 from '../_components/Counter_31';

const Example_31: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-rose-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-rose-800">Weight Scale</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-rose-800">Weight (kg)</h2>
            <Counter_31 
              initialValue={50}
              min={0}
              max={200}
              step={0.1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Precise weight measurement with 0.1kg increments.</p>
            <p>Track weight from 0 to 200 kilograms.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_31;
