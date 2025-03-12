"use client"

import React from 'react';
import Counter_34 from '../_components/Counter_34';

const Example_34: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-teal-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-teal-800">Font Size</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-teal-800">Text Size (px)</h2>
            <Counter_34 
              initialValue={16}
              min={8}
              max={72}
              step={2}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Adjust text size from 8px to 72px.</p>
            <p>Find the perfect reading size in 2px increments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_34;
