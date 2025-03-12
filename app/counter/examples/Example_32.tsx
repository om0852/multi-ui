"use client"

import React from 'react';
import Counter_32 from '../_components/Counter_32';

const Example_32: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-amber-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-amber-800">Brightness Control</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-amber-800">Screen Brightness</h2>
            <Counter_32 
              initialValue={50}
              min={0}
              max={100}
              step={5}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Adjust screen brightness in 5% increments.</p>
            <p>Find your perfect viewing comfort level.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_32;
