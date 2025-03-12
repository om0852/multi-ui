"use client"

import React from 'react';
import Counter_52 from '../_components/Counter_52';

const Example_52: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-sky-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-sky-800">Wind Speed</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-sky-800">Speed (km/h)</h2>
            <Counter_52 
              initialValue={15}
              min={0}
              max={200}
              step={5}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Monitor wind speed in kilometers per hour.</p>
            <p>Track speeds from calm to storm conditions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_52;
