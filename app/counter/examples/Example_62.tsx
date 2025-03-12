"use client"

import React from 'react';
import Counter_62 from '../_components/Counter_62';

const Example_62: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-purple-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-purple-800">Time Interval</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-purple-800">Interval (sec)</h2>
            <Counter_62 
              initialValue={30}
              min={5}
              max={300}
              step={5}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Set time interval between events.</p>
            <p>Configure from 5 to 300 seconds.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_62;
