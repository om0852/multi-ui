'use client';
import React, { useEffect, useState } from 'react';

// Seasons for our forest clock
const SEASONS = {
  SPRING: 'spring',
  SUMMER: 'summer',
  AUTUMN: 'autumn',
  WINTER: 'winter'
};

// Color schemes for each season
const SEASON_COLORS = {
  [SEASONS.SPRING]: {
    bg: 'from-green-100 to-lime-200',
    leaf: 'text-green-500',
    accent: 'text-pink-400',
    wood: 'from-amber-700 to-amber-900',
    text: 'text-green-800'
  },
  [SEASONS.SUMMER]: {
    bg: 'from-green-200 to-emerald-300',
    leaf: 'text-emerald-600',
    accent: 'text-yellow-400',
    wood: 'from-amber-800 to-amber-950',
    text: 'text-emerald-900'
  },
  [SEASONS.AUTUMN]: {
    bg: 'from-amber-100 to-orange-200',
    leaf: 'text-orange-500',
    accent: 'text-red-500',
    wood: 'from-amber-800 to-amber-950',
    text: 'text-amber-900'
  },
  [SEASONS.WINTER]: {
    bg: 'from-blue-50 to-indigo-100',
    leaf: 'text-blue-300',
    accent: 'text-blue-200',
    wood: 'from-stone-700 to-stone-900',
    text: 'text-blue-900'
  }
};

