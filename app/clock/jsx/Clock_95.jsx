'use client';
import React, { useState, useEffect } from 'react';

// Rotating gear component
const Gear = ({ size = 60, teeth = 8, color = "#b45309", rotation = 0, speed = 1, reverse = false, position = {} }) => {
  const toothHeight = size * 0.15;
  const innerRadius = size / 2 - toothHeight;
  const outerRadius = size / 2;
  
  // Create the gear shape with SVG
  const gearPath = [];
  const teethCount = teeth;
  
  for (let i = 0; i < teethCount; i++) {
    const angle = (i / teethCount) * Math.PI * 2;
    const nextAngle = ((i + 1) / teethCount) * Math.PI * 2;
    
    // Inner point before tooth
    const innerX1 = Math.cos(angle - 0.05) * innerRadius;
    const innerY1 = Math.sin(angle - 0.05) * innerRadius;
    
    // Outer point start of tooth
    const outerX1 = Math.cos(angle) * outerRadius;
    const outerY1 = Math.sin(angle) * outerRadius;
    
    // Outer point end of tooth
    const outerX2 = Math.cos(angle + Math.PI / teethCount) * outerRadius;
    const outerY2 = Math.sin(angle + Math.PI / teethCount) * outerRadius;
    
    // Inner point after tooth
    const innerX2 = Math.cos(angle + Math.PI / teethCount + 0.05) * innerRadius;
    const innerY2 = Math.sin(angle + Math.PI / teethCount + 0.05) * innerRadius;
    
    // First point
    if (i === 0) {
      gearPath.push(`M ${innerX1} ${innerY1}`);
    }
    
    // Create the tooth
    gearPath.push(`L ${outerX1} ${outerY1}`);
    gearPath.push(`A ${outerRadius} ${outerRadius} 0 0 1 ${outerX2} ${outerY2}`);
    gearPath.push(`L ${innerX2} ${innerY2}`);
    
    // Arc to the next tooth
    if (i < teethCount - 1) {
      const nextInnerX = Math.cos(nextAngle - 0.05) * innerRadius;
      const nextInnerY = Math.sin(nextAngle - 0.05) * innerRadius;
      gearPath.push(`A ${innerRadius} ${innerRadius} 0 0 1 ${nextInnerX} ${nextInnerY}`);
    } else {
      // Close the path
      gearPath.push(`A ${innerRadius} ${innerRadius} 0 0 1 ${innerX1} ${innerY1}`);
    }
  }
  
  return (
    <div 
      className="absolute"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...position,
      }}
    >
      <div 
        className={`w-full h-full animate-[gearRotation_${60/speed}s_linear_infinite${reverse ? '_reverse' : ''}]`}
        style={{
          transformOrigin: 'center center',
          transform: `rotate(${rotation}deg)`
        }}
      >
        <svg width="100%" height="100%" viewBox={`${-outerRadius} ${-outerRadius} ${outerRadius * 2} ${outerRadius * 2}`}>
          {/* Main gear body */}
          <path
            d={gearPath.join(' ')}
            fill={color}
            stroke="#78350f"
            strokeWidth="1"
          />
          
          {/* Center hole */}
          <circle
            cx="0"
            cy="0"
            r={innerRadius * 0.3}
            fill="#292524"
            stroke="#78350f"
            strokeWidth="1"
          />
          
          {/* Bolt pattern */}
          {[...Array(4)].map((_, i) => {
            const boltAngle = (i / 4) * Math.PI * 2;
            const boltX = Math.cos(boltAngle) * (innerRadius * 0.6);
            const boltY = Math.sin(boltAngle) * (innerRadius * 0.6);
            
            return (
              <circle
                key={i}
                cx={boltX}
                cy={boltY}
                r={innerRadius * 0.1}
                fill="#78350f"
                stroke="#292524"
                strokeWidth="0.5"
              />
            );
          })}
          
          {/* Inner details */}
          <circle
            cx="0"
            cy="0"
            r={innerRadius * 0.7}
            fill="none"
            stroke="#78350f"
            strokeWidth="0.5"
            strokeDasharray="3,3"
          />
        </svg>
      </div>
    </div>
  );
};

