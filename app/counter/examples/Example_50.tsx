"use client"

import React from 'react';
import Counter_50 from '../_components/Counter_50';

const Example_50: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-orange-50">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-orange-800">Calorie Counter</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-orange-800">Daily Calories</h2>
            <Counter_50 
              initialValue={2000}
              min={1200}
              max={4000}
              step={50}
              className="mx-auto"
            />
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Track daily calorie goals in 50 calorie increments.</p>
            <p>Maintain healthy intake from 1,200 to 4,000 calories.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example_50;
