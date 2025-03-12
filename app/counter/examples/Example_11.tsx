"use client"

import React, { useState } from 'react';
import Counter_11 from '../_components/Counter_11';

const Example_11: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Slide Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Calorie Counter</h2>
            <Counter_11 
              from={0}
              to={2500}
              duration={5}
              interval={0.2}
              formatter={(value) => `${value} cal`}
              className="mx-auto"
              onComplete={() => setIsComplete(true)}
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>This counter displays daily calorie intake from 0 to 2,500 calories.</p>
            <p>The animation uses a sliding effect with smooth transitions.</p>
            {isComplete && (
              <p className="text-amber-500 font-medium mt-2">Daily calorie goal reached!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_11; 