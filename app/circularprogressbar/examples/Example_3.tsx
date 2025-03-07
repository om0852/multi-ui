"use client";
import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../_components/CircularProgressBar_3';

const Example_3 = () => {
  const [progress, setProgress] = useState(50);
  const [key, setKey] = useState(0);
  const [waveColor, setWaveColor] = useState("#4A90E2");
  const [backgroundColor, setBackgroundColor] = useState("#e6e6e6");

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [progress, waveColor, backgroundColor]);

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(parseInt(e.target.value));
  };

  const handleWaveColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWaveColor(e.target.value);
  };

  const handleBackgroundColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBackgroundColor(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Wave Effect Progress Bar</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
        <div key={key} className="relative">
          <CircularProgressBar 
            progress={progress} 
            size={150}
            waveColor={waveColor}
            backgroundColor={backgroundColor}
            showPercentage={false}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold" style={{ color: waveColor }}>{progress}%</span>
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
              <label htmlFor="wave-color" className="block text-sm font-medium text-gray-700 mb-2">
                Wave Color
              </label>
              <div className="flex items-center">
                <input 
                  id="wave-color"
                  type="color" 
                  value={waveColor} 
                  onChange={handleWaveColorChange}
                  className="h-8 w-8 mr-2 cursor-pointer"
                />
                <span className="text-sm">{waveColor}</span>
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
          <li>Unique wave animation effect</li>
          <li>Customizable wave and background colors</li>
          <li>Fluid and smooth transitions</li>
          <li>Real-time progress updates</li>
        </ul>
      </div>
    </div>
  );
};

export default Example_3; 