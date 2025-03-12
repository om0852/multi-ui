"use client"

import React from 'react';
import Counter_39 from '../_components/Counter_39';

const Example_39: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-stone-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-stone-800">Distance Setting</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-stone-800">Distance (km)</h2>
            <Counter_39 
              initialValue={5}
              min={1}
              max={100}
              step={1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Set target distance in kilometers.</p>
            <p>Plan routes from 1 to 100 kilometers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_39;
