'use client';
import React, { useEffect, useState, useRef } from 'react';

// Audio bar that reacts to "sound"
const AudioBar = ({ height = 50, width = 6, color = '#4f46e5', delay = 0, minHeight = 5 }) => {
  const [currentHeight, setCurrentHeight] = useState(height);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newHeight = Math.max(minHeight, Math.floor(Math.random() * height));
      setCurrentHeight(newHeight);
    }, 150 + delay);
    
    return () => clearInterval(interval);
  }, [height, delay, minHeight]);
  
  return (
    <div 
      className="rounded-sm mx-[1px] transition-all duration-150 ease-in-out" 
      style={{ 
        height: `${currentHeight}px`, 
        width: `${width}px`, 
        backgroundColor: color,
        transition: `height ${(100 + delay) / 1000}s ease-in-out`
      }}
    ></div>
  );
};

// Group of audio bars creating an equalizer effect
const EqualizerDisplay = ({ barCount = 20, maxHeight = 50, minHeight = 5, primaryColor = '#4f46e5', secondaryColor = '#818cf8' }) => {
  return (
    <div className="flex items-end justify-center h-[60px]">
      {Array.from({ length: barCount }).map((_, index) => (
        <AudioBar 
          key={index}
          height={maxHeight}
          minHeight={minHeight}
          delay={index * 20}
          color={index % 3 === 0 ? primaryColor : secondaryColor}
          width={Math.max(3, Math.min(8, Math.floor(200 / barCount)))}
        />
      ))}
    </div>
  );
};

// Circular audio visualizer
const CircularVisualizer = ({ size = 160, barCount = 60, primaryColor = '#4f46e5', secondaryColor = '#818cf8', active = true }) => {
  const [barHeights, setBarHeights] = useState([]);
  
  useEffect(() => {
    if (!active) {
      setBarHeights(Array(barCount).fill(0.2));
      return;
    }
    
    // Initialize bars
    setBarHeights(Array(barCount).fill(0).map(() => Math.random() * 0.8 + 0.2));
    
    const interval = setInterval(() => {
      setBarHeights(prevHeights => 
        prevHeights.map(h => {
          const change = (Math.random() - 0.5) * 0.2;
          return Math.max(0.2, Math.min(1, h + change));
        })
      );
    }, 150);
    
    return () => clearInterval(interval);
  }, [barCount, active]);
  
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div className="absolute inset-0 rounded-full border border-white/10 flex items-center justify-center">
        <div className="text-white text-xl font-mono">{active ? "LIVE" : "IDLE"}</div>
      </div>
      
      <svg width={size} height={size} viewBox="0 0 100 100">
        <defs>
          <linearGradient id="barGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>
        
        {barHeights.map((height, index) => {
          const angle = (index / barCount) * 2 * Math.PI;
          const barWidth = (Math.PI * 2 * 40) / barCount * 0.75; // 40 is radius, 0.75 for spacing
          
          const innerRadius = 42 - (height * 20); // Inverse, so taller bars go inward
          const outerRadius = 42;
          
          const startX = 50 + innerRadius * Math.cos(angle);
          const startY = 50 + innerRadius * Math.sin(angle);
          const endX = 50 + outerRadius * Math.cos(angle);
          const endY = 50 + outerRadius * Math.sin(angle);
          
          return (
            <line 
              key={index}
              x1={startX}
              y1={startY}
              x2={endX}
              y2={endY}
              stroke={index % 5 === 0 ? secondaryColor : "url(#barGradient)"}
              strokeWidth={barWidth}
              strokeLinecap="round"
              className="transition-all duration-150 ease-in-out"
            />
          );
        })}
        
        {/* Center circle */}
        <circle cx="50" cy="50" r="20" fill="rgba(20, 20, 30, 0.6)" />
      </svg>
    </div>
  );
};

