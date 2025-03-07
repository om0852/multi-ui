"use client";
import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../_components/CircularProgressBar_1';

const Example_1 = () => {
  const [progress, setProgress] = useState(50);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [key, setKey] = useState(0); // Add a key to force re-render when progress changes

  // Update the key when progress changes to reset the animation
  useEffect(() => {
    setKey(prevKey => prevKey + 1);
    setAnimationComplete(false);
  }, [progress]);

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(parseInt(e.target.value));
  };

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
    console.log("Animation completed!");
  };

  const handleAnimationStart = () => {
    console.log("Animation started!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Circular Progress Bar Example</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
        <div key={key} className="relative">
          <CircularProgressBar 
            progress={progress} 
            size={150} 
            strokeWidth={15} 
            color="#4A90E2" 
            backgroundColor="#e6e6e6" 
            animationDuration={1} 
            showPercentage={false}
            onStart={handleAnimationStart}
            onComplete={handleAnimationComplete}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-[#4A90E2]">{progress}%</span>
          </div>
        </div>
        
        <div className="mt-8 w-full max-w-md">
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
        
        {animationComplete && (
          <div className="mt-4 text-green-600 font-medium">
            Animation completed!
          </div>
        )}
      </div>
      
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Customization Options</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Adjust the progress using the slider</li>
          <li>The component shows real-time progress percentage</li>
          <li>Animation duration is set to 1 second</li>
          <li>Callbacks for animation start and completion</li>
        </ul>
      </div>
    </div>
  );
};

export default Example_1; 