"use client";
import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../tsx/CircularProgressBar_5';

const Example_5 = () => {
  const [progress, setProgress] = useState(50);
  const [key, setKey] = useState(0);
  const [ringColor, setRingColor] = useState("#4A90E2");
  const [backgroundColor, setBackgroundColor] = useState("#e6e6e6");
  const [strokeWidth, setStrokeWidth] = useState(15);

  // Sample texture images - in a real application, you might want to provide more options
  const textureOptions = [
    "/textures/noise.png",
    "/textures/dots.png",
    "/textures/lines.png",
    "/textures/grid.png"
  ];
  const [selectedTexture, setSelectedTexture] = useState(textureOptions[0]);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [progress, ringColor, backgroundColor, strokeWidth, selectedTexture]);

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(parseInt(e.target.value));
  };

  const handleRingColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRingColor(e.target.value);
  };

  const handleBackgroundColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBackgroundColor(e.target.value);
  };

  const handleStrokeWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStrokeWidth(parseInt(e.target.value));
  };

  const handleTextureChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTexture(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Textured Progress Bar</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
        <div key={key} className="relative">
          <CircularProgressBar 
            progress={progress} 
            size={150}
            strokeWidth={strokeWidth}
            ringColor={ringColor}
            backgroundColor={backgroundColor}
            textureImage={selectedTexture}
            showPercentage={false}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold" style={{ color: ringColor }}>{progress}%</span>
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
              max="30" 
              value={strokeWidth} 
              onChange={handleStrokeWidthChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="ring-color" className="block text-sm font-medium text-gray-700 mb-2">
                Ring Color
              </label>
              <div className="flex items-center">
                <input 
                  id="ring-color"
                  type="color" 
                  value={ringColor} 
                  onChange={handleRingColorChange}
                  className="h-8 w-8 mr-2 cursor-pointer"
                />
                <span className="text-sm">{ringColor}</span>
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
          
          <div>
            <label htmlFor="texture" className="block text-sm font-medium text-gray-700 mb-2">
              Texture Pattern
            </label>
            <select
              id="texture"
              value={selectedTexture}
              onChange={handleTextureChange}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              {textureOptions.map((texture, index) => (
                <option key={index} value={texture}>
                  {texture.split('/').pop()?.split('.')[0] || texture}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Customizable texture patterns</li>
          <li>Adjustable stroke width</li>
          <li>Custom ring and background colors</li>
          <li>Smooth animations with texture mapping</li>
        </ul>
      </div>
    </div>
  );
};

export default Example_5; 