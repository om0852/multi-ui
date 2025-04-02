"use client";
import React, { useState } from 'react';
import ProgressBar_21 from '../tsx/ProgressBar_21';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(0);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateComplete, setUpdateComplete] = useState(false);
  const [currentPhase, setCurrentPhase] = useState('');
  const [updateVersion, setUpdateVersion] = useState('v2.5.3');
  
  // Update phases
  const updatePhases = [
    'Checking for updates...',
    'Downloading update package...',
    'Verifying package integrity...',
    'Backing up current system...',
    'Installing updates...',
    'Configuring system...',
    'Finalizing installation...'
  ];
  
  // Function to simulate system update
  const startUpdate = () => {
    if (isUpdating) return;
    
    // Reset state
    setProgress(0);
    setIsUpdating(true);
    setUpdateComplete(false);
    setCurrentPhase(updatePhases[0]);
    
    // Generate a random version number
    const major = Math.floor(Math.random() * 3) + 2;
    const minor = Math.floor(Math.random() * 10);
    const patch = Math.floor(Math.random() * 20);
    setUpdateVersion(`v${major}.${minor}.${patch}`);
    
    // Simulate update process with phases
    let currentPhaseIndex = 0;
    let phaseProgress = 0;
    const phaseDurations = [5, 20, 10, 15, 30, 15, 5]; // Percentage of total progress for each phase
    
    const interval = setInterval(() => {
      phaseProgress++;
      
      // Calculate overall progress based on current phase and phase progress
      const phaseContribution = phaseDurations[currentPhaseIndex];
      const previousPhaseContributions = phaseDurations
        .slice(0, currentPhaseIndex)
        .reduce((sum, duration) => sum + duration, 0);
      
      const phaseProgressPercentage = (phaseProgress / phaseContribution) * 100;
      const overallProgress = Math.min(
        100,
        previousPhaseContributions + (phaseContribution * (phaseProgress / 100))
      );
      
      setProgress(Math.floor(overallProgress));
      
      // Move to next phase if current phase is complete
      if (phaseProgressPercentage >= 100 && currentPhaseIndex < updatePhases.length - 1) {
        currentPhaseIndex++;
        phaseProgress = 0;
        setCurrentPhase(updatePhases[currentPhaseIndex]);
      }
      
      // Complete update
      if (overallProgress >= 100) {
        clearInterval(interval);
        setIsUpdating(false);
        setUpdateComplete(true);
        setProgress(100);
        setCurrentPhase('Update complete!');
      }
    }, 200);
  };
  
  // Function to restart the system (simulated)
  const restartSystem = () => {
    setCurrentPhase('Restarting system...');
    
    // Simulate restart after a delay
    setTimeout(() => {
      setUpdateComplete(false);
      setProgress(0);
      setCurrentPhase('');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
        <h1 className="text-2xl font-bold text-center text-gray-100 mb-6">
          System Update
        </h1>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between p-3 bg-gray-700 rounded-md">
            <div className="flex items-center">
              <span className="text-2xl mr-3">⚙️</span>
              <div>
                <h3 className="font-medium text-gray-100">System Software</h3>
                <p className="text-sm text-gray-400">Current: v2.4.8</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-100">Update Available</p>
              <p className="text-xs text-gray-400">{updateVersion}</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-400">
              <span>Update Progress</span>
              <span>{progress}%</span>
            </div>
            
            <ProgressBar_21 
              progress={progress}
              height="h-5"
              color="bg-red-500"
              backgroundColor="bg-gray-700"
              animationDuration={0.5}
              showCounter={false}
            />
            
            <p className="text-sm text-gray-300 text-center font-medium">
              {currentPhase || 'Ready to update'}
            </p>
          </div>
          
          <div className="p-3 bg-gray-700 rounded-md">
            <h3 className="font-medium text-gray-100 mb-2">Update Notes:</h3>
            <ul className="text-sm text-gray-400 space-y-1 list-disc pl-5">
              <li>Improved system performance</li>
              <li>Enhanced security features</li>
              <li>Fixed critical bugs</li>
              <li>Added new functionality</li>
            </ul>
          </div>
          
          <div className="flex justify-center">
            {!updateComplete ? (
              <button
                onClick={startUpdate}
                disabled={isUpdating}
                className={`px-6 py-2 rounded-md font-medium text-white ${
                  isUpdating 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                {isUpdating ? 'Updating...' : 'Install Update'}
              </button>
            ) : (
              <button
                onClick={restartSystem}
                className="px-6 py-2 rounded-md font-medium text-white bg-green-600 hover:bg-green-700"
              >
                Restart System
              </button>
            )}
          </div>
          
          {updateComplete && (
            <div className="mt-4 p-3 bg-green-900/30 text-green-400 rounded-md text-center border border-green-800/50">
              <p className="font-medium">Update installed successfully!</p>
              <p className="text-sm mt-1">System restart required to complete the update.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
