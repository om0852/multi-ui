'use client';
import React, { useState, useEffect } from 'react';

// Marble texture generator - creates a div with marble-like pattern
const MarbleTexture = ({ color = 'gray', intensity = 0.1, grain = 3, className = "" }) => {
  let marbleStyle = {};
  
  switch (color) {
    case 'black':
      marbleStyle = {
        background: `
          radial-gradient(circle at 50% 50%, rgba(50, 50, 50, ${intensity}) 0%, transparent 50%) 0 0 / ${grain * 15}px ${grain * 15}px,
          radial-gradient(circle at 20% 20%, rgba(60, 60, 60, ${intensity}) 0%, transparent 50%) 0 0 / ${grain * 30}px ${grain * 22}px,
          linear-gradient(to right, rgba(10, 10, 10, 1), rgba(40, 40, 40, 1), rgba(30, 30, 30, 1), rgba(20, 20, 20, 1))
        `,
      };
      break;
    case 'white':
      marbleStyle = {
        background: `
          radial-gradient(circle at 50% 50%, rgba(255, 255, 255, ${intensity + 0.1}) 0%, transparent 50%) 0 0 / ${grain * 15}px ${grain * 15}px,
          radial-gradient(circle at 20% 20%, rgba(200, 200, 200, ${intensity}) 0%, transparent 50%) 0 0 / ${grain * 30}px ${grain * 22}px,
          linear-gradient(to right, rgba(240, 240, 240, 1), rgba(255, 255, 255, 1), rgba(220, 220, 220, 1), rgba(250, 250, 250, 1))
        `,
      };
      break;
    case 'gold':
      marbleStyle = {
        background: `
          radial-gradient(circle at 50% 50%, rgba(255, 215, 0, ${intensity + 0.1}) 0%, transparent 50%) 0 0 / ${grain * 15}px ${grain * 15}px,
          radial-gradient(circle at 20% 20%, rgba(218, 165, 32, ${intensity}) 0%, transparent 50%) 0 0 / ${grain * 30}px ${grain * 22}px,
          linear-gradient(to right, rgba(184, 134, 11, 1), rgba(218, 165, 32, 1), rgba(255, 215, 0, 1), rgba(184, 134, 11, 1))
        `,
      };
      break;
    case 'emerald':
      marbleStyle = {
        background: `
          radial-gradient(circle at 50% 50%, rgba(0, 201, 87, ${intensity + 0.1}) 0%, transparent 50%) 0 0 / ${grain * 15}px ${grain * 15}px,
          radial-gradient(circle at 20% 20%, rgba(20, 160, 87, ${intensity}) 0%, transparent 50%) 0 0 / ${grain * 30}px ${grain * 22}px,
          linear-gradient(to right, rgba(0, 138, 59, 1), rgba(16, 185, 129, 1), rgba(5, 150, 105, 1), rgba(0, 138, 59, 1))
        `,
      };
      break;
    default: // gray marble
      marbleStyle = {
        background: `
          radial-gradient(circle at 50% 50%, rgba(200, 200, 200, ${intensity + 0.1}) 0%, transparent 50%) 0 0 / ${grain * 15}px ${grain * 15}px,
          radial-gradient(circle at 20% 20%, rgba(180, 180, 180, ${intensity}) 0%, transparent 50%) 0 0 / ${grain * 30}px ${grain * 22}px,
          linear-gradient(to right, rgba(120, 120, 120, 1), rgba(150, 150, 150, 1), rgba(130, 130, 130, 1), rgba(140, 140, 140, 1))
        `,
      };
  }

  return (
    <div 
      className={`${className}`}
      style={{
        ...marbleStyle,
        backgroundBlendMode: 'soft-light, normal, normal',
      }}
    />
  );
};

