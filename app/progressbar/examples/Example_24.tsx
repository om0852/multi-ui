"use client";
import React, { useState } from 'react';
import ProgressBar_24 from '../_components/ProgressBar_24';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(0);
  const [isRendering, setIsRendering] = useState(false);
  const [renderComplete, setRenderComplete] = useState(false);
  const [videoLength, setVideoLength] = useState('02:45');
  const [resolution, setResolution] = useState('1080p');
  const [frameRate, setFrameRate] = useState(30);
  const [statusText, setStatusText] = useState('Ready to render');
  
  // Array of video resolutions
  const resolutions = ['720p', '1080p', '1440p', '4K'];
  
  // Array of frame rates
  const frameRates = [24, 30, 60];
  
  // Function to simulate video rendering
  const startRendering = () => {
    if (isRendering) return;
    
    // Reset state
    setProgress(0);
    setIsRendering(true);
    setRenderComplete(false);
    setStatusText('Initializing render...');
    
    // Choose random video properties
    const randomResolution = resolutions[Math.floor(Math.random() * resolutions.length)];
    const randomFrameRate = frameRates[Math.floor(Math.random() * frameRates.length)];
    
    // Generate random video length (1-5 minutes)
    const minutes = Math.floor(Math.random() * 5) + 1;
    const seconds = Math.floor(Math.random() * 60);
    const formattedLength = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    setResolution(randomResolution);
    setFrameRate(randomFrameRate);
    setVideoLength(formattedLength);
    
    // Calculate total frames for simulation
    const totalSeconds = (minutes * 60) + seconds;
    const totalFrames = totalSeconds * randomFrameRate;
    
    // Simulate rendering process
    let renderedFrames = 0;
    
    // Delay to simulate initialization
    setTimeout(() => {
      setStatusText('Rendering frames...');
      
      const interval = setInterval(() => {
        // Render a batch of frames (variable speed)
        const framesBatch = Math.floor(Math.random() * 30) + 10;
        renderedFrames += framesBatch;
        
        // Calculate progress percentage
        const newProgress = Math.min(100, Math.floor((renderedFrames / totalFrames) * 100));
        setProgress(newProgress);
        
        // Update status text with frame information
        setStatusText(`Rendering frame ${renderedFrames}/${totalFrames}`);
        
        if (renderedFrames >= totalFrames || newProgress >= 100) {
          clearInterval(interval);
          setProgress(100);
          setStatusText('Finalizing video...');
          
          // Simulate finalization delay
          setTimeout(() => {
            setIsRendering(false);
            setRenderComplete(true);
            setStatusText('Render complete');
          }, 1500);
        }
      }, 300);
    }, 1000);
  };
  
  // Function to change video settings
  const changeSettings = () => {
    if (isRendering) return;
    
    const randomResolution = resolutions[Math.floor(Math.random() * resolutions.length)];
    const randomFrameRate = frameRates[Math.floor(Math.random() * frameRates.length)];
    
    // Generate random video length (1-5 minutes)
    const minutes = Math.floor(Math.random() * 5) + 1;
    const seconds = Math.floor(Math.random() * 60);
    const formattedLength = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    setResolution(randomResolution);
    setFrameRate(randomFrameRate);
    setVideoLength(formattedLength);
    setRenderComplete(false);
    setProgress(0);
    setStatusText('Ready to render');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-lg p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
        <h1 className="text-2xl font-bold text-center text-gray-100 mb-6">
          Video Renderer
        </h1>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-gray-700 rounded-md">
            <div className="flex items-center">
              <span className="text-2xl mr-3">🎬</span>
              <div>
                <h3 className="font-medium text-gray-100">Project: My Awesome Video</h3>
                <p className="text-sm text-gray-400">Length: {videoLength}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-100">{resolution} @ {frameRate}fps</p>
              <p className="text-xs text-gray-400">H.264 Codec</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="relative h-40 bg-black rounded-md overflow-hidden">
              {/* Video preview mockup */}
              <div className="absolute inset-0 flex items-center justify-center">
                {renderComplete ? (
                  <span className="text-4xl">🎥</span>
                ) : (
                  <span className="text-gray-600">Video Preview</span>
                )}
              </div>
              
              {/* Timeline mockup */}
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-gray-800 flex items-center px-2">
                <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500"
                    style={{ width: `${renderComplete ? 100 : 0}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            <ProgressBar_24 
              progress={progress}
              text={statusText}
              animationDuration={0.5}
              showCounter={true}
            />
            
            <div className="grid grid-cols-3 gap-4">
              <div className="p-3 bg-gray-700 rounded-md text-center">
                <p className="text-xs text-gray-400 mb-1">Resolution</p>
                <p className="font-medium text-gray-100">{resolution}</p>
              </div>
              <div className="p-3 bg-gray-700 rounded-md text-center">
                <p className="text-xs text-gray-400 mb-1">Frame Rate</p>
                <p className="font-medium text-gray-100">{frameRate} fps</p>
              </div>
              <div className="p-3 bg-gray-700 rounded-md text-center">
                <p className="text-xs text-gray-400 mb-1">Duration</p>
                <p className="font-medium text-gray-100">{videoLength}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={startRendering}
              disabled={isRendering}
              className={`px-6 py-2 rounded-md font-medium text-white ${
                isRendering 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isRendering ? 'Rendering...' : renderComplete ? 'Render Again' : 'Start Render'}
            </button>
            
            <button
              onClick={changeSettings}
              disabled={isRendering}
              className={`px-6 py-2 rounded-md font-medium ${
                isRendering
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
            >
              Change Settings
            </button>
          </div>
          
          {renderComplete && (
            <div className="mt-4 p-3 bg-green-900/30 text-green-400 rounded-md text-center border border-green-800/50">
              <p className="font-medium">Render complete!</p>
              <p className="text-sm mt-1">Your {resolution} video at {frameRate}fps is ready for export.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
