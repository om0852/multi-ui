"use client";
import React, { useState } from 'react';
import RangeSlider from '../tsx/RangeSlider_1';

export default function RangeSliderExample() {
  const [value, setValue] = useState(50);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Basic Range Slider
        </h1>
        
        <div className="space-y-8">
          <RangeSlider 
            min={0}
            max={100}
            step={1}
            defaultValue={value}
            onChange={setValue}
            label="Adjust Value"
            showValue={true}
          />
          
          <div className="p-4 bg-gray-100 rounded-md text-center">
            <p className="text-gray-700">Selected value: <span className="font-semibold">{value}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
} 