// Stone engraving effect for digits
const StoneDigit = ({ digit, prevDigit }) => {
  const [isChanging, setIsChanging] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsChanging(true);
      const timer = setTimeout(() => setIsChanging(false), 500);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);

  return (
    <div className="relative w-24 h-36 mx-1">
      {/* Main marble slab */}
      <MarbleTexture 
        color="gray" 
        intensity={0.2} 
        grain={2} 
        className="absolute inset-0 rounded-md overflow-hidden"
      />
      
      {/* Carved digit */}
      <div 
        className={`absolute inset-0 flex items-center justify-center ${
          isChanging ? 'animate-[stoneChange_0.5s_ease-in-out]' : ''
        }`}
      >
        <div 
          className="text-6xl font-serif"
          style={{
            color: 'rgba(40, 40, 40, 0.8)',
            textShadow: `
              -1px -1px 0 rgba(255, 255, 255, 0.2),
              1px -1px 0 rgba(255, 255, 255, 0.2),
              -1px 1px 0 rgba(255, 255, 255, 0.2),
              1px 1px 0 rgba(255, 255, 255, 0.2),
              0 2px 6px rgba(0, 0, 0, 0.6)
            `,
          }}
        >
          {digit}
        </div>
      </div>
      
      {/* Bevel edge effect */}
      <div 
        className="absolute inset-0 rounded-md pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 6px 2px rgba(255, 255, 255, 0.2), inset 0 0 2px 1px rgba(0, 0, 0, 0.4)'
        }}
      />
      
      {/* Dust particles effect when changing */}
      {isChanging && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gray-200 rounded-full animate-[stoneDust_1s_ease-out_forwards]"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Stone pillar separator
const StoneSeparator = () => {
  return (
    <div className="relative h-36 w-12 mx-1 flex flex-col items-center justify-center">
      <MarbleTexture 
        color="black" 
        intensity={0.15} 
        grain={1.5} 
        className="absolute inset-y-6 w-3 rounded-full overflow-hidden"
      />
      
      {/* Dots */}
      <div className="h-3 w-3 rounded-full bg-gray-300 mb-4 shadow-inner"></div>
      <div className="h-3 w-3 rounded-full bg-gray-300 shadow-inner"></div>
      
      {/* Bevel edge effect */}
      <div 
        className="absolute inset-y-6 w-3 rounded-full pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 4px 1px rgba(255, 255, 255, 0.2), inset 0 0 2px 1px rgba(0, 0, 0, 0.4)'
        }}
      />
    </div>
  );
};

// Carved ornament decoration
const StoneOrnament = ({ type, className = "", style = {} }) => {
  let ornamentPath = "";
  
  switch (type) {
    case 'greek':
      ornamentPath = "M0,10 H100 M20,0 V20 M40,0 V20 M60,0 V20 M80,0 V20";
      break;
    case 'floral':
      ornamentPath = "M10,10 C20,0 30,0 40,10 C50,20 60,20 70,10 C80,0 90,0 100,10";
      break;
    case 'wave':
      ornamentPath = "M0,10 C10,5 20,15 30,10 C40,5 50,15 60,10 C70,5 80,15 90,10 C100,5 110,15 120,10";
      break;
    case 'knot':
      ornamentPath = "M10,0 C30,0 30,20 50,20 C70,20 70,0 90,0";
      break;
    default:
      ornamentPath = "M0,10 H100";
  }

  return (
    <div className={`relative ${className}`} style={style}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 100 20" 
        preserveAspectRatio="none"
        className="text-gray-700"
      >
        <path 
          d={ornamentPath} 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round"
        />
      </svg>
      
      {/* Shadow effect */}
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 100 20" 
        preserveAspectRatio="none"
        className="absolute inset-0 text-white opacity-20"
        style={{ transform: 'translateY(1px)' }}
      >
        <path 
          d={ornamentPath} 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

// Gold emblem for date display
const GoldEmblem = ({ children, className = "" }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <MarbleTexture 
        color="gold" 
        intensity={0.25} 
        grain={1} 
        className="absolute inset-0 rounded-md"
      />
      
      <div className="relative z-10 px-6 py-3 text-center">
        {children}
      </div>
      
      {/* Bevel edge effect */}
      <div 
        className="absolute inset-0 rounded-md pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 6px 2px rgba(255, 255, 255, 0.3), inset 0 0 2px 1px rgba(0, 0, 0, 0.4)'
        }}
      />
    </div>
  );
};

