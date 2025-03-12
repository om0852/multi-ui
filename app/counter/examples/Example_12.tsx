"use client"

import React, { useState } from 'react';
import Counter_12 from '../_components/Counter_12';

const Example_12: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Fade Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Step Tracker</h2>
            <Counter_12 
              from={0}
              to={10000}
              duration={6}
              interval={0.3}
              formatter={(value) => `${value.toLocaleString()} steps`}
              className="mx-auto"
              onComplete={() => setIsComplete(true)}
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>This counter tracks daily steps from 0 to 10,000.</p>
            <p>The animation uses a fade effect with smooth transitions.</p>
            {isComplete && (
              <p className="text-green-500 font-medium mt-2">Daily step goal achieved!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_12; 