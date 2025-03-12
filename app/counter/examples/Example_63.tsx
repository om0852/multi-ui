"use client"

import React from 'react';
import Counter_63 from '../_components/Counter_63';

const Example_63: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-emerald-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-emerald-800">Weight Tracker</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-emerald-800">Weight (lbs)</h2>
            <Counter_63 
              initialValue={150}
              min={80}
              max={300}
              step={0.5}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Track weight with 0.5 lb precision.</p>
            <p>Monitor progress from 80 to 300 pounds.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_63;


