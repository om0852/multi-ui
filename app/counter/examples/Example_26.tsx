"use client"

import React from 'react';
import Counter_26 from '../_components/Counter_26';

const Example_26: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-orange-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-orange-800">Countdown Timer</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-orange-800">Seconds</h2>
            <Counter_26 
              initialValue={30}
              min={0}
              max={60}
              step={1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Set countdown duration in seconds.</p>
            <p>Perfect for quick timing needs and short intervals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_26;