// A floating leaf component
const Leaf = ({ size = 'w-6 h-6', color, left, delay, duration, rotation = 0 }) => {
  return (
    <div 
      className={`absolute ${size} ${color} animate-float`}
      style={{
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        transform: `rotate(${rotation}deg)`
      }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12,3C9.46,3 7.06,3.46 4.92,4.26C4.44,5.56 4.13,6.87 4,8C4,12.42 7.58,16 12,16C12.71,16 13.39,15.92 14.05,15.77C14.18,13.84 14.88,12.04 16.11,10.61C15.43,10.21 14.67,10 13.85,10C12.2,10 10.69,10.96 9.92,12.36C9.28,11.5 8.92,10.43 9,9.31C9.11,7.85 10.11,6.5 11.5,5.91C10.04,4.69 8.13,4 6,4C5.45,4 4.92,4.08 4.4,4.22C5.79,3.82 7.43,3.6 9.17,3.6C11.03,3.6 12.69,3.86 13.44,4.28C14.14,4.66 14.85,4.82 15.55,4.75C13.42,3.91 11.28,3 9,3H12Z"/>
      </svg>
    </div>
  );
};

// Nature-themed digit display
const ForestDigit = ({ digit, prevDigit, season, type }) => {
  const [isChanging, setIsChanging] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsChanging(true);
      const timer = setTimeout(() => setIsChanging(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);

  // Generate random leaves when digit changes
  const renderLeaves = () => {
    if (!isChanging) return null;
    
    return Array.from({ length: 6 }).map((_, i) => {
      const size = Math.random() * 10 + 10;
      const left = Math.random() * 80 + 10;
      const delay = Math.random() * 0.5;
      const duration = Math.random() * 3 + 3;
      const rotation = Math.random() * 360;
      
      return (
        <Leaf 
          key={i}
          size={`w-${Math.floor(size)} h-${Math.floor(size)}`}
          color={SEASON_COLORS[season].leaf}
          left={left}
          delay={delay}
          duration={duration}
          rotation={rotation}
        />
      );
    });
  };

  // Different wood grain textures for different digit types
  const getWoodGrainPattern = () => {
    switch(type) {
      case 'hours':
        return "url('data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 10c30 0 30 20 60 20s30-20 60-20v10c-30 0-30 20-60 20s-30-20-60-20z' fill='rgba(0,0,0,0.1)'/%3E%3Cpath d='M0 50c30 0 30 20 60 20s30-20 60-20v10c-30 0-30 20-60 20s-30-20-60-20z' fill='rgba(0,0,0,0.1)'/%3E%3C/svg%3E')";
      case 'minutes':
        return "url('data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 5c20 0 20 10 40 10s20-10 40-10 20 10 40 10v5c-20 0-20-10-40-10s-20 10-40 10-20-10-40-10z' fill='rgba(0,0,0,0.1)'/%3E%3Cpath d='M0 30c20 0 20 10 40 10s20-10 40-10 20 10 40 10v5c-20 0-20-10-40-10s-20 10-40 10-20-10-40-10z' fill='rgba(0,0,0,0.1)'/%3E%3Cpath d='M0 55c20 0 20 10 40 10s20-10 40-10 20 10 40 10v5c-20 0-20-10-40-10s-20 10-40 10-20-10-40-10z' fill='rgba(0,0,0,0.1)'/%3E%3Cpath d='M0 80c20 0 20 10 40 10s20-10 40-10 20 10 40 10v5c-20 0-20-10-40-10s-20 10-40 10-20-10-40-10z' fill='rgba(0,0,0,0.1)'/%3E%3C/svg%3E')";
      case 'seconds':
      default:
        return "url('data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M20 0c0 20 10 20 10 40s-10 20-10 40h5c0-20 10-20 10-40s-10-20-10-40z' fill='rgba(0,0,0,0.1)'/%3E%3Cpath d='M50 0c0 20 10 20 10 40s-10 20-10 40h5c0-20 10-20 10-40s-10-20-10-40z' fill='rgba(0,0,0,0.1)'/%3E%3Cpath d='M80 0c0 20 10 20 10 40s-10 20-10 40h5c0-20 10-20 10-40s-10-20-10-40z' fill='rgba(0,0,0,0.1)'/%3E%3C/svg%3E')";
    }
  };
  
  return (
    <div className="relative w-16 h-28 overflow-hidden rounded-lg">
      {/* Wood slice background */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b ${SEASON_COLORS[season].wood} rounded-lg shadow-inner transition-all duration-500 ${
          isChanging ? 'scale-105' : 'scale-100'
        }`}
        style={{
          backgroundImage: getWoodGrainPattern(),
          backgroundSize: '100% 100%'
        }}
      >
        {/* Tree rings */}
        <div className="absolute inset-3 rounded-full border-4 border-amber-800/20"></div>
        <div className="absolute inset-6 rounded-full border-2 border-amber-800/15"></div>
        <div className="absolute inset-9 rounded-full border border-amber-800/10"></div>
      </div>
      
      {/* Carved digit */}
      <div 
        className={`absolute inset-0 flex items-center justify-center text-5xl font-bold ${SEASON_COLORS[season].text} transition-all duration-500 ${
          isChanging ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        {digit}
      </div>
      
      {/* Falling leaves animation on change */}
      <div className="absolute inset-0 overflow-hidden">
        {renderLeaves()}
      </div>
    </div>
  );
};

// Branch separator between digit groups
const BranchSeparator = ({ season }) => {
  return (
    <div className="relative h-28 w-6 flex flex-col items-center justify-center">
      {/* Main branch */}
      <div 
        className={`h-full w-2 bg-gradient-to-b ${SEASON_COLORS[season].wood} rounded-full relative`}
      >
        {/* Branch nodes */}
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-b ${SEASON_COLORS[season].wood} border border-amber-700/20`}></div>
        <div className={`absolute top-3/4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-b ${SEASON_COLORS[season].wood} border border-amber-700/20`}></div>
        
        {/* Small branches */}
        <div className={`absolute top-1/4 left-full w-4 h-1.5 bg-gradient-to-r ${SEASON_COLORS[season].wood} rounded-full`}></div>
        <div className={`absolute top-3/4 right-full w-4 h-1.5 bg-gradient-to-r ${SEASON_COLORS[season].wood} rounded-full`}></div>
        
        {/* Season-specific decorations */}
        {season === SEASONS.SPRING && (
          <div className={`absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 ${SEASON_COLORS[season].accent} rounded-full animate-pulse`}>
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity="0.3"/>
              <circle cx="9" cy="9" r="1"/>
              <circle cx="15" cy="9" r="1"/>
              <path d="M12,17a5,5,0,0,0,5-5H7A5,5,0,0,0,12,17Z"/>
            </svg>
          </div>
        )}
        {season === SEASONS.SUMMER && (
          <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 ${SEASON_COLORS[season].accent}`}>
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12,7a5,5,0,0,0-5,5,1,1,0,0,0,2,0,3,3,0,0,1,3-3,1,1,0,0,0,0-2Z"/>
              <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,0,1-9-9A8.91,8.91,0,0,1,5.33,5.06L18.94,18.67A8.91,8.91,0,0,1,12,21ZM18.67,18.33,5.06,4.72A9,9,0,0,1,18.67,18.33Z"/>
            </svg>
          </div>
        )}
        {season === SEASONS.AUTUMN && (
          <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 ${SEASON_COLORS[season].accent}`}>
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12,2.9A7.12,7.12,0,0,0,5,10a7,7,0,0,0,2,4.9.9.9,0,0,0,.9.3.9.9,0,0,0,.2-1.2,5.27,5.27,0,0,1-1.3-4,5.38,5.38,0,0,1,2-3.4A5.27,5.27,0,0,1,12,5a5.23,5.23,0,0,1,3.2,1.5,5.38,5.38,0,0,1,2,3.4,5.27,5.27,0,0,1-1.3,4,.9.9,0,0,0,.2,1.2.9.9,0,0,0,.9-.3A7,7,0,0,0,19,10,7.12,7.12,0,0,0,12,2.9Z"/>
              <path d="M14.5,15c0,.3-.1.6-.1.8a2.5,2.5,0,0,1-5,0c0-.2-.1-.5-.1-.8H7v1a5,5,0,0,0,10,0V15Z"/>
            </svg>
          </div>
        )}
        {season === SEASONS.WINTER && (
          <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 ${SEASON_COLORS[season].accent}`}>
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.75,9.35l-2.67,1.54,2.49,1.6a.74.74,0,0,1,.27,1,.7.7,0,0,1-1,.27l-3.13-2-2.34,1.35,2.34,1.35,3.13-2a.7.7,0,0,1,1,.27.74.74,0,0,1-.27,1l-2.49,1.6,2.67,1.54a.71.71,0,0,1,.26,1,.72.72,0,0,1-1,.26l-2.66-1.54v3.08a.75.75,0,0,1-1.5,0V16.1L9.62,17.63a.72.72,0,0,1-1-.26.71.71,0,0,1,.26-1l2.65-1.53-2.49-1.6a.72.72,0,1,1,.74-1.24l3.13,2,2.34-1.35-2.34-1.35-3.13,2a.72.72,0,1,1-.74-1.24l2.49-1.6L8.9,9.35a.71.71,0,0,1-.26-1,.72.72,0,0,1,1,.26l2.66,1.54V7.12a.75.75,0,0,1,1.5,0v3.08l2.66-1.54a.72.72,0,0,1,1-.26A.71.71,0,0,1,17.75,9.35Z"/>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

const Clock_79 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());
  const [season, setSeason] = useState(SEASONS.SPRING);
  const [leafCount, setLeafCount] = useState(0);
  
  // Change seasons based on user interaction or time
  const cycleSeason = () => {
    setSeason(current => {
      switch(current) {
        case SEASONS.SPRING:
          return SEASONS.SUMMER;
        case SEASONS.SUMMER:
          return SEASONS.AUTUMN;
        case SEASONS.AUTUMN:
          return SEASONS.WINTER;
        case SEASONS.WINTER:
        default:
          return SEASONS.SPRING;
      }
    });
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
      
      // Occasionally add a falling leaf
      if (Math.random() > 0.7) {
        setLeafCount(count => count + 1);
      }
    }, 1000);

    // Change seasons every 15 seconds for demo purposes
    // In a real app, you might base this on actual seasons or user preference
    const seasonTimer = setInterval(cycleSeason, 15000);

    return () => {
      clearInterval(timer);
      clearInterval(seasonTimer);
    };
  }, [time]);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  const prevHours = prevTime.getHours().toString().padStart(2, '0');
  const prevMinutes = prevTime.getMinutes().toString().padStart(2, '0');
  const prevSeconds = prevTime.getSeconds().toString().padStart(2, '0');

  // Generate random background leaves
  const backgroundLeaves = Array.from({ length: 10 }).map((_, i) => {
    const size = Math.random() * 20 + 10;
    const left = Math.random() * 90;
    const top = Math.random() * 90;
    const delay = Math.random() * 20;
    const duration = Math.random() * 10 + 20;
    const rotation = Math.random() * 360;
    
    return (
      <div 
        key={`bg-leaf-${i}`}
        className={`absolute ${SEASON_COLORS[season].leaf} opacity-10`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          top: `${top}%`,
          transform: `rotate(${rotation}deg)`
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,3C9.46,3 7.06,3.46 4.92,4.26C4.44,5.56 4.13,6.87 4,8C4,12.42 7.58,16 12,16C12.71,16 13.39,15.92 14.05,15.77C14.18,13.84 14.88,12.04 16.11,10.61C15.43,10.21 14.67,10 13.85,10C12.2,10 10.69,10.96 9.92,12.36C9.28,11.5 8.92,10.43 9,9.31C9.11,7.85 10.11,6.5 11.5,5.91C10.04,4.69 8.13,4 6,4C5.45,4 4.92,4.08 4.4,4.22C5.79,3.82 7.43,3.6 9.17,3.6C11.03,3.6 12.69,3.86 13.44,4.28C14.14,4.66 14.85,4.82 15.55,4.75C13.42,3.91 11.28,3 9,3H12Z"/>
        </svg>
      </div>
    );
  });

  // Generate randomly falling leaves
  const fallingLeaves = Array.from({ length: Math.min(leafCount, 15) }).map((_, i) => {
    const size = Math.random() * 12 + 8;
    const left = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 10 + 10;
    const rotation = Math.random() * 360;
    
    return (
      <Leaf 
        key={`falling-leaf-${i}-${leafCount}`}
        size={`w-${Math.floor(size)} h-${Math.floor(size)}`}
        color={SEASON_COLORS[season].leaf}
        left={left}
        delay={delay}
        duration={duration}
        rotation={rotation}
      />
    );
  });

  return (
    <div className={`bg-gradient-to-br ${SEASON_COLORS[season].bg} p-8 rounded-xl shadow-xl border border-opacity-20 
                    relative overflow-hidden transition-colors duration-1000`}
         onClick={cycleSeason}>
      {/* Background decoration */}
      {backgroundLeaves}
      
      {/* Falling leaves animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {fallingLeaves}
      </div>
      
      {/* Season title */}
      <div className="text-center mb-8">
        <h2 className={`text-2xl font-serif capitalize ${SEASON_COLORS[season].text}`}>
          {season} Forest
        </h2>
        <div className={`text-sm ${SEASON_COLORS[season].text} opacity-70`}>
          {time.toLocaleDateString('en-US', { 
            weekday: 'long',
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>
      
      {/* Clock display */}
      <div className="flex items-center justify-center space-x-4">
        {/* Hours */}
        <div className="flex space-x-2">
          <ForestDigit 
            digit={hours[0]} 
            prevDigit={prevHours[0]} 
            season={season} 
            type="hours" 
          />
          <ForestDigit 
            digit={hours[1]} 
            prevDigit={prevHours[1]} 
            season={season} 
            type="hours" 
          />
        </div>
        
        <BranchSeparator season={season} />
        
        {/* Minutes */}
        <div className="flex space-x-2">
          <ForestDigit 
            digit={minutes[0]} 
            prevDigit={prevMinutes[0]} 
            season={season} 
            type="minutes" 
          />
          <ForestDigit 
            digit={minutes[1]} 
            prevDigit={prevMinutes[1]} 
            season={season} 
            type="minutes" 
          />
        </div>
        
        <BranchSeparator season={season} />
        
        {/* Seconds */}
        <div className="flex space-x-2">
          <ForestDigit 
            digit={seconds[0]} 
            prevDigit={prevSeconds[0]} 
            season={season}
            type="seconds" 
          />
          <ForestDigit 
            digit={seconds[1]} 
            prevDigit={prevSeconds[1]} 
            season={season} 
            type="seconds" 
          />
        </div>
      </div>
      
      {/* Nature tip */}
      <div className="text-center mt-6">
        <div className={`text-xs ${SEASON_COLORS[season].text} opacity-70`}>
          Click to change seasons
        </div>
      </div>
    </div>
  );
};

export default Clock_79;

// Add to globals.css:
/*
@keyframes float {
  0% { transform: translateY(0) rotate(var(--tw-rotate)); }
  50% { transform: translateY(-100vh) rotate(calc(var(--tw-rotate) + 180deg)); }
  100% { transform: translateY(-200vh) rotate(calc(var(--tw-rotate) + 360deg)); }
}

.animate-float {
  animation: float 10s linear forwards;
}
*/ 