"use client"

import React from 'react';
import Counter_53 from '../_components/Counter_53';

const Example_53: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-teal-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-teal-800">Meditation Timer</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-teal-800">Duration (min)</h2>
            <Counter_53 
              initialValue={10}
              min={1}
              max={60}
              step={1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Set meditation session length.</p>
            <p>Practice mindfulness from 1 to 60 minutes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_53;
