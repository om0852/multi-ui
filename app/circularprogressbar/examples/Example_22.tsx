"use client";
import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../tsx/CircularProgressBar_22';

const Example_22 = () => {
  const [value, setValue] = useState(75);
  const [max, setMax] = useState(100);
  const [key, setKey] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Calculate default size based on screen width
  const getDefaultSize = () => {
    if (windowWidth < 640) return 160; // mobile
    if (windowWidth < 1024) return 200; // tablet
    return 240; // desktop
  };

  const [size, setSize] = useState(getDefaultSize());
  const [strokeWidth, setStrokeWidth] = useState(windowWidth < 640 ? 8 : 10);
  const [glowIntensity, setGlowIntensity] = useState(5);
  const [neonColor, setNeonColor] = useState('#00ff00');

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
  }, [value, max, size, strokeWidth, glowIntensity, neonColor]);

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

  const handleGlowIntensityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGlowIntensity(parseInt(e.target.value));
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNeonColor(e.target.value);
  };

  const percentage = (value / max) * 100;

  const neonColors = {
    '#00ff00': 'Neon Green',
    '#ff00ff': 'Neon Pink',
    '#00ffff': 'Neon Cyan',
    '#ff0000': 'Neon Red',
    '#ffff00': 'Neon Yellow',
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4 py-8">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center text-white">
        Neon Glow Progress Ring
      </h1>
      
      <div className="bg-black/50 p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl flex flex-col items-center border border-white/10 w-full max-w-[90%] sm:max-w-md">
        <div key={key} className="relative">
          <CircularProgressBar 
            value={value}
            max={max}
            size={size}
            strokeWidth={strokeWidth}
            glowIntensity={glowIntensity}
            neonColor={neonColor}
          />
        </div>
        
        <div className="mt-6 sm:mt-8 w-full space-y-4">
          <div>
            <label htmlFor="value-slider" className="block text-sm sm:text-base font-medium text-white/90 mb-2">
              Value: {value} ({percentage.toFixed(1)}%)
            </label>
            <input 
              id="value-slider"
              type="range" 
              min="0" 
              max={max} 
              value={value} 
              onChange={handleValueChange}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <label htmlFor="max-slider" className="block text-sm sm:text-base font-medium text-white/90 mb-2">
              Maximum Value: {max}
            </label>
            <input 
              id="max-slider"
              type="range" 
              min="50" 
              max="200" 
              value={max} 
              onChange={handleMaxChange}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="size-slider" className="block text-sm sm:text-base font-medium text-white/90 mb-2">
              Size: {size}px
            </label>
            <input 
              id="size-slider"
              type="range" 
              min={windowWidth < 640 ? 100 : 150} 
              max={windowWidth < 640 ? 250 : 350} 
              value={size} 
              onChange={handleSizeChange}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="stroke-width" className="block text-sm sm:text-base font-medium text-white/90 mb-2">
              Ring Thickness: {strokeWidth}px
            </label>
            <input 
              id="stroke-width"
              type="range" 
              min={windowWidth < 640 ? 4 : 6} 
              max={windowWidth < 640 ? 12 : 16} 
              value={strokeWidth} 
              onChange={handleStrokeWidthChange}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="glow-intensity" className="block text-sm sm:text-base font-medium text-white/90 mb-2">
              Glow Intensity: {glowIntensity}
            </label>
            <input 
              id="glow-intensity"
              type="range" 
              min="1" 
              max="10" 
              value={glowIntensity} 
              onChange={handleGlowIntensityChange}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="neon-color" className="block text-sm sm:text-base font-medium text-white/90 mb-2">
              Neon Color
            </label>
            <select
              id="neon-color"
              value={neonColor}
              onChange={handleColorChange}
              className="w-full px-3 py-2 bg-black/50 text-white/90 rounded-lg border border-white/20 focus:outline-none focus:border-white/40"
            >
              {Object.entries(neonColors).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="mt-6 sm:mt-8 bg-black/50 p-4 sm:p-6 rounded-xl shadow-2xl w-full max-w-[90%] sm:max-w-md border border-white/10">
        <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white/90">Features</h2>
        <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base text-white/80">
          <li>Vibrant neon glow effect</li>
          <li>Adjustable glow intensity</li>
          <li>Multiple neon color options</li>
          <li>Pulsating animation</li>
          <li>Dark theme optimized</li>
        </ul>
      </div>
    </div>
  );
};

export default Example_22; 