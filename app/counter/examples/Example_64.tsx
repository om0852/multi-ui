"use client"

import React from 'react';
import Counter_64 from '../_components/Counter_64';

const Example_64: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-green-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-green-800">Price Adjuster</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-green-800">Price ($)</h2>
            <Counter_64 
              initialValue={19.99}
              min={0.99}
              max={99.99}
              step={1.00}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Set product price in dollars.</p>
            <p>Adjust from $0.99 to $99.99.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_64;
