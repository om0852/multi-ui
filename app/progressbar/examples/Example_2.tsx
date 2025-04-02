"use client";
import React, { useState } from 'react';
import ProgressBar_2 from '../tsx/ProgressBar_2';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Idle');

  // Function to simulate a download process
  const startDownload = () => {
    setStatus('Starting download...');
    setProgress(0);
    
    // Simulate a download that takes 10 seconds to complete
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 1000);
  };

  // Callbacks for the progress bar
  const handleStart = () => {
    setStatus('Downloading...');
  };

  const handleComplete = () => {
    if (progress === 100) {
      setStatus('Download complete!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Animated Progress Bar
        </h1>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-sm font-medium text-gray-700">Download Progress</p>
              <p className="text-sm font-medium text-gray-700">{progress}%</p>
            </div>
            
            <ProgressBar_2 
              progress={progress}
              onStart={handleStart}
              onComplete={handleComplete}
            />
            
            <p className="text-sm text-gray-600 italic">{status}</p>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={startDownload}
              disabled={progress > 0 && progress < 100}
              className={`px-4 py-2 rounded-md font-medium text-white ${
                progress > 0 && progress < 100 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {progress > 0 && progress < 100 ? 'Downloading...' : 'Start Download'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
