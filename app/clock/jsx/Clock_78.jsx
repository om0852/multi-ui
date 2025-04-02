'use client';
import React, { useEffect, useState } from 'react';

// A gauge component to display numerical values in a steampunk style
const SteampunkGauge = ({ value, maxValue = 60, size = 80, label }) => {
  const radius = size / 2;
  const strokeWidth = size * 0.08;
  const normalizedValue = value / maxValue;
  const circumference = 2 * Math.PI * (radius - strokeWidth);
  const rotation = normalizedValue * 270 - 135; // -135 to 135 degrees
  
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Outer gauge case */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-700 to-yellow-900 
                    border-4 border-yellow-800 shadow-lg"
           style={{ boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)' }}>
        {/* Gauge markings */}
        {Array.from({ length: 6 }).map((_, i) => {
          const markRotation = -135 + (i * 54); // Distribute 6 marks over 270 degrees
          return (
            <div 
              key={i}
              className="absolute w-1 h-3 bg-yellow-200 origin-bottom"
              style={{ 
                bottom: '15%',
                left: '50%',
                transform: `translateX(-50%) rotate(${markRotation}deg)`,
                transformOrigin: '50% 200%'
              }}
            />
          );
        })}
      
        {/* Gauge face */}
        <div className="absolute inset-2 rounded-full bg-amber-100">
          {/* Gauge needle */}
          <div 
            className="absolute w-1 h-3/5 bg-red-800 rounded-t-full origin-bottom left-1/2 -translate-x-1/2 bottom-0 transition-transform duration-1000"
            style={{ transform: `translateX(-50%) rotate(${rotation}deg)` }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-800" />
          </div>
          
          {/* Center rivet */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-yellow-800 border border-yellow-600 shadow-sm"
               style={{ boxShadow: 'inset 0 0 2px rgba(0,0,0,0.5)' }} />
        </div>
      </div>
      
      {/* Gauge label */}
      <div className="absolute -bottom-6 inset-x-0 text-center text-xs text-yellow-800 font-bold uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

// Brass pipe connector for the separators
const PipeConnector = () => {
  return (
    <div className="relative h-24 w-8 flex items-center justify-center">
      {/* Vertical pipe */}
      <div className="absolute h-full w-4 bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-700 rounded">
        {/* Pipe rings */}
        <div className="absolute top-2 inset-x-0 h-1 bg-yellow-900 rounded-full"></div>
        <div className="absolute bottom-2 inset-x-0 h-1 bg-yellow-900 rounded-full"></div>
      </div>
      
      {/* Valve handle */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-6 h-6">
        <div className="absolute inset-0 rounded-full bg-yellow-800 border border-yellow-600 shadow-md"></div>
        <div className="absolute top-1/2 left-1/2 w-4 h-1.5 bg-yellow-900 rounded-full 
                      -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

// Mechanical gears that rotate
const Gear = ({ size, teeth = 8, speed = 10, reverse = false, className = "" }) => {
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + (reverse ? -1 : 1)) % 360);
    }, 100 / speed);
    
    return () => clearInterval(interval);
  }, [speed, reverse]);
  
  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        width: size, 
        height: size,
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.1s linear'
      }}
    >
      {/* Gear body */}
      <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 
                    border-2 border-yellow-700 z-10"></div>
      
      {/* Gear center */}
      <div className="absolute inset-[40%] rounded-full bg-yellow-900 border border-yellow-700 z-20"></div>
      
      {/* Gear teeth */}
      {Array.from({ length: teeth }).map((_, i) => {
        const angle = (i * 360) / teeth;
        return (
          <div
            key={i}
            className="absolute w-[20%] h-[20%] bg-gradient-to-br from-yellow-600 to-yellow-800 
                      border border-yellow-700 z-0"
            style={{
              top: '40%',
              left: '40%',
              transformOrigin: 'center',
              transform: `rotate(${angle}deg) translateY(-200%)`,
            }}
          />
        );
      })}
    </div>
  );
};

