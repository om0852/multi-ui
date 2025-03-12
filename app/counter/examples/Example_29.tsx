"use client"

import React from 'react';
import Counter_29 from '../_components/Counter_29';

const Example_29: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-cyan-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-cyan-800">Speed Control</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-cyan-800">Fan Speed</h2>
            <Counter_29 
              initialValue={1}
              min={1}
              max={10}
              step={0.1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Adjust fan speed with precise 0.1 increments.</p>
            <p>Fine-tune airflow for optimal comfort.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_29;