// Audio waveform
const Waveform = ({ height = 60, width = 300, color = '#4f46e5', active = true }) => {
  const [points, setPoints] = useState([]);
  const pointCount = Math.floor(width / 2);
  
  useEffect(() => {
    if (!active) {
      // Flat line when inactive
      setPoints(Array(pointCount).fill(height / 2));
      return;
    }
    
    // Generate initial waveform
    const generateWaveform = () => {
      const newPoints = [];
      
      // Generate a more "musical" waveform with sine waves
      for (let i = 0; i < pointCount; i++) {
        const x = i / pointCount;
        
        // Create complex waveform by combining sine waves
        const y = height/2 + 
          Math.sin(x * Math.PI * 8) * 10 * Math.random() + 
          Math.sin(x * Math.PI * 4) * 8 + 
          Math.sin(x * Math.PI * 16) * 5 * Math.random();
        
        newPoints.push(y);
      }
      
      return newPoints;
    };
    
    setPoints(generateWaveform());
    
    const interval = setInterval(() => {
      setPoints(generateWaveform());
    }, 200);
    
    return () => clearInterval(interval);
  }, [pointCount, height, active]);
  
  // Create SVG path from points
  const createPath = () => {
    let path = `M 0,${height/2} `;
    
    points.forEach((point, index) => {
      path += `L ${index * 2},${point} `;
    });
    
    return path;
  };
  
  return (
    <div className="overflow-hidden" style={{ height, width }}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <path d={createPath()} fill="none" stroke={color} strokeWidth="2" />
      </svg>
    </div>
  );
};

// Digital display for time
const MusicDigit = ({ digit, prevDigit, color = '#4f46e5' }) => {
  const isDigitChanged = digit !== prevDigit;
  
  return (
    <div className="flex items-center justify-center mx-1">
      <div 
        className={`font-mono text-4xl ${isDigitChanged ? 'animate-[musicBeat_0.5s_ease-out]' : ''}`}
        style={{ color }}
      >
        {digit.toString().padStart(2, '0')}
      </div>
    </div>
  );
};

// Vinyl record separator
const VinylSeparator = ({ rotate = true, size = 30 }) => {
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    if (!rotate) return;
    
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 20);
    
    return () => clearInterval(interval);
  }, [rotate]);
  
  return (
    <div 
      className="relative mx-2"
      style={{ 
        width: size, 
        height: size, 
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.02s linear'
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100">
        {/* Vinyl record */}
        <circle cx="50" cy="50" r="45" fill="#111" />
        <circle cx="50" cy="50" r="40" fill="#222" />
        <circle cx="50" cy="50" r="35" fill="#111" />
        <circle cx="50" cy="50" r="30" fill="#222" />
        <circle cx="50" cy="50" r="25" fill="#111" />
        <circle cx="50" cy="50" r="20" fill="#333" />
        <circle cx="50" cy="50" r="15" fill="#111" />
        <circle cx="50" cy="50" r="10" fill="#444" />
        <circle cx="50" cy="50" r="5" fill="#111" />
        
        {/* Center hole */}
        <circle cx="50" cy="50" r="3" fill="white" opacity="0.5" />
      </svg>
    </div>
  );
};

// Music player controls
const PlaybackControls = ({ isPlaying = true, onPlayPause, onNext, onPrev }) => {
  return (
    <div className="flex items-center justify-center space-x-4 my-3">
      <button 
        className="p-2 rounded-full hover:bg-white/10 text-white opacity-80 hover:opacity-100 transition-opacity"
        onClick={onPrev}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6,6H8V18H6V6M9.5,12L18,18V6L9.5,12Z" />
        </svg>
      </button>
      
      <button 
        className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        onClick={onPlayPause}
      >
        {isPlaying ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,19H18V5H14M6,19H10V5H6V19Z" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
          </svg>
        )}
      </button>
      
      <button 
        className="p-2 rounded-full hover:bg-white/10 text-white opacity-80 hover:opacity-100 transition-opacity"
        onClick={onNext}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16,18H18V6H16V18M6,18L14.5,12L6,6V18Z" />
        </svg>
      </button>
    </div>
  );
};

