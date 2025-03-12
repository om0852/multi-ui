"use client"

import React from 'react';
import Counter_46 from '../_components/Counter_46';

const Example_46: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-blue-gray-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-gray-800">Humidity Control</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-blue-gray-800">Humidity (%)</h2>
            <Counter_46 
              initialValue={45}
              min={20}
              max={80}
              step={1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Set ideal humidity level for your space.</p>
            <p>Maintain comfort between 20% and 80%.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_46;
