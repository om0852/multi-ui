'use client';
import React, { useState, useEffect } from 'react';

// TV Static effect component
const TVStatic = ({ opacity = 0.1 }) => {
  return (
    <div 
      className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay"
      style={{
        opacity: opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundSize: 'cover'
      }}
    />
  );
};

// Scan line effect
const ScanLines = () => {
  return (
    <div 
      className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay opacity-10"
      style={{
        background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)',
        backgroundSize: '100% 2px'
      }}
    />
  );
};

// Vintage TV screen glitch effect
const ScreenGlitch = ({ isActive }) => {
  if (!isActive) return null;
  
  return (
    <div className="absolute inset-0 z-30 pointer-events-none">
      <div 
        className="absolute inset-0 animate-[tvGlitch_0.3s_ease-in-out]" 
        style={{
          backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)',
          backgroundSize: '100% 4px',
          mixBlendMode: 'overlay'
        }}
      />
      <div 
        className="absolute inset-0 animate-[tvGlitchJitter_0.3s_ease-in-out]" 
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.2)',
          backdropFilter: 'hue-rotate(90deg)',
          opacity: 0.3
        }}
      />
    </div>
  );
};

// TV Channel number display
const ChannelNumber = ({ channel }) => {
  return (
    <div className="absolute top-4 right-4 z-40 bg-black/70 text-white px-3 py-1 rounded-sm text-2xl font-mono">
      {channel}
    </div>
  );
};

// TV Digit display
const TVDigit = ({ digit, prevDigit, isChanging }) => {
  return (
    <div className="relative mx-1 w-20 h-32 flex items-center justify-center">
      <div 
        className={`text-5xl font-bold text-white ${
          isChanging ? 'animate-[tvDigitChange_0.3s_ease-in-out]' : ''
        }`}
        style={{
          textShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
          fontFamily: 'monospace'
        }}
      >
        {digit}
      </div>
    </div>
  );
};

// TV Separator (the colon between hours, minutes, seconds)
const TVSeparator = ({ blink }) => {
  return (
    <div className="relative mx-1 w-6 flex flex-col items-center justify-center h-32 space-y-2">
      <div 
        className={`w-2 h-2 rounded-full bg-white ${
          blink ? 'animate-[tvBlink_1s_infinite]' : ''
        }`}
        style={{
          boxShadow: '0 0 10px white'
        }}
      />
      <div 
        className={`w-2 h-2 rounded-full bg-white ${
          blink ? 'animate-[tvBlink_1s_infinite_0.5s]' : ''
        }`}
        style={{
          boxShadow: '0 0 10px white'
        }}
      />
    </div>
  );
};

// Volume indicator
const VolumeIndicator = ({ volume }) => {
  return (
    <div className="flex items-center mt-4">
      <div className="text-white mr-2 font-mono text-sm">VOL</div>
      <div className="h-2 w-32 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-white animate-pulse" 
          style={{ width: `${volume}%` }}
        />
      </div>
    </div>
  );
};

