'use client';
import React, { useEffect, useState, useRef } from 'react';

// Component for stars in the background
const StarField = ({ count = 50 }) => {
  const stars = Array.from({ length: count }).map((_, i) => {
    const size = Math.random() * 2 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const opacity = Math.random() * 0.5 + 0.5;
    const animationDuration = Math.random() * 3 + 2;
    const delay = Math.random() * 5;
    
    return (
      <div
        key={i}
        className="absolute rounded-full bg-white"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${x}%`,
          top: `${y}%`,
          opacity,
          animation: `twinkle ${animationDuration}s ease-in-out infinite`,
          animationDelay: `${delay}s`
        }}
      />
    );
  });
  
  return <div className="absolute inset-0 overflow-hidden">{stars}</div>;
};

// Orbit component for planetary motion
const Orbit = ({ radius, duration, color = 'rgba(255, 255, 255, 0.1)', clockwise = true }) => {
  return (
    <div 
      className="absolute rounded-full border border-dashed"
      style={{
        width: radius * 2,
        height: radius * 2,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        borderColor: color
      }}
    />
  );
};

// Planet component that orbits around
const Planet = ({ 
  radius, 
  orbitRadius, 
  orbitDuration, 
  color = 'bg-blue-500', 
  glowColor = 'rgba(59, 130, 246, 0.5)',
  clockwise = true,
  startPosition = 0,
  rings = false
}) => {
  const [position, setPosition] = useState(startPosition);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => {
        const step = (360 / (orbitDuration * 10));
        return (prev + (clockwise ? step : -step)) % 360;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, [orbitDuration, clockwise]);
  
  const x = Math.cos(position * Math.PI / 180) * orbitRadius;
  const y = Math.sin(position * Math.PI / 180) * orbitRadius;
  
  return (
    <div 
      className={`absolute ${color} rounded-full shadow-lg`}
      style={{
        width: radius * 2,
        height: radius * 2,
        left: '50%',
        top: '50%',
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
        boxShadow: `0 0 ${radius}px ${glowColor}`
      }}
    >
      {rings && (
        <div 
          className="absolute top-1/2 left-0 right-0 h-1 bg-yellow-200/60 rounded-full"
          style={{ transform: 'translateY(-50%) rotate(30deg)' }}
        />
      )}
    </div>
  );
};

// Cosmic digit display for the time
const CosmicDigit = ({ digit, prevDigit, type }) => {
  const [isChanging, setIsChanging] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsChanging(true);
      const timer = setTimeout(() => setIsChanging(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);
  
  // Get color based on type (hours, minutes, seconds)
  const getColorScheme = () => {
    switch(type) {
      case 'hours':
        return { bg: 'bg-indigo-900', text: 'text-indigo-200', glow: 'from-indigo-500/30 to-transparent' };
      case 'minutes':
        return { bg: 'bg-purple-900', text: 'text-purple-200', glow: 'from-purple-500/30 to-transparent' };
      case 'seconds':
      default:
        return { bg: 'bg-blue-900', text: 'text-blue-200', glow: 'from-blue-500/30 to-transparent' };
    }
  };
  
  const colors = getColorScheme();
  
  return (
    <div className="relative w-16 h-28 overflow-hidden">
      {/* Planet-like background */}
      <div 
        className={`absolute inset-0 ${colors.bg} rounded-full overflow-hidden transition-transform duration-700 ${
          isChanging ? 'scale-110' : 'scale-100'
        }`}
      >
        {/* Crater details */}
        <div className="absolute w-5 h-5 rounded-full bg-black/10 top-2 left-2"></div>
        <div className="absolute w-3 h-3 rounded-full bg-black/10 bottom-4 right-3"></div>
        <div className="absolute w-4 h-4 rounded-full bg-black/10 top-1/2 right-1"></div>
        
        {/* Glow effects */}
        <div 
          className={`absolute inset-0 bg-gradient-radial ${colors.glow} opacity-70`}
        ></div>
      </div>
      
      {/* Digit display */}
      <div 
        className={`absolute inset-0 flex items-center justify-center text-5xl font-bold ${colors.text} transition-all duration-500 ${
          isChanging ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
        }`}
        style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}
      >
        {digit}
      </div>
      
      {/* Stars/particles that appear during transitions */}
      {isChanging && (
        <div className="absolute inset-0">
          {Array.from({ length: 10 }).map((_, i) => {
            const size = Math.random() * 3 + 1;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const duration = Math.random() * 0.5 + 0.5;
            const delay = Math.random() * 0.2;
            
            return (
              <div
                key={i}
                className="absolute bg-white rounded-full animate-[cosmicParticle_1s_ease-out_forwards]"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${x}%`,
                  top: `${y}%`,
                  animationDuration: `${duration}s`,
                  animationDelay: `${delay}s`
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

// Space station separator between digit groups
const SpaceSeparator = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-28 w-8">
      <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)] mb-4"></div>
      <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)] mt-4"></div>
    </div>
  );
};

