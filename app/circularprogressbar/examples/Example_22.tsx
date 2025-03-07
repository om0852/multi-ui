"use client";
import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../_components/CircularProgressBar_22';

const Example_22 = () => {
  const [value, setValue] = useState(50);
  const [max, setMax] = useState(100);
  const [key, setKey] = useState(0);
  const [size, setSize] = useState(250);
  const [strokeWidth, setStrokeWidth] = useState(10);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [value, max, size, strokeWidth]);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMax(parseInt(e.target.value));
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(parseInt(e.target.value));
  };

  const handleStrokeWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStrokeWidth(parseInt(e.target.value));
  };

  const percentage = (value / max) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-emerald-900 to-emerald-800">
      <h1 className="text-2xl font-bold mb-6 text-emerald-200">Nature Growth Progress</h1>
      
      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl shadow-2xl flex flex-col items-center border border-emerald-500/20">
        <div key={key} className="relative">
          <CircularProgressBar 
            value={value}
            max={max}
            size={size}
            strokeWidth={strokeWidth}
          />
        </div>
        
        <div className="mt-8 w-full max-w-md space-y-4">
          <div>
            <label htmlFor="value-slider" className="block text-sm font-medium text-emerald-300 mb-2">
              Growth: {value} ({percentage.toFixed(1)}%)
            </label>
            <input 
              id="value-slider"
              type="range" 
              min="0" 
              max={max} 
              value={value} 
              onChange={handleValueChange}
              className="w-full h-2 bg-emerald-900/50 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <label htmlFor="max-slider" className="block text-sm font-medium text-emerald-300 mb-2">
              Maximum Value: {max}
            </label>
            <input 
              id="max-slider"
              type="range" 
              min="50" 
              max="200" 
              value={max} 
              onChange={handleMaxChange}
              className="w-full h-2 bg-emerald-900/50 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="size-slider" className="block text-sm font-medium text-emerald-300 mb-2">
              Size: {size}px
            </label>
            <input 
              id="size-slider"
              type="range" 
              min="150" 
              max="500" 
              value={size} 
              onChange={handleSizeChange}
              className="w-full h-2 bg-emerald-900/50 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="stroke-width" className="block text-sm font-medium text-emerald-300 mb-2">
              Ring Thickness: {strokeWidth}px
            </label>
            <input 
              id="stroke-width"
              type="range" 
              min="6" 
              max="20" 
              value={strokeWidth} 
              onChange={handleStrokeWidthChange}
              className="w-full h-2 bg-emerald-900/50 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-2xl w-full max-w-md border border-emerald-500/20">
        <h2 className="text-lg font-semibold mb-4 text-emerald-200">Features</h2>
        <ul className="list-disc pl-5 space-y-2 text-emerald-300">
          <li>Animated leaf particles</li>
          <li>Nature-inspired emerald gradient</li>
          <li>Pulsating background effect</li>
          <li>Frosted glass center display</li>
          <li>Smooth growth transitions</li>
        </ul>
      </div>
    </div>
  );
};

export default Example_22; 