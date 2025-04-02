'use client';
import React, { useState, useEffect } from 'react';

// Data stream visualization for background
const DataStream = ({ position, width, height, delay }) => {
  const [stream, setStream] = useState([]);
  
  useEffect(() => {
    // Generate random binary/hex characters
    const generateData = () => {
      const chars = '01';
      let data = [];
      const length = Math.floor(Math.random() * 10) + 5;
      
      for (let i = 0; i < length; i++) {
        data.push(chars.charAt(Math.floor(Math.random() * chars.length)));
      }
      
      return data;
    };
    
    // Initialize stream
    setStream(generateData());
    
    // Update stream periodically
    const interval = setInterval(() => {
      setStream(generateData());
    }, 2000 + delay);
    
    return () => clearInterval(interval);
  }, [delay]);
  
  return (
    <div 
      className="absolute text-xs font-mono text-cyan-400/30 flex flex-col"
      style={{ 
        top: position.top, 
        left: position.left, 
        width, 
        height,
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
        letterSpacing: '0.2em',
        animation: `fadeInOut ${delay / 1000}s infinite alternate`,
      }}
    >
      {stream.map((char, i) => (
        <span key={i}>{char}</span>
      ))}
    </div>
  );
};

// Floating interface elements
const InterfaceElement = ({ position, children, glowColor = 'cyan', delay = 0 }) => {
  return (
    <div 
      className={`absolute ${position} text-${glowColor}-300 bg-${glowColor}-900/10 
                 border border-${glowColor}-400/30 rounded px-2 py-1 backdrop-blur-sm
                 animate-[float_4s_ease-in-out_infinite_alternate]`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

// Holographic digit display
const HologramDigit = ({ digit, prevDigit, color = 'cyan' }) => {
  const [glitching, setGlitching] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setGlitching(true);
      const timer = setTimeout(() => setGlitching(false), 500);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);
  
  return (
    <div className="relative w-16 h-28 flex items-center justify-center mx-1">
      {/* Base hologram projection effect */}
      <div 
        className={`absolute inset-0 bg-${color}-900/20 rounded backdrop-blur-sm 
                   border border-${color}-500/30 overflow-hidden
                   ${glitching ? 'animate-[hologramGlitch_0.5s_ease-in-out]' : ''}`}
      >
        {/* Scan lines */}
        <div className="absolute inset-0 bg-scanlines opacity-10"></div>
        
        {/* Horizontal light beam */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-cyan-400/20 animate-pulse"></div>
      </div>
      
      {/* Digit display */}
      <div 
        className={`relative text-5xl font-bold text-${color}-400 
                   ${glitching ? 'animate-[hologramDigitChange_0.5s_ease-in-out]' : ''}
                   drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]`}
      >
        {digit}
        
        {/* Glitch effect overlay */}
        {glitching && (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="absolute h-2 w-full bg-cyan-400/30 animate-[glitchBar_0.3s_ease-in-out]"
                 style={{ top: `${Math.random() * 100}%` }}></div>
            <div className="absolute h-full w-2 left-1/3 bg-cyan-400/20 animate-[glitchBarVertical_0.2s_ease-in-out]"></div>
            <div className="absolute h-full w-2 right-1/3 bg-cyan-400/20 animate-[glitchBarVertical_0.1s_ease-in-out]"></div>
            <div className="text-5xl font-bold text-red-400/30 ml-0.5 mt-0.5 pointer-events-none">{digit}</div>
          </div>
        )}
      </div>
      
      {/* Projector base */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-t from-cyan-400 to-transparent rounded-full opacity-50"></div>
    </div>
  );
};

// Separator for digit groups
const HologramSeparator = () => {
  return (
    <div className="relative w-4 h-28 flex items-center justify-center mx-2">
      <div className="w-0.5 h-6 bg-cyan-500/50 rounded-full animate-[pulseOpacity_2s_infinite]"></div>
      <div className="w-0.5 h-6 bg-cyan-500/50 rounded-full mt-8 animate-[pulseOpacity_2s_infinite_reverse]"></div>
    </div>
  );
};

// The main hologram clock component
const Clock_82 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());
  const [systemStatus, setSystemStatus] = useState('ONLINE');
  
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
      
      // Randomly change system status for effect
      if (Math.random() > 0.95) {
        setSystemStatus('RECALIBRATING...');
        setTimeout(() => setSystemStatus('ONLINE'), 2000);
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
  
  // Data streams for background effect
  const dataStreams = Array.from({ length: 15 }).map((_, i) => (
    <DataStream 
      key={i} 
      position={{ 
        top: `${Math.random() * 100}%`, 
        left: `${Math.random() * 100}%` 
      }}
      width={`${Math.random() * 20 + 10}px`}
      height={`${Math.random() * 150 + 50}px`}
      delay={Math.random() * 5000}
    />
  ));
  
  return (
    <div className="relative bg-black/80 p-10 rounded-xl min-h-[350px] overflow-hidden border border-cyan-500/20 shadow-[0_0_30px_rgba(8,145,178,0.2)]">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-900/10 to-black/90"></div>
      
      {/* Hologram base glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[70%] h-8 bg-gradient-to-t from-cyan-400/20 to-transparent rounded-full blur-md"></div>
      
      {/* Data streams in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {dataStreams}
      </div>
      
      {/* Top interface elements */}
      <div className="relative z-10 flex justify-between items-start mb-8">
        <InterfaceElement position="top-0 left-0" glowColor="blue" delay={0.5}>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
            <div className="text-xs font-mono">SYSTEM: {systemStatus}</div>
          </div>
        </InterfaceElement>
        
        <InterfaceElement position="top-0 right-0" glowColor="cyan">
          <div className="text-xs font-mono">
            {time.toLocaleDateString('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit'
            })}
          </div>
        </InterfaceElement>
      </div>
      
      {/* Hologram title */}
      <div className="text-center mb-8 relative z-10">
        <h2 className="text-2xl text-cyan-400 font-light tracking-[0.3em] uppercase
                       drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
          Chronosphere
        </h2>
        <div className="text-xs text-cyan-300/60 mt-1 font-mono">TEMPORAL INTERFACE v4.82</div>
      </div>
      
      {/* Clock display */}
      <div className="flex items-center justify-center mb-8 relative z-10">
        {/* Hours */}
        <div className="flex">
          <HologramDigit digit={hours[0]} prevDigit={prevHours[0]} color="cyan" />
          <HologramDigit digit={hours[1]} prevDigit={prevHours[1]} color="cyan" />
        </div>
        
        <HologramSeparator />
        
        {/* Minutes */}
        <div className="flex">
          <HologramDigit digit={minutes[0]} prevDigit={prevMinutes[0]} color="cyan" />
          <HologramDigit digit={minutes[1]} prevDigit={prevMinutes[1]} color="cyan" />
        </div>
        
        <HologramSeparator />
        
        {/* Seconds */}
        <div className="flex">
          <HologramDigit digit={seconds[0]} prevDigit={prevSeconds[0]} color="cyan" />
          <HologramDigit digit={seconds[1]} prevDigit={prevSeconds[1]} color="cyan" />
        </div>
      </div>
      
      {/* Interface elements */}
      <div className="flex justify-center items-center relative z-10">
        <InterfaceElement position="relative" glowColor="emerald" delay={1}>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 mr-2"></div>
            <div className="text-xs font-mono">LOCATION: SECTOR 7</div>
          </div>
        </InterfaceElement>
        
        <InterfaceElement position="relative mx-4" glowColor="blue" delay={0.5}>
          <div className="text-xs font-mono flex items-center">
            <span className="inline-block w-4 h-4 mr-2 relative">
              <span className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping"></span>
              <span className="absolute inset-1 rounded-full bg-blue-400"></span>
            </span>
            QUANTUM STABILITY: 98.7%
          </div>
        </InterfaceElement>
        
        <InterfaceElement position="relative" glowColor="purple" delay={1.5}>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 mr-2"></div>
            <div className="text-xs font-mono">MODE: STANDARD</div>
          </div>
        </InterfaceElement>
      </div>
      
      {/* Circular elements decoration */}
      <div className="absolute bottom-6 left-6 w-20 h-20 border border-cyan-400/20 rounded-full animate-[slowSpin_20s_linear_infinite]">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-cyan-400/30"></div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-4 h-1 bg-cyan-400/30"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-cyan-400/30"></div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-4 h-1 bg-cyan-400/30"></div>
      </div>
      
      <div className="absolute bottom-10 right-10 w-14 h-14 border border-cyan-400/20 rounded-full animate-[slowSpin_15s_linear_infinite_reverse]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-cyan-400/5 rounded-full"></div>
      </div>
    </div>
  );
};

export default Clock_82;

// Add these keyframes to your globals.css:
/*
@keyframes hologramGlitch {
  0%, 100% { transform: scale(1); filter: brightness(1) hue-rotate(0); }
  20% { transform: scale(1.02) skewX(3deg); filter: brightness(1.2) hue-rotate(10deg); }
  40% { transform: scale(0.98) skewX(-3deg); filter: brightness(0.8) hue-rotate(-10deg); }
  60% { transform: scale(1.01) skewY(2deg); filter: brightness(1.1) hue-rotate(5deg); }
  80% { transform: scale(0.99) skewY(-2deg); filter: brightness(0.9) hue-rotate(-5deg); }
}

@keyframes hologramDigitChange {
  0% { transform: scale(1) translateY(0); filter: brightness(1); }
  20% { transform: scale(1.2) translateY(-5px); filter: brightness(1.3); }
  40% { transform: scale(0.8) translateY(5px); filter: brightness(0.7); }
  60% { transform: scale(1.1) translateY(-3px); filter: brightness(1.2); }
  80% { transform: scale(0.9) translateY(3px); filter: brightness(0.8); }
  100% { transform: scale(1) translateY(0); filter: brightness(1); }
}

@keyframes glitchBar {
  0%, 100% { transform: translateY(0) scaleY(1); }
  50% { transform: translateY(10px) scaleY(2); }
}

@keyframes glitchBarVertical {
  0%, 100% { transform: translateX(0) scaleX(1); }
  50% { transform: translateX(5px) scaleX(0.5); }
}

@keyframes pulseOpacity {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
}

@keyframes fadeInOut {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.5; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes slowSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.bg-scanlines {
  background-image: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(8, 145, 178, 0.05) 50%,
    transparent 100%
  );
  background-size: 100% 4px;
}
*/ 