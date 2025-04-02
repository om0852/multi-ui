"use client";
import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../tsx/CircularProgressBar_9';

const Example_9 = () => {
  const [progress, setProgress] = useState(50);
  const [key, setKey] = useState(0);
  const [gradientStart, setGradientStart] = useState("#4A90E2");
  const [gradientEnd, setGradientEnd] = useState("#FF6347");
  const [backgroundColor, setBackgroundColor] = useState("#f0f0f0");
  const [segments, setSegments] = useState(12);
  const [strokeWidth, setStrokeWidth] = useState(8);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [progress, gradientStart, gradientEnd, backgroundColor, segments, strokeWidth]);

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(parseInt(e.target.value));
  };

  const handleGradientStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGradientStart(e.target.value);
  };

  const handleGradientEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGradientEnd(e.target.value);
  };

  const handleBackgroundColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBackgroundColor(e.target.value);
  };

  const handleSegmentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSegments(parseInt(e.target.value));
  };

  const handleStrokeWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStrokeWidth(parseInt(e.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Rotating Gradient Segment Progress Bar</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
        <div key={key} className="relative">
          <CircularProgressBar 
            progress={progress}
            size={150}
            strokeWidth={strokeWidth}
            backgroundColor={backgroundColor}
            segments={segments}
            gradientStart={gradientStart}
            gradientEnd={gradientEnd}
            showPercentage={false}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold" style={{ 
              background: `-webkit-linear-gradient(${gradientStart}, ${gradientEnd})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>{progress}%</span>
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
            <label htmlFor="segments-slider" className="block text-sm font-medium text-gray-700 mb-2">
              Segments: {segments}
            </label>
            <input 
              id="segments-slider"
              type="range" 
              min="4" 
              max="24" 
              value={segments} 
              onChange={handleSegmentsChange}
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
              min="4" 
              max="20" 
              value={strokeWidth} 
              onChange={handleStrokeWidthChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="gradient-start" className="block text-sm font-medium text-gray-700 mb-2">
                Gradient Start
              </label>
              <div className="flex items-center">
                <input 
                  id="gradient-start"
                  type="color" 
                  value={gradientStart} 
                  onChange={handleGradientStartChange}
                  className="h-8 w-8 mr-2 cursor-pointer"
                />
                <span className="text-sm">{gradientStart}</span>
              </div>
            </div>
            
            <div>
              <label htmlFor="gradient-end" className="block text-sm font-medium text-gray-700 mb-2">
                Gradient End
              </label>
              <div className="flex items-center">
                <input 
                  id="gradient-end"
                  type="color" 
                  value={gradientEnd} 
                  onChange={handleGradientEndChange}
                  className="h-8 w-8 mr-2 cursor-pointer"
                />
                <span className="text-sm">{gradientEnd}</span>
              </div>
            </div>

            <div>
              <label htmlFor="background-color" className="block text-sm font-medium text-gray-700 mb-2">
                Background
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
          <li>Rotating gradient segments with smooth animation</li>
          <li>Customizable gradient colors and segments</li>
          <li>Adjustable stroke width and background color</li>
          <li>Gradient text effect for percentage display</li>
        </ul>
      </div>
    </div>
  );
};

export default Example_9; 