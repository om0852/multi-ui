"use client";
import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../tsx/CircularProgressBar_18';

const Example_18 = () => {
  const [value, setValue] = useState(50);
  const [max, setMax] = useState(100);
  const [key, setKey] = useState(0);
  const [size, setSize] = useState(200);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [value, max, size]);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMax(parseInt(e.target.value));
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(parseInt(e.target.value));
  };

  const percentage = (value / max) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-violet-950 to-violet-900">
      <h1 className="text-2xl font-bold mb-6 text-violet-200">Liquid Fill Progress</h1>
      
      <div className="bg-violet-900/30 backdrop-blur-sm p-8 rounded-xl shadow-2xl flex flex-col items-center border border-violet-700/30">
        <div key={key} className="relative">
          <CircularProgressBar 
            value={value}
            max={max}
            size={size}
          />
        </div>
        
        <div className="mt-8 w-full max-w-md space-y-4">
          <div>
            <label htmlFor="value-slider" className="block text-sm font-medium text-violet-200 mb-2">
              Value: {value} ({percentage.toFixed(1)}%)
            </label>
            <input 
              id="value-slider"
              type="range" 
              min="0" 
              max={max} 
              value={value} 
              onChange={handleValueChange}
              className="w-full h-2 bg-violet-800/50 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <label htmlFor="max-slider" className="block text-sm font-medium text-violet-200 mb-2">
              Maximum Value: {max}
            </label>
            <input 
              id="max-slider"
              type="range" 
              min="50" 
              max="200" 
              value={max} 
              onChange={handleMaxChange}
              className="w-full h-2 bg-violet-800/50 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="size-slider" className="block text-sm font-medium text-violet-200 mb-2">
              Size: {size}px
            </label>
            <input 
              id="size-slider"
              type="range" 
              min="100" 
              max="400" 
              value={size} 
              onChange={handleSizeChange}
              className="w-full h-2 bg-violet-800/50 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-violet-900/30 backdrop-blur-sm p-6 rounded-xl shadow-2xl w-full max-w-md border border-violet-700/30">
        <h2 className="text-lg font-semibold mb-4 text-violet-200">Features</h2>
        <ul className="list-disc pl-5 space-y-2 text-violet-300">
          <li>Liquid wave animation effect</li>
          <li>Dual-wave overlay for depth</li>
          <li>Rotating shine animation</li>
          <li>Frosted glass center display</li>
          <li>Responsive liquid level</li>
        </ul>
      </div>
    </div>
  );
};

export default Example_18; 