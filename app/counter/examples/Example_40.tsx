"use client"

import React from 'react';
import Counter_40 from '../_components/Counter_40';

const Example_40: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-neutral-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neutral-800">Difficulty Level</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-neutral-800">Game Difficulty</h2>
            <Counter_40 
              initialValue={1}
              min={1}
              max={10}
              step={1}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Set game difficulty from 1 to 10.</p>
            <p>Challenge yourself with increasing levels.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_40;
