'use client';
import React, { useEffect, useState } from 'react';

// Cyberpunk digit with glitchy effects
const CyberDigit = ({ digit, prevDigit }) => {
  const [glitching, setGlitching] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setGlitching(true);
      const timer = setTimeout(() => setGlitching(false), 500);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);
  
  // Random glitch offset values
  const glitchX = Math.random() * 5 - 2.5;
  const glitchY = Math.random() * 5 - 2.5;

  return (
    <div className="relative w-20 h-32 flex items-center justify-center">
      {/* Background with circuit patterns */}
      <div className="absolute inset-0 bg-gray-900 border border-pink-600/50 rounded-md overflow-hidden">
        {/* Circuit pattern background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zm-24.596 0l-5.657 5.657 1.415 1.415L22.97 0h-4.255zm16.97 0l-7.07 7.07 1.414 1.415 9.9-9.9h-4.243zM32.32 0l-9.9 9.9 1.415 1.414L35.07 0h-2.75zm-9.246 0L9.216 13.857l1.414 1.414L26.444 0h-3.37zm26.59 0l-3.37.005-7.053 7.053L40.656 8.5l9.9-9.9h-9.9v1.414l9.9-9.9v1.414l-9.9 9.9v1.414l9.9-9.9v1.414l-9.9 9.9v1.414L60 0h-6.328zm-39.84 0h-9.9v1.414l9.9-9.9v1.414l-9.9 9.9v1.414l9.9-9.9v1.414l-9.9 9.9v1.414L0 0h14.156L0 0h9.67z' fill='%23f472b6' fill-opacity='0.5' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>
      
      {/* Digit display with glitch effect */}
      <div className="relative z-10">
        {/* Main digit */}
        <div 
          className="text-5xl font-bold text-cyan-300 transition-transform duration-300"
          style={{
            textShadow: `0 0 10px #06b6d4, 0 0 20px #06b6d4, 0 0 30px #06b6d4`,
          }}
        >
          {digit}
        </div>
        
        {/* Glitch effects - only show while glitching */}
        {glitching && (
          <>
            {/* Red offset */}
            <div 
              className="absolute inset-0 text-5xl font-bold text-red-500/60 z-0"
              style={{
                textShadow: '0 0 5px rgba(239, 68, 68, 0.8)',
                transform: `translate(${glitchX}px, ${glitchY}px)`,
                clipPath: 'polygon(0 0, 100% 0, 100% 33%, 0 33%, 0 66%, 100% 66%, 100% 100%, 0 100%)'
              }}
            >
              {digit}
            </div>

            {/* Blue offset */}
            <div 
              className="absolute inset-0 text-5xl font-bold text-blue-500/60 z-0"
              style={{
                textShadow: '0 0 5px rgba(59, 130, 246, 0.8)',
                transform: `translate(${-glitchX}px, ${-glitchY}px)`,
                clipPath: 'polygon(0 0, 100% 0, 100% 33%, 0 33%, 0 66%, 100% 66%, 100% 100%, 0 100%)'
              }}
            >
              {digit}
            </div>
          </>
        )}
      </div>
      
      {/* Neon border glow effect */}
      <div 
        className={`absolute inset-0 border border-cyan-400 rounded-md transition-opacity duration-300 ${
          glitching ? 'opacity-100' : 'opacity-40'
        }`}
        style={{
          boxShadow: `0 0 5px #06b6d4, inset 0 0 5px #06b6d4`
        }}
      ></div>
      
      {/* Data scan line */}
      <div 
        className="absolute inset-x-0 h-1 bg-cyan-400/40 animate-[scanline_2s_linear_infinite]"
        style={{
          boxShadow: '0 0 8px #06b6d4'
        }}
      ></div>
    </div>
  );
};

