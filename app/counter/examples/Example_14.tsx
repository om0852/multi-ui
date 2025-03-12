"use client"

import React, { useState } from 'react';
import Counter_14 from '../_components/Counter_14';

const Example_14: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Rotate Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Speedometer</h2>
            <Counter_14 
              from={0}
              to={120}
              duration={4}
              interval={0.1}
              formatter={(value) => `${value} mph`}
              className="mx-auto"
              onComplete={() => setIsComplete(true)}
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>This counter simulates a car speedometer from 0 to 120 mph.</p>
            <p>The animation uses a rotating effect with rapid updates.</p>
            {isComplete && (
              <p className="text-red-500 font-medium mt-2">Maximum speed reached!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_14; 