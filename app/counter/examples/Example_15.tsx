"use client"

import React, { useState } from 'react';
import Counter_15 from '../_components/Counter_15';

const Example_15: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Bounce Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Score Tracker</h2>
            <Counter_15 
              from={0}
              to={100}
              duration={5}
              interval={0.25}
              formatter={(value) => `${value} pts`}
              className="mx-auto"
              onComplete={() => setIsComplete(true)}
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>This counter tracks game score from 0 to 100 points.</p>
            <p>The animation uses a bouncy effect for a playful feel.</p>
            {isComplete && (
              <p className="text-green-500 font-medium mt-2">Perfect score achieved!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_15; 