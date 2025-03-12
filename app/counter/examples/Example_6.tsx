"use client"

import React, { useState } from 'react';
import Counter_6 from '../_components/Counter_6';

const Example_6: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Timer Setting</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Cooking Timer</h2>
            <Counter_6 
              from={1}
              to={60}
              duration={8}
              interval={0.2}
              formatter={(value) => `${value} min`}
              className="text-3xl font-bold text-orange-500"
              onComplete={() => setIsComplete(true)}
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>This counter simulates a cooking timer counting up from 1 to 60 minutes.</p>
            <p>The animation runs for 8 seconds with 0.2s intervals between updates.</p>
            {isComplete && (
              <p className="text-green-500 font-medium mt-2">Timer setup complete!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_6; 