'use client';
import React, { useEffect, useState } from 'react';

const GearElement = ({ size, position, speed = 10, reverse = false, className = "" }) => {
  return (
    <div 
      className={`absolute ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...position,
        animation: `spin ${speed}s linear infinite ${reverse ? 'reverse' : ''}`
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path 
          d="M50 10 L55 15 L60 10 L65 15 L70 20 L75 15 L80 20 L75 25 L80 30 L85 35 L90 30 L95 35 L90 40 L90 45 L95 50 L90 55 L90 60 L95 65 L90 70 L85 65 L80 70 L75 75 L80 80 L75 85 L70 80 L65 85 L60 90 L55 85 L50 90 L45 85 L40 90 L35 85 L30 80 L25 85 L20 80 L25 75 L20 70 L15 65 L10 70 L5 65 L10 60 L10 55 L5 50 L10 45 L10 40 L5 35 L10 30 L15 35 L20 30 L25 25 L20 20 L25 15 L30 20 L35 15 L40 10 L45 15 Z"
          fill="#a16207"
          stroke="#78350f"
          strokeWidth="2"
        />
        <circle cx="50" cy="50" r="15" fill="#78350f" />
        <circle cx="50" cy="50" r="10" fill="#a16207" />
        <circle cx="50" cy="50" r="5" fill="#f59e0b" />
      </svg>
    </div>
  );
};

const Dial = ({ value, maxValue, radius, thickness, color = "#a16207", className = "" }) => {
  const angle = (value / maxValue) * 360;
  
  return (
    <div className={`relative ${className}`} style={{ width: radius * 2, height: radius * 2 }}>
      <div 
        className="absolute inset-0 rounded-full border-2 border-amber-800"
        style={{ 
          background: 'radial-gradient(circle at center, #92400e, #78350f)',
          boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)'
        }}
      ></div>
      
      <div 
        className="absolute"
        style={{
          width: thickness,
          height: radius - 10,
          background: color,
          left: '50%',
          top: '50%',
          transform: `translateX(-50%) translateY(-100%) rotate(${angle}deg)`,
          transformOrigin: 'bottom center',
          borderRadius: `${thickness / 2}px`,
          boxShadow: '0 0 5px rgba(0,0,0,0.5)'
        }}
      ></div>
      
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: thickness * 2,
          height: thickness * 2,
          background: '#78350f',
          border: '2px solid #92400e',
          boxShadow: '0 0 5px rgba(0,0,0,0.5)'
        }}
      ></div>
    </div>
  );
};

const SteampunkDigit = ({ digit }) => {
  return (
    <div className="relative w-16 h-24 rounded-lg overflow-hidden" style={{ perspective: '500px' }}>
      {/* Metal plate background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-amber-700 to-amber-900 border-2 border-amber-800 rounded-lg"
        style={{
          boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h20L0 20z" fill="%2392400e" fill-opacity="0.05"/%3E%3C/svg%3E"), radial-gradient(circle at 30% 30%, rgba(251, 191, 36, 0.1) 10%, transparent 10.5%), radial-gradient(circle at 70% 65%, rgba(251, 191, 36, 0.1) 8%, transparent 8.5%)'
        }}
      >
        {/* Rivets */}
        <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-amber-900 border border-amber-700"></div>
        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-900 border border-amber-700"></div>
        <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-amber-900 border border-amber-700"></div>
        <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-amber-900 border border-amber-700"></div>
      </div>
      
      {/* Digit display */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="text-4xl font-bold"
          style={{
            color: '#f59e0b',
            textShadow: '0 0 5px rgba(245, 158, 11, 0.5), 0 0 10px rgba(245, 158, 11, 0.3)'
          }}
        >
          {digit}
        </div>
      </div>
      
      {/* Glass cover effect */}
      <div 
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
          boxShadow: 'inset 0 0 5px rgba(255,255,255,0.2)'
        }}
      ></div>
    </div>
  );
};

const Clock_64 = () => {
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
  
  // Values for analog dials
  const secondsValue = time.getSeconds();
  const minutesValue = time.getMinutes();
  const hoursValue = time.getHours() % 12 * 5 + Math.floor(minutesValue / 12); // Hour hand moves slightly as minutes progress

  return (
    <div className="bg-gradient-to-br from-stone-700 to-stone-900 p-8 rounded-xl shadow-2xl border-4 border-amber-900/50 relative overflow-hidden">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h20L0 20z" fill="%23f59e0b" fill-opacity="0.4"/%3E%3C/svg%3E")',
          backgroundSize: '10px 10px'
        }}
      ></div>
      
      {/* Decorative gears */}
      <GearElement size={50} position={{ top: '-10px', left: '10%' }} speed={15} className="opacity-60" />
      <GearElement size={70} position={{ top: '70%', left: '-20px' }} speed={20} reverse={true} className="opacity-80" />
      <GearElement size={40} position={{ bottom: '10%', right: '5%' }} speed={12} className="opacity-70" />
      <GearElement size={30} position={{ top: '20%', right: '15%' }} speed={8} reverse={true} className="opacity-50" />
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Analog dials */}
        <div className="flex items-center space-x-4 mb-6">
          <Dial value={hoursValue} maxValue={60} radius={30} thickness={4} color="#f59e0b" />
          <Dial value={minutesValue} maxValue={60} radius={30} thickness={3} color="#f59e0b" />
          <Dial value={secondsValue} maxValue={60} radius={30} thickness={2} color="#f59e0b" />
        </div>
        
        {/* Digital display */}
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <SteampunkDigit digit={hours[0]} />
            <SteampunkDigit digit={hours[1]} />
          </div>
          
          <div className="text-amber-500 text-4xl font-bold flex flex-col items-center">
            <div className="w-2 h-2 rounded-full bg-amber-500 mb-2"></div>
            <div className="w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
          </div>
          
          <div className="flex space-x-2">
            <SteampunkDigit digit={minutes[0]} />
            <SteampunkDigit digit={minutes[1]} />
          </div>
          
          <div className="text-amber-500 text-4xl font-bold flex flex-col items-center">
            <div className="w-2 h-2 rounded-full bg-amber-500 mb-2"></div>
            <div className="w-2 h-2 rounded-full bg-amber-500 mt-2"></div>
          </div>
          
          <div className="flex space-x-2">
            <SteampunkDigit digit={seconds[0]} />
            <SteampunkDigit digit={seconds[1]} />
          </div>
        </div>
        
        {/* Brass nameplate */}
        <div 
          className="mt-6 px-4 py-1 bg-gradient-to-r from-amber-600 to-amber-700 rounded border border-amber-800 text-sm font-serif text-amber-200"
          style={{ boxShadow: 'inset 0 0 5px rgba(0,0,0,0.5)' }}
        >
          CHRONOMETER No. 64
        </div>
      </div>
    </div>
  );
};

export default Clock_64;

// Add to globals.css:
/*
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
*/ 