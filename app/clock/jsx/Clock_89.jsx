'use client';
import React, { useState, useEffect } from 'react';

// Cyberpunk digit display
const CyberDigit = ({ digit, prevDigit }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchIntensity, setGlitchIntensity] = useState(0);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsGlitching(true);
      setGlitchIntensity(Math.random() * 0.5 + 0.5); // Between 0.5 and 1
      
      const timer = setTimeout(() => {
        setIsGlitching(false);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);
  
  // Generate random offset for glitch effect
  const getGlitchOffset = () => {
    return isGlitching ? `${(Math.random() * 4 - 2) * glitchIntensity}px` : '0px';
  };
  
  return (
    <div className="relative mx-1 w-24 h-36 flex items-center justify-center">
      {/* Base digit */}
      <div 
        className="text-5xl font-bold z-10 relative"
        style={{
          color: '#ff00ff',
          textShadow: `0 0 10px rgba(255, 0, 255, 0.8), 0 0 20px rgba(255, 0, 255, 0.4)`,
          transform: isGlitching ? `translate(${getGlitchOffset()}, ${getGlitchOffset()})` : 'none',
          transition: 'text-shadow 0.2s'
        }}
      >
        {digit}
      </div>
      
      {/* Cyan glitch layer */}
      {isGlitching && (
        <div 
          className="text-5xl font-bold absolute top-0 left-0 w-full h-full flex items-center justify-center"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1px #0ff',
            filter: 'blur(1px)',
            opacity: 0.7 * glitchIntensity,
            transform: `translate(${getGlitchOffset()}, ${getGlitchOffset()})`,
            mixBlendMode: 'screen'
          }}
        >
          {digit}
        </div>
      )}
      
      {/* Yellow glitch layer */}
      {isGlitching && (
        <div 
          className="text-5xl font-bold absolute top-0 left-0 w-full h-full flex items-center justify-center"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1px #ff0',
            filter: 'blur(1px)',
            opacity: 0.5 * glitchIntensity,
            transform: `translate(${getGlitchOffset()}, ${getGlitchOffset()})`,
            mixBlendMode: 'screen'
          }}
        >
          {digit}
        </div>
      )}
      
      {/* Occasionally show scan lines */}
      {isGlitching && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.2) 0px, rgba(0,0,0,0.2) 1px, transparent 1px, transparent 2px)',
            opacity: 0.7 * glitchIntensity,
            mixBlendMode: 'overlay'
          }}
        ></div>
      )}
      
      {/* Digital noise */}
      {isGlitching && (
        <div 
          className="absolute inset-0 pointer-events-none animate-[noise_0.2s_steps(2)_infinite]"
          style={{
            background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            opacity: 0.1 * glitchIntensity,
            mixBlendMode: 'overlay'
          }}
        ></div>
      )}
    </div>
  );
};

// Holo display lines effect
const HoloLines = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div 
        className="w-full h-full opacity-15"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(0,255,255,0.03) 0px, rgba(0,255,255,0.03) 1px, transparent 1px, transparent 2px)',
        }}
      ></div>
    </div>
  );
};

// Cyberpunk separator
const CyberSeparator = () => {
  const [glitchIntensity, setGlitchIntensity] = useState(0);
  
  // Randomly glitch the separator
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitchIntensity(Math.random());
        setTimeout(() => setGlitchIntensity(0), 200);
      }
    }, 1000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  return (
    <div className="relative flex flex-col items-center mx-2 space-y-2">
      <div 
        className={`w-2 h-2 rounded-full ${glitchIntensity > 0 ? 'animate-[cyberPulse_0.5s_infinite]' : ''}`}
        style={{
          backgroundColor: '#0ff',
          boxShadow: `0 0 10px #0ff, 0 0 20px rgba(0, 255, 255, 0.5)`,
          transform: glitchIntensity > 0 ? `translateX(${(Math.random() * 4 - 2) * glitchIntensity}px)` : 'none'
        }}
      ></div>
      <div 
        className={`w-2 h-2 rounded-full ${glitchIntensity > 0 ? 'animate-[cyberPulse_0.5s_infinite_0.1s]' : ''}`}
        style={{
          backgroundColor: '#f0f',
          boxShadow: `0 0 10px #f0f, 0 0 20px rgba(255, 0, 255, 0.5)`,
          transform: glitchIntensity > 0 ? `translateX(${(Math.random() * 4 - 2) * glitchIntensity}px)` : 'none'
        }}
      ></div>
    </div>
  );
};

