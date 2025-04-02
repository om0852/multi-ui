'use client';
import React, { useState, useEffect, useRef } from 'react';

// Stars background component with subtle twinkling effect
const StarField = ({ starCount = 200 }) => {
  const stars = Array.from({ length: starCount }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    animationDelay: `${Math.random() * 10}s`,
    opacity: Math.random() * 0.7 + 0.3
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-[twinkle_4s_ease-in-out_infinite]"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: star.animationDelay
          }}
        />
      ))}
    </div>
  );
};

// Nebula effect - creates a colorful cosmic cloud
const Nebula = ({ position = {}, color1 = '#8b5cf6', color2 = '#ec4899', opacity = 0.15 }) => {
  return (
    <div
      className="absolute rounded-full blur-3xl mix-blend-screen animate-[nebulaGlow_15s_ease-in-out_infinite]"
      style={{
        ...position,
        width: '300px',
        height: '300px',
        background: `radial-gradient(circle at center, ${color1}, ${color2}, transparent 70%)`,
        opacity,
        filter: 'blur(30px)'
      }}
    />
  );
};

// Planet component - a circle with details that can orbit
const Planet = ({ 
  size = 40, 
  color = '#3b82f6', 
  ringColor = '#a78bfa', 
  hasRings = false,
  rotationSpeed = 1,
  position = {},
  orbitRadius = 0,
  orbitSpeed = 10,
  className = ""
}) => {
  const [rotation, setRotation] = useState(0);
  const [orbitPosition, setOrbitPosition] = useState(0);
  
  useEffect(() => {
    let animationId;
    let lastTime = 0;
    
    const animate = (time) => {
      if (lastTime !== 0) {
        const delta = time - lastTime;
        setRotation(prev => (prev + rotationSpeed * delta / 100) % 360);
        
        if (orbitRadius > 0) {
          setOrbitPosition(prev => (prev + orbitSpeed * delta / 1000) % 360);
        }
      }
      
      lastTime = time;
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [rotationSpeed, orbitRadius, orbitSpeed]);
  
  // Calculate orbit position
  const orbitX = orbitRadius > 0 ? Math.cos(orbitPosition * Math.PI / 180) * orbitRadius : 0;
  const orbitY = orbitRadius > 0 ? Math.sin(orbitPosition * Math.PI / 180) * orbitRadius : 0;
  
  const finalPosition = orbitRadius > 0 
    ? { top: `calc(50% + ${orbitY}px)`, left: `calc(50% + ${orbitX}px)` }
    : position;
  
  return (
    <div 
      className={`absolute ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transformStyle: 'preserve-3d',
        transform: `rotate(${rotation}deg)`,
        ...finalPosition,
        marginTop: `-${size / 2}px`,
        marginLeft: `-${size / 2}px`,
        transition: 'transform 0.1s linear'
      }}
    >
      {/* Planet body */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${color}ee, ${color}aa, ${color}88)`,
          boxShadow: `0 0 15px 2px ${color}77`
        }}
      />
      
      {/* Planet surface details */}
      <div 
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{
          opacity: 0.5,
          background: `
            radial-gradient(circle at ${20 + Math.random() * 60}% ${20 + Math.random() * 60}%, transparent 50%, ${color}aa 51%, transparent 60%),
            radial-gradient(circle at ${20 + Math.random() * 60}% ${20 + Math.random() * 60}%, transparent 40%, ${color}aa 41%, transparent 50%)
          `
        }}
      />
      
      {/* Rings if needed */}
      {hasRings && (
        <div 
          className="absolute rounded-full overflow-hidden"
          style={{
            width: `${size * 1.8}px`,
            height: `${size * 0.4}px`,
            top: `${size / 2 - size * 0.2}px`,
            left: `${size / 2 - size * 0.9}px`,
            background: `linear-gradient(${ringColor}cc, ${ringColor}77, ${ringColor}44, ${ringColor}22)`,
            transform: 'rotateX(75deg)',
            transformOrigin: 'center center',
            boxShadow: `0 0 10px 1px ${ringColor}44`
          }}
        />
      )}
    </div>
  );
};