const Clock_80 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  const prevHours = prevTime.getHours().toString().padStart(2, '0');
  const prevMinutes = prevTime.getMinutes().toString().padStart(2, '0');
  const prevSeconds = prevTime.getSeconds().toString().padStart(2, '0');

  return (
    <div className="bg-gradient-to-b from-black to-blue-950 p-10 rounded-xl shadow-2xl relative overflow-hidden min-h-[320px]">
      {/* Star background */}
      <StarField count={100} />
      
      {/* Cosmic dust */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(148,163,184,0.05)_0%,_rgba(0,0,0,0)_70%)]"
        style={{ transform: 'scale(1.5)' }}
      ></div>
      
      {/* Orbital systems */}
      <div className="absolute inset-0">
        <Orbit radius={140} color="rgba(255, 255, 255, 0.05)" />
        <Orbit radius={180} color="rgba(255, 255, 255, 0.03)" />
        
        {/* Planets */}
        <Planet 
          radius={4} 
          orbitRadius={140} 
          orbitDuration={20} 
          color="bg-red-500" 
          glowColor="rgba(239, 68, 68, 0.4)"
          startPosition={45}
        />
        <Planet 
          radius={8} 
          orbitRadius={180} 
          orbitDuration={35} 
          color="bg-yellow-500" 
          glowColor="rgba(234, 179, 8, 0.4)"
          clockwise={false}
          startPosition={180}
          rings={true}
        />
      </div>
      
      {/* Title */}
      <div className="text-center mb-8 relative z-10">
        <h2 className="text-2xl font-bold tracking-widest text-blue-100 uppercase">
          Cosmic Chronometer
        </h2>
        <div className="text-sm text-blue-300 mt-1">
          {time.toLocaleDateString('en-US', { 
            weekday: 'long',
            year: 'numeric',
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>
      
      {/* Clock display */}
      <div className="relative z-10 flex items-center justify-center space-x-4">
        {/* Hours */}
        <div className="flex space-x-2">
          <CosmicDigit 
            digit={hours[0]} 
            prevDigit={prevHours[0]} 
            type="hours" 
          />
          <CosmicDigit 
            digit={hours[1]} 
            prevDigit={prevHours[1]} 
            type="hours" 
          />
        </div>
        
        <SpaceSeparator />
        
        {/* Minutes */}
        <div className="flex space-x-2">
          <CosmicDigit 
            digit={minutes[0]} 
            prevDigit={prevMinutes[0]} 
            type="minutes" 
          />
          <CosmicDigit 
            digit={minutes[1]} 
            prevDigit={prevMinutes[1]} 
            type="minutes" 
          />
        </div>
        
        <SpaceSeparator />
        
        {/* Seconds */}
        <div className="flex space-x-2">
          <CosmicDigit 
            digit={seconds[0]} 
            prevDigit={prevSeconds[0]} 
            type="seconds" 
          />
          <CosmicDigit 
            digit={seconds[1]} 
            prevDigit={prevSeconds[1]} 
            type="seconds" 
          />
        </div>
      </div>
      
      {/* Space coordinates footer */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-blue-400 font-mono">
        COORDINATES: SOL-3 | MILKY WAY | {Math.floor(Math.random() * 1000) + 3000}.{Math.floor(Math.random() * 100)}
      </div>
    </div>
  );
};

export default Clock_80;

// Add to globals.css:
/*
@keyframes twinkle {
  0%, 100% { opacity: 0.3; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
}

@keyframes cosmicParticle {
  0% { transform: scale(1) translate(0, 0); opacity: 1; }
  100% { transform: scale(0) translate(var(--tw-translate-x), var(--tw-translate-y)); opacity: 0; }
}
*/ 