// Stone column
const StoneColumn = ({ position, height = 120, width = 30 }) => {
  return (
    <div 
      className="absolute"
      style={{
        ...position,
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      {/* Column base */}
      <div className="absolute bottom-0 left-0 right-0 h-[15%]">
        <MarbleTexture 
          color="gray" 
          intensity={0.2} 
          grain={1.5} 
          className="h-full rounded-b-md"
        />
      </div>
      
      {/* Column shaft */}
      <div className="absolute bottom-[15%] left-[15%] right-[15%] h-[70%]">
        <MarbleTexture 
          color="white" 
          intensity={0.15} 
          grain={2} 
          className="h-full"
        />
        
        {/* Column fluting */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(0,0,0,0.03) 4px, rgba(0,0,0,0.03) 8px)',
          }}
        />
      </div>
      
      {/* Column capital */}
      <div className="absolute top-0 left-0 right-0 h-[15%]">
        <MarbleTexture 
          color="gray" 
          intensity={0.2} 
          grain={1.5} 
          className="h-full rounded-t-md"
        />
      </div>
      
      {/* Shadow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)'
        }}
      />
    </div>
  );
};

// Main clock component
const Clock_93 = () => {
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

  return (
    <div className="relative p-8 rounded-lg shadow-xl overflow-hidden">
      {/* Main stone background */}
      <MarbleTexture 
        color="gray" 
        intensity={0.3} 
        grain={4} 
        className="absolute inset-0"
      />
      
      {/* Decorative stone columns */}
      <StoneColumn position={{ left: '5%', bottom: '10%' }} height={150} width={30} />
      <StoneColumn position={{ right: '5%', bottom: '10%' }} height={150} width={30} />
      
      {/* Title engraving */}
      <div className="text-center mb-8 mt-4">
        <h2 
          className="text-3xl font-serif tracking-wide" 
          style={{
            color: 'rgba(40, 40, 40, 0.9)',
            textShadow: `
              -1px -1px 0 rgba(255, 255, 255, 0.2),
              1px -1px 0 rgba(255, 255, 255, 0.2),
              -1px 1px 0 rgba(255, 255, 255, 0.2),
              1px 1px 0 rgba(255, 255, 255, 0.2)
            `,
          }}
        >
          TEMPUS SAXUM
        </h2>
        
        <StoneOrnament 
          type="greek" 
          className="h-5 w-64 mx-auto mt-2" 
        />
      </div>
      
      {/* Main clock display */}
      <div className="flex justify-center items-center my-8">
        {/* Hours */}
        <StoneDigit digit={hours[0]} prevDigit={prevHours[0]} />
        <StoneDigit digit={hours[1]} prevDigit={prevHours[1]} />
        
        <StoneSeparator />
        
        {/* Minutes */}
        <StoneDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
        <StoneDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        
        <StoneSeparator />
        
        {/* Seconds */}
        <StoneDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
        <StoneDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
      </div>
      
      {/* Date display in gold emblem */}
      <div className="flex justify-center mt-8 mb-4">
        <GoldEmblem className="max-w-xs">
          <div 
            className="text-lg font-serif tracking-wide" 
            style={{
              color: 'rgba(80, 40, 0, 0.9)',
              textShadow: '0 1px 1px rgba(255, 255, 255, 0.4)'
            }}
          >
            {formattedDate}
          </div>
        </GoldEmblem>
      </div>
      
      {/* Bottom ornament */}
      <StoneOrnament 
        type="wave" 
        className="h-5 w-full mt-6" 
      />
      
      {/* Aging effect - subtle cracks */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 45%, rgba(0, 0, 0, 0.5) 45%, rgba(0, 0, 0, 0.5) 46%, transparent 46%),
            linear-gradient(135deg, transparent 30%, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0.5) 31%, transparent 31%)
          `,
          backgroundSize: '300px 300px, 200px 200px',
          backgroundPosition: '50% 50%, 30% 70%'
        }}
      />
      
      {/* Lighting effect - top light */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'
        }}
      />
    </div>
  );
};

export default Clock_93;

// Add these keyframes to your globals.css:
/*
@keyframes stoneChange {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes stoneDust {
  0% { transform: translate(0, 0); opacity: 0.5; }
  100% { transform: translate(var(--tw-translate-x, 0), var(--tw-translate-y, -30px)); opacity: 0; }
}
*/ 