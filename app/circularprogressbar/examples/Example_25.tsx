"use client";
import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../tsx/CircularProgressBar_25';

const Example_25 = () => {
  const [value, setValue] = useState(50);
  const [max, setMax] = useState(100);
  const [key, setKey] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Calculate default size based on screen width
  const getDefaultSize = () => {
    if (windowWidth < 640) return 200; // mobile
    if (windowWidth < 1024) return 250; // tablet
    return 300; // desktop
  };

  const [size, setSize] = useState(getDefaultSize());
  const [strokeWidth, setStrokeWidth] = useState(windowWidth < 640 ? 8 : 10);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setSize(getDefaultSize());
    setStrokeWidth(windowWidth < 640 ? 8 : 10);
  }, [windowWidth]);

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-violet-100 via-purple-100 to-violet-100 dark:from-violet-950 dark:via-purple-950 dark:to-violet-950 px-4 py-8">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400">
        Geometric Progress
      </h1>
      
      <div className="bg-white/30 dark:bg-gradient-to-br dark:from-violet-900/20 dark:to-purple-900/20 backdrop-blur-lg p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl flex flex-col items-center border border-violet-300/30 dark:border-violet-500/20 w-full max-w-[90%] sm:max-w-md">
        <div key={key} className="relative">
          <CircularProgressBar 
            value={value}
            max={max}
            size={size}
            strokeWidth={strokeWidth}
          />
        </div>
        
        <div className="mt-6 sm:mt-8 w-full space-y-4">
          <div>
            <label htmlFor="value-slider" className="block text-sm sm:text-base font-medium text-violet-800 dark:text-violet-300 mb-2">
              Progress: {value} ({percentage.toFixed(1)}%)
            </label>
            <input 
              id="value-slider"
              type="range" 
              min="0" 
              max={max} 
              value={value} 
              onChange={handleValueChange}
              className="w-full h-2 bg-violet-200/50 dark:bg-violet-800/30 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <label htmlFor="max-slider" className="block text-sm sm:text-base font-medium text-violet-800 dark:text-violet-300 mb-2">
              Maximum Value: {max}
            </label>
            <input 
              id="max-slider"
              type="range" 
              min="50" 
              max="200" 
              value={max} 
              onChange={handleMaxChange}
              className="w-full h-2 bg-violet-200/50 dark:bg-violet-800/30 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="size-slider" className="block text-sm sm:text-base font-medium text-violet-800 dark:text-violet-300 mb-2">
              Size: {size}px
            </label>
            <input 
              id="size-slider"
              type="range" 
              min={windowWidth < 640 ? 150 : 200} 
              max={windowWidth < 640 ? 300 : 500} 
              value={size} 
              onChange={handleSizeChange}
              className="w-full h-2 bg-violet-200/50 dark:bg-violet-800/30 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="stroke-width" className="block text-sm sm:text-base font-medium text-violet-800 dark:text-violet-300 mb-2">
              Segment Width: {strokeWidth}px
            </label>
            <input 
              id="stroke-width"
              type="range" 
              min={windowWidth < 640 ? 4 : 6} 
              max={windowWidth < 640 ? 15 : 20} 
              value={strokeWidth} 
              onChange={handleStrokeWidthChange}
              className="w-full h-2 bg-violet-200/50 dark:bg-violet-800/30 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-6 sm:mt-8 bg-white/30 dark:bg-gradient-to-br dark:from-violet-900/20 dark:to-purple-900/20 backdrop-blur-lg p-4 sm:p-6 rounded-xl shadow-2xl w-full max-w-[90%] sm:max-w-md border border-violet-300/30 dark:border-violet-500/20">
        <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400">
          Geometric Features
        </h2>
        <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base text-violet-700 dark:text-violet-300">
          <li>Rotating triangle particles</li>
          <li>Segmented progress animation</li>
          <li>Animated gradient effects</li>
          <li>Diamond-shaped center display</li>
          <li>Pulsating corner accents</li>
        </ul>
      </div>
    </div>
  );
};

export default Example_25; 