"use client"

import React from 'react';
import Counter_38 from '../_components/Counter_38';

const Example_38: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-slate-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800">Progress Tracker</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-slate-800">Completion (%)</h2>
            <Counter_38 
              initialValue={0}
              min={0}
              max={100}
              step={10}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Track project completion percentage.</p>
            <p>Monitor progress in 10% increments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_38;
