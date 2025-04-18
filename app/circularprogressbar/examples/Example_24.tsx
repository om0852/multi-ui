"use client";
import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../_components/CircularProgressBar_24';

const Example_24 = () => {
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
  const [strokeWidth, setStrokeWidth] = useState(windowWidth < 640 ? 8 : 12);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setSize(getDefaultSize());
    setStrokeWidth(windowWidth < 640 ? 8 : 12);
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-950 dark:to-amber-900 px-4 py-8">
      <h1 
        className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center text-amber-800 dark:text-amber-200" 
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        Art Deco Progress
      </h1>
      
      <div className="bg-white/30 dark:bg-gradient-to-br dark:from-amber-900/50 dark:to-amber-800/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl flex flex-col items-center border border-amber-300/30 dark:border-amber-500/20 w-full max-w-[90%] sm:max-w-md">
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
            <label htmlFor="value-slider" className="block text-sm sm:text-base font-medium text-amber-800 dark:text-amber-200 mb-2">
              Progress: {value} ({percentage.toFixed(1)}%)
            </label>
            <input 
              id="value-slider"
              type="range" 
              min="0" 
              max={max} 
              value={value} 
              onChange={handleValueChange}
              className="w-full h-2 bg-amber-300/50 dark:bg-amber-800/50 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <label htmlFor="max-slider" className="block text-sm sm:text-base font-medium text-amber-800 dark:text-amber-200 mb-2">
              Maximum Value: {max}
            </label>
            <input 
              id="max-slider"
              type="range" 
              min="50" 
              max="200" 
              value={max} 
              onChange={handleMaxChange}
              className="w-full h-2 bg-amber-300/50 dark:bg-amber-800/50 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="size-slider" className="block text-sm sm:text-base font-medium text-amber-800 dark:text-amber-200 mb-2">
              Size: {size}px
            </label>
            <input 
              id="size-slider"
              type="range" 
              min={windowWidth < 640 ? 150 : 200} 
              max={windowWidth < 640 ? 300 : 500} 
              value={size} 
              onChange={handleSizeChange}
              className="w-full h-2 bg-amber-300/50 dark:bg-amber-800/50 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="stroke-width" className="block text-sm sm:text-base font-medium text-amber-800 dark:text-amber-200 mb-2">
              Ring Width: {strokeWidth}px
            </label>
            <input 
              id="stroke-width"
              type="range" 
              min={windowWidth < 640 ? 6 : 8} 
              max={windowWidth < 640 ? 18 : 24} 
              value={strokeWidth} 
              onChange={handleStrokeWidthChange}
              className="w-full h-2 bg-amber-300/50 dark:bg-amber-800/50 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-6 sm:mt-8 bg-white/30 dark:bg-gradient-to-br dark:from-amber-900/50 dark:to-amber-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-2xl w-full max-w-[90%] sm:max-w-md border border-amber-300/30 dark:border-amber-500/20">
        <h2 
          className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-amber-800 dark:text-amber-200" 
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Art Deco Features
        </h2>
        <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base text-amber-700/90 dark:text-amber-300/80">
          <li>Geometric pattern background</li>
          <li>Decorative corner elements</li>
          <li>Golden gradient accents</li>
          <li>Pulsating ornamental dots</li>
          <li>Elegant typography styling</li>
        </ul>
      </div>
    </div>
  );
};

export default Example_24; 