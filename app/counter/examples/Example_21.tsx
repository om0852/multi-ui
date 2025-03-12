"use client"

import React from 'react';
import Counter_21 from '../_components/Counter_21';

const Example_21: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Neon Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Gaming Score</h2>
            <Counter_21 
              initialValue={0}
              min={0}
              max={9999}
              step={1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>This counter displays a gaming high score from 0 to 9,999 points.</p>
            <p>The animation uses a neon glow effect for a cyberpunk aesthetic.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_21; 