// Glitch text for display
const GlitchText = ({ text, intensity = 1, interval = 2000, className = "", size = "sm" }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.5) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 150 * intensity);
      }
    }, interval);
    
    return () => clearInterval(glitchInterval);
  }, [intensity, interval]);
  
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl"
  };
  
  return (
    <div 
      className={`relative font-mono font-bold tracking-wider ${sizeClasses[size]} ${className}`}
      style={{
        color: isGlitching ? '#ff0' : '#0ff',
        textShadow: isGlitching 
          ? `0 0 5px #ff0, 0 0 10px rgba(255, 255, 0, 0.8), 2px 2px 0px rgba(255, 0, 255, 0.4)`
          : `0 0 5px #0ff, 0 0 10px rgba(0, 255, 255, 0.8)`,
        transform: isGlitching ? `translateX(${(Math.random() * 4 - 2) * intensity}px)` : 'none',
      }}
    >
      {text}
      
      {/* Glitch overlay */}
      {isGlitching && (
        <div 
          className="absolute top-0 left-0 w-full"
          style={{
            color: '#f0f',
            textShadow: `0 0 5px #f0f, 0 0 10px rgba(255, 0, 255, 0.8)`,
            clipPath: `polygon(${Math.random() * 100}% 0%, 100% 0%, 100% ${Math.random() * 100}%, 0% 100%, 0% ${Math.random() * 100}%)`,
            transform: `translateX(${(Math.random() * 6 - 3) * intensity}px)`,
            opacity: 0.8
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

// Animated circuits in the background
const CircuitLines = () => {
  return (
    <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
      {/* Horizontal lines */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div 
          key={`h-${i}`}
          className="absolute h-px" 
          style={{
            top: `${5 + i * 10}%`,
            left: 0,
            right: 0,
            backgroundColor: '#0ff',
            opacity: Math.random() * 0.5 + 0.3,
            boxShadow: '0 0 5px #0ff',
            animation: `circuitPulse ${3 + Math.random() * 4}s linear infinite`
          }}
        />
      ))}
      
      {/* Vertical lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div 
          key={`v-${i}`}
          className="absolute w-px" 
          style={{
            left: `${10 + i * 12}%`,
            top: 0,
            bottom: 0,
            backgroundColor: '#f0f',
            opacity: Math.random() * 0.5 + 0.3,
            boxShadow: '0 0 5px #f0f',
            animation: `circuitPulse ${3 + Math.random() * 4}s linear infinite ${Math.random() * 2}s`
          }}
        />
      ))}
      
      {/* Nodes */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div 
          key={`node-${i}`}
          className="absolute w-1 h-1 rounded-full" 
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${10 + Math.random() * 80}%`,
            backgroundColor: Math.random() > 0.5 ? '#0ff' : '#f0f',
            boxShadow: Math.random() > 0.5 
              ? '0 0 5px #0ff, 0 0 10px rgba(0, 255, 255, 0.8)' 
              : '0 0 5px #f0f, 0 0 10px rgba(255, 0, 255, 0.8)',
            animation: `nodePulse ${1 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );
};

// AR style markers for corners
const ARMarker = ({ position }) => {
  const positions = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 rotate-90',
    'bottom-right': 'bottom-0 right-0 rotate-180',
    'bottom-left': 'bottom-0 left-0 -rotate-90'
  };
  
  return (
    <div className={`absolute ${positions[position]} w-12 h-12 flex items-center justify-center transform pointer-events-none`}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 16V0H16" stroke="#0ff" strokeWidth="2" />
        <path d="M16 0H32" stroke="#0ff" strokeWidth="2" strokeDasharray="2 2" />
        <path d="M0 16V32" stroke="#0ff" strokeWidth="2" strokeDasharray="2 2" />
      </svg>
    </div>
  );
};

// Warning symbol
const WarningSymbol = () => {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setVisible(v => !v);
    }, 1500);
    
    return () => clearInterval(blinkInterval);
  }, []);
  
  return (
    <div 
      className={`transition-opacity duration-100 ${visible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        color: '#ff0',
        fontSize: '1.5rem',
        textShadow: '0 0 5px #ff0'
      }}
    >
      ⚠
    </div>
  );
};

const Clock_89 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());
  const [systemStatus, setSystemStatus] = useState("SCANNING");
  const [threatLevel, setThreatLevel] = useState(Math.floor(Math.random() * 100));
  const [glitchMajor, setGlitchMajor] = useState(false);
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
      
      // Occasionally update system status
      if (Math.random() > 0.9) {
        const statuses = ["SCANNING", "MONITORING", "ANALYZING", "ALERT", "STANDBY"];
        setSystemStatus(statuses[Math.floor(Math.random() * statuses.length)]);
        setThreatLevel(Math.floor(Math.random() * 100));
      }
      
      // Occasionally trigger major glitch
      if (Math.random() > 0.95) {
        setGlitchMajor(true);
        setTimeout(() => setGlitchMajor(false), 600);
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
  
  // Format date like futuristic timestamp
  const cyberDate = `${time.getFullYear()}.${(time.getMonth() + 1).toString().padStart(2, '0')}.${time.getDate().toString().padStart(2, '0')}`;
  
  return (
    <div 
      className="relative bg-black border-2 border-cyan-500 p-6 rounded-md overflow-hidden"
      style={{
        boxShadow: glitchMajor
          ? `0 0 30px rgba(255, 0, 255, 0.8), 0 0 60px rgba(0, 255, 255, 0.5), inset 0 0 30px rgba(255, 0, 255, 0.3)`
          : `0 0 20px rgba(0, 255, 255, 0.5), inset 0 0 20px rgba(0, 255, 255, 0.2)`,
        backgroundColor: '#080815',
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(50, 7, 80, 0.5), rgba(0, 0, 0, 0.8))'
      }}
    >
      {/* AR corner markers */}
      <ARMarker position="top-left" />
      <ARMarker position="top-right" />
      <ARMarker position="bottom-right" />
      <ARMarker position="bottom-left" />
      
      {/* Background circuit pattern */}
      <CircuitLines />
      
      {/* Scan line effect */}
      <HoloLines />
      
      {/* Overlay glitch effect */}
      {glitchMajor && (
        <div 
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(0deg, rgba(255,0,255,0.1) 25%, transparent 25%, transparent 50%, rgba(0,255,255,0.1) 50%, rgba(0,255,255,0.1) 75%, transparent 75%, transparent)',
            backgroundSize: '100% 4px',
            animation: 'glitchOverlay 0.2s linear infinite',
            mixBlendMode: 'overlay'
          }}
        ></div>
      )}
      
      {/* Border glitch effect */}
      {glitchMajor && (
        <div 
          className="absolute inset-0 pointer-events-none border-2 border-fuchsia-500"
          style={{
            clipPath: `polygon(${Math.random() * 100}% 0%, 100% 0%, 100% ${Math.random() * 100}%, 0% 100%, 0% ${Math.random() * 100}%)`,
            opacity: 0.8,
            mixBlendMode: 'overlay'
          }}
        ></div>
      )}
      
      {/* Top system status */}
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="flex flex-col">
          <GlitchText text={systemStatus} size="sm" intensity={1.5} className="mb-1" />
          <div className="flex items-center">
            <div 
              className="h-1 w-32 bg-gray-900 rounded overflow-hidden"
              style={{ boxShadow: 'inset 0 0 5px rgba(0,0,0,0.8)' }}
            >
              <div 
                className="h-full bg-cyan-500"
                style={{ 
                  width: `${threatLevel}%`,
                  boxShadow: '0 0 10px #0ff',
                  transition: 'width 0.3s ease-out' 
                }}
              ></div>
            </div>
            <div className="ml-2 text-xs text-cyan-500" style={{ textShadow: '0 0 3px #0ff' }}>
              {threatLevel}%
            </div>
          </div>
        </div>
        
        <div className="flex items-center">
          <WarningSymbol />
          <GlitchText text={`ID:${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`} interval={5000} className="ml-2" />
        </div>
      </div>
      
      {/* Clock title */}
      <div className="text-center mb-4 relative z-10">
        <GlitchText 
          text="CHRONOS-89:NEURAL:INTERFACE" 
          intensity={0.7} 
          size="md" 
          className="tracking-[0.3em]"
        />
      </div>
      
      {/* Clock display */}
      <div 
        className="mb-6 p-4 rounded relative z-10 bg-black bg-opacity-50"
        style={{
          boxShadow: `0 0 10px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.5)`,
          borderTop: '1px solid rgba(0, 255, 255, 0.3)',
          borderLeft: '1px solid rgba(0, 255, 255, 0.3)',
          borderRight: '1px solid rgba(255, 0, 255, 0.3)',
          borderBottom: '1px solid rgba(255, 0, 255, 0.3)',
        }}
      >
        <div className="flex justify-center items-center">
          {/* Hours */}
          <div className="flex">
            <CyberDigit digit={hours[0]} prevDigit={prevHours[0]} />
            <CyberDigit digit={hours[1]} prevDigit={prevHours[1]} />
          </div>
          
          <CyberSeparator />
          
          {/* Minutes */}
          <div className="flex">
            <CyberDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
            <CyberDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
          </div>
          
          <CyberSeparator />
          
          {/* Seconds */}
          <div className="flex">
            <CyberDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
            <CyberDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
          </div>
        </div>
      </div>
      
      {/* System details and footer */}
      <div className="flex justify-between items-end relative z-10">
        <div className="flex flex-col">
          <GlitchText text={`TIMELINE: ${cyberDate}`} className="mb-1" interval={3000} />
          <GlitchText text={`SECTOR: NIGHT CITY`} className="opacity-80" interval={4000} />
        </div>
        
        <div className="flex flex-col items-end">
          <GlitchText text="NET::3.2" className="mb-1" interval={4000} />
          <div className="text-xs text-fuchsia-500 opacity-75" style={{ textShadow: '0 0 3px #f0f' }}>VER.89.3.1</div>
        </div>
      </div>
    </div>
  );
};

export default Clock_89;

// Add these keyframes to your globals.css:
/*
@keyframes cyberPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
}

@keyframes noise {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-5%, -5%); }
  20% { transform: translate(-10%, 5%); }
  30% { transform: translate(5%, -10%); }
  40% { transform: translate(-5%, 15%); }
  50% { transform: translate(-10%, 5%); }
  60% { transform: translate(15%, 0); }
  70% { transform: translate(0, 10%); }
  80% { transform: translate(3%, 35%); }
  90% { transform: translate(-10%, 10%); }
}

@keyframes glitchOverlay {
  0% { background-position: 0 0; }
  100% { background-position: 0 -200%; }
}

@keyframes circuitPulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.1; }
}

@keyframes nodePulse {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.5); opacity: 0.3; }
}
*/ 