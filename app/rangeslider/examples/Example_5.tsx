"use client";
import React from 'react';
import RangeSlider from '../tsx/RangeSlider_5';

export default function RangeSliderExample() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Simple Range Slider
        </h1>
        
        <div className="space-y-10">
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-4 text-center">
              Temperature Control
            </h2>
            <RangeSlider 
              min={15}
              max={30}
              step={0.5}
              defaultValue={22}
            />
          </div>
          
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-4 text-center">
              Volume Control
            </h2>
            <RangeSlider 
              min={0}
              max={100}
              step={5}
              defaultValue={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 