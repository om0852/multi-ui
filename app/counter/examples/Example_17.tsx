"use client"

import React, { useState } from 'react';
import Counter_17 from '../_components/Counter_17';

const Example_17: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">3D Flip Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Stock Price</h2>
            <Counter_17 
              from={100}
              to={500}
              duration={7}
              interval={0.3}
              formatter={(value) => `$${value.toFixed(2)}`}
              className="mx-auto"
              onComplete={() => setIsComplete(true)}
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>This counter simulates rising stock price from $100 to $500.</p>
            <p>The animation uses a 3D flip effect for dramatic presentation.</p>
            {isComplete && (
              <p className="text-green-500 font-medium mt-2">Stock price target reached!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_17; 