// Comet effect - shooting star with trail
const Comet = ({ delay = 0, duration = 5, reverse = false }) => {
  return (
    <div 
      className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    >
      <div
        className={`absolute w-1 h-1 rounded-full bg-white animate-[cometTrail_${duration}s_linear_infinite_${delay}s]`}
        style={{
          boxShadow: '0 0 20px 1px rgba(255, 255, 255, 0.7)',
          top: `${Math.random() * 50}%`,
          left: reverse ? '100%' : '0%',
          transform: 'translateX(0) translateY(0)',
          transformOrigin: 'center center'
        }}
      >
        {/* Comet trail */}
        <div 
          className="absolute h-0.5 rounded"
          style={{
            background: 'linear-gradient(to right, rgba(255, 255, 255, 0.7), transparent)',
            width: '50px',
            top: '50%',
            right: '0',
            transform: 'translateY(-50%)',
            transformOrigin: 'right center',
            rotate: reverse ? '180deg' : '0deg'
          }}
        />
      </div>
    </div>
  );
};

// Galaxy spiral effect
const Galaxy = ({ position = {}, size = 200, rotationSpeed = 0.2, color = '#8b5cf6' }) => {
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    let animationId;
    let lastTime = 0;
    
    const animate = (time) => {
      if (lastTime !== 0) {
        const delta = time - lastTime;
        setRotation(prev => (prev + rotationSpeed * delta / 100) % 360);
      }
      
      lastTime = time;
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [rotationSpeed]);
  
  return (
    <div 
      className="absolute rounded-full mix-blend-screen"
      style={{
        ...position,
        width: `${size}px`,
        height: `${size}px`,
        transform: `rotate(${rotation}deg)`,
        transformOrigin: 'center center',
        transition: 'transform 0.1s linear'
      }}
    >
      {/* Galaxy arms */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: `
            conic-gradient(
              from 0deg at 50% 50%, 
              transparent 0deg, 
              ${color}22 60deg, 
              ${color}88 120deg, 
              ${color}44 180deg, 
              transparent 240deg, 
              ${color}22 300deg, 
              transparent 360deg
            )
          `,
          filter: 'blur(4px)',
          opacity: 0.8
        }}
      />
      
      {/* Galaxy center */}
      <div 
        className="absolute rounded-full"
        style={{
          top: '40%',
          left: '40%',
          width: '20%',
          height: '20%',
          background: `radial-gradient(circle at center, white, ${color})`,
          boxShadow: `0 0 20px 5px ${color}`,
          opacity: 0.9
        }}
      />
    </div>
  );
};

// Space Digit with animated stars and cosmic effects
const SpaceDigit = ({ digit, prevDigit }) => {
  const [isChanging, setIsChanging] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsChanging(true);
      
      const timer = setTimeout(() => {
        setIsChanging(false);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);
  
  return (
    <div className="relative w-24 h-36 mx-1 perspective-[800px]">
      {/* Creating a mini cosmos for each digit */}
      <div 
        className={`absolute inset-0 bg-gray-900 rounded-md overflow-hidden ${
          isChanging ? 'animate-[spaceDigitChange_0.5s_ease-in-out]' : ''
        }`}
      >
        {/* Small star field inside the digit container */}
        <StarField starCount={30} />
        
        {/* Small nebula effect */}
        <Nebula 
          position={{ top: '30%', left: '30%' }} 
          color1={isChanging ? '#ec4899' : '#8b5cf6'} 
          color2={isChanging ? '#3b82f6' : '#ec4899'}
          opacity={isChanging ? 0.3 : 0.15}
        />
        
        {/* Digit itself */}
        <div 
          className="absolute inset-0 flex items-center justify-center text-6xl font-bold"
          style={{
            color: 'white',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.5)',
            zIndex: 10
          }}
        >
          {digit}
        </div>
        
        {/* Cosmic glow effect */}
        <div 
          className={`absolute inset-0 rounded-md ${
            isChanging ? 'opacity-60' : 'opacity-20'
          }`}
          style={{
            boxShadow: 'inset 0 0 15px 2px rgba(255, 255, 255, 0.5)'
          }}
        />
      </div>
    </div>
  );
};

