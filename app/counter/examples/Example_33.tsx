"use client"

import React from 'react';
import Counter_33 from '../_components/Counter_33';

const Example_33: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-lime-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-lime-800">Zoom Control</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-lime-800">Zoom Level (%)</h2>
            <Counter_33 
              initialValue={100}
              min={25}
              max={400}
              step={25}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Adjust zoom level from 25% to 400%.</p>
            <p>Perfect for document and image viewing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_33;