// Random cyberpunk data text
const DataText = () => {
  const generateHex = () => {
    const chars = '0123456789ABCDEF';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += chars[Math.floor(Math.random() * 16)];
    }
    return result;
  };

  const [dataLines, setDataLines] = useState([
    generateHex(), generateHex(), generateHex()
  ]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDataLines(prev => {
        const newLines = [...prev];
        const randomIndex = Math.floor(Math.random() * newLines.length);
        newLines[randomIndex] = generateHex();
        return newLines;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="text-xs font-mono text-cyan-400/70 flex flex-col space-y-0.5">
      {dataLines.map((line, i) => (
        <div key={i} className="tracking-wider">{line}</div>
      ))}
    </div>
  );
};

// Blinking element for separator
const NeonSeparator = () => {
  const [blinking, setBlinking] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setBlinking(b => !b);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="h-32 flex flex-col justify-center space-y-2">
      <div 
        className={`w-2 h-2 rounded-full transition-all duration-300 ${
          blinking ? 'bg-pink-500 shadow-[0_0_8px_#ec4899]' : 'bg-pink-800 shadow-none'
        }`}
      ></div>
      <div 
        className={`w-2 h-2 rounded-full transition-all duration-300 ${
          !blinking ? 'bg-pink-500 shadow-[0_0_8px_#ec4899]' : 'bg-pink-800 shadow-none'
        }`}
      ></div>
    </div>
  );
};

const Clock_76 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());
  const [systemStatus, setSystemStatus] = useState('STABLE');
  
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
      
      // Randomly change system status for effect
      if (Math.random() > 0.9) {
        const statuses = ['STABLE', 'SYNCHRONIZING', 'SECURE', 'ENCRYPTED', 'BREACHED', 'ANALYZING'];
        setSystemStatus(statuses[Math.floor(Math.random() * statuses.length)]);
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
    <div className="bg-gray-950 p-10 rounded-xl shadow-2xl border border-pink-500/30 relative overflow-hidden">
      {/* Background patterns */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zm-24.596 0l-5.657 5.657 1.415 1.415L22.97 0h-4.255zm16.97 0l-7.07 7.07 1.414 1.415 9.9-9.9h-4.243zM32.32 0l-9.9 9.9 1.415 1.414L35.07 0h-2.75zm-9.246 0L9.216 13.857l1.414 1.414L26.444 0h-3.37zm26.59 0l-3.37.005-7.053 7.053L40.656 8.5l9.9-9.9h-9.9v1.414l9.9-9.9v1.414l-9.9 9.9v1.414l9.9-9.9v1.414l-9.9 9.9v1.414L60 0h-6.328zm-39.84 0h-9.9v1.414l9.9-9.9v1.414l-9.9 9.9v1.414l9.9-9.9v1.414l-9.9 9.9v1.414L0 0h14.156L0 0h9.67z' fill='%23ec4899' fill-opacity='0.6' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '70px 70px'
        }}
      ></div>
      
      {/* Scan line effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-[scan_3s_linear_infinite]"
      ></div>
      
      {/* Header elements */}
      <div className="relative z-10 flex justify-between items-start mb-8">
        <div>
          <div className="text-lg font-bold text-cyan-400 tracking-wider mb-1">NØW:TIME</div>
          <div className="text-xs text-pink-500">
            SYS.STATUS: <span className="text-white">{systemStatus}</span>
          </div>
        </div>
        
        <DataText />
      </div>
      
      {/* Main clock display */}
      <div className="relative z-10 flex justify-center items-center space-x-4 mb-8">
        {/* Hours */}
        <div className="flex space-x-2">
          <CyberDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <CyberDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <NeonSeparator />
        
        {/* Minutes */}
        <div className="flex space-x-2">
          <CyberDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <CyberDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <NeonSeparator />
        
        {/* Seconds */}
        <div className="flex space-x-2">
          <CyberDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <CyberDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
      
      {/* Footer/system info */}
      <div className="relative z-10 flex justify-between items-center">
        <div className="text-xs text-gray-500">
          LOCATION: NEO-TOKYO • SECTOR-7G
        </div>
        
        <div className="text-xs font-mono text-cyan-400">
          {time.toLocaleDateString('en-US', { 
            month: 'numeric', 
            day: 'numeric', 
            year: 'numeric'
          }).replace(/\//g, '.')}
        </div>
        
        <div className="text-xs text-pink-500">
          V.2.0.77
        </div>
      </div>
      
      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 w-24 h-24 overflow-hidden">
        <div className="absolute -bottom-12 -right-12 w-24 h-24 border-2 border-pink-500 rounded-full opacity-30"></div>
      </div>
    </div>
  );
};

export default Clock_76;

// Add to globals.css:
/*
@keyframes scanline {
  0% { top: 0%; }
  100% { top: 100%; }
}

@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}
*/ 