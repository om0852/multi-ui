"use client"

import React, { useState } from 'react';
import Counter_18 from '../_components/Counter_18';

const Example_18: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Wave Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Water Level</h2>
            <Counter_18 
              from={0}
              to={100}
              duration={8}
              interval={0.2}
              formatter={(value) => `${value}%`}
              className="mx-auto"
              onComplete={() => setIsComplete(true)}
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>This counter shows water tank filling from 0% to 100%.</p>
            <p>The animation uses a wave effect to simulate liquid movement.</p>
            {isComplete && (
              <p className="text-blue-500 font-medium mt-2">Tank is now full!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_18; 