"use client"

import React from 'react';
import Counter_48 from '../_components/Counter_48';

const Example_48: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-cyan-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-cyan-800">Water Intake</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-cyan-800">Daily Goal (ml)</h2>
            <Counter_48 
              initialValue={2000}
              min={500}
              max={4000}
              step={100}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Track daily water intake in milliliters.</p>
            <p>Stay hydrated with goals from 500ml to 4000ml.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_48;
