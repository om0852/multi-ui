"use client"

import React, { useState } from 'react';
import Counter_20 from '../_components/Counter_20';

const Example_20: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Glow Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Energy Level</h2>
            <Counter_20 
              from={0}
              to={1000}
              duration={5}
              interval={0.1}
              formatter={(value) => `${value} kWh`}
              className="mx-auto"
              onComplete={() => setIsComplete(true)}
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>This counter displays energy consumption from 0 to 1,000 kWh.</p>
            <p>The animation uses a glowing effect to emphasize power levels.</p>
            {isComplete && (
              <p className="text-yellow-500 font-medium mt-2">Maximum energy capacity reached!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_20; 