// Clock component
const Clock_91 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());
  const [isChanging, setIsChanging] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [staticLevel, setStaticLevel] = useState(0.1);
  const [channel, setChannel] = useState(91);
  const [volume, setVolume] = useState(70);
  const [isPoweredOn, setIsPoweredOn] = useState(true);
  const [channelChangeTimeout, setChannelChangeTimeout] = useState(null);

  // Update time every second
  useEffect(() => {
    if (!isPoweredOn) return;
    
    const timer = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
      
      // Create digit change effect
      setIsChanging(true);
      setTimeout(() => setIsChanging(false), 300);

      // Occasionally create glitch effect
      if (Math.random() > 0.9) {
        setIsGlitching(true);
        setStaticLevel(0.2 + Math.random() * 0.1);
        setTimeout(() => {
          setIsGlitching(false);
          setStaticLevel(0.1);
        }, 300);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [time, isPoweredOn]);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  
  const prevHours = prevTime.getHours().toString().padStart(2, '0');
  const prevMinutes = prevTime.getMinutes().toString().padStart(2, '0');
  const prevSeconds = prevTime.getSeconds().toString().padStart(2, '0');

  // Channel change function
  const changeChannel = () => {
    setIsPoweredOn(false);
    setIsGlitching(true);
    setStaticLevel(0.8);
    
    // Clear any existing timeout
    if (channelChangeTimeout) {
      clearTimeout(channelChangeTimeout);
    }
    
    // Set a new timeout to "power on" after a short delay
    const newTimeout = setTimeout(() => {
      setChannel(prevChannel => {
        // Generate a new random channel between 2 and 99
        let newChannel;
        do {
          newChannel = Math.floor(Math.random() * 98) + 2;
        } while (newChannel === prevChannel);
        return newChannel;
      });
      setIsPoweredOn(true);
      setIsGlitching(false);
      setStaticLevel(0.1);
    }, 800);
    
    setChannelChangeTimeout(newTimeout);
  };

  // Format date for display
  const formattedDate = time.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="relative">
      {/* TV Casing */}
      <div className="relative bg-neutral-800 rounded-lg p-4 border-t-8 border-neutral-700 
                    shadow-[0_0_20px_rgba(0,0,0,0.5),_inset_0_0_40px_rgba(0,0,0,0.3)]"
           style={{ 
             borderRadius: '20px 20px 20px 20px / 15px 15px 30px 30px',
           }}>
        {/* CRT Screen */}
        <div 
          className="relative overflow-hidden rounded-md mb-4 px-8 py-12 flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle at center, #000, #111)',
            boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.5)',
            borderRadius: '5% / 10%',
            minHeight: '220px'
          }}
        >
          {/* Channel display */}
          {isPoweredOn && <ChannelNumber channel={channel} />}

          {/* Main clock display */}
          {isPoweredOn ? (
            <div className="relative z-20 flex items-center">
              {/* Hours */}
              <div className="flex">
                <TVDigit digit={hours[0]} prevDigit={prevHours[0]} isChanging={isChanging && prevHours[0] !== hours[0]} />
                <TVDigit digit={hours[1]} prevDigit={prevHours[1]} isChanging={isChanging && prevHours[1] !== hours[1]} />
              </div>
              
              <TVSeparator blink={true} />
              
              {/* Minutes */}
              <div className="flex">
                <TVDigit digit={minutes[0]} prevDigit={prevMinutes[0]} isChanging={isChanging && prevMinutes[0] !== minutes[0]} />
                <TVDigit digit={minutes[1]} prevDigit={prevMinutes[1]} isChanging={isChanging && prevMinutes[1] !== minutes[1]} />
              </div>
              
              <TVSeparator blink={seconds % 2 === 0} />
              
              {/* Seconds */}
              <div className="flex">
                <TVDigit digit={seconds[0]} prevDigit={prevSeconds[0]} isChanging={isChanging && prevSeconds[0] !== seconds[0]} />
                <TVDigit digit={seconds[1]} prevDigit={prevSeconds[1]} isChanging={isChanging && prevSeconds[1] !== seconds[1]} />
              </div>
            </div>
          ) : (
            <div className="relative z-20 text-white text-3xl font-mono text-center">
              NO SIGNAL
            </div>
          )}

          {/* TV Effects */}
          <TVStatic opacity={staticLevel} />
          <ScanLines />
          <ScreenGlitch isActive={isGlitching} />
          
          {/* Date display at bottom of screen */}
          {isPoweredOn && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center z-30">
              <div 
                className="text-white/80 text-sm font-mono bg-black/30 px-2 py-1 rounded"
                style={{ letterSpacing: '0.1em' }}
              >
                {formattedDate}
              </div>
            </div>
          )}
          
          {/* CRT curves and effects */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, transparent 60%, rgba(0, 0, 0, 0.7) 100%)',
              borderRadius: '5% / 10%'
            }}
          />
        </div>
        
        {/* TV Controls */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <button 
              onClick={() => setIsPoweredOn(prev => !prev)}
              className="relative w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center 
                        transition-colors hover:bg-neutral-600 focus:outline-none"
            >
              <div className={`w-2 h-2 rounded-full ${isPoweredOn ? 'bg-red-500' : 'bg-neutral-500'}`}></div>
              <div className="absolute inset-0 rounded-full border border-neutral-600"></div>
            </button>
            <button 
              onClick={changeChannel}
              className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center 
                       transition-colors hover:bg-neutral-600 focus:outline-none"
            >
              <div className="w-4 h-4 border-2 border-neutral-500 rounded-full"></div>
            </button>
          </div>
          
          <VolumeIndicator volume={volume} />
          
          <div className="flex space-x-2">
            <button 
              onClick={() => setVolume(prev => Math.min(100, prev + 10))}
              className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center 
                       transition-colors hover:bg-neutral-600 focus:outline-none text-neutral-400"
            >
              +
            </button>
            <button 
              onClick={() => setVolume(prev => Math.max(0, prev - 10))}
              className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center 
                       transition-colors hover:bg-neutral-600 focus:outline-none text-neutral-400"
            >
              -
            </button>
          </div>
        </div>
        
        {/* Speaker grille */}
        <div className="mt-3 flex justify-center">
          <div 
            className="w-1/2 h-8 rounded-sm"
            style={{
              background: 'repeating-linear-gradient(90deg, #555, #555 2px, #444 3px, #444 7px)'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Clock_91;

// Add these keyframes to your globals.css:
/*
@keyframes tvBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

@keyframes tvDigitChange {
  0% { transform: scale(1); opacity: 1; filter: brightness(1); }
  50% { transform: scale(1.2); opacity: 0.8; filter: brightness(1.5); }
  100% { transform: scale(1); opacity: 1; filter: brightness(1); }
}

@keyframes tvGlitch {
  0%, 100% { transform: translate(0, 0); opacity: 0.3; }
  20% { transform: translate(-10px, 0); opacity: 0.5; }
  40% { transform: translate(10px, 0); opacity: 0.2; }
  60% { transform: translate(-5px, 0); opacity: 0.4; }
  80% { transform: translate(5px, 0); opacity: 0.2; }
}

@keyframes tvGlitchJitter {
  0%, 20%, 40%, 60%, 80%, 100% { transform: skewX(0deg); }
  10%, 30%, 50%, 70%, 90% { transform: skewX(0.5deg) skewY(0.2deg); }
}
*/ 