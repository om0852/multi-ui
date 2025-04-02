'use client';
import React, { useEffect, useState } from 'react';

const ARDigit = ({ digit, prevDigit, index }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchOffset, setGlitchOffset] = useState({ x: 0, y: 0 });
  const [scanLine, setScanLine] = useState(0);
  
  // Effect for digit change glitch
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsGlitching(true);
      setGlitchOffset({
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 10
      });
      
      const timer = setTimeout(() => {
        setIsGlitching(false);
        setGlitchOffset({ x: 0, y: 0 });
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);
  
  // Continuous scan line effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScanLine(prev => (prev + 1) % 100);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  // Random occasional glitch
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        setIsGlitching(true);
        setGlitchOffset({
          x: (Math.random() - 0.5) * 5,
          y: (Math.random() - 0.5) * 5
        });
        
        setTimeout(() => {
          setIsGlitching(false);
          setGlitchOffset({ x: 0, y: 0 });
        }, 200);
      }
    }, 3000);
    
    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="relative w-16 h-24 rounded-lg overflow-hidden" style={{ perspective: '1000px' }}>
      {/* Holographic base */}
      <div className="absolute inset-0 bg-indigo-900/20 backdrop-blur-sm"></div>
      
      {/* Scan line effect */}
      <div 
        className="absolute inset-x-0 h-0.5 bg-cyan-400/30 pointer-events-none z-10"
        style={{ 
          top: `${scanLine}%`,
          boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)'
        }}
      ></div>

      {/* Main digit display */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${
          isGlitching ? 'opacity-80' : 'opacity-100'
        }`}
        style={{ 
          transform: isGlitching 
            ? `translate(${glitchOffset.x}px, ${glitchOffset.y}px)` 
            : 'translate(0, 0)',
        }}
      >
        <div 
          className="text-4xl font-bold text-cyan-400 tracking-wide"
          style={{ 
            textShadow: '0 0 10px rgba(6, 182, 212, 0.7)',
            transform: `rotateY(${Math.sin(index * 0.5) * 5}deg)`,
            transition: 'transform 2s ease-in-out',
            animation: isGlitching ? 'none' : 'float 2s ease-in-out infinite alternate',
            animationDelay: `${index * 0.2}s`
          }}
        >
          {digit}
        </div>
      </div>
      
      {/* Glitch copy 1 */}
      {isGlitching && (
        <div className="absolute inset-0 flex items-center justify-center opacity-30 mix-blend-screen">
          <div 
            className="text-4xl font-bold text-red-400"
            style={{ 
              transform: `translate(${glitchOffset.x * -1.5}px, ${glitchOffset.y * 1.5}px)`,
            }}
          >
            {digit}
          </div>
        </div>
      )}
      
      {/* Glitch copy 2 */}
      {isGlitching && (
        <div className="absolute inset-0 flex items-center justify-center opacity-30 mix-blend-screen">
          <div 
            className="text-4xl font-bold text-blue-400"
            style={{ 
              transform: `translate(${glitchOffset.x * 1.5}px, ${glitchOffset.y * -1.5}px)`,
            }}
          >
            {digit}
          </div>
        </div>
      )}
      
      {/* Interface elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-cyan-400/70"></div>
        <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-cyan-400/70"></div>
        <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-cyan-400/70"></div>
        <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-cyan-400/70"></div>
      </div>
      
      {/* Projection light */}
      <div 
        className="absolute bottom-0 left-1/2 w-12 h-1 bg-cyan-400/20 transform -translate-x-1/2 rounded-t-full"
        style={{
          boxShadow: '0 -10px 20px rgba(6, 182, 212, 0.3)',
          opacity: isGlitching ? 0.6 : 0.3
        }}
      ></div>
    </div>
  );
};

const Clock_56 = () => {
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
    <div className="bg-gradient-to-br from-slate-900 to-gray-900 p-8 rounded-xl shadow-2xl border border-cyan-900/50 relative overflow-hidden">
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(transparent 49px, rgba(6, 182, 212, 0.1) 50px, transparent 51px),
                           linear-gradient(90deg, transparent 49px, rgba(6, 182, 212, 0.1) 50px, transparent 51px)`,
          backgroundSize: '50px 50px',
        }}
      ></div>
      
      {/* Interface elements */}
      <div className="absolute top-2 left-2 text-xs text-cyan-400/70 font-mono">CHRONO-07</div>
      <div className="absolute top-2 right-2 text-xs text-cyan-400/70 font-mono animate-pulse">
        SYS:ACTIVE
      </div>
      
      {/* Main content */}
      <div className="flex items-center space-x-4 mt-4">
        <div className="flex space-x-2">
          <ARDigit digit={hours[0]} prevDigit={prevHours[0]} index={0} />
          <ARDigit digit={hours[1]} prevDigit={prevHours[1]} index={1} />
        </div>
        
        <div className="text-4xl font-bold text-cyan-400/80 animate-pulse">:</div>
        
        <div className="flex space-x-2">
          <ARDigit digit={minutes[0]} prevDigit={prevMinutes[0]} index={2} />
          <ARDigit digit={minutes[1]} prevDigit={prevMinutes[1]} index={3} />
        </div>
        
        <div className="text-4xl font-bold text-cyan-400/80 animate-pulse">:</div>
        
        <div className="flex space-x-2">
          <ARDigit digit={seconds[0]} prevDigit={prevSeconds[0]} index={4} />
          <ARDigit digit={seconds[1]} prevDigit={prevSeconds[1]} index={5} />
        </div>
      </div>
      
      {/* Bottom interface elements */}
      <div className="mt-4 flex justify-between items-center text-xs text-cyan-400/70 font-mono">
        <div>LOCAL TIME</div>
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-cyan-400/50 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-cyan-400/50 rounded-full" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-2 h-2 bg-cyan-400/50 rounded-full" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
      
      {/* Ambient glow effect */}
      <div className="absolute inset-0 bg-cyan-500/5 pointer-events-none"></div>
    </div>
  );
};

export default Clock_56;

// Add this to your globals.css file:
/*
@keyframes float {
  0% {
    transform: translateY(0px) rotateX(0deg);
  }
  100% {
    transform: translateY(-5px) rotateX(5deg);
  }
}
*/ 