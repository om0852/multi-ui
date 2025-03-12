"use client"

import React from 'react';
import Counter_35 from '../_components/Counter_35';

const Example_35: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-fuchsia-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-fuchsia-800">Delay Timer</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-fuchsia-800">Delay (minutes)</h2>
            <Counter_35 
              initialValue={15}
              min={5}
              max={120}
              step={5}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Set delay time from 5 to 120 minutes.</p>
            <p>Perfect for scheduling delayed operations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_35;
