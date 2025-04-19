"use client";
import React, { useState } from 'react';
import ProgressBar_13 from '../tsx/ProgressBar_13';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(0);
  const [goal, setGoal] = useState(10000);
  const [currentSteps, setCurrentSteps] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to simulate walking and updating steps
  const simulateWalking = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSteps(0);
    setProgress(0);
    
    // Generate a random goal between 8,000 and 12,000 steps
    const newGoal = Math.floor(Math.random() * 4000) + 8000;
    setGoal(newGoal);
    
    // Simulate walking with varying speeds
    const interval = setInterval(() => {
      setCurrentSteps(prev => {
        // Random step increment between 200 and 500 steps
        const stepIncrement = Math.floor(Math.random() * 300) + 200;
        const newSteps = prev + stepIncrement;
        
        // Calculate progress percentage
        const newProgress = Math.min(100, Math.floor((newSteps / newGoal) * 100));
        setProgress(newProgress);
        
        if (newSteps >= newGoal || newProgress >= 100) {
          clearInterval(interval);
          setIsAnimating(false);
          return newGoal;
        }
        
        return newSteps;
      });
    }, 500);
  };

  // Reset the simulation
  const resetSimulation = () => {
    setCurrentSteps(0);
    setProgress(0);
    setIsAnimating(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Daily Step Tracker
        </h1>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl mr-3">👟</span>
              <div>
                <h3 className="font-medium text-gray-800">Today&apos;s Steps</h3>
                <p className="text-sm text-gray-600">Goal: {goal.toLocaleString()} steps</p>
              </div>
            </div>
            <span className="text-xl font-bold">{currentSteps.toLocaleString()}</span>
          </div>
          
          <div className="w-full">
            <ProgressBar_13 
              progress={progress}
              height="h-6"
              color="bg-green-500"
              backgroundColor="bg-gray-200"
              animationDuration={0.8}
              showCounter={true}
            />
            
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>0</span>
              <span>{goal.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={simulateWalking}
              disabled={isAnimating}
              className={`px-6 py-2 rounded-md font-medium text-white ${
                isAnimating 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {isAnimating ? 'Walking...' : 'Simulate Walking'}
            </button>
            
            <button
              onClick={resetSimulation}
              disabled={isAnimating || progress === 0}
              className={`px-6 py-2 rounded-md font-medium ${
                isAnimating || progress === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-red-100 text-red-600 hover:bg-red-200'
              }`}
            >
              Reset
            </button>
          </div>
          
          {progress === 100 && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center">
              <p className="font-medium">Goal achieved! 🎉</p>
              <p className="text-sm mt-1">You&apos;ve reached your daily step goal.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
