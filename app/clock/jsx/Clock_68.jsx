'use client';
import React, { useEffect, useState } from 'react';

// Steam animation that appears when digit changes
const SteamEffect = ({ isActive }) => {
  return (
    <div className={`absolute -top-8 left-0 right-0 flex justify-center pointer-events-none ${
      isActive ? 'opacity-100' : 'opacity-0'
    }`}>
      {[...Array(5)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-4 h-16 bg-white/30 rounded-full blur-md"
          style={{
            left: `${30 + i * 10}%`,
            animation: `steam 2s ease-out infinite`,
            animationDelay: `${i * 0.2}s`,
            transform: 'scale(0)',
            opacity: 0,
          }}
        ></div>
      ))}
    </div>
  );
};

// Individual plate that displays a digit
const PlateDigit = ({ digit, prevDigit }) => {
  const [isSteaming, setIsSteaming] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsSteaming(true);
      const timer = setTimeout(() => setIsSteaming(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);

  return (
    <div className="relative w-16 h-24">
      {/* Steam effect when digit changes */}
      <SteamEffect isActive={isSteaming} />
      
      {/* Plate with digit */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 to-neutral-200 rounded-full shadow-md flex items-center justify-center border-2 border-neutral-300">
        <div 
          className={`text-3xl font-bold transition-all duration-300 ${
            isSteaming ? 'text-orange-600 scale-110' : 'text-orange-500 scale-100'
          }`}
        >
          {digit}
        </div>
        
        {/* Inner plate ring */}
        <div className="absolute inset-2 border border-dashed border-neutral-300 rounded-full"></div>
        
        {/* Plate shine */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

// Food garnish elements
const Garnish = ({ type, position, rotation = 0 }) => {
  const garnishes = {
    leaf: (
      <div className="w-4 h-6 bg-green-500 rounded-full rotate-45"></div>
    ),
    herb: (
      <div className="w-5 h-3 bg-green-600 rounded-sm"></div>
    ),
    pepper: (
      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
    ),
    salt: (
      <div className="w-2 h-2 bg-white rounded-full"></div>
    )
  };

  return (
    <div 
      className="absolute"
      style={{ 
        transform: `rotate(${rotation}deg)`,
        ...position
      }}
    >
      {garnishes[type]}
    </div>
  );
};

const Clock_68 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());
  const [isCooking, setIsCooking] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
    }, 1000);

    // Simulate cooking animation
    const cookingTimer = setInterval(() => {
      setIsCooking(true);
      setTimeout(() => setIsCooking(false), 1000);
    }, 10000);

    return () => {
      clearInterval(timer);
      clearInterval(cookingTimer);
    };
  }, [time]);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  const prevHours = prevTime.getHours().toString().padStart(2, '0');
  const prevMinutes = prevTime.getMinutes().toString().padStart(2, '0');
  const prevSeconds = prevTime.getSeconds().toString().padStart(2, '0');

  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl border border-orange-200 shadow-xl relative">
      {/* Kitchen texture */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d97706' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 5v1H5v-1H1z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      {/* Main table surface */}
      <div className="relative bg-gradient-to-b from-amber-800 to-amber-900 p-6 rounded-lg shadow-inner">
        {/* Wood grain texture */}
        <div 
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264.888-.14.56.41 1.012.63 1.68.94.5.334.82.67 1.62.956.50.156.94.3 1.398.52.45.226.7.47.936.736.1 1.264.06 3.06.547 4.84.16.4.216.76.297.156.40.5.074.11.104.16l.013.12c.106.6.196.13.287.2.41.2.08.08.123.12.506.4.113.8.173.13.26.02.054.04.084.06a4.8 4.8 0 00.205.14c.165.10.33.20.5.28.2.12.39.23.59.33.40.2.78.40 1.18.5.6.30 1.17.5 1.76.7H20.99v-.73c.264-.11.5-.27.7-.45.4-.36.8-.68 1.12-.96.16-.13.28-.26.38-.35l.28-.24c.18-.14.32-.23.5-.3.65.10.81.10.987.23.55.06.1.12.15.62.03.45.06.10.10.15a2.9 2.9 0 01-.046-1.2c.05-.4.110-.76.18-1.14.25-1.16.57-2.17 1.18-2.82.3-.35.7-.6 1.14-.8zm-10.50-1.7c-.19 0-.38-.02-.56-.06a5.17 5.17 0 01-2.55-1.37c-.24-.23-.46-.5-.67-.76-.18-.24-.36-.48-.5-.72-.30-.5-.56-1-.72-1.5-.16-.49-.3-.97-.37-1.45a8.3 8.3 0 01-.12-2.25c.03-.8.120-1.6.3-2.36.17-.77.42-1.56.75-2.26C6.74 4.03 7.08 3.8 7.46 3a5.46 5.46 0 013.94-1.64c.25-.03.5-.05.74-.05.87 0 1.73.2 2.48.57a5.2 5.2 0 012.05 1.8c.28.34.5.7.7 1.07.8.37.14.75.19 1.12.14.93.14 1.8.05 2.7-.1.86-.3 1.7-.7 2.48-.3.77-.87 1.45-1.5 1.96h-.03c-.56.46-1.2.8-1.9 1-.64.2-1.3.3-2 .3zm-2.54-2.93c.16.08.35.15.5.23.12.08.27.14.4.2.18.06.37.1.55.15.18.02.35.05.53.05.12 0 .28 0 .40-.03s.27-.05.4-.1c.1-.05.22-.1.32-.15.1-.07.20-.14.3-.23.1-.1.2-.2.27-.32l.1-.13c.1-.14.16-.27.23-.42.06-.16.1-.33.13-.5a5 5 0 00.12-1.03c0-.23 0-.46-.03-.7-.03-.19-.08-.38-.14-.56-.06-.19-.14-.35-.23-.5-.1-.15-.2-.3-.3-.43-.12-.12-.24-.24-.37-.33-.13-.1-.26-.18-.4-.24-.14-.05-.26-.1-.42-.14-.74-.16-1.5 0-2.15.43-.17.12-.3.25-.43.4-.12.13-.24.27-.32.42a3.3 3.3 0 00-.53 1.35c-.06.5-.05 1 .06 1.5.1.45.27.87.53 1.25.13.16.26.3.42.42zm13.98 0c.1 0 .23-.03.34-.1.1-.05.2-.13.28-.22.08-.1.15-.2.2-.32.04-.1.1-.22.13-.34.02-.12.05-.25.05-.38 0-.27-.06-.53-.18-.76-.1-.22-.25-.4-.44-.53-.18-.13-.4-.22-.6-.27-.22-.05-.44-.05-.66 0-.22.06-.4.15-.6.3-.16.14-.3.33-.4.54-.1.22-.15.46-.15.7 0 .26.04.5.14.73.1.22.25.4.44.56.08.05.17.1.26.16.1.04.2.07.3.1.15.03.3.02.46.02' fill='%23d97706' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
      
        {/* Serving platter with clock */}
        <div className="relative bg-neutral-100 p-4 rounded-lg shadow-md border border-neutral-300">
          <div className="text-center mb-3">
            <h2 className="font-serif text-orange-800">Today's Special</h2>
          </div>
          
          <div className="flex items-center justify-center space-x-4 relative">
            {/* Decorative garnishes */}
            <Garnish type="leaf" position={{ top: "-10px", left: "10%" }} rotation={20} />
            <Garnish type="herb" position={{ bottom: "5px", right: "15%" }} rotation={-15} />
            <Garnish type="pepper" position={{ top: "50%", left: "5px" }} />
            <Garnish type="salt" position={{ top: "40%", right: "10px" }} />
            
            {/* Hours */}
            <div className="flex space-x-2">
              <PlateDigit digit={hours[0]} prevDigit={prevHours[0]} />
              <PlateDigit digit={hours[1]} prevDigit={prevHours[1]} />
            </div>
            
            {/* Separator */}
            <div className="text-orange-800 text-2xl font-serif">:</div>
            
            {/* Minutes */}
            <div className="flex space-x-2">
              <PlateDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
              <PlateDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
            </div>
            
            {/* Separator */}
            <div className="text-orange-800 text-2xl font-serif">:</div>
            
            {/* Seconds */}
            <div className="flex space-x-2">
              <PlateDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
              <PlateDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
            </div>
          </div>
        </div>
        
        {/* Kitchen utensils */}
        <div className="absolute -top-4 right-10 w-6 h-20 bg-neutral-300 rounded-t-md" 
             style={{ transform: 'rotate(15deg)' }}>
          <div className="absolute top-0 left-0 right-0 h-4 bg-neutral-400 rounded-t-md"></div>
        </div>
        
        <div className="absolute -bottom-2 left-8 w-4 h-16 bg-neutral-200 rounded-b-full"
             style={{ transform: 'rotate(-10deg)' }}>
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-neutral-400 rounded-b-full"></div>
        </div>
      </div>
      
      {/* Kitchen timer */}
      <div className="mt-4 flex justify-center">
        <div className={`px-4 py-1 bg-neutral-800 text-xs font-mono text-neutral-200 rounded-full transition-colors ${
          isCooking ? 'bg-red-600' : ''
        }`}>
          {isCooking ? "COOKING..." : "READY TO SERVE"}
        </div>
      </div>
    </div>
  );
};

export default Clock_68;

// Add to globals.css:
/*
@keyframes steam {
  0% { transform: scale(0); opacity: 0; }
  20% { transform: scale(1); opacity: 0.8; }
  100% { transform: translateY(-30px) scale(1.5); opacity: 0; }
}
*/ 