'use client';
import React, { useEffect, useState } from 'react';

// Equalizer bar component - animates based on the digit value
const EqualizerBar = ({ height, delay, color = "#3b82f6" }) => {
  return (
    <div className="w-1 h-full rounded-t-full relative flex flex-col justify-end">
      <div 
        className="bg-gradient-to-t rounded-t-full w-full transition-all duration-300 ease-in-out"
        style={{ 
          height: `${height}%`,
          background: `linear-gradient(to top, ${color}, ${color}CC)`,
          boxShadow: `0 0 8px ${color}99`,
          animationDelay: `${delay}s`,
          animation: `equalizer 1.5s ease-in-out infinite alternate`
        }}
      ></div>
    </div>
  );
};

// Musical note that floats up and fades out
const MusicalNote = ({ type, left, delay }) => {
  const notes = {
    eighth: '♪',
    quarter: '♩',
    eighth_pair: '♫',
    sixteenth_pair: '♬',
  };

  return (
    <div 
      className="absolute text-xl opacity-0 animate-float-note"
      style={{ 
        left: `${left}%`,
        bottom: '20%',
        animationDelay: `${delay}s`,
        color: '#f59e0b'
      }}
    >
      {notes[type]}
    </div>
  );
};

// Vinyl record component for digit display
const VinylDigit = ({ digit }) => {
  // Create equalizer bars based on the digit value
  const bars = [];
  const digitValue = parseInt(digit, 10);
  
  // Number of bars in the equalizer
  const barCount = 5;
  
  for (let i = 0; i < barCount; i++) {
    // Calculate height based on digit and position
    // This creates a pattern dependent on the digit
    const height = 30 + ((digitValue * (i + 1)) % 7) * 10;
    bars.push(
      <EqualizerBar 
        key={i} 
        height={height}
        delay={i * 0.15}
        color={i % 2 === 0 ? "#3b82f6" : "#8b5cf6"}
      />
    );
  }

  // Create floating musical notes
  const notes = [];
  for (let i = 0; i < 2; i++) {
    const noteTypes = ['eighth', 'quarter', 'eighth_pair', 'sixteenth_pair'];
    notes.push(
      <MusicalNote 
        key={i}
        type={noteTypes[(digitValue + i) % 4]}
        left={20 + i * 60}
        delay={i * 0.5 + 0.2}
      />
    );
  }

  return (
    <div className="relative w-16 h-24 bg-gray-900 rounded-lg overflow-hidden">
      {/* Vinyl record look */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center">
          {/* Vinyl grooves */}
          <div className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center">
            <div className="w-9 h-9 border border-gray-700 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 border border-gray-700 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* The digit displayed in the center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-3xl font-bold text-white">{digit}</div>
      </div>
      
      {/* Equalizer at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-6 px-2 flex space-x-1 items-end">
        {bars}
      </div>
      
      {/* Floating musical notes */}
      {notes}
      
      {/* Reflective overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none"></div>
    </div>
  );
};

const Clock_66 = () => {
  const [time, setTime] = useState(new Date());
  const [beatCount, setBeatCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    // Metronome beat effect
    const beatTimer = setInterval(() => {
      setBeatCount(prev => (prev + 1) % 4);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(beatTimer);
    };
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl shadow-2xl border border-blue-500/20 relative overflow-hidden">
      {/* Background texture - sound waves */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, transparent 10%, #3b82f6 11%, transparent 11.5%)`,
          backgroundSize: '20px 20px',
        }}
      ></div>
      
      {/* Main display */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="text-sm font-mono text-blue-400 mb-4 tracking-widest">RHYTHM TIMEKEEPER</div>
        
        {/* Metronome indicator */}
        <div className="flex space-x-2 mb-6">
          {[0, 1, 2, 3].map(i => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full ${i === beatCount ? 'bg-red-500' : 'bg-gray-600'}`}
            ></div>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <VinylDigit digit={hours[0]} />
            <VinylDigit digit={hours[1]} />
          </div>
          
          <div className="flex flex-col items-center justify-center h-24 text-blue-400">
            <div className="w-2 h-2 rounded-full bg-blue-400 mb-2"></div>
            <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
          </div>
          
          <div className="flex space-x-2">
            <VinylDigit digit={minutes[0]} />
            <VinylDigit digit={minutes[1]} />
          </div>
          
          <div className="flex flex-col items-center justify-center h-24 text-blue-400">
            <div className="w-2 h-2 rounded-full bg-blue-400 mb-2"></div>
            <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
          </div>
          
          <div className="flex space-x-2">
            <VinylDigit digit={seconds[0]} />
            <VinylDigit digit={seconds[1]} />
          </div>
        </div>
        
        {/* BPM indicator */}
        <div className="mt-4 bg-gray-800 rounded px-3 py-1 text-xs font-mono text-blue-400">
          120 BPM
        </div>
      </div>
    </div>
  );
};

export default Clock_66;

// Add to globals.css:
/*
@keyframes equalizer {
  0% { height: var(--min-height, 30%); }
  100% { height: var(--max-height, 100%); }
}

@keyframes float-note {
  0% { transform: translateY(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-100px); opacity: 0; }
}
*/ 