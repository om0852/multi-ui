"use client"

import React, { useState } from 'react';
import Counter_4 from '../_components/Counter_4';

const Example_4: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Flip Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Temperature Display</h2>
            <Counter_4 
              from={16}
              to={28}
              duration={4}
              interval={0.4}
              formatter={(value) => `${value}°C`}
              className="mx-auto"
              onComplete={() => setIsComplete(true)}
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>This counter simulates a rising temperature from 16°C to 28°C.</p>
            <p>The animation uses a flip effect with 0.4s intervals.</p>
            {isComplete && (
              <p className="text-red-500 font-medium mt-2">Warning: Temperature has reached maximum!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_4; 