"use client"

import React from 'react';
import Counter_56 from '../_components/Counter_56';

const Example_56: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-amber-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-amber-800">Repetition Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-amber-800">Exercise Reps</h2>
            <Counter_56 
              initialValue={12}
              min={1}
              max={50}
              step={1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Count exercise repetitions.</p>
            <p>Track sets from 1 to 50 reps.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_56;


