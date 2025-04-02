'use client';
import React, { useEffect, useState } from 'react';

// Paper fold component - creates a visual effect of folded paper with a crease
const PaperFold = ({ children, direction = 'horizontal', className = '' }) => {
  const creaseStyle = direction === 'horizontal' 
    ? 'absolute left-0 right-0 top-1/2 h-[1px] bg-black/5' 
    : 'absolute top-0 bottom-0 left-1/2 w-[1px] bg-black/5';
  
  const shadowStyle = direction === 'horizontal' 
    ? 'absolute left-0 right-0 top-1/2 h-[2px] bg-gradient-to-b from-black/10 to-transparent' 
    : 'absolute top-0 bottom-0 left-1/2 w-[2px] bg-gradient-to-r from-black/10 to-transparent';
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
      <div className={creaseStyle}></div>
      <div className={shadowStyle}></div>
    </div>
  );
};

// Paper corner fold - creates a folded corner effect
const PaperCorner = ({ position = 'top-right', size = 40, color = 'bg-stone-100' }) => {
  let positionClass = '';
  let transformStyle = {};
  
  switch (position) {
    case 'top-right':
      positionClass = 'top-0 right-0';
      transformStyle = { transformOrigin: 'top right', transform: 'rotate(-45deg)' };
      break;
    case 'top-left':
      positionClass = 'top-0 left-0';
      transformStyle = { transformOrigin: 'top left', transform: 'rotate(45deg)' };
      break;
    case 'bottom-right':
      positionClass = 'bottom-0 right-0';
      transformStyle = { transformOrigin: 'bottom right', transform: 'rotate(45deg)' };
      break;
    case 'bottom-left':
      positionClass = 'bottom-0 left-0';
      transformStyle = { transformOrigin: 'bottom left', transform: 'rotate(-45deg)' };
      break;
  }
  
  return (
    <div className={`absolute ${positionClass} overflow-hidden`} style={{ width: size, height: size }}>
      <div className={`absolute top-0 right-0 bottom-0 left-0 ${color}`} style={transformStyle}>
        <div className="absolute top-0 left-0 bottom-0 right-0" style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 50%)'
        }}></div>
      </div>
    </div>
  );
};

// Paper texture background
const PaperTexture = ({ color = 'bg-stone-100', className = '' }) => {
  return (
    <div className={`absolute inset-0 ${color} ${className}`} style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
    }}>
    </div>
  );
};

// Crane decoration
const PaperCrane = ({ size = 'w-16 h-16', color = 'bg-red-100', position = {}, rotation = 0 }) => {
  return (
    <div className={`absolute ${size}`} style={{ 
      ...position,
      transform: `rotate(${rotation}deg)`
    }}>
      <div className={`relative w-full h-full ${color}`} style={{
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 65%, 0% 100%)',
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-black/5"
             style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }}></div>
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-black/5"
             style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }}></div>
        
        {/* Head */}
        <div className={`absolute w-1/4 h-1/4 ${color} left-[37.5%] top-0`} style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          transformOrigin: 'center bottom',
          transform: 'translateY(-90%)',
        }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

// Cherry blossom
const CherryBlossom = ({ size = 'w-6 h-6', color = 'bg-pink-200', position = {}, rotation = 0 }) => {
  return (
    <div className={`absolute ${size}`} style={{ 
      ...position,
      transform: `rotate(${rotation}deg)`
    }}>
      <div className="relative w-full h-full">
        {/* Petals */}
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <div 
            key={i}
            className={`absolute top-1/2 left-1/2 w-1/2 h-1/2 ${color} rounded-full`}
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg) translate(25%) rotate(-${angle}deg)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent rounded-full"></div>
          </div>
        ))}
        
        {/* Center */}
        <div className="absolute top-1/2 left-1/2 w-1/4 h-1/4 bg-yellow-200 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