// Track information display
const TrackInfo = ({ title, artist, album, duration, elapsed }) => {
  const progressPercent = elapsed / duration * 100;
  
  return (
    <div className="text-white">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-lg font-medium">{title}</div>
          <div className="text-sm opacity-70">{artist} • {album}</div>
        </div>
        <div className="text-sm opacity-70 font-mono">
          {elapsed}:{duration}
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-indigo-600 to-purple-600"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
    </div>
  );
};

// Volume control
const VolumeControl = ({ level = 70, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white opacity-70">
        <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
      </svg>
      
      <div className="w-20 h-1 bg-white/20 rounded-full overflow-hidden">
        <div 
          className="h-full bg-white/70"
          style={{ width: `${level}%` }}
        ></div>
      </div>
      
      <div className="text-xs text-white opacity-70 font-mono">{level}%</div>
    </div>
  );
};

// Main Clock component
const Clock_99 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());
  const [isPlaying, setIsPlaying] = useState(true);
  const [trackPosition, setTrackPosition] = useState(42);
  const [volume, setVolume] = useState(70);
  const [activeBars, setActiveBars] = useState(true);
  const [currentTrack, setCurrentTrack] = useState({
    title: "Time in Motion",
    artist: "The Clockmakers",
    album: "Temporal Beats",
    elapsed: "01:42",
    duration: "03:24"
  });
  
  // Reference for active visualizers
  const intervalRef = useRef(null);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
    }, 1000);
    
    // Increment track position
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setTrackPosition(prev => {
          if (prev >= 324) return 0;
          return prev + 1;
        });
      }, 1000);
    }
    
    // Occasionally change active bars state for variety
    const barsTimer = setInterval(() => {
      if (Math.random() > 0.7) {
        setActiveBars(prev => !prev);
        
        // Switch back to active after 2-5 seconds if we just turned it off
        if (activeBars) {
          setTimeout(() => setActiveBars(true), 2000 + Math.random() * 3000);
        }
      }
    }, 5000);
    
    return () => {
      clearInterval(timer);
      clearInterval(intervalRef.current);
      clearInterval(barsTimer);
    };
  }, [time, isPlaying, activeBars]);
  
  // Format track position
  useEffect(() => {
    const minutes = Math.floor(trackPosition / 60).toString().padStart(2, '0');
    const seconds = (trackPosition % 60).toString().padStart(2, '0');
    
    setCurrentTrack(prev => ({
      ...prev,
      elapsed: `${minutes}:${seconds}`
    }));
  }, [trackPosition]);
  
  // Handle play/pause
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    
    if (isPlaying) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => {
        setTrackPosition(prev => {
          if (prev >= 324) return 0;
          return prev + 1;
        });
      }, 1000);
    }
  };
  
  // Handle next/previous
  const handleNext = () => {
    setTrackPosition(0);
    const tracks = [
      { title: "Time in Motion", artist: "The Clockmakers", album: "Temporal Beats", duration: "03:24" },
      { title: "Seconds Pass", artist: "Time Travelers", album: "Rhythm & Time", duration: "02:56" },
      { title: "Digital Rhapsody", artist: "The Clockmakers", album: "Temporal Beats", duration: "03:45" },
      { title: "Midnight Beat", artist: "Chronos", album: "Hours & Minutes", duration: "04:12" }
    ];
    
    const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
    setCurrentTrack({...randomTrack, elapsed: "00:00"});
  };
  
  const handlePrev = () => {
    setTrackPosition(0);
    setCurrentTrack(prev => ({...prev, elapsed: "00:00"}));
  };
  
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  const prevHours = prevTime.getHours().toString().padStart(2, '0');
  const prevMinutes = prevTime.getMinutes().toString().padStart(2, '0');
  const prevSeconds = prevTime.getSeconds().toString().padStart(2, '0');
  
  // Colors based on hour of day (just for variety)
  const getTimeBasedColor = () => {
    const hour = time.getHours();
    if (hour < 6) return { primary: '#9333ea', secondary: '#c084fc' }; // Night - purple
    if (hour < 12) return { primary: '#3b82f6', secondary: '#60a5fa' }; // Morning - blue
    if (hour < 18) return { primary: '#f59e0b', secondary: '#fbbf24' }; // Afternoon - amber
    return { primary: '#4f46e5', secondary: '#818cf8' }; // Evening - indigo
  };
  
  const colors = getTimeBasedColor();

  return (
    <div className="relative p-6 rounded-lg bg-gradient-to-br from-gray-900 to-black shadow-2xl overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 50 }).map((_, index) => (
          <div 
            key={index}
            className="absolute w-1 h-1 rounded-full bg-white animate-pulse"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              animationDuration: `${1 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Header */}
      <div className="relative z-10 flex justify-between items-center mb-4">
        <div className="text-xl font-medium text-white">AUDIO TIME</div>
        <VolumeControl 
          level={volume} 
          onChange={level => setVolume(level)} 
        />
      </div>
      
      {/* Main visualizer display */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Top equalizer */}
        <div className="w-full mb-4">
          <EqualizerDisplay 
            barCount={40} 
            maxHeight={30} 
            primaryColor={colors.primary} 
            secondaryColor={colors.secondary}
          />
        </div>
        
        {/* Waveform */}
        <div className="mb-6 w-full">
          <Waveform 
            width={600} 
            height={60} 
            color={colors.primary} 
            active={isPlaying && activeBars}
          />
        </div>
        
        {/* Main time display */}
        <div className="flex items-center justify-center mb-6">
          <MusicDigit digit={hours} prevDigit={prevHours} color={colors.primary} />
          <VinylSeparator rotate={isPlaying} />
          <MusicDigit digit={minutes} prevDigit={prevMinutes} color={colors.primary} />
          <VinylSeparator rotate={isPlaying} />
          <MusicDigit digit={seconds} prevDigit={prevSeconds} color={colors.primary} />
        </div>
        
        {/* Circle visualizer */}
        <div className="mb-6">
          <CircularVisualizer 
            size={200} 
            primaryColor={colors.primary} 
            secondaryColor={colors.secondary}
            active={isPlaying && activeBars}
          />
        </div>
        
        {/* Player controls */}
        <div className="w-full max-w-md">
          <PlaybackControls 
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            onNext={handleNext}
            onPrev={handlePrev}
          />
          
          <TrackInfo 
            title={currentTrack.title}
            artist={currentTrack.artist}
            album={currentTrack.album}
            elapsed={currentTrack.elapsed}
            duration={currentTrack.duration}
          />
        </div>
        
        {/* Bottom equalizer */}
        <div className="w-full mt-6">
          <EqualizerDisplay 
            barCount={20} 
            maxHeight={40} 
            primaryColor={colors.secondary} 
            secondaryColor={colors.primary}
          />
        </div>
        
        {/* Date display at bottom */}
        <div className="mt-4 text-sm text-white/60 font-mono">
          {time.toLocaleDateString('en-US', { 
            weekday: 'long',
            month: 'long', 
            day: 'numeric',
            year: 'numeric'
          })}
        </div>
      </div>
    </div>
  );
};

export default Clock_99;

// Add these keyframes to your globals.css:
/*
@keyframes musicBeat {
  0% { transform: scale(1); opacity: 1; }
  20% { transform: scale(1.1); opacity: 1; }
  40% { transform: scale(1); opacity: 0.8; }
  60% { transform: scale(1.05); opacity: 0.9; }
  100% { transform: scale(1); opacity: 1; }
}
*/ 