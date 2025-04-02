"use client";
import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../tsx/CircularProgressBar_2';

const Example_2 = () => {
  const [progress, setProgress] = useState(50);
  const [key, setKey] = useState(0);
  const [primaryColor, setPrimaryColor] = useState("#4A90E2");
  const [secondaryColor, setSecondaryColor] = useState("#FF6347");
  const [glowEffect, setGlowEffect] = useState(true);

  // Update the key when progress changes to reset the animation
  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [progress, primaryColor, secondaryColor, glowEffect]);

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(parseInt(e.target.value));
  };

  const handlePrimaryColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrimaryColor(e.target.value);
  };

  const handleSecondaryColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondaryColor(e.target.value);
  };

  const handleGlowEffectChange = () => {
    setGlowEffect(!glowEffect);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Enhanced Circular Progress Bar</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
        <div key={key} className="relative">
          <CircularProgressBar 
            progress={progress} 
            size={150} 
            strokeWidth={15} 
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            backgroundColor="#e6e6e6" 
            animationDuration={1} 
            showPercentage={false}
            glowEffect={glowEffect}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold" style={{ color: primaryColor }}>{progress}%</span>
          </div>
        </div>
        
        <div className="mt-8 w-full max-w-md space-y-4">
          <div>
            <label htmlFor="progress-slider" className="block text-sm font-medium text-gray-700 mb-2">
              Progress: {progress}%
            </label>
            <input 
              id="progress-slider"
              type="range" 
              min="0" 
              max="100" 
              value={progress} 
              onChange={handleProgressChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="primary-color" className="block text-sm font-medium text-gray-700 mb-2">
                Primary Color
              </label>
              <div className="flex items-center">
                <input 
                  id="primary-color"
                  type="color" 
                  value={primaryColor} 
                  onChange={handlePrimaryColorChange}
                  className="h-8 w-8 mr-2 cursor-pointer"
                />
                <span className="text-sm">{primaryColor}</span>
              </div>
            </div>
            
            <div>
              <label htmlFor="secondary-color" className="block text-sm font-medium text-gray-700 mb-2">
                Secondary Color
              </label>
              <div className="flex items-center">
                <input 
                  id="secondary-color"
                  type="color" 
                  value={secondaryColor} 
                  onChange={handleSecondaryColorChange}
                  className="h-8 w-8 mr-2 cursor-pointer"
                />
                <span className="text-sm">{secondaryColor}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <input 
              id="glow-effect"
              type="checkbox" 
              checked={glowEffect} 
              onChange={handleGlowEffectChange}
              className="h-4 w-4 mr-2 cursor-pointer"
            />
            <label htmlFor="glow-effect" className="text-sm font-medium text-gray-700">
              Enable Glow Effect
            </label>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Gradient effect between primary and secondary colors</li>
          <li>Optional glow effect for enhanced visual appeal</li>
          <li>Smooth animation with customizable duration</li>
          <li>Fully responsive design that scales to any size</li>
        </ul>
      </div>
    </div>
  );
};

export default Example_2; 