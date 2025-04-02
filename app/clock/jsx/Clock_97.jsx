'use client';
import React, { useEffect, useState } from 'react';

// Bubble component that floats upward
const Bubble = ({ size, delay, duration, left }) => {
  return (
    <div 
      className="absolute rounded-full bg-white/20 backdrop-blur-sm animate-[bubbleFloat_ease-in-out_infinite]"
      style={{
        width: size,
        height: size,
        bottom: -size,
        left: `${left}%`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        boxShadow: 'inset 1px 1px 1px rgba(255, 255, 255, 0.4), inset -1px -1px 1px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="absolute w-[30%] h-[20%] bg-white/50 rounded-full top-[20%] left-[15%]"></div>
    </div>
  );
};

// Creates a group of random bubbles
const BubbleCluster = ({ count = 10, origin = 50, spread = 30 }) => {
  return (
    <>
      {[...Array(count)].map((_, i) => {
        const size = Math.random() * 15 + 5; // 5-20px bubbles
        const delay = Math.random() * 5; // 0-5s delay
        const duration = Math.random() * 5 + 8; // 8-13s duration
        const leftPos = Math.max(5, Math.min(95, origin + (Math.random() * spread * 2 - spread)));
        
        return (
          <Bubble 
            key={i} 
            size={size} 
            delay={delay} 
            duration={duration} 
            left={leftPos} 
          />
        );
      })}
    </>
  );
};

// Seaweed component that sways
const Seaweed = ({ left, height = 100, width = 10, segments = 3, delay = 0, color = 'bg-green-600' }) => {
  return (
    <div 
      className="absolute bottom-0"
      style={{
        left: `${left}%`,
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      {[...Array(segments)].map((_, i) => (
        <div 
          key={i}
          className={`absolute bottom-0 w-full rounded-t-full ${color}`}
          style={{
            height: `${height * (segments - i) / segments}px`,
            filter: `brightness(${1 - i * 0.1})`,
            animation: `seaweedSway 5s ease-in-out infinite`,
            animationDelay: `${delay + i * 0.2}s`,
            transformOrigin: 'bottom center',
          }}
        ></div>
      ))}
    </div>
  );
};

// Coral formation
const Coral = ({ position, color1 = 'bg-pink-400', color2 = 'bg-red-400', size = 60 }) => {
  return (
    <div className="absolute" style={{ ...position, width: size, height: size * 0.8 }}>
      {/* Main coral branches */}
      <div className={`absolute bottom-0 w-[20%] h-[80%] ${color1} rounded-t-lg left-[10%]`}></div>
      <div className={`absolute bottom-0 w-[18%] h-[90%] ${color1} rounded-t-lg left-[35%]`}></div>
      <div className={`absolute bottom-0 w-[22%] h-[70%] ${color1} rounded-t-lg left-[60%]`}></div>
      
      {/* Secondary branches */}
      <div className={`absolute bottom-0 w-[15%] h-[60%] ${color2} rounded-t-lg left-[22%]`}></div>
      <div className={`absolute bottom-0 w-[16%] h-[75%] ${color2} rounded-t-lg left-[75%]`}></div>
      
      {/* Texture */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 8 + 2,
              height: Math.random() * 8 + 2,
              top: `${Math.random() * 70}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

// Fish that swims across the screen
const Fish = ({ size = 40, speed = 15, delay = 0, depth = 50, isReversed = false, color = 'bg-amber-400' }) => {
  return (
    <div 
      className="absolute"
      style={{
        top: `${depth}%`,
        right: isReversed ? 'auto' : '-40px',
        left: isReversed ? '-40px' : 'auto',
        width: size,
        height: size * 0.6,
        animation: isReversed ? 'fishSwimReverse ease-in-out infinite' : 'fishSwim ease-in-out infinite',
        animationDuration: `${speed}s`,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="relative w-full h-full">
        <div 
          className={`absolute top-0 bottom-0 ${isReversed ? 'right-0' : 'left-0'} w-[75%] h-full ${color} rounded-full`}
          style={{
            borderTopRightRadius: isReversed ? '50%' : '80%',
            borderBottomRightRadius: isReversed ? '50%' : '80%',
            borderTopLeftRadius: isReversed ? '80%' : '50%',
            borderBottomLeftRadius: isReversed ? '80%' : '50%',
          }}
        >
          <div 
            className="absolute top-[30%] w-2 h-2 rounded-full bg-black"
            style={{
              left: isReversed ? '25%' : '70%',
            }}
          ></div>
          <div 
            className="absolute w-[15%] h-[40%] bg-black/20"
            style={{
              top: '10%',
              borderTopLeftRadius: '50%',
              borderTopRightRadius: '50%',
              left: isReversed ? '20%' : '60%',
            }}
          ></div>
        </div>
        
        {/* Tail */}
        <div 
          className={`absolute top-0 bottom-0 ${isReversed ? 'left-[10%]' : 'right-[10%]'} w-[40%] h-full ${color}`}
          style={{
            clipPath: isReversed 
              ? 'polygon(100% 0%, 0% 50%, 100% 100%)' 
              : 'polygon(0% 0%, 100% 50%, 0% 100%)',
            animation: 'fishTail 1s ease-in-out infinite',
          }}
        ></div>
        
        {/* Fin */}
        <div 
          className={`absolute ${color} top-0 ${isReversed ? 'right-[30%]' : 'left-[30%]'} w-[20%] h-[30%]`}
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
        ></div>
      </div>
    </div>
  );
};

// Jellyfish that pulses and floats
const Jellyfish = ({ size = 50, color = 'bg-purple-400', position = {}, delay = 0 }) => {
  return (
    <div 
      className="absolute animate-[jellyfishFloat_20s_ease-in-out_infinite]"
      style={{
        width: size,
        height: size * 1.5,
        ...position,
        animationDelay: `${delay}s`,
      }}
    >
      {/* Bell */}
      <div className={`absolute top-0 w-full h-[40%] ${color} rounded-t-full animate-[jellyfishPulse_4s_ease-in-out_infinite]`}
        style={{
          animationDelay: `${delay}s`,
          background: `radial-gradient(circle at center, ${color.replace('bg-', '')}, ${color.replace('bg-', '').replace('400', '600')})`,
        }}
      >
        <div className="absolute inset-0 bg-white/20 rounded-t-full"></div>
      </div>
      
      {/* Tentacles */}
      {[...Array(7)].map((_, i) => (
        <div 
          key={i}
          className={`absolute top-[38%] ${color.replace('400', '500')} rounded-b-full animate-[tentacleSway_6s_ease-in-out_infinite]`}
          style={{
            left: `${10 + i * 12}%`,
            width: `${4 + Math.sin(i) * 2}%`,
            height: `${50 + Math.sin(i * 2) * 10}%`,
            animationDelay: `${delay + i * 0.3}s`,
            opacity: 0.8,
          }}
        ></div>
      ))}
    </div>
  );
};

// Light ray effect
const LightRay = ({ left, width, opacity = 0.1, delay = 0 }) => {
  return (
    <div 
      className="absolute top-0 bottom-0 bg-cyan-50 animate-[lightRay_8s_ease_infinite]"
      style={{
        left: `${left}%`,
        width: `${width}%`,
        opacity,
        animationDelay: `${delay}s`,
        transform: 'translateY(-100%)',
        clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)',
      }}
    ></div>
  );
};

// Water current effect
const WaterCurrent = ({ top, height = 150, delay = 0 }) => {
  return (
    <div 
      className="absolute left-0 right-0 opacity-10 animate-[waterCurrent_15s_linear_infinite]"
      style={{
        top: `${top}%`,
        height: `${height}px`,
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
        animationDelay: `${delay}s`,
      }}
    ></div>
  );
};

// DeepSea Digit component
const DeepSeaDigit = ({ digit, prevDigit }) => {
  const [isChanging, setIsChanging] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsChanging(true);
      const timer = setTimeout(() => setIsChanging(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);
  
  return (
    <div className="relative w-24 h-36 mx-1">
      <div 
        className={`w-full h-full rounded-lg backdrop-blur-sm bg-blue-900/40 border border-blue-400/30 overflow-hidden shadow-lg ${
          isChanging ? 'animate-[digitWave_1s_ease-in-out]' : ''
        }`}
      >
        {/* Bubbles that appear when the digit changes */}
        {isChanging && (
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <Bubble 
                key={i} 
                size={Math.random() * 10 + 5} 
                delay={i * 0.1} 
                duration={1 + Math.random() * 2} 
                left={20 + Math.random() * 60} 
              />
            ))}
          </div>
        )}
        
        {/* Glass-like reflections */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10"></div>
        <div 
          className="absolute top-0 left-5 w-[30%] h-[40%] bg-white/10 rounded-full"
          style={{ filter: 'blur(8px)' }}
        ></div>
        
        {/* Digit */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span 
            className={`text-5xl font-bold text-cyan-200 ${
              isChanging ? 'opacity-0 scale-150' : 'opacity-100 scale-100'
            } transition-all duration-500 ease-in-out`}
            style={{ textShadow: '0 0 10px rgba(103, 232, 249, 0.5)' }}
          >
            {digit}
          </span>
        </div>
      </div>
    </div>
  );
};

// Separator with bubbles
const DeepSeaSeparator = () => {
  return (
    <div className="relative w-12 h-36 mx-1 flex flex-col items-center justify-center">
      {/* Decorative chain */}
      <div className="relative w-px h-full bg-blue-400/50">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-6 h-6 -left-[11px] bg-transparent border-2 border-blue-400/50 rounded-full"
            style={{ top: `${20 + i * 20}%` }}
          ></div>
        ))}
      </div>
      
      {/* Small bubbles continuously floating up */}
      <BubbleCluster count={6} origin={50} spread={20} />
    </div>
  );
};

// Main Clock component
const Clock_97 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());
  const [depth, setDepth] = useState(0);
  const [pressure, setPressure] = useState(1);
  const maxDepth = 1000; // meters
  
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
      
      // Gradually increase depth over time
      setDepth(prev => {
        // Oscillate between surface and max depth
        const secondsInDay = (time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds()) % 86400;
        const normalizedDepth = Math.sin(secondsInDay / 86400 * Math.PI) * maxDepth;
        return Math.max(0, normalizedDepth);
      });
      
      // Update pressure based on depth (approximately 1 atm per 10m)
      setPressure(1 + depth / 10);
      
    }, 1000);

    return () => clearInterval(timer);
  }, [time, depth]);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  const prevHours = prevTime.getHours().toString().padStart(2, '0');
  const prevMinutes = prevTime.getMinutes().toString().padStart(2, '0');
  const prevSeconds = prevTime.getSeconds().toString().padStart(2, '0');
  
  // Calculate the background gradient based on depth
  const getBackgroundGradient = () => {
    const depthRatio = depth / maxDepth;
    
    if (depthRatio < 0.1) { // Surface
      return 'bg-gradient-to-b from-blue-400 to-blue-600';
    } else if (depthRatio < 0.3) { // Shallow
      return 'bg-gradient-to-b from-blue-600 to-blue-800';
    } else if (depthRatio < 0.6) { // Medium
      return 'bg-gradient-to-b from-blue-800 to-blue-900';
    } else { // Deep
      return 'bg-gradient-to-b from-blue-900 to-slate-900';
    }
  };

  return (
    <div className={`relative p-8 rounded-lg ${getBackgroundGradient()} shadow-2xl overflow-hidden min-h-[300px]`}>
      {/* Light rays (visible in shallow waters) */}
      {depth < maxDepth / 2 && (
        <>
          <LightRay left={15} width={10} opacity={0.1 * (1 - depth / (maxDepth / 2))} delay={0} />
          <LightRay left={40} width={15} opacity={0.15 * (1 - depth / (maxDepth / 2))} delay={2} />
          <LightRay left={70} width={8} opacity={0.1 * (1 - depth / (maxDepth / 2))} delay={4} />
        </>
      )}
      
      {/* Water currents */}
      <WaterCurrent top={20} delay={0} />
      <WaterCurrent top={60} delay={7} />
      
      {/* Marine life (visible at different depths) */}
      <Fish size={30} speed={20} depth={30} color="bg-yellow-400" />
      <Fish size={40} speed={25} delay={5} depth={70} isReversed={true} color="bg-orange-400" />
      
      {depth > maxDepth * 0.3 && (
        <>
          <Jellyfish size={60} position={{ top: '20%', left: '15%' }} delay={2} />
          <Jellyfish size={40} color="bg-violet-400" position={{ top: '60%', right: '10%' }} delay={6} />
        </>
      )}
      
      {/* Seabed elements (visible in deeper parts) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-amber-900/80 to-transparent"></div>
      
      <Seaweed left={10} height={80} width={12} color="bg-green-700" />
      <Seaweed left={20} height={110} width={8} color="bg-green-600" delay={1.5} />
      <Seaweed left={85} height={90} width={10} color="bg-green-800" delay={0.8} />
      
      <Coral position={{ bottom: 0, left: '55%' }} />
      <Coral position={{ bottom: 0, right: '8%' }} color1="bg-orange-400" color2="bg-red-500" size={50} />
      
      {/* Depth/pressure display */}
      <div className="absolute top-2 left-2 text-xs text-cyan-100 bg-blue-900/50 rounded px-2 py-1 backdrop-blur-sm">
        <div>Depth: {Math.round(depth)}m</div>
        <div>Pressure: {pressure.toFixed(1)} atm</div>
      </div>
      
      {/* Main clock display */}
      <div className="relative z-10 flex justify-center items-center my-6">
        {/* Hours */}
        <DeepSeaDigit digit={hours[0]} prevDigit={prevHours[0]} />
        <DeepSeaDigit digit={hours[1]} prevDigit={prevHours[1]} />
        
        <DeepSeaSeparator />
        
        {/* Minutes */}
        <DeepSeaDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
        <DeepSeaDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        
        <DeepSeaSeparator />
        
        {/* Seconds */}
        <DeepSeaDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
        <DeepSeaDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
      </div>
      
      {/* Random bubble clusters */}
      <BubbleCluster count={20} origin={30} spread={20} />
      <BubbleCluster count={15} origin={70} spread={20} />
      
      {/* Date display */}
      <div className="relative z-10 mt-6 text-center">
        <div className="inline-block py-2 px-4 rounded-lg backdrop-blur-sm bg-blue-900/30 text-cyan-100 border border-blue-400/30">
          {time.toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}
        </div>
      </div>
    </div>
  );
};

export default Clock_97;

// Add these keyframes to your globals.css:
/*
@keyframes bubbleFloat {
  0% { transform: translateY(0) scale(1); }
  100% { transform: translateY(-90vh) scale(0.5); opacity: 0; }
}

@keyframes fishSwim {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100vw); }
}

@keyframes fishSwimReverse {
  0% { transform: translateX(0); }
  100% { transform: translateX(100vw); }
}

@keyframes fishTail {
  0% { transform: scaleX(1); }
  50% { transform: scaleX(0.7); }
  100% { transform: scaleX(1); }
}

@keyframes jellyfishPulse {
  0% { transform: scaleX(1) scaleY(1); }
  50% { transform: scaleX(1.1) scaleY(0.9); }
  100% { transform: scaleX(1) scaleY(1); }
}

@keyframes jellyfishFloat {
  0% { transform: translate(0, 0); }
  25% { transform: translate(-20px, -15px); }
  50% { transform: translate(-5px, -30px); }
  75% { transform: translate(15px, -15px); }
  100% { transform: translate(0, 0); }
}

@keyframes tentacleSway {
  0% { transform: translateX(0); }
  50% { transform: translateX(5px); }
  100% { transform: translateX(0); }
}

@keyframes seaweedSway {
  0% { transform: rotate(0deg); }
  50% { transform: rotate(8deg); }
  100% { transform: rotate(0deg); }
}

@keyframes lightRay {
  0% { transform: translateY(-100%); opacity: 0; }
  20% { transform: translateY(0); opacity: var(--opacity, 0.1); }
  80% { transform: translateY(0); opacity: var(--opacity, 0.1); }
  100% { transform: translateY(100%); opacity: 0; }
}

@keyframes waterCurrent {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes digitWave {
  0% { transform: translateY(0); }
  50% { transform: translateY(10px); }
  100% { transform: translateY(0); }
}
*/ 