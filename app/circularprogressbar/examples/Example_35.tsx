"use client";
import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../_components/CircularProgressBar_35';

const Example_35 = () => {
  const [value, setValue] = useState(50);
  const [max, setMax] = useState(100);
  const [key, setKey] = useState(0);
  const [size, setSize] = useState(300);
  const [strokeWidth, setStrokeWidth] = useState(12);

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-indigo-500">
        Neumorphic Progress Ring
      </h1>
      
      <div className="bg-gray-100 p-8 rounded-3xl shadow-[8px_8px_16px_#d1d1d1,_-8px_-8px_16px_#ffffff] flex flex-col items-center">
        <div key={key} className="relative">
          <CircularProgressBar 
            value={value}
            max={max}
            size={size}
            strokeWidth={strokeWidth}
          />
        </div>
        
        <div className="mt-8 w-full max-w-md space-y-6">
          <div>
            <label htmlFor="value-slider" className="block text-sm font-medium text-indigo-500 mb-2">
              Progress: {value} ({percentage.toFixed(1)}%)
            </label>
            <div className="bg-gray-100 rounded-lg p-1 shadow-[inset_2px_2px_4px_#d1d1d1,_inset_-2px_-2px_4px_#ffffff]">
              <input 
                id="value-slider"
                type="range" 
                min="0" 
                max={max} 
                value={value} 
                onChange={handleValueChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="max-slider" className="block text-sm font-medium text-indigo-500 mb-2">
              Maximum Value: {max}
            </label>
            <div className="bg-gray-100 rounded-lg p-1 shadow-[inset_2px_2px_4px_#d1d1d1,_inset_-2px_-2px_4px_#ffffff]">
              <input 
                id="max-slider"
                type="range" 
                min="50" 
                max="200" 
                value={max} 
                onChange={handleMaxChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          <div>
            <label htmlFor="size-slider" className="block text-sm font-medium text-indigo-500 mb-2">
              Size: {size}px
            </label>
            <div className="bg-gray-100 rounded-lg p-1 shadow-[inset_2px_2px_4px_#d1d1d1,_inset_-2px_-2px_4px_#ffffff]">
              <input 
                id="size-slider"
                type="range" 
                min="200" 
                max="500" 
                value={size} 
                onChange={handleSizeChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          <div>
            <label htmlFor="stroke-width" className="block text-sm font-medium text-indigo-500 mb-2">
              Ring Width: {strokeWidth}px
            </label>
            <div className="bg-gray-100 rounded-lg p-1 shadow-[inset_2px_2px_4px_#d1d1d1,_inset_-2px_-2px_4px_#ffffff]">
              <input 
                id="stroke-width"
                type="range" 
                min="8" 
                max="24" 
                value={strokeWidth} 
                onChange={handleStrokeWidthChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-gray-100 p-6 rounded-3xl shadow-[8px_8px_16px_#d1d1d1,_-8px_-8px_16px_#ffffff] w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4 text-indigo-500">
          Neumorphic Features
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Soft shadow effects</li>
          <li>Elegant progress animation</li>
          <li>Inset shadow details</li>
          <li>Subtle hover states</li>
          <li>Minimalist design language</li>
        </ul>
      </div>
    </div>
  );
};

export default Example_35; 