"use client"

import React from 'react';
import Counter_23 from '../_components/Counter_23';

const Example_23: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-green-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-green-800">Kitchen Timer</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-green-800">Cooking Minutes</h2>
            <Counter_23 
              initialValue={5}
              min={1}
              max={120}
              step={1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Set your cooking time in minutes with this kitchen counter.</p>
            <p>Ideal for timing your recipes and meal preparation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_23; 