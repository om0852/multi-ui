"use client"

import React, { useState } from 'react';
import Counter_9 from '../_components/Counter_9';

const Example_9: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Volume Control</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Audio Level</h2>
            <Counter_9 
              from={0}
              to={100}
              duration={5}
              interval={0.1}
              formatter={(value) => `${value}%`}
              className="text-3xl font-bold text-indigo-600"
              onComplete={() => setIsComplete(true)}
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>This counter simulates volume level adjustment from 0% to 100%.</p>
            <p>The animation runs for 5 seconds with rapid updates every 0.1 seconds.</p>
            {isComplete && (
              <p className="text-green-500 font-medium mt-2">Maximum volume reached!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_9; 