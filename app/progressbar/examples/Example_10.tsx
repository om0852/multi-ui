"use client";
import React, { useState } from 'react';
import ProgressBar from '../_components/ProgressBar_10';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [taskCompleted, setTaskCompleted] = useState(false);

  // Function to simulate a data analysis process
  const startAnalysis = () => {
    setProgress(0);
    setIsLoading(true);
    setTaskCompleted(false);
    
    // Simulate a data analysis with varying speeds
    const interval = setInterval(() => {
      setProgress(prev => {
        // Simulate processing with variable speed
        const increment = Math.floor(Math.random() * 5) + 1;
        const newProgress = prev + increment;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setTaskCompleted(true);
            setIsLoading(false);
          }, 500);
          return 100;
        }
        
        return newProgress;
      });
    }, 200);
  };

  // Handle animation start
  const handleStart = () => {
    console.log('Analysis started');
  };

  // Handle animation completion
  const handleComplete = () => {
    console.log('Analysis progress animation completed');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Data Analysis Progress
        </h1>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-sm font-medium text-gray-700">Analyzing Dataset</p>
              <p className="text-sm font-medium text-gray-700">{progress}%</p>
            </div>
            
            <ProgressBar 
              progress={progress}
              height="h-6"
              color="bg-gradient-to-r from-pink-500 to-yellow-500"
              backgroundColor="bg-gray-200"
              rounded={true}
              animationDuration={0.5}
              onStart={handleStart}
              onComplete={handleComplete}
              showCounter={true}
            />
            
            <p className="text-sm text-gray-600 text-center">
              {isLoading ? 'Processing data...' : taskCompleted ? 'Analysis complete!' : 'Ready to analyze'}
            </p>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={startAnalysis}
              disabled={isLoading}
              className={`px-6 py-2 rounded-md font-medium text-white ${
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600'
              }`}
            >
              {isLoading ? 'Analyzing...' : 'Start Analysis'}
            </button>
          </div>
          
          {taskCompleted && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md">
              <h3 className="font-medium text-gray-800 mb-2">Analysis Results</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Data points processed:</span>
                  <span className="font-medium">1,248</span>
                </div>
                <div className="flex justify-between">
                  <span>Anomalies detected:</span>
                  <span className="font-medium">17</span>
                </div>
                <div className="flex justify-between">
                  <span>Processing time:</span>
                  <span className="font-medium">3.2 seconds</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
