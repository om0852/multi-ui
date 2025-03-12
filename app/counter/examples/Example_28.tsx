"use client"

import React from 'react';
import Counter_28 from '../_components/Counter_28';

const Example_28: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-emerald-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-emerald-800">Stock Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-emerald-800">Inventory Units</h2>
            <Counter_28 
              initialValue={100}
              min={0}
              max={1000}
              step={10}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Track inventory levels in batches of 10 units.</p>
            <p>Efficient stock management for warehouse operations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_28;