// Origami Digit - displays a digit as a folded paper
const OrigamiDigit = ({ digit, prevDigit }) => {
  const [isChanging, setIsChanging] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsChanging(true);
      const timer = setTimeout(() => setIsChanging(false), 800);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);
  
  return (
    <div className="relative w-24 h-36 mx-1">
      <PaperFold direction="horizontal" className="h-full w-full">
        <PaperFold direction="vertical" className="h-full w-full">
          <div className={`relative w-full h-full bg-stone-50 shadow-md overflow-hidden
                          transition-all duration-800 ease-in-out
                          ${isChanging ? 'origami-change' : ''}`}>
            <PaperTexture />
            
            {/* Corners */}
            <PaperCorner position="top-right" size={24} />
            <PaperCorner position="bottom-left" size={24} />
            
            {/* Digit */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-light text-stone-800">{digit}</span>
            </div>
            
            {/* Inner creases */}
            <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-black/5"></div>
            <div className="absolute bottom-1/4 left-0 right-0 h-[1px] bg-black/5"></div>
            <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-black/5"></div>
            <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-black/5"></div>
          </div>
        </PaperFold>
      </PaperFold>

      {/* Generate dust particles when digit changes */}
      {isChanging && (
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-stone-300/50 rounded-full animate-[paperDust_1.5s_ease-out_forwards]"
              style={{
                width: `${Math.random() * 5 + 2}px`,
                height: `${Math.random() * 5 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

// Paper separator with a string connecting the paper sections
const OrigamiSeparator = () => {
  return (
    <div className="relative w-12 h-36 mx-1 flex flex-col items-center justify-center">
      {/* Vertical string */}
      <div className="w-px h-full bg-stone-300"></div>
      
      {/* Paper knots */}
      <div className="absolute top-1/3 w-5 h-5 bg-red-100 rounded-full -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-full"></div>
      </div>
      <div className="absolute bottom-1/3 w-5 h-5 bg-red-100 rounded-full -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

// Washi Tape decoration
const WashiTape = ({ width = 40, height = 10, color = 'bg-blue-100', pattern = 'dots', rotation = 0, position = {} }) => {
  let patternStyle = {};
  
  switch (pattern) {
    case 'dots':
      patternStyle = {
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 2px, transparent 2px)`,
        backgroundSize: '8px 8px',
      };
      break;
    case 'stripes':
      patternStyle = {
        backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.3) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.3) 75%, transparent 75%, transparent)`,
        backgroundSize: '8px 8px',
      };
      break;
    case 'zigzag':
      patternStyle = {
        backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.3) 25%, transparent 25%), linear-gradient(225deg, rgba(255,255,255,0.3) 25%, transparent 25%), linear-gradient(315deg, rgba(255,255,255,0.3) 25%, transparent 25%), linear-gradient(45deg, rgba(255,255,255,0.3) 25%, transparent 25%)`,
        backgroundSize: '8px 8px',
      };
      break;
  }
  
  return (
    <div 
      className={`absolute ${color}`}
      style={{ 
        ...position,
        width: `${width}px`,
        height: `${height}px`,
        transform: `rotate(${rotation}deg)`,
        ...patternStyle
      }}
    >
      {/* Jagged edges */}
      <div className="absolute top-0 left-0 right-0 h-1 opacity-30" style={{
        backgroundImage: `linear-gradient(to right, transparent 5px, white 5px, white 7px, transparent 7px)`,
        backgroundSize: '10px 1px',
      }}></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 opacity-30" style={{
        backgroundImage: `linear-gradient(to right, transparent 5px, white 5px, white 7px, transparent 7px)`,
        backgroundSize: '10px 1px',
      }}></div>
    </div>
  );
};

