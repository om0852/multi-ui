"use client"

import React from 'react';
import Counter_42 from '../_components/Counter_42';

const Example_42: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-red-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-red-800">Heart Rate Monitor</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-red-800">Target BPM</h2>
            <Counter_42 
              initialValue={70}
              min={40}
              max={200}
              step={1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Set target heart rate in beats per minute.</p>
            <p>Monitor heart rate from 40 to 200 BPM.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_42;
