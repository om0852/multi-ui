"use client"

import React from 'react';
import Counter_70 from '../_components/Counter_70';

const Example_70: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-fuchsia-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-fuchsia-800">Zoom Level</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-fuchsia-800">Zoom (%)</h2>
            <Counter_70 
              initialValue={100}
              min={25}
              max={400}
              step={25}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Adjust view magnification level.</p>
            <p>Zoom from 25% to 400% in 25% steps.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_70;
