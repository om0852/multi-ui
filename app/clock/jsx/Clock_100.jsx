'use client';
import React, { useState, useEffect, useRef } from 'react';

// Holographic noise effect
const HologramNoise = ({ opacity = 0.1, linesCount = 50 }) => {
  const [noiseLines, setNoiseLines] = useState([]);
  
  useEffect(() => {
    // Generate random horizontal line positions
    const generateNoise = () => {
      return Array.from({ length: linesCount }).map(() => ({
        position: Math.random() * 100,
        width: 20 + Math.random() * 80,
        opacity: 0.1 + Math.random() * 0.4,
      }));
    };
    
    setNoiseLines(generateNoise());
    
    const interval = setInterval(() => {
      setNoiseLines(generateNoise());
    }, 500);
    
    return () => clearInterval(interval);
  }, [linesCount]);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {noiseLines.map((line, index) => (
        <div
          key={index}
          className="absolute left-0 right-0 h-[1px] bg-cyan-400"
          style={{
            top: `${line.position}%`,
            width: `${line.width}%`,
            opacity: line.opacity * opacity,
            transform: `translateX(${Math.random() * 100}%)`,
          }}
        ></div>
      ))}
    </div>
  );
};

// Circular scan effect
const ScanEffect = ({ size = 200, speed = 4, color = '#22d3ee' }) => {
  const [scanPosition, setScanPosition] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setScanPosition(prev => (prev + 1) % 100);
    }, speed * 10);
    
    return () => clearInterval(interval);
  }, [speed]);
  
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div 
        className="relative rounded-full overflow-hidden"
        style={{ width: size, height: size }}
      >
        <div 
          className="absolute inset-0 border border-cyan-400/30 rounded-full"
        ></div>
        
        <div 
          className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          style={{ 
            top: `${scanPosition}%`,
            opacity: 0.8,
            boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`
          }}
        ></div>
      </div>
    </div>
  );
};

// Holographic projection surface with edge glow
const HolographicSurface = ({ children, width = 500, height = 300, glowIntensity = 0.5 }) => {
  return (
    <div className="relative">
      {/* Projection surface */}
      <div 
        className="relative overflow-hidden bg-cyan-900/10 rounded backdrop-blur-sm border border-cyan-400/30 z-10"
        style={{ 
          width, 
          height,
          boxShadow: `0 0 20px rgba(34, 211, 238, ${glowIntensity * 0.2})`,
        }}
      >
        {/* Content */}
        <div className="relative z-20 w-full h-full">
          {children}
        </div>
        
        {/* Hologram noise effect */}
        <HologramNoise opacity={0.1} />
        
        {/* Horizontal scan lines */}
        <div className="absolute inset-0 bg-scan-lines opacity-10 pointer-events-none"></div>
      </div>
      
      {/* Bottom glow reflection */}
      <div 
        className="absolute -bottom-10 left-0 right-0 h-10 bg-gradient-to-b from-cyan-400/20 to-transparent"
        style={{ 
          filter: `blur(8px)`,
          opacity: glowIntensity 
        }}
      ></div>
    </div>
  );
};

// Floating hologram digit
const HologramDigit = ({ digit, prevDigit, size = 80 }) => {
  const isChanged = digit !== prevDigit;
  
  return (
    <div className="relative h-full">
      <div 
        className={`relative font-[monospace] font-bold text-cyan-400 select-none flex items-center justify-center ${
          isChanged ? 'animate-[hologramFlicker_0.5s_ease-out]' : ''
        }`}
        style={{ 
          fontSize: size,
          textShadow: '0 0 10px #22d3ee, 0 0 20px #22d3ee',
          height: '100%',
        }}
      >
        {digit.toString().padStart(2, '0')}
        
        {/* Digit glitch effect */}
        {isChanged && (
          <div 
            className="absolute inset-0 flex items-center justify-center text-red-400 animate-[glitchOffset_0.3s_ease-in-out]"
            style={{ 
              fontSize: size,
              opacity: 0.7,
              clipPath: 'inset(30% 0 30% 0)',
            }}
          >
            {digit.toString().padStart(2, '0')}
          </div>
        )}
      </div>
    </div>
  );
};

// Hologram separator
const HologramSeparator = ({ blink = true }) => {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    if (!blink) return;
    
    const interval = setInterval(() => {
      setVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(interval);
  }, [blink]);
  
  return (
    <div className="flex flex-col justify-center space-y-3 mx-2">
      <div 
        className={`w-3 h-3 rounded-full transition-opacity duration-300 ${visible ? 'opacity-80' : 'opacity-30'}`}
        style={{ 
          backgroundColor: '#22d3ee', 
          boxShadow: '0 0 10px #22d3ee, 0 0 15px #22d3ee'
        }}
      ></div>
      <div 
        className={`w-3 h-3 rounded-full transition-opacity duration-300 ${visible ? 'opacity-80' : 'opacity-30'}`}
        style={{ 
          backgroundColor: '#22d3ee', 
          boxShadow: '0 0 10px #22d3ee, 0 0 15px #22d3ee'
        }}
      ></div>
    </div>
  );
};

// Data stream visualization
const DataStream = ({ width = 200, height = 40, active = true }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    if (!active) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const cellSize = 8;
    const cols = Math.ceil(width / cellSize);
    const rows = Math.ceil(height / cellSize);
    
    // Characters to display (digits, symbols, and letters for the data stream effect)
    const chars = '01023456789ABCDEF!@#$%^&*()-+=[]{}|;:,./<>?'.split('');
    
    // Columns state
    const columns = Array(cols).fill(0);
    
    // Animation function
    const drawMatrix = () => {
      // Set semi-transparent background to create trail effect
      ctx.fillStyle = 'rgba(0, 10, 20, 0.08)';
      ctx.fillRect(0, 0, width, height);
      
      ctx.fillStyle = '#22d3ee';
      ctx.font = '9px monospace';
      
      // Draw each column
      for (let i = 0; i < cols; i++) {
        // Get random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Position based on column counter
        const x = i * cellSize;
        const y = columns[i] * cellSize;
        
        // Draw with varying opacity for depth effect
        const opacity = Math.random() * 0.5 + 0.5;
        ctx.fillStyle = `rgba(34, 211, 238, ${opacity})`;
        
        ctx.fillText(char, x, y);
        
        // Reset column if it gets to the bottom or randomly
        if (y > height || Math.random() > 0.99) {
          columns[i] = 0;
        } else {
          columns[i]++;
        }
      }
    };
    
    // Initialize canvas and start animation
    ctx.fillStyle = 'rgba(0, 10, 20, 1)';
    ctx.fillRect(0, 0, width, height);
    
    const interval = setInterval(drawMatrix, 120);
    
    return () => clearInterval(interval);
  }, [width, height, active]);
  
  return (
    <canvas 
      ref={canvasRef} 
      width={width} 
      height={height} 
      className="rounded bg-cyan-900/20"
    ></canvas>
  );
};

// Radar animation
const RadarScan = ({ size = 200 }) => {
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 2) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div 
      className="relative rounded-full border border-cyan-400/30 flex items-center justify-center overflow-hidden"
      style={{ width: size, height: size }}
    >
      {/* Background grid */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          {/* Concentric circles */}
          <circle cx="50" cy="50" r="45" fill="none" stroke="#0e7490" strokeWidth="0.5" strokeOpacity="0.3" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#0e7490" strokeWidth="0.5" strokeOpacity="0.3" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="#0e7490" strokeWidth="0.5" strokeOpacity="0.3" />
          
          {/* Grid lines */}
          <line x1="0" y1="50" x2="100" y2="50" stroke="#0e7490" strokeWidth="0.5" strokeOpacity="0.3" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="#0e7490" strokeWidth="0.5" strokeOpacity="0.3" />
          <line x1="14.6" y1="14.6" x2="85.4" y2="85.4" stroke="#0e7490" strokeWidth="0.5" strokeOpacity="0.3" />
          <line x1="85.4" y1="14.6" x2="14.6" y2="85.4" stroke="#0e7490" strokeWidth="0.5" strokeOpacity="0.3" />
        </svg>
      </div>
      
      {/* Random dots representing targets */}
      {Array.from({ length: 10 }).map((_, index) => {
        const distance = 10 + Math.random() * 35;
        const angle = Math.random() * Math.PI * 2;
        const x = 50 + distance * Math.cos(angle);
        const y = 50 + distance * Math.sin(angle);
        
        return (
          <div 
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400"
            style={{ 
              left: `${x}%`, 
              top: `${y}%`,
              boxShadow: '0 0 4px #22d3ee',
              opacity: 0.6 + Math.random() * 0.4
            }}
          ></div>
        );
      })}
      
      {/* Rotating radar line */}
      <div 
        className="absolute w-1/2 h-1 bg-gradient-to-r from-cyan-400 to-transparent origin-left"
        style={{ 
          top: '50%', 
          left: '50%',
          transform: `rotate(${rotation}deg)`,
          boxShadow: '0 0 5px #22d3ee'
        }}
      ></div>
      
      {/* Sweep effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-transparent origin-center"
        style={{ 
          opacity: 0.1, 
          transform: `rotate(${rotation}deg)`,
          clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 50% 100%, 50% 50%)'
        }}
      ></div>
      
      {/* Center point */}
      <div 
        className="absolute w-2 h-2 rounded-full bg-cyan-400"
        style={{ boxShadow: '0 0 10px #22d3ee' }}
      ></div>
    </div>
  );
};

// System stats display
const SystemStats = ({ cpu, memory, network, power = 90 }) => {
  return (
    <div className="text-cyan-400 font-mono text-xs space-y-1">
      <div className="flex justify-between">
        <div>CPU LOAD</div>
        <div>{cpu}%</div>
      </div>
      <div className="h-1 bg-cyan-900/50 rounded overflow-hidden">
        <div className="h-full bg-cyan-400" style={{ width: `${cpu}%` }}></div>
      </div>
      
      <div className="flex justify-between mt-2">
        <div>MEMORY</div>
        <div>{memory}%</div>
      </div>
      <div className="h-1 bg-cyan-900/50 rounded overflow-hidden">
        <div className="h-full bg-cyan-400" style={{ width: `${memory}%` }}></div>
      </div>
      
      <div className="flex justify-between mt-2">
        <div>NETWORK</div>
        <div>{network} MB/s</div>
      </div>
      <div className="h-1 bg-cyan-900/50 rounded overflow-hidden">
        <div className="h-full bg-cyan-400" style={{ width: `${network / 2}%` }}></div>
      </div>
      
      <div className="flex justify-between mt-2">
        <div>POWER</div>
        <div>{power}%</div>
      </div>
      <div className="h-1 bg-cyan-900/50 rounded overflow-hidden">
        <div className="h-full bg-cyan-400" style={{ width: `${power}%` }}></div>
      </div>
    </div>
  );
};

// Floating text for status and messages
const StatusMessage = ({ message = '', rotateY = false }) => {
  return (
    <div 
      className="inline-block text-cyan-400 font-mono text-sm py-1 px-2 border border-cyan-400/30 rounded bg-cyan-900/20 animate-[floatMessage_5s_ease-in-out_infinite]"
      style={{ 
        textShadow: '0 0 5px #22d3ee',
        transform: rotateY ? 'rotateY(180deg)' : 'none'  
      }}
    >
      {message}
    </div>
  );
};

// Main clock component
const Clock_100 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());
  const [showScanEffect, setShowScanEffect] = useState(true);
  const [systemStats, setSystemStats] = useState({
    cpu: 42,
    memory: 65,
    network: 86,
    power: 90
  });
  const [statusMessages, setStatusMessages] = useState([
    'TIME MONITORING ACTIVE',
    'QUANTUM SYNC: STABLE',
    'CHRONOLOGICAL DATA STREAM ACTIVE'
  ]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
    }, 1000);
    
    // Toggle scan effect periodically
    const scanTimer = setInterval(() => {
      setShowScanEffect(prev => !prev);
    }, 30000);
    
    // Update system stats periodically
    const statsTimer = setInterval(() => {
      setSystemStats({
        cpu: 35 + Math.floor(Math.random() * 45),
        memory: 55 + Math.floor(Math.random() * 30),
        network: 60 + Math.floor(Math.random() * 120),
        power: 85 + Math.floor(Math.random() * 15)
      });
    }, 3000);
    
    // Rotate status messages
    const messageTimer = setInterval(() => {
      setStatusMessages(prev => {
        const messages = [...prev];
        const first = messages.shift();
        messages.push(first);
        return messages;
      });
    }, 5000);
    
    return () => {
      clearInterval(timer);
      clearInterval(scanTimer);
      clearInterval(statsTimer);
      clearInterval(messageTimer);
    };
  }, [time]);
  
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  
  const prevHours = prevTime.getHours().toString().padStart(2, '0');
  const prevMinutes = prevTime.getMinutes().toString().padStart(2, '0');
  const prevSeconds = prevTime.getSeconds().toString().padStart(2, '0');

  return (
    <div className="relative p-8 bg-gradient-to-b from-gray-950 to-cyan-950 rounded-lg shadow-2xl overflow-hidden min-h-[600px]">
      {/* Background holographic grid */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Header and title */}
      <div className="relative z-10 mb-8 text-center text-cyan-400 font-bold text-2xl">
        <div 
          className="uppercase tracking-widest font-[monospace]"
          style={{ textShadow: '0 0 15px #22d3ee' }}
        >
          Hologram Chrono Interface
        </div>
        <div className="text-sm font-normal mt-1 opacity-70">VERSION 100.0.1</div>
      </div>
      
      {/* Main display area */}
      <div className="relative z-10 flex justify-center mb-8">
        <HolographicSurface width={600} height={300} glowIntensity={0.8}>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Time display */}
            <div className="flex items-center h-36 mb-4">
              <HologramDigit digit={hours} prevDigit={prevHours} size={80} />
              <HologramSeparator blink={true} />
              <HologramDigit digit={minutes} prevDigit={prevMinutes} size={80} />
              <HologramSeparator blink={true} />
              <HologramDigit digit={seconds} prevDigit={prevSeconds} size={80} />
            </div>
            
            {/* Date display */}
            <div 
              className="text-cyan-400 font-[monospace] text-xl mb-6"
              style={{ textShadow: '0 0 5px #22d3ee' }}
            >
              {time.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            
            {/* Status message */}
            <div className="mt-4">
              <StatusMessage message={statusMessages[0]} />
            </div>
          </div>
          
          {/* Scanning effect on top of the surface */}
          {showScanEffect && <ScanEffect size={300} />}
        </HolographicSurface>
      </div>
      
      {/* Secondary displays and controls */}
      <div className="relative z-10 grid grid-cols-3 gap-6">
        {/* Left panel - Data stream */}
        <div className="flex flex-col items-center">
          <div className="text-cyan-400 font-mono text-sm mb-2">DATA STREAM</div>
          <HolographicSurface width={200} height={200} glowIntensity={0.5}>
            <div className="p-3 h-full">
              <DataStream width={180} height={180} />
            </div>
          </HolographicSurface>
        </div>
        
        {/* Center panel - Radar scan */}
        <div className="flex flex-col items-center">
          <div className="text-cyan-400 font-mono text-sm mb-2">QUANTUM FIELD</div>
          <HolographicSurface width={200} height={200} glowIntensity={0.5}>
            <div className="p-3 h-full flex items-center justify-center">
              <RadarScan size={170} />
            </div>
          </HolographicSurface>
          
          {/* Additional status messages below radar */}
          <div className="mt-4 flex space-x-3">
            <StatusMessage message={statusMessages[1]} />
            <StatusMessage message={statusMessages[2]} />
          </div>
        </div>
        
        {/* Right panel - System stats */}
        <div className="flex flex-col items-center">
          <div className="text-cyan-400 font-mono text-sm mb-2">SYSTEM STATUS</div>
          <HolographicSurface width={200} height={200} glowIntensity={0.5}>
            <div className="p-4 h-full">
              <SystemStats 
                cpu={systemStats.cpu}
                memory={systemStats.memory}
                network={systemStats.network}
                power={systemStats.power}
              />
              
              {/* Additional info in bottom of panel */}
              <div className="mt-6 border-t border-cyan-400/20 pt-3">
                <div className="text-cyan-400 font-mono text-[10px] flex flex-col gap-1">
                  <div className="flex justify-between">
                    <div>TIME ENGINE</div>
                    <div>ACTIVE</div>
                  </div>
                  <div className="flex justify-between">
                    <div>QUANTUM LINK</div>
                    <div>STABLE</div>
                  </div>
                  <div className="flex justify-between">
                    <div>SECURITY</div>
                    <div>LEVEL A</div>
                  </div>
                  <div className="flex justify-between">
                    <div>PROJECTION</div>
                    <div>100%</div>
                  </div>
                </div>
              </div>
            </div>
          </HolographicSurface>
        </div>
      </div>
    </div>
  );
};

export default Clock_100;

// Add these keyframes to your globals.css:
/*
@keyframes hologramFlicker {
  0% { opacity: 1; }
  10% { opacity: 0.8; }
  15% { opacity: 1; }
  20% { opacity: 0.6; }
  25% { opacity: 1; }
  30% { opacity: 0.9; }
  100% { opacity: 1; }
}

@keyframes glitchOffset {
  0% { transform: translate(0); }
  20% { transform: translate(-5px, 5px); }
  40% { transform: translate(5px, -5px); }
  60% { transform: translate(-3px, 3px); }
  80% { transform: translate(3px, -3px); }
  100% { transform: translate(0); }
}

@keyframes floatMessage {
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
}

.bg-scan-lines {
  background: repeating-linear-gradient(
    transparent 0px,
    rgba(34, 211, 238, 0.05) 1px,
    transparent 2px,
    transparent 4px
  );
}

.bg-grid {
  background-size: 40px 40px;
  background-image:
    linear-gradient(to right, rgba(34, 211, 238, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(34, 211, 238, 0.1) 1px, transparent 1px);
}
*/ 