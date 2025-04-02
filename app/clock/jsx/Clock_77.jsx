'use client';
import React, { useEffect, useState } from 'react';

// Stone carved digit with ancient symbols
const StoneDigit = ({ digit, prevDigit }) => {
  const [crumbling, setCrumbling] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setCrumbling(true);
      const timer = setTimeout(() => setCrumbling(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);

  // Create dust particles when the digit changes
  const renderDustParticles = () => {
    if (!crumbling) return null;
    
    return Array.from({ length: 10 }).map((_, i) => {
      const size = Math.random() * 5 + 2;
      const left = Math.random() * 100;
      const delay = Math.random() * 0.5;
      
      return (
        <div 
          key={i}
          className="absolute bg-stone-300 rounded-full opacity-80 animate-[dust_1s_ease-out_forwards]"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            bottom: '0',
            animationDelay: `${delay}s`
          }}
        ></div>
      );
    });
  };

  return (
    <div className="relative w-20 h-28 flex items-center justify-center">
      {/* Stone tablet background */}
      <div 
        className={`absolute inset-0 bg-stone-700 rounded-sm overflow-hidden border border-stone-800 shadow-inner transition-all duration-500 ${
          crumbling ? 'shake' : ''
        }`}
      >
        {/* Stone texture */}
        <div 
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E')",
            backgroundSize: '150% 150%'
          }}
        ></div>
        
        {/* Cracks and weathering */}
        <div className="absolute inset-0">
          {/* Horizontal cracks */}
          <div className="absolute top-1/3 left-0 right-0 h-px bg-stone-900/40"></div>
          <div className="absolute bottom-1/4 left-1/4 right-0 h-px bg-stone-900/30"></div>
          
          {/* Vertical cracks */}
          <div className="absolute top-0 bottom-0 right-1/4 w-px bg-stone-900/30"></div>
          <div className="absolute top-1/2 bottom-0 left-1/5 w-px bg-stone-900/20"></div>
          
          {/* Chipped corners */}
          <div className="absolute top-0 left-0 w-3 h-3 bg-stone-800 transform rotate-45 translate-x-[-50%] translate-y-[-50%]"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-stone-800 transform rotate-45 translate-x-[50%] translate-y-[50%]"></div>
        </div>
        
        {/* Ancient symbol carving highlights */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="absolute w-full h-full opacity-10"
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E')",
              backgroundSize: '40px 40px'
            }}
          ></div>
        </div>
        
        {/* Dust particles when changing */}
        {renderDustParticles()}
      </div>
      
      {/* Carved digit */}
      <div 
        className={`relative z-10 text-5xl font-serif text-stone-300 transition-opacity duration-500 ${
          crumbling ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
        }}
      >
        {digit}
      </div>
    </div>
  );
};

// Stone separator
const StoneSeparator = () => (
  <div className="h-28 flex flex-col justify-center space-y-3">
    <div className="w-2 h-2 rounded-full bg-stone-400"></div>
    <div className="w-2 h-2 rounded-full bg-stone-400"></div>
  </div>
);

// Ancient artifact decorative element
const AncientArtifact = ({ type }) => {
  const getArtifact = () => {
    switch(type) {
      case 'eye':
        return (
          <div className="w-10 h-10 flex items-center justify-center">
            <div className="w-8 h-4 border-2 border-stone-400 rounded-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 bg-stone-400 rounded-full"></div>
              </div>
            </div>
          </div>
        );
      case 'sun':
        return (
          <div className="w-10 h-10 flex items-center justify-center">
            <div className="w-6 h-6 bg-stone-400 rounded-full relative">
              {Array.from({ length: 8 }).map((_, i) => (
                <div 
                  key={i} 
                  className="absolute w-1 h-3 bg-stone-400"
                  style={{
                    left: '50%',
                    top: '50%',
                    transformOrigin: 'center bottom',
                    transform: `translateX(-50%) translateY(-100%) rotate(${i * 45}deg)`
                  }}
                ></div>
              ))}
            </div>
          </div>
        );
      case 'spiral':
        return (
          <div className="w-10 h-10 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-stone-400 rounded-full relative">
              <div className="absolute inset-1 border-t-2 border-l-2 border-stone-400 rounded-tl-full"></div>
              <div className="absolute inset-3 border-b-2 border-r-2 border-stone-400 rounded-br-full"></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative opacity-80">
      {getArtifact()}
    </div>
  );
};

const Clock_77 = () => {
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
    <div className="bg-stone-800 p-10 rounded-xl shadow-2xl border-2 border-stone-700 relative overflow-hidden">
      {/* Sand/dust texture background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E')",
          backgroundSize: '150% 150%'
        }}
      ></div>
      
      {/* Ancient decoration border */}
      <div className="absolute inset-x-0 top-0 h-4 bg-stone-700 flex items-center justify-around px-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-2 h-2 bg-stone-400 rounded-full"></div>
        ))}
      </div>
      
      <div className="absolute inset-x-0 bottom-0 h-4 bg-stone-700 flex items-center justify-around px-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-2 h-2 bg-stone-400 rounded-full"></div>
        ))}
      </div>
      
      {/* Header section with Ancient title */}
      <div className="text-center mb-8 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <AncientArtifact type="eye" />
        </div>
        
        <h2 className="text-2xl font-serif text-stone-300">TEMPVS FVGIT</h2>
        <div className="mt-1 text-xs text-stone-400">Memento Mori</div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <AncientArtifact type="sun" />
        </div>
      </div>
      
      {/* Clock display */}
      <div className="flex items-center justify-center space-x-4 mb-6">
        {/* Hours */}
        <div className="flex space-x-2">
          <StoneDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <StoneDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <StoneSeparator />
        
        {/* Minutes */}
        <div className="flex space-x-2">
          <StoneDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <StoneDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <StoneSeparator />
        
        {/* Seconds */}
        <div className="flex space-x-2">
          <StoneDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <StoneDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
      
      {/* Ancient calendar date display */}
      <div className="flex justify-center mt-8">
        <div className="px-8 py-2 bg-stone-700 border border-stone-600 text-stone-300 text-sm font-serif relative">
          <div className="absolute left-2 top-1/2 -translate-y-1/2">
            <AncientArtifact type="spiral" />
          </div>
          
          <span>
            {time.toLocaleDateString('en-US', { 
              day: 'numeric',
              month: 'long', 
              year: 'numeric' 
            }).toUpperCase()}
          </span>
          
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <AncientArtifact type="spiral" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock_77;

// Add to globals.css:
/*
@keyframes dust {
  0% { transform: translateY(0) scale(1); opacity: 0.7; }
  100% { transform: translateY(-20px) scale(0); opacity: 0; }
}

.shake {
  animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%, 90% { transform: translate3d(-1px, 0, 0); }
  20%, 80% { transform: translate3d(1px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-2px, 0, 0); }
  40%, 60% { transform: translate3d(2px, 0, 0); }
}
*/ 