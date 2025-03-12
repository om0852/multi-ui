"use client"

import React from 'react';
import Counter_66 from '../_components/Counter_66';

const Example_66: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-cyan-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-cyan-800">Frequency Selector</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-cyan-800">Frequency (Hz)</h2>
            <Counter_66 
              initialValue={440}
              min={20}
              max={20000}
              step={10}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Set audio frequency in Hertz.</p>
            <p>From subsonic to ultrasonic range.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_66;
