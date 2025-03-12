"use client"

import React from 'react';
import Counter_47 from '../_components/Counter_47';

const Example_47: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-emerald-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-emerald-800">Savings Goal</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-emerald-800">Target Amount ($)</h2>
            <Counter_47 
              initialValue={1000}
              min={100}
              max={10000}
              step={100}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Set your savings target in $100 increments.</p>
            <p>Plan your financial goals from $100 to $10,000.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_47;
