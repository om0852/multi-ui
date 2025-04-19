"use client";
import React, { useState } from 'react';
import RangeSlider from '../tsx/RangeSlider_3';

export default function RangeSliderExample() {
  const [progress, setProgress] = useState(60);
  const [rating, setRating] = useState(4.5);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-emerald-600 mb-6">
          Fancy Range Sliders
        </h1>
        
        <div className="space-y-10">
          <div>
            <RangeSlider 
              min={0}
              max={100}
              step={1}
              defaultValue={progress}
              onChange={setProgress}
              label="Progress"
              showValue={true}
            />
          </div>
          
          <div>
            <RangeSlider 
              min={0}
              max={5}
              step={0.5}
              defaultValue={rating}
              onChange={setRating}
              label="Rating"
              showValue={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 