"use client"

import React, { useState } from 'react';
import Counter_19 from '../_components/Counter_19';

const Example_19: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Pulse Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Followers Count</h2>
            <Counter_19 
              from={1000}
              to={10000}
              duration={6}
              interval={0.15}
              formatter={(value) => `${value.toLocaleString()}`}
              className="mx-auto"
              onComplete={() => setIsComplete(true)}
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>This counter shows social media followers growing from 1K to 10K.</p>
            <p>The animation uses a pulse effect for attention-grabbing display.</p>
            {isComplete && (
              <p className="text-purple-500 font-medium mt-2">10K followers milestone reached!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_19; 