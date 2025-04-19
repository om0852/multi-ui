"use client";
import React, { useState } from 'react';
import ProgressBar_14 from '../tsx/ProgressBar_14';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [totalTime, setTotalTime] = useState('3:45');
  const [songTitle, setSongTitle] = useState('Neon Lights');
  const [artist, setArtist] = useState('The Digital Waves');

  // Function to simulate playing a song
  const togglePlay = () => {
    if (isPlaying) {
      // Pause the song
      setIsPlaying(false);
      return;
    }
    
    // Play or resume the song
    setIsPlaying(true);
    
    // If song is complete, restart
    if (progress >= 100) {
      setProgress(0);
      setCurrentTime('0:00');
    }
    
    // Generate a random song length between 2:30 and 4:30
    const minutes = Math.floor(Math.random() * 2) + 2;
    const seconds = Math.floor(Math.random() * 60);
    const totalSeconds = (minutes * 60) + seconds;
    const formattedTotalTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    setTotalTime(formattedTotalTime);
    
    // Simulate song playback
    const interval = setInterval(() => {
      if (!isPlaying) {
        clearInterval(interval);
        return;
      }
      
      setProgress(prev => {
        const newProgress = prev + (100 / (totalSeconds / 0.5)); // Update every 500ms
        
        // Update current time
        const elapsedSeconds = Math.floor((newProgress / 100) * totalSeconds);
        const currentMinutes = Math.floor(elapsedSeconds / 60);
        const currentSecs = elapsedSeconds % 60;
        setCurrentTime(`${currentMinutes}:${currentSecs.toString().padStart(2, '0')}`);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsPlaying(false);
          return 100;
        }
        
        return newProgress;
      });
    }, 500);
  };

  // Function to change the song
  const changeSong = () => {
    // Reset player
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime('0:00');
    
    // Generate random song data
    const songTitles = [
      'Neon Lights', 'Digital Dreams', 'Cosmic Journey', 
      'Electric Soul', 'Midnight Drive', 'Synthwave Sunset'
    ];
    const artists = [
      'The Digital Waves', 'Cyber Collective', 'Retrowave',
      'Neon Pulse', 'Midnight Synth', 'Electric Echo'
    ];
    
    setSongTitle(songTitles[Math.floor(Math.random() * songTitles.length)]);
    setArtist(artists[Math.floor(Math.random() * artists.length)]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-xl shadow-lg border border-purple-500/30">
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          Neon Music Player
        </h1>
        
        <div className="space-y-6">
          <div className="flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-4xl">🎵</span>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-xl font-bold text-white">{songTitle}</h2>
            <p className="text-purple-300">{artist}</p>
          </div>
          
          <div className="w-full space-y-2">
            <ProgressBar_14 
              progress={progress}
              height="h-3"
              color="bg-purple-500"
              backgroundColor="bg-gray-700"
              rounded={true}
              animationDuration={0.3}
              showCounter={false}
            />
            
            <div className="flex justify-between text-sm text-gray-400">
              <span>{currentTime}</span>
              <span>{totalTime}</span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <button
              onClick={changeSong}
              className="w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white"
            >
              <span className="text-xl">⏮</span>
            </button>
            
            <button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 flex items-center justify-center text-white shadow-lg"
            >
              <span className="text-2xl">{isPlaying ? '⏸' : '▶'}</span>
            </button>
            
            <button
              onClick={changeSong}
              className="w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white"
            >
              <span className="text-xl">⏭</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