// Steam pipe connection
const Pipe = ({ start, end, width = 6, color = "#a16207" }) => {
  // Calculate angle and length
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const length = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);
  
  return (
    <div 
      className="absolute"
      style={{
        width: `${length}px`,
        height: `${width}px`,
        background: color,
        borderRadius: `${width/2}px`,
        transformOrigin: 'left center',
        transform: `translate(${start.x}px, ${start.y}px) rotate(${angle}deg)`,
        boxShadow: 'inset 0 2px 2px rgba(255, 255, 255, 0.2), inset 0 -2px 2px rgba(0, 0, 0, 0.2)'
      }}
    >
      {/* Pipe segment details */}
      <div 
        className="absolute"
        style={{
          top: '20%',
          left: 0,
          right: 0,
          height: '1px',
          background: 'rgba(255, 255, 255, 0.2)'
        }}
      />
    </div>
  );
};

// Pressure gauge with needle
const PressureGauge = ({ value = 50, size = 40, position = {} }) => {
  // Calculate needle angle (0-100% maps to 180 to 0 degrees)
  const needleAngle = ((100 - value) / 100) * 180;
  
  return (
    <div 
      className="absolute"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...position,
      }}
    >
      {/* Gauge body */}
      <div 
        className="w-full h-full rounded-full border-4 border-amber-800"
        style={{
          background: 'radial-gradient(circle at center, #f5f5f4, #e7e5e4)',
          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Gauge markings */}
        <div className="absolute inset-2 rounded-full">
          {[...Array(5)].map((_, i) => {
            const markAngle = (i / 4) * 180;
            return (
              <div
                key={i}
                className="absolute w-1 h-2 bg-stone-800"
                style={{
                  top: '10%',
                  left: '50%',
                  transformOrigin: 'bottom center',
                  transform: `translateX(-50%) rotate(${markAngle}deg)`,
                }}
              />
            );
          })}
          
          {/* Min/max labels */}
          <div 
            className="absolute text-[8px] font-bold text-stone-800"
            style={{
              bottom: '40%',
              left: '10%',
            }}
          >
            0
          </div>
          <div 
            className="absolute text-[8px] font-bold text-stone-800"
            style={{
              bottom: '40%',
              right: '10%',
            }}
          >
            100
          </div>
        </div>
        
        {/* Needle */}
        <div 
          className="absolute top-1/2 left-1/2 w-[60%] h-1 bg-red-800 rounded"
          style={{
            transformOrigin: 'left center',
            transform: `translate(-2px, -50%) rotate(${needleAngle}deg)`,
          }}
        >
          <div 
            className="absolute right-0 w-1 h-1 rounded-full bg-red-800"
          />
        </div>
        
        {/* Center pin */}
        <div 
          className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-stone-800 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

// Steam valve
const Valve = ({ position = {}, isOpen = false, size = 30 }) => {
  return (
    <div 
      className="absolute"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...position,
      }}
    >
      {/* Valve body */}
      <div 
        className="absolute inset-0"
        style={{
          background: '#b45309',
          borderRadius: '20%',
          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.4)'
        }}
      />
      
      {/* Valve handle */}
      <div 
        className="absolute"
        style={{
          top: '10%',
          left: '50%',
          width: '8px',
          height: '60%',
          background: '#78350f',
          transform: `translateX(-50%) rotate(${isOpen ? '90deg' : '0deg'})`,
          transformOrigin: 'center center',
          borderRadius: '2px',
          transition: 'transform 0.5s ease'
        }}
      >
        <div 
          className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-amber-900 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      
      {/* Valve base */}
      <div 
        className="absolute"
        style={{
          bottom: '-4px',
          left: '0',
          right: '0',
          height: '4px',
          background: '#78350f',
          borderRadius: '0 0 4px 4px'
        }}
      />
    </div>
  );
};

