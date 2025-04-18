"use client";
import React, { useState } from 'react';
import ProgressBar_15 from '../_components/ProgressBar_15';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Press Start to Load Game');
  const [gameTitle, setGameTitle] = useState('Cosmic Defenders');
  
  // Array of loading messages
  const loadingMessages = [
    'Initializing game engine...',
    'Loading game assets...',
    'Generating world...',
    'Spawning NPCs...',
    'Configuring physics...',
    'Loading textures...',
    'Preparing sound effects...',
    'Calibrating controls...',
    'Establishing connection to server...',
    'Almost ready...'
  ];
  
  // Array of game titles
  const gameTitles = [
    'Cosmic Defenders',
    'Neon Racer',
    'Dungeon Crawler',
    'Space Explorer',
    'Zombie Survival',
    'Fantasy Quest'
  ];

  // Function to simulate game loading
  const startLoading = () => {
    if (isLoading) return;
    
    // Reset progress and state
    setProgress(0);
    setIsLoading(true);
    setLoadingText(loadingMessages[0]);
    
    // Choose a random game title
    const randomTitle = gameTitles[Math.floor(Math.random() * gameTitles.length)];
    setGameTitle(randomTitle);
    
    // Simulate loading with varying speeds and messages
    let currentMessageIndex = 0;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        // Random progress increment between 1 and 5
        const increment = Math.floor(Math.random() * 5) + 1;
        const newProgress = prev + increment;
        
        // Update loading message at certain progress points
        if (newProgress > (currentMessageIndex + 1) * 10 && currentMessageIndex < loadingMessages.length - 1) {
          currentMessageIndex++;
          setLoadingText(loadingMessages[currentMessageIndex]);
        }
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setLoadingText('Game loaded successfully! Launching...');
          
          // Simulate game launch after a delay
          setTimeout(() => {
            setIsLoading(false);
            setLoadingText('Press Start to Load Game');
          }, 1500);
          
          return 100;
        }
        
        return newProgress;
      });
    }, 200);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-lg p-6 bg-gray-800 rounded-xl shadow-lg border border-blue-500/30">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-400 mb-2">
            {gameTitle}
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          <div className="flex items-center justify-center">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-purple-500 rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-6xl">🎮</span>
            </div>
          </div>
          
          <div className="w-full space-y-3">
            <p className="text-center text-blue-300 font-medium">
              {loadingText}
            </p>
            
            <ProgressBar_15 
              progress={progress}
              height="h-5"
              color="bg-blue-500"
              backgroundColor="bg-gray-700"
              rounded={true}
              animationDuration={0.3}
              showCounter={true}
            />
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={startLoading}
              disabled={isLoading}
              className={`px-8 py-3 rounded-md font-bold text-white ${
                isLoading 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
              }`}
            >
              {isLoading ? 'LOADING...' : 'START GAME'}
            </button>
          </div>
          
          {progress === 100 && (
            <div className="mt-4 p-3 bg-green-900/50 text-green-300 rounded-md text-center border border-green-500/30">
              <p className="font-medium">Game loaded successfully!</p>
              <p className="text-sm mt-1">Launching game environment...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
