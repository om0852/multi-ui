'use client';
import React, { useState, useEffect } from 'react';

// Equalizer bars that react to time changes
const EqualizerBars = ({ count = 12, active = false, height = 40 }) => {
  const [barHeights, setBarHeights] = useState([]);
  
  useEffect(() => {
    // Generate random heights for bars
    const generateBars = () => {
      return Array.from({ length: count }).map(() => 
        Math.floor(Math.random() * (height - 10) + 10)
      );
    };
    
    // Initialize bars
    setBarHeights(generateBars());
    
    // If active, animate bars
    let interval;
    if (active) {
      interval = setInterval(() => {
        setBarHeights(generateBars());
      }, 200);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [active, count, height]);
  
  return (
    <div className="flex items-end h-12 space-x-1">
      {barHeights.map((h, i) => (
        <div 
          key={i}
          className={`w-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t-sm transition-all duration-200 ${
            active ? 'opacity-100' : 'opacity-40' 
          }`}
          style={{ height: `${h}px` }}
        />
      ))}
    </div>
  );
};

// Waveform visualization
const Waveform = ({ active, amplitude = 20, frequency = 4, phase = 0 }) => {
  const [points, setPoints] = useState("");
  
  useEffect(() => {
    // Generate sine wave path
    const generateWave = () => {
      const steps = 100;
      const randomFactor = active ? (Math.random() * 5) - 2.5 : 0;
      
      let pathPoints = [];
      for (let i = 0; i <= steps; i++) {
        const x = (i / steps) * 100;
        const y = 50 + Math.sin((i / steps) * Math.PI * 2 * frequency + phase) * 
                 (amplitude + randomFactor);
        pathPoints.push(`${x},${y}`);
      }
      
      return pathPoints.join(" ");
    };
    
    // Set initial wave
    setPoints(generateWave());
    
    // If active, animate wave
    let interval;
    if (active) {
      interval = setInterval(() => {
        setPoints(generateWave());
      }, 150);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [active, amplitude, frequency, phase]);
  
  return (
    <div className="h-10 w-full overflow-hidden relative">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polyline
          points={points}
          fill="none"
          stroke="url(#waveGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          className={`transition-all duration-150 ${active ? 'opacity-100' : 'opacity-50'}`}
        />
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// A vibrating musical note
const MusicNote = ({ note = "♪", position, delay = 0, size = "text-3xl" }) => {
  return (
    <div 
      className={`absolute ${position} ${size} text-purple-400 animate-[noteVibrate_2s_ease-in-out_infinite] opacity-70`}
      style={{ 
        animationDelay: `${delay}s`,
        textShadow: '0 0 10px rgba(147, 51, 234, 0.5)'
      }}
    >
      {note}
    </div>
  );
};

// Audio spectrum for background decoration
const AudioSpectrum = ({ position, width, height, barCount = 20 }) => {
  const [bars, setBars] = useState([]);
  
  useEffect(() => {
    // Generate random spectrum bars
    const generateSpectrum = () => {
      return Array.from({ length: barCount }).map(() => 
        Math.floor(Math.random() * 100)
      );
    };
    
    // Initialize bars
    setBars(generateSpectrum());
    
    // Animate spectrum
    const interval = setInterval(() => {
      setBars(generateSpectrum());
    }, 1000);
    
    return () => clearInterval(interval);
  }, [barCount]);
  
  return (
    <div 
      className={`absolute ${position} flex items-end space-x-[1px] opacity-20`}
      style={{ width, height }}
    >
      {bars.map((h, i) => (
        <div 
          key={i} 
          className="flex-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-t transition-all duration-1000" 
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
};

// Digital display for digits
const SoundDigit = ({ digit, prevDigit }) => {
  const [isChanging, setIsChanging] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsChanging(true);
      const timer = setTimeout(() => setIsChanging(false), 300);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);
  
  return (
    <div className="relative w-16 h-28 mx-1 rounded overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-gray-900 rounded-lg border border-purple-500/30"></div>
      
      {/* Equalizer at the top */}
      <div className="absolute top-2 left-0 right-0 flex justify-center">
        <EqualizerBars count={6} active={isChanging} height={12} />
      </div>
      
      {/* Digit display */}
      <div 
        className={`absolute inset-0 flex items-center justify-center text-5xl font-mono font-bold 
                    ${isChanging ? 'text-pink-500 animate-[pulseText_0.3s_ease-in-out]' : 'text-purple-300'}`}
        style={{ textShadow: isChanging ? '0 0 15px rgba(236, 72, 153, 0.8)' : '0 0 10px rgba(147, 51, 234, 0.5)' }}
      >
        {digit}
      </div>
      
      {/* Waveform at the bottom */}
      <div className="absolute bottom-2 left-2 right-2">
        <Waveform active={isChanging} amplitude={8} frequency={3} phase={parseInt(digit) * 0.7} />
      </div>
    </div>
  );
};

// Separator between digit groups
const SoundSeparator = () => {
  return (
    <div className="relative h-28 flex flex-col items-center justify-center space-y-2 mx-2">
      <div className="w-2 h-2 rounded-full bg-purple-500 animate-[pulse_2s_infinite]"></div>
      <div className="w-2 h-2 rounded-full bg-pink-500 animate-[pulse_2s_infinite_0.5s]"></div>
    </div>
  );
};

// Main clock component
const Clock_84 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
      
      // Simulate "playing" state changing occasionally
      if (Math.random() > 0.8) {
        setIsPlaying(prev => !prev);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [time]);
  
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  
  const prevHours = prevTime.getHours().toString().padStart(2, '0');
  const prevMinutes = prevTime.getMinutes().toString().padStart(2, '0');
  const prevSeconds = prevTime.getSeconds().toString().padStart(2, '0');
  
  // Decorative music notes
  const musicNotes = [
    { note: "♪", position: "top-10 left-16", delay: 0, size: "text-3xl" },
    { note: "♫", position: "top-6 right-20", delay: 0.5, size: "text-4xl" },
    { note: "♬", position: "bottom-12 left-32", delay: 1, size: "text-2xl" },
    { note: "♩", position: "bottom-16 right-14", delay: 1.5, size: "text-3xl" },
    { note: "♪", position: "top-20 left-1/3", delay: 2, size: "text-2xl" },
  ];
  
  return (
    <div className="relative bg-gray-900 p-10 rounded-xl shadow-2xl overflow-hidden border border-purple-500/20">
      {/* Background spectrum visualizers */}
      <AudioSpectrum 
        position="top-0 left-0" 
        width="100%" 
        height="60px" 
        barCount={50}
      />
      <AudioSpectrum 
        position="bottom-0 left-0" 
        width="100%" 
        height="60px" 
        barCount={50}
      />
      
      {/* Decorative music notes */}
      {musicNotes.map((note, i) => (
        <MusicNote 
          key={i} 
          note={note.note} 
          position={note.position} 
          delay={note.delay} 
          size={note.size} 
        />
      ))}
      
      {/* Player controls */}
      <div className="relative z-10 flex justify-between items-center mb-6">
        <div className="flex items-center space-x-3">
          <button 
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isPlaying ? 'bg-purple-600' : 'bg-gray-800 border border-purple-500/30'
            }`}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <span className="w-3 h-3 bg-white rounded"></span> // Pause icon
            ) : (
              <span className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-white ml-1"></span> // Play icon
            )}
          </button>
          <div className="text-sm text-purple-300 font-mono">
            {time.toLocaleDateString('en-US', { 
              weekday: 'short',
              year: 'numeric',
              month: 'short', 
              day: 'numeric' 
            })}
          </div>
        </div>
        
        <div className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Rhythm Clock
        </div>
        
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-green-500' : 'bg-gray-500'}`}></div>
          <div className="text-sm text-purple-300 font-mono">
            {isPlaying ? 'PLAYING' : 'PAUSED'}
          </div>
        </div>
      </div>
      
      {/* Main waveform visualization */}
      <div className="relative z-10 mb-8">
        <Waveform 
          active={isPlaying} 
          amplitude={30} 
          frequency={2} 
          phase={time.getSeconds() * 0.1}
        />
      </div>
      
      {/* Clock display */}
      <div className="relative z-10 flex justify-center items-center mb-6">
        {/* Hours */}
        <div className="flex">
          <SoundDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <SoundDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <SoundSeparator />
        
        {/* Minutes */}
        <div className="flex">
          <SoundDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <SoundDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <SoundSeparator />
        
        {/* Seconds */}
        <div className="flex">
          <SoundDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <SoundDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
      
      {/* Equalizer visualization */}
      <div className="relative z-10 flex justify-center">
        <EqualizerBars count={20} active={isPlaying} height={40} />
      </div>
      
      {/* Volume slider */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-3 text-purple-300">
        <span className="text-xs">🔈</span>
        <div className="w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-3/4"></div>
        </div>
        <span className="text-xs">🔊</span>
      </div>
    </div>
  );
};

export default Clock_84;

// Add these keyframes to your globals.css:
/*
@keyframes noteVibrate {
  0%, 100% { transform: rotate(-5deg) translateY(0); }
  25% { transform: rotate(0deg) translateY(-5px); }
  50% { transform: rotate(5deg) translateY(0); }
  75% { transform: rotate(0deg) translateY(5px); }
}

@keyframes pulseText {
  0%, 100% { transform: scale(1); filter: brightness(1); }
  50% { transform: scale(1.1); filter: brightness(1.3); }
}
*/ 