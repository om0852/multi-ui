"use client";
import React, { useState } from 'react';
import RangeSlider from '../_components/RangeSlider_2';

export default function RangeSliderExample() {
  const [volume, setVolume] = useState(75);
  const [brightness, setBrightness] = useState(50);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Minimalist Range Sliders
        </h1>
        
        <div className="space-y-10">
          <div>
            <RangeSlider 
              min={0}
              max={100}
              step={1}
              defaultValue={volume}
              onChange={setVolume}
              label="Volume"
              showValue={true}
            />
          </div>
          
          <div>
            <RangeSlider 
              min={0}
              max={100}
              step={5}
              defaultValue={brightness}
              onChange={setBrightness}
              label="Brightness"
              showValue={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 