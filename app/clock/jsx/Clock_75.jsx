'use client';
import React, { useEffect, useState } from 'react';

// Bubble component that floats upward
const Bubble = ({ size, left, delay, duration }) => {
  return (
    <div 
      className="absolute bg-white/20 rounded-full animate-float"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        bottom: '-20px',
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        boxShadow: 'inset -2px -2px 10px rgba(255,255,255,0.3), inset 2px 2px 10px rgba(0,0,0,0.1)'
      }}
    ></div>
  );
};

// Marine digit component with bubble effect on change
const MarineDigit = ({ digit, prevDigit }) => {
  const [bubbling, setBubbling] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setBubbling(true);
      const timer = setTimeout(() => setBubbling(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);

  return (
    <div className="relative w-20 h-28 flex items-center justify-center">
      {/* Water background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-600 to-blue-700 rounded-lg overflow-hidden shadow-lg border border-cyan-800">
        {/* Water texture */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 5%, transparent 6%)',
            backgroundSize: '15px 15px'
          }}
        ></div>
        
        {/* Bubbles that appear when digit changes */}
        {bubbling && (
          <>
            <Bubble size={8} left={30} delay={0} duration={2} />
            <Bubble size={6} left={60} delay={0.3} duration={1.7} />
            <Bubble size={10} left={40} delay={0.5} duration={2.5} />
            <Bubble size={5} left={70} delay={0.7} duration={1.5} />
            <Bubble size={7} left={50} delay={0.9} duration={2.2} />
          </>
        )}
      </div>
      
      {/* Digit */}
      <div className="relative z-10 text-5xl font-bold text-white">
        {digit}
      </div>
      
      {/* Light rays effect */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <div className="absolute inset-x-0 -top-10 h-40 bg-gradient-to-b from-cyan-300/20 to-transparent transform rotate-45 translate-x-10"></div>
      </div>
    </div>
  );
};

// Small fish animation component
const Fish = ({ position, size = 30, color = 'text-amber-400', delay = 0 }) => {
  return (
    <div 
      className="absolute animate-[swimBy_20s_linear_infinite]"
      style={{
        ...position,
        animationDelay: `${delay}s`
      }}
    >
      <svg width={size} height={size/2} viewBox="0 0 50 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M45 12.5C45 17.5 35 25 20 25C10 25 0 20 0 12.5C0 5 10 0 20 0C35 0 45 7.5 45 12.5Z" 
          className={`${color} fill-current`}
        />
        <circle cx="40" cy="10" r="2" fill="white" />
        <path d="M45 12.5L50 8V17L45 12.5Z" className={`${color} fill-current`} />
      </svg>
    </div>
  );
};

// Ripple effect for the separator
const Ripple = () => {
  const [ripple, setRipple] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRipple(true);
      setTimeout(() => setRipple(false), 800);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative h-28 flex flex-col items-center justify-center space-y-3">
      <div className="relative">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        {ripple && (
          <>
            <div className="absolute inset-0 w-2 h-2 rounded-full border border-white/80 animate-[ripple_0.8s_ease-out]"></div>
            <div className="absolute inset-0 w-2 h-2 rounded-full border border-white/60 animate-[ripple_0.8s_ease-out_0.2s]"></div>
          </>
        )}
      </div>
      <div className="relative">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        {ripple && (
          <>
            <div className="absolute inset-0 w-2 h-2 rounded-full border border-white/80 animate-[ripple_0.8s_ease-out_0.1s]"></div>
            <div className="absolute inset-0 w-2 h-2 rounded-full border border-white/60 animate-[ripple_0.8s_ease-out_0.3s]"></div>
          </>
        )}
      </div>
    </div>
  );
};

// Seaweed animation
const Seaweed = ({ left, height = 60, width = 10, delay = 0 }) => {
  return (
    <div 
      className="absolute bottom-0 bg-green-700 rounded-t-full animate-[sway_5s_ease-in-out_infinite]"
      style={{
        left: `${left}%`,
        height: `${height}px`,
        width: `${width}px`,
        transformOrigin: 'bottom center',
        animationDelay: `${delay}s`
      }}
    ></div>
  );
};

const Clock_75 = () => {
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
    <div className="bg-gradient-to-b from-blue-900 to-blue-950 p-10 rounded-xl shadow-2xl border border-blue-700 relative overflow-hidden">
      {/* Ocean surface wave animation */}
      <div 
        className="absolute inset-x-0 top-0 h-4 bg-cyan-400/30" 
        style={{
          backgroundImage: 'linear-gradient(to right, transparent, rgba(255,255,255,0.5) 50%, transparent 100%)',
          backgroundSize: '200% 100%',
          animation: 'waveMove 8s linear infinite'
        }}
      ></div>
      
      {/* Sun rays from top */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-300/20 to-transparent"></div>
      
      {/* Scattered bubbles */}
      <Bubble size={15} left={10} delay={2} duration={8} />
      <Bubble size={10} left={25} delay={5} duration={6} />
      <Bubble size={12} left={85} delay={1} duration={7} />
      <Bubble size={8} left={68} delay={4} duration={5} />
      <Bubble size={20} left={45} delay={8} duration={10} />
      
      {/* Decorative fish */}
      <Fish position={{ top: '10%', left: '5%' }} color="text-orange-400" />
      <Fish position={{ top: '25%', right: '5%' }} size={20} color="text-yellow-300" delay={3} />
      <Fish position={{ bottom: '20%', left: '10%' }} size={15} color="text-blue-300" delay={7} />
      <Fish position={{ bottom: '10%', right: '15%' }} size={25} color="text-rose-400" delay={10} />
      
      {/* Seaweed decorations */}
      <Seaweed left={5} height={90} width={12} />
      <Seaweed left={10} height={60} width={8} delay={0.5} />
      <Seaweed left={85} height={100} width={10} delay={1} />
      <Seaweed left={93} height={70} width={9} delay={1.5} />
      
      {/* Clock title */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-2xl font-bold text-white drop-shadow-lg">Deep Blue Time</h2>
        <div className="mt-1 text-sm text-cyan-300">Fathoms Below</div>
      </div>
      
      {/* Clock display */}
      <div className="relative z-10 flex items-center justify-center space-x-4">
        {/* Hours */}
        <div className="flex space-x-2">
          <MarineDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <MarineDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <Ripple />
        
        {/* Minutes */}
        <div className="flex space-x-2">
          <MarineDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <MarineDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <Ripple />
        
        {/* Seconds */}
        <div className="flex space-x-2">
          <MarineDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <MarineDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
      
      {/* Sea floor */}
      <div className="absolute inset-x-0 bottom-0 h-4 bg-amber-700/30 rounded-full"></div>
    </div>
  );
};

export default Clock_75;

// Add to globals.css:
/*
@keyframes float {
  0% { transform: translateY(0) rotate(0); opacity: 0.7; }
  50% { transform: translateY(-50vh) rotate(15deg); opacity: 0.8; }
  100% { transform: translateY(-100vh) rotate(30deg); opacity: 0; }
}

@keyframes ripple {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(4); opacity: 0; }
}

@keyframes sway {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
}

@keyframes swimBy {
  0% { transform: translateX(-100px); }
  100% { transform: translateX(calc(100vw + 100px)); }
}

@keyframes waveMove {
  0% { background-position: 0% 0; }
  100% { background-position: 200% 0; }
}
*/ 