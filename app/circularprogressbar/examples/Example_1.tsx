"use client";
import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../_components/CircularProgressBar_1';

const Example_1 = () => {
  const [progress, setProgress] = useState(50);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [key, setKey] = useState(0); // Add a key to force re-render when progress changes
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Update the key when progress changes to reset the animation
  useEffect(() => {
    setKey(prevKey => prevKey + 1);
    setAnimationComplete(false);
  }, [progress]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate size based on screen width
  const getProgressBarSize = () => {
    if (windowWidth < 640) return 120; // mobile
    if (windowWidth < 1024) return 150; // tablet
    return 180; // desktop
  };

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-8">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-900 dark:text-white">Circular Progress Bar Example</h1>
      
      <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-md flex flex-col items-center w-full max-w-[90%] sm:max-w-md">
        <div key={key} className="relative">
          <CircularProgressBar 
            progress={progress} 
            size={getProgressBarSize()} 
            strokeWidth={windowWidth < 640 ? 12 : 15} 
            color="#4A90E2" 
            backgroundColor={windowWidth < 640 ? "#e6e6e6" : "#f3f4f6"} 
            animationDuration={1} 
            showPercentage={false}
            onStart={handleAnimationStart}
            onComplete={handleAnimationComplete}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl sm:text-2xl font-bold text-[#4A90E2]">{progress}%</span>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 w-full">
          <label htmlFor="progress-slider" className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200 mb-2">
            Progress: {progress}%
          </label>
          <input 
            id="progress-slider"
            type="range" 
            min="0" 
            max="100" 
            value={progress} 
            onChange={handleProgressChange}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        
        {animationComplete && (
          <div className="mt-4 text-green-600 dark:text-green-400 font-medium text-sm sm:text-base">
            Animation completed!
          </div>
        )}
      </div>
      
      <div className="mt-6 sm:mt-8 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md w-full max-w-[90%] sm:max-w-md">
        <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">Customization Options</h2>
        <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
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