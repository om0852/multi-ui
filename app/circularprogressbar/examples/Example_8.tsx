"use client";
import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../tsx/CircularProgressBar_8';

const Example_8 = () => {
  const [progress, setProgress] = useState(50);
  const [key, setKey] = useState(0);
  const [progressColor, setProgressColor] = useState("#4A90E2");
  const [backgroundColor, setBackgroundColor] = useState("#f0f0f0");
  const [strokeWidth, setStrokeWidth] = useState(10);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [progress, progressColor, backgroundColor, strokeWidth]);

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(parseInt(e.target.value));
  };

  const handleProgressColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgressColor(e.target.value);
  };

  const handleBackgroundColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBackgroundColor(e.target.value);
  };

  const handleStrokeWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStrokeWidth(parseInt(e.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Radial Progress Bar with Bouncing Indicator</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
        <div key={key} className="relative">
          <CircularProgressBar 
            progress={progress}
            size={150}
            strokeWidth={strokeWidth}
            progressColor={progressColor}
            backgroundColor={backgroundColor}
            showPercentage={false}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold" style={{ color: progressColor }}>{progress}%</span>
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

          <div>
            <label htmlFor="stroke-width" className="block text-sm font-medium text-gray-700 mb-2">
              Stroke Width: {strokeWidth}px
            </label>
            <input 
              id="stroke-width"
              type="range" 
              min="5" 
              max="20" 
              value={strokeWidth} 
              onChange={handleStrokeWidthChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="progress-color" className="block text-sm font-medium text-gray-700 mb-2">
                Progress Color
              </label>
              <div className="flex items-center">
                <input 
                  id="progress-color"
                  type="color" 
                  value={progressColor} 
                  onChange={handleProgressColorChange}
                  className="h-8 w-8 mr-2 cursor-pointer"
                />
                <span className="text-sm">{progressColor}</span>
              </div>
            </div>
            
            <div>
              <label htmlFor="background-color" className="block text-sm font-medium text-gray-700 mb-2">
                Background Color
              </label>
              <div className="flex items-center">
                <input 
                  id="background-color"
                  type="color" 
                  value={backgroundColor} 
                  onChange={handleBackgroundColorChange}
                  className="h-8 w-8 mr-2 cursor-pointer"
                />
                <span className="text-sm">{backgroundColor}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Gradient progress ring with smooth animation</li>
          <li>Bouncing dot indicator that follows progress</li>
          <li>Customizable colors and stroke width</li>
          <li>Smooth transitions and animations</li>
        </ul>
      </div>
    </div>
  );
};

export default Example_8; 