// Mechanical digit display
const MechanicalDigit = ({ digit, prevDigit }) => {
  const [isChanging, setIsChanging] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsChanging(true);
      const timer = setTimeout(() => setIsChanging(false), 500);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);
  
  // Little animation for when the digit changes
  const gearRotation = isChanging ? 45 : 0;
  
  return (
    <div className="relative w-24 h-36 mx-1">
      {/* Metal plate background */}
      <div 
        className="absolute inset-0 rounded-md"
        style={{
          background: 'linear-gradient(135deg, #d6d3d1, #a8a29e)',
          boxShadow: 'inset 0 0 0 2px #78716c, 2px 2px 8px rgba(0, 0, 0, 0.5)',
          overflow: 'hidden'
        }}
      >
        {/* Rivets on corners */}
        {[[5, 5], [5, 95], [95, 5], [95, 95]].map((pos, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-amber-900"
            style={{
              top: `${pos[1]}%`,
              left: `${pos[0]}%`,
              transform: 'translate(-50%, -50%)',
              boxShadow: 'inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(0, 0, 0, 0.3)'
            }}
          />
        ))}
        
        {/* Decorative gears around the digit */}
        <Gear 
          size={20} 
          teeth={6} 
          color="#b45309" 
          rotation={gearRotation} 
          speed={isChanging ? 4 : 1} 
          position={{ top: '10%', right: '8%' }} 
        />
        <Gear 
          size={16} 
          teeth={8} 
          color="#b45309" 
          rotation={gearRotation + 10} 
          speed={isChanging ? 6 : 1.5} 
          reverse={true}
          position={{ bottom: '10%', left: '10%' }} 
        />
        
        {/* Small pipes */}
        <div 
          className="absolute top-[15%] left-[15%] w-[20%] h-2 rounded-full bg-amber-800"
          style={{
            boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px rgba(0, 0, 0, 0.2)'
          }}
        />
        <div 
          className="absolute bottom-[15%] right-[15%] w-[20%] h-2 rounded-full bg-amber-800"
          style={{
            boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.2), inset 0 -1px 1px rgba(0, 0, 0, 0.2)'
          }}
        />
      </div>
      
      {/* Digital display cut-out window */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-black rounded-sm flex items-center justify-center"
        style={{
          boxShadow: 'inset 0 0 5px rgba(255, 255, 255, 0.2), 0 0 0 2px #78716c'
        }}
      >
        {/* Digit */}
        <div 
          className={`text-6xl font-mono font-bold ${isChanging ? 'animate-[mechanicalChange_0.5s_ease-in-out]' : ''}`}
          style={{
            color: '#fb923c',
            textShadow: '0 0 10px rgba(251, 146, 60, 0.7)',
          }}
        >
          {digit}
        </div>
      </div>
      
      {/* Steam effect when changing */}
      {isChanging && (
        <div className="absolute top-0 right-[20%] w-2 h-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-[steamRise_1s_ease-out_forwards]"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                opacity: Math.random() * 0.5 + 0.2,
                left: `${Math.random() * 20 - 10}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Separator with pipes
const MechanicalSeparator = () => {
  // Randomly generate a small amount of steam every few seconds
  const [steamActive, setSteamActive] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSteamActive(true);
      setTimeout(() => setSteamActive(false), 1000);
    }, 5000 + Math.random() * 5000); // Random interval between 5-10 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative w-12 h-36 mx-1 flex flex-col items-center justify-center">
      <div className="relative h-full w-full">
        {/* Vertical pipe */}
        <div 
          className="absolute left-1/2 top-[15%] bottom-[15%] w-3 -translate-x-1/2 rounded-full bg-amber-800"
          style={{
            boxShadow: 'inset 1px 0 2px rgba(255, 255, 255, 0.2), inset -1px 0 2px rgba(0, 0, 0, 0.2)'
          }}
        />
        
        {/* Valve in the middle */}
        <Valve 
          position={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          isOpen={true}
          size={20}
        />
        
        {/* Dots */}
        <div className="absolute top-[30%] left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-amber-500"></div>
        <div className="absolute bottom-[30%] left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-amber-500"></div>
        
        {/* Steam effect */}
        {steamActive && (
          <div className="absolute top-[35%] left-[75%] w-2 h-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white animate-[steamRise_2s_ease-out_forwards]"
                style={{
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  opacity: Math.random() * 0.4 + 0.2,
                  left: `${Math.random() * 10 - 5}px`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Main Clock component
const Clock_95 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());
  const [pressure, setPressure] = useState(50);
  const [steamLevel, setSteamLevel] = useState(70);
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
      
      // Randomly fluctuate pressure readings
      setPressure(prev => {
        const newValue = prev + (Math.random() * 10 - 5);
        return Math.max(10, Math.min(90, newValue));
      });
      
      // Randomly fluctuate steam level
      setSteamLevel(prev => {
        const newValue = prev + (Math.random() * 6 - 3);
        return Math.max(40, Math.min(95, newValue));
      });
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
    <div className="relative p-6 rounded-lg shadow-2xl overflow-hidden">
      {/* Main background - metal plate */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(45deg, #78716c, #a8a29e, #78716c)',
          boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.5)',
        }}
      />
      
      {/* Rivets on background */}
      {[...Array(12)].map((_, i) => {
        const x = 5 + Math.floor(i / 3) * 22;
        const y = 5 + (i % 3) * 45;
        return (
          <div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-amber-900"
            style={{
              top: `${y}%`,
              left: `${x}%`,
              boxShadow: 'inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(0, 0, 0, 0.3)'
            }}
          />
        );
      })}
      
      {/* Title plate */}
      <div className="relative z-10 mx-auto mb-6 max-w-xs">
        <div 
          className="w-full py-2 text-center rounded-md text-xl font-bold"
          style={{
            background: 'linear-gradient(to bottom, #b45309, #92400e)',
            color: '#f5f5f4',
            boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.5)',
            letterSpacing: '0.1em',
            textShadow: '0 2px 2px rgba(0, 0, 0, 0.5)'
          }}
        >
          CHRONOS ENGINE
        </div>
        
        {/* Bolts for title plate */}
        <div className="absolute top-1/2 left-4 w-3 h-3 -translate-y-1/2 rounded-full bg-amber-900"></div>
        <div className="absolute top-1/2 right-4 w-3 h-3 -translate-y-1/2 rounded-full bg-amber-900"></div>
      </div>
      
      {/* Background decorative elements */}
      <Gear 
        size={80} 
        teeth={12} 
        color="#b45309" 
        rotation={15} 
        position={{ top: '10%', left: '5%' }} 
      />
      <Gear 
        size={60} 
        teeth={8} 
        color="#92400e" 
        rotation={22} 
        speed={1.5}
        reverse={true}
        position={{ bottom: '15%', right: '5%' }} 
      />
      
      {/* Pressure gauges */}
      <PressureGauge 
        value={pressure} 
        position={{ top: '15%', right: '15%' }} 
      />
      <PressureGauge 
        value={steamLevel} 
        position={{ bottom: '15%', left: '20%' }} 
      />
      
      {/* Pipes connecting elements */}
      <Pipe
        start={{ x: 30, y: 50 }}
        end={{ x: 80, y: 50 }}
      />
      <Pipe
        start={{ x: 30, y: 70 }}
        end={{ x: 80, y: 120 }}
      />
      <Pipe
        start={{ x: 400, y: 50 }}
        end={{ x: 350, y: 100 }}
      />
      
      {/* Main clock display */}
      <div className="relative z-10 flex justify-center items-center my-6">
        {/* Hours */}
        <MechanicalDigit digit={hours[0]} prevDigit={prevHours[0]} />
        <MechanicalDigit digit={hours[1]} prevDigit={prevHours[1]} />
        
        <MechanicalSeparator />
        
        {/* Minutes */}
        <MechanicalDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
        <MechanicalDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        
        <MechanicalSeparator />
        
        {/* Seconds */}
        <MechanicalDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
        <MechanicalDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
      </div>
      
      {/* Control panel */}
      <div 
        className="relative z-10 mx-auto mt-6 max-w-md p-3 rounded-md"
        style={{
          background: 'linear-gradient(to bottom, #57534e, #44403c)',
          boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1), inset 0 -1px 2px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div 
              className="h-3 w-8 rounded-full"
              style={{
                background: 'linear-gradient(to right, #b45309, #f59e0b, #b45309)',
                boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.3)'
              }}
            />
            <div 
              className="ml-2 text-xs font-mono"
              style={{
                color: '#f5f5f4',
              }}
            >
              PRESSURE: {pressure.toFixed(1)} PSI
            </div>
          </div>
          
          <div className="flex items-center">
            <div 
              className="h-3 w-8 rounded-full"
              style={{
                background: 'linear-gradient(to right, #b45309, #f59e0b, #b45309)',
                boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.3)'
              }}
            />
            <div 
              className="ml-2 text-xs font-mono"
              style={{
                color: '#f5f5f4',
              }}
            >
              STEAM: {steamLevel.toFixed(1)}%
            </div>
          </div>
          
          <div className="flex items-center">
            <div 
              className="h-3 w-3 rounded-full bg-green-500 animate-pulse"
              style={{
                boxShadow: '0 0 5px #22c55e'
              }}
            />
            <div 
              className="ml-2 text-xs font-mono"
              style={{
                color: '#f5f5f4',
              }}
            >
              SYSTEM OPERATIONAL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock_95;

// Add these keyframes to your globals.css:
/*
@keyframes gearRotation {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes gearRotation_reverse {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}

@keyframes mechanicalChange {
  0% { transform: scale(1); filter: brightness(1); }
  50% { transform: scale(0.9); filter: brightness(1.5); }
  100% { transform: scale(1); filter: brightness(1); }
}

@keyframes steamRise {
  0% { transform: translateY(0) scale(1); opacity: var(--tw-opacity, 0.4); }
  100% { transform: translateY(-20px) scale(2); opacity: 0; }
}
*/ 