// Space separator with a small planet orbiting
const SpaceSeparator = () => {
  return (
    <div className="relative w-12 h-36 mx-1 flex flex-col items-center justify-center">
      <div className="relative h-full w-full">
        {/* Orbit line (very subtle) */}
        <div 
          className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        />
        
        {/* Orbit path */}
        <Planet 
          size={4} 
          color="#ec4899" 
          orbitRadius={5}
          orbitSpeed={5}
          rotationSpeed={3}
        />
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

// Main Clock component
const Clock_94 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());
  
  // Update time every second
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

  // Format date
  const formattedDate = time.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  
  // Get current time as a fraction of 24 hours for sun position
  const timeOfDay = (time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds()) / 86400;

  return (
    <div className="relative rounded-lg shadow-2xl overflow-hidden bg-black perspective-[1000px]" style={{ minHeight: '300px' }}>
      {/* Deep space background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #0f0f20, #0a0a20, #050510)'
        }}
      />
      
      {/* Star field */}
      <StarField />
      
      {/* Comets */}
      <Comet delay={1} duration={3} />
      <Comet delay={5} duration={7} reverse={true} />
      <Comet delay={10} duration={5} />
      
      {/* Nebulas */}
      <Nebula 
        position={{ top: '10%', left: '10%' }} 
        color1="#3b82f6" 
        color2="#8b5cf6" 
      />
      <Nebula 
        position={{ top: '60%', left: '80%' }} 
        color1="#ec4899" 
        color2="#3b82f6" 
      />
      
      {/* Galaxy */}
      <Galaxy 
        position={{ top: '15%', right: '15%' }} 
        size={150} 
        rotationSpeed={0.1}
      />
      
      {/* Planets */}
      <Planet 
        size={20} 
        color="#16a34a" 
        position={{ top: '70%', left: '15%' }}
        rotationSpeed={0.5}
      />
      <Planet 
        size={35} 
        color="#ca8a04" 
        position={{ top: '25%', left: '80%' }}
        rotationSpeed={0.3}
        hasRings={true}
        ringColor="#d97706"
      />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8">
        {/* Title */}
        <h2 
          className="text-4xl font-bold tracking-widest text-center mb-8"
          style={{
            color: 'white',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
          }}
        >
          COSMIC TIME
        </h2>
        
        {/* Clock display */}
        <div className="flex items-center justify-center mb-8">
          {/* Hours */}
          <SpaceDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <SpaceDigit digit={hours[1]} prevDigit={prevHours[1]} />
          
          <SpaceSeparator />
          
          {/* Minutes */}
          <SpaceDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <SpaceDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
          
          <SpaceSeparator />
          
          {/* Seconds */}
          <SpaceDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <SpaceDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
        
        {/* Date display */}
        <div 
          className="text-white/80 text-sm tracking-wider bg-white/5 px-6 py-2 rounded-full backdrop-blur-sm"
          style={{
            textShadow: '0 0 5px rgba(255, 255, 255, 0.5)'
          }}
        >
          {formattedDate} • UNIVERSAL STANDARD TIME
        </div>
        
        {/* Solar system display at bottom */}
        <div className="relative mt-8 w-full h-2">
          {/* Sun at one end */}
          <div 
            className="absolute left-0 bottom-0 w-6 h-6 rounded-full"
            style={{
              background: 'radial-gradient(circle at center, #FFF, #eab308)',
              boxShadow: '0 0 20px 5px rgba(234, 179, 8, 0.7)',
              transform: 'translateY(50%)'
            }}
          />
          
          {/* Time orbit */}
          <div 
            className="absolute left-8 right-8 bottom-0 h-0.5 bg-white/10 rounded-full"
          />
          
          {/* Earth marker showing current time in the day */}
          <div 
            className="absolute bottom-0 w-3 h-3 rounded-full bg-blue-500"
            style={{
              left: `calc(8px + ${timeOfDay * 100}%)`,
              transform: 'translateY(50%)',
              boxShadow: '0 0 10px 2px rgba(59, 130, 246, 0.7)'
            }}
          />
          
          {/* Moon at other end */}
          <div 
            className="absolute right-0 bottom-0 w-4 h-4 rounded-full bg-gray-300"
            style={{
              background: 'radial-gradient(circle at center, #FFF, #d1d5db)',
              boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.5)',
              transform: 'translateY(50%)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Clock_94;

// Add these keyframes to your globals.css:
/*
@keyframes twinkle {
  0%, 100% { opacity: var(--tw-opacity, 1); transform: scale(1); }
  50% { opacity: calc(var(--tw-opacity, 1) * 0.5); transform: scale(0.8); }
}

@keyframes cometTrail {
  0% { transform: translateX(0%) translateY(0%); opacity: 0; }
  5% { opacity: 1; }
  95% { opacity: 1; }
  100% { transform: translateX(100vw) translateY(50vh); opacity: 0; }
}

@keyframes nebulaGlow {
  0%, 100% { opacity: var(--tw-opacity, 0.15); transform: scale(1); filter: hue-rotate(0deg); }
  50% { opacity: calc(var(--tw-opacity, 0.15) * 1.5); transform: scale(1.1); filter: hue-rotate(30deg); }
}

@keyframes spaceDigitChange {
  0% { transform: scale(1) rotateY(0deg); }
  50% { transform: scale(1.1) rotateY(180deg); }
  100% { transform: scale(1) rotateY(360deg); }
}
*/ 