const Clock_96 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());
  const [windAnimation, setWindAnimation] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
      
      // Occasionally trigger wind animation
      if (Math.random() < 0.1) {
        setWindAnimation(true);
        setTimeout(() => setWindAnimation(false), 3000);
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

  return (
    <div className="relative p-10 rounded-lg bg-gradient-to-br from-stone-200 to-stone-100 shadow-2xl overflow-hidden">
      {/* Paper texture background */}
      <PaperTexture />
      
      {/* Title/header */}
      <div className="relative z-10 mb-8 text-center">
        <PaperFold direction="horizontal">
          <div className="relative py-3 px-6 bg-rose-50 inline-block shadow-sm">
            <PaperTexture color="bg-rose-50" />
            <h2 className="text-xl font-medium text-stone-700">折り紙時計</h2>
            <div className="mt-1 text-sm text-stone-500">Origami Clock</div>
            <PaperCorner position="bottom-right" size={20} color="bg-rose-50" />
          </div>
        </PaperFold>
      </div>
      
      {/* Main clock display */}
      <div className="relative z-10 flex justify-center items-center my-6">
        {/* Hours */}
        <OrigamiDigit digit={hours[0]} prevDigit={prevHours[0]} />
        <OrigamiDigit digit={hours[1]} prevDigit={prevHours[1]} />
        
        <OrigamiSeparator />
        
        {/* Minutes */}
        <OrigamiDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
        <OrigamiDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        
        <OrigamiSeparator />
        
        {/* Seconds */}
        <OrigamiDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
        <OrigamiDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
      </div>
      
      {/* Date display */}
      <div className="relative z-10 mt-8 text-center">
        <PaperFold direction="horizontal">
          <div className="relative py-2 px-4 bg-stone-50 inline-block shadow-sm">
            <PaperTexture color="bg-stone-50" />
            <div className="text-sm text-stone-600">
              {time.toLocaleDateString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </div>
            <PaperCorner position="top-left" size={16} color="bg-stone-50" />
          </div>
        </PaperFold>
      </div>
      
      {/* Decorative elements */}
      <PaperCrane 
        position={{ top: '10%', right: '15%' }} 
        size="w-20 h-20" 
        color="bg-red-100" 
        rotation={15} 
      />
      <PaperCrane 
        position={{ bottom: '15%', left: '10%' }} 
        size="w-14 h-14" 
        color="bg-blue-100" 
        rotation={-10} 
      />
      
      {/* Cherry blossoms */}
      <CherryBlossom 
        position={{ top: '25%', left: '15%' }} 
        rotation={20} 
      />
      <CherryBlossom 
        position={{ bottom: '20%', right: '18%' }} 
        size="w-5 h-5"
        rotation={45} 
      />
      <CherryBlossom 
        position={{ top: '60%', right: '25%' }} 
        size="w-4 h-4"
        rotation={10} 
      />
      
      {/* Washi tapes */}
      <WashiTape 
        position={{ top: '5%', left: '30%' }} 
        width={60}
        height={12}
        color="bg-yellow-100" 
        pattern="dots"
        rotation={-5}
      />
      <WashiTape 
        position={{ bottom: '8%', right: '35%' }} 
        width={50}
        height={10}
        color="bg-green-100" 
        pattern="stripes"
        rotation={3}
      />
      <WashiTape 
        position={{ top: '75%', left: '12%' }} 
        width={35}
        height={8}
        color="bg-purple-100" 
        pattern="zigzag"
        rotation={-8}
      />
      
      {/* Cherry blossom petals floating animation when wind blows */}
      {windAnimation && (
        <>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-pink-100 rounded-full opacity-70 animate-[cherryPetal_5s_linear_forwards]"
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: '-10px',
                animationDelay: `${i * 0.3}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            ></div>
          ))}
        </>
      )}
    </div>
  );
};

export default Clock_96;

// Add these keyframes to your globals.css:
/*
@keyframes origami-change {
  0% { transform: rotateY(0deg); }
  50% { transform: rotateY(90deg); }
  100% { transform: rotateY(0deg); }
}

@keyframes paperDust {
  0% { transform: translateY(0) scale(1); opacity: 0.5; }
  100% { transform: translateY(-30px) scale(0); opacity: 0; }
}

@keyframes cherryPetal {
  0% { transform: translate(0, 0) rotate(0deg); }
  100% { transform: translate(calc(100vw + 20px), 40px) rotate(360deg); }
}
*/ 