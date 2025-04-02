'use client';
import React, { useEffect, useState } from 'react';

// Planetary orbit element that rotates around a digit
const PlanetaryOrbit = ({ radius, duration, color, size, reverse = false, children }) => {
  return (
    <div 
      className="absolute inset-0 flex items-center justify-center"
      style={{ animation: `orbit ${duration}s linear infinite ${reverse ? 'reverse' : ''}` }}
    >
      <div 
        className="absolute rounded-full" 
        style={{ 
          width: `${size}px`, 
          height: `${size}px`, 
          background: color,
          boxShadow: `0 0 10px ${color}`,
          transform: `translateX(${radius}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

// Star background element
const Stars = () => {
  // Generate random stars
  const stars = Array.from({ length: 100 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    animationDelay: `${Math.random() * 3}s`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: Math.random() * 0.7 + 0.3,
            animation: `twinkle 3s ease-in-out infinite`,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

// Individual cosmic digit display
const CosmicDigit = ({ digit }) => {
  return (
    <div className="relative w-16 h-24 flex items-center justify-center">
      {/* Star field background for each digit */}
      <div className="absolute inset-0 bg-indigo-900 rounded-lg overflow-hidden">
        <Stars />
      </div>
      
      {/* Planet-like digit */}
      <div className="relative z-10">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center text-3xl font-bold"
          style={{
            background: `radial-gradient(circle at 30% 30%, #8b5cf6, #4c1d95)`,
            boxShadow: '0 0 15px rgba(139, 92, 246, 0.5)',
          }}
        >
          <span className="text-white">{digit}</span>
        </div>
        
        {/* Planetary rings for aesthetic */}
        <div 
          className="absolute top-1/2 left-1/2 w-16 h-4 rounded-full"
          style={{ 
            transform: 'translate(-50%, -50%) rotateX(75deg)',
            background: 'linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.2) 80%, transparent 90%)', 
          }}
        />
      </div>
      
      {/* Orbiting elements */}
      <PlanetaryOrbit radius={20} duration={8} color="#ec4899" size={3} />
      <PlanetaryOrbit radius={28} duration={12} color="#3b82f6" size={4} reverse={true} />
    </div>
  );
};

const Clock_65 = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="bg-gradient-to-b from-purple-900 via-indigo-900 to-black p-8 rounded-xl shadow-2xl border border-indigo-600/30 relative overflow-hidden">
      {/* Main background with stars */}
      <Stars />
      
      {/* Nebula effects */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-20"
        style={{ 
          background: 'radial-gradient(circle at 70% 20%, rgba(236, 72, 153, 0.6), transparent 50%), radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.6), transparent 50%)',
        }}
      />

      {/* Digital celestial clock display */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="text-sm font-mono text-indigo-300 mb-4">COSMIC CHRONOMETER</div>
        
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <CosmicDigit digit={hours[0]} />
            <CosmicDigit digit={hours[1]} />
          </div>
          
          <div className="text-indigo-300 text-4xl">
            <div className="w-2 h-2 rounded-full bg-indigo-300 mb-2"></div>
            <div className="w-2 h-2 rounded-full bg-indigo-300 mt-2"></div>
          </div>
          
          <div className="flex space-x-2">
            <CosmicDigit digit={minutes[0]} />
            <CosmicDigit digit={minutes[1]} />
          </div>
          
          <div className="text-indigo-300 text-4xl">
            <div className="w-2 h-2 rounded-full bg-indigo-300 mb-2"></div>
            <div className="w-2 h-2 rounded-full bg-indigo-300 mt-2"></div>
          </div>
          
          <div className="flex space-x-2">
            <CosmicDigit digit={seconds[0]} />
            <CosmicDigit digit={seconds[1]} />
          </div>
        </div>
        
        {/* Date display */}
        <div className="text-xs font-mono text-indigo-300 tracking-widest mt-4">
          EARTH DATE: {time.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </div>
      </div>
    </div>
  );
};

export default Clock_65;

// Add to globals.css:
/*
@keyframes orbit {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
*/ 