// The digit displayed on a mechanical counter
const MechanicalDigit = ({ digit, prevDigit }) => {
  const [isRotating, setIsRotating] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsRotating(true);
      const timer = setTimeout(() => setIsRotating(false), 800);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);
  
  return (
    <div className="relative w-16 h-28 rounded-md overflow-hidden">
      {/* Rivets in the corners */}
      <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-yellow-800 border border-yellow-700"></div>
      <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-yellow-800 border border-yellow-700"></div>
      <div className="absolute bottom-1 left-1 w-2 h-2 rounded-full bg-yellow-800 border border-yellow-700"></div>
      <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-yellow-800 border border-yellow-700"></div>
      
      {/* Metal plate background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-gray-400 border-2 border-yellow-700"></div>
      
      {/* Counter roller */}
      <div 
        className={`absolute inset-2 bg-amber-100 rounded shadow-inner flex items-center justify-center 
                   transition-transform ${isRotating ? 'duration-800' : 'duration-0'}`}
        style={{ 
          transform: isRotating ? 'rotateX(360deg)' : 'rotateX(0deg)',
          transformStyle: 'preserve-3d',
          boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2)'
        }}
      >
        <div className="text-5xl font-bold text-yellow-900">{digit}</div>
      </div>
      
      {/* Wear and scratches */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-200/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

const Clock_78 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());
  const [pressure, setPressure] = useState(50);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
      
      // Randomize pressure gauge value for effect
      setPressure(Math.floor(30 + Math.random() * 40));
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
    <div className="bg-gradient-to-br from-yellow-900/90 to-yellow-800/90 p-10 rounded-xl shadow-2xl border-4 border-yellow-700 
                    relative overflow-hidden">
      {/* Metal texture background */}
      <div 
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%23D97706' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E')",
          backgroundSize: '150px 150px'
        }}
      ></div>
      
      {/* Header with gauges */}
      <div className="flex justify-between items-start mb-8">
        <SteampunkGauge value={pressure} maxValue={100} size={72} label="PRESSURE" />
        
        <div className="text-center">
          <div className="text-xl text-yellow-200 font-bold uppercase tracking-widest mb-1">
            Chronometric Engine
          </div>
          <div className="text-xs text-yellow-200/70 uppercase">
            {time.toLocaleDateString('en-US', { 
              weekday: 'long',
              year: 'numeric',
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
        
        <SteampunkGauge 
          value={time.getSeconds()} 
          maxValue={60} 
          size={72} 
          label="SECONDS" 
        />
      </div>
      
      {/* Moving gear decoration */}
      <div className="absolute top-14 left-8 opacity-20">
        <Gear size={40} teeth={8} speed={5} className="absolute" />
        <Gear size={20} teeth={6} speed={8} reverse={true} 
              className="absolute" style={{ top: '15px', left: '30px' }} />
      </div>
      
      <div className="absolute bottom-10 right-8 opacity-20">
        <Gear size={30} teeth={10} speed={3} className="absolute" />
        <Gear size={18} teeth={6} speed={6} reverse={true} 
              className="absolute" style={{ top: '20px', left: '-5px' }} />
      </div>
      
      {/* Clock display */}
      <div className="relative bg-gradient-to-r from-yellow-800 to-yellow-700 p-6 rounded-lg border-2 border-yellow-600 shadow-xl
                     mx-auto max-w-3xl">
        <div className="flex items-center justify-center space-x-4">
          {/* Hours */}
          <div className="flex space-x-2">
            <MechanicalDigit digit={hours[0]} prevDigit={prevHours[0]} />
            <MechanicalDigit digit={hours[1]} prevDigit={prevHours[1]} />
          </div>
          
          <PipeConnector />
          
          {/* Minutes */}
          <div className="flex space-x-2">
            <MechanicalDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
            <MechanicalDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
          </div>
          
          <PipeConnector />
          
          {/* Seconds */}
          <div className="flex space-x-2">
            <MechanicalDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
            <MechanicalDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
          </div>
        </div>
        
        {/* Little gears between digits */}
        <div className="absolute top-1/2 left-[28%] -translate-y-1/2 transform-gpu">
          <Gear size={16} teeth={6} speed={6} />
        </div>
        <div className="absolute top-1/2 right-[28%] -translate-y-1/2 transform-gpu">
          <Gear size={16} teeth={6} speed={6} />
        </div>
        
        {/* Brass border accents */}
        <div className="absolute top-0 left-6 right-6 h-2 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
        <div className="absolute bottom-0 left-6 right-6 h-2 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>
      </div>
    </div>
  );
};

export default Clock_78; 