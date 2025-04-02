'use client';
import React, { useEffect, useState } from 'react';

// Component for a single LED segment in the 7-segment display
const LEDSegment = ({ active, position }) => {
  // Define segment positions and orientations
  const segmentStyles = {
    top: "absolute top-0 left-1/2 -translate-x-1/2 h-1 w-5 rounded-full",
    topRight: "absolute top-0 right-0 h-5 w-1 rounded-full",
    bottomRight: "absolute bottom-0 right-0 h-5 w-1 rounded-full",
    bottom: "absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-5 rounded-full",
    bottomLeft: "absolute bottom-0 left-0 h-5 w-1 rounded-full",
    topLeft: "absolute top-0 left-0 h-5 w-1 rounded-full",
    middle: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1 w-5 rounded-full"
  };

  return (
    <div 
      className={`${segmentStyles[position]} transition-colors duration-150 ${
        active ? 'bg-red-500 shadow-[0_0_5px_#ef4444]' : 'bg-red-900/30'
      }`}
    ></div>
  );
};

// Component for a full 7-segment digit
const CircuitDigit = ({ digit }) => {
  // Define which segments are active for each digit 0-9
  const digitPatterns = {
    '0': [true, true, true, true, true, true, false],
    '1': [false, true, true, false, false, false, false],
    '2': [true, true, false, true, true, false, true],
    '3': [true, true, true, true, false, false, true],
    '4': [false, true, true, false, false, true, true],
    '5': [true, false, true, true, false, true, true],
    '6': [true, false, true, true, true, true, true],
    '7': [true, true, true, false, false, false, false],
    '8': [true, true, true, true, true, true, true],
    '9': [true, true, true, true, false, true, true]
  };

  const segments = digitPatterns[digit] || digitPatterns['0'];
  const segmentPositions = ['top', 'topRight', 'bottomRight', 'bottom', 'bottomLeft', 'topLeft', 'middle'];

  return (
    <div className="relative w-12 h-20 bg-gray-900 rounded-md border border-gray-800">
      {/* Circuit traces background */}
      <div className="absolute inset-0 opacity-20"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm2 2v16h16V2H2z' fill='%23047857' fill-opacity='0.5' fill-rule='evenodd'/%3E%3C/svg%3E"), linear-gradient(to right, transparent 4px, rgba(4, 120, 87, 0.1) 1px, transparent 1px), linear-gradient(to bottom, transparent 4px, rgba(4, 120, 87, 0.1) 1px, transparent 1px)`,
             backgroundSize: '8px 8px, 5px 5px, 5px 5px'
           }}>
      </div>
      
      {/* Render all 7 segments */}
      {segmentPositions.map((position, index) => (
        <LEDSegment key={position} active={segments[index]} position={position} />
      ))}
      
      {/* Circuit components */}
      <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-gray-700"></div>
      <div className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-gray-700"></div>
      <div className="absolute w-3 h-1.5 bg-emerald-900 right-3 bottom-3 rounded-sm"></div>
    </div>
  );
};

const Clock_60 = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="bg-gray-950 p-8 rounded-xl shadow-2xl border border-gray-800 relative">
      {/* PCB texture */}
      <div className="absolute inset-0 rounded-xl overflow-hidden"
           style={{
             backgroundImage: `radial-gradient(#042f2e 1px, transparent 1px), linear-gradient(to right, transparent 19px, #042f2e 1px, transparent 20px), linear-gradient(to bottom, transparent 19px, #042f2e 1px, transparent 20px)`,
             backgroundSize: '20px 20px, 20px 20px, 20px 20px',
             backgroundPosition: '0 0, 0 0, 0 0',
             opacity: 0.4
           }}>
      </div>
      
      {/* Circuit traces */}
      <div className="absolute h-1 bg-emerald-800/50 left-16 right-16 top-1/2 -translate-y-1/2"></div>
      
      {/* Component mounting holes */}
      <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-gray-800 border border-gray-700"></div>
      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gray-800 border border-gray-700"></div>
      <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-gray-800 border border-gray-700"></div>
      <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-gray-800 border border-gray-700"></div>
      
      <div className="flex items-center space-x-4">
        <div className="flex space-x-1">
          <CircuitDigit digit={hours[0]} />
          <CircuitDigit digit={hours[1]} />
        </div>
        
        {/* Blinking dots separator */}
        <div className="flex flex-col justify-center space-y-3">
          <div className={`w-2 h-2 rounded-full ${time.getSeconds() % 2 === 0 ? 'bg-red-500 shadow-[0_0_5px_#ef4444]' : 'bg-red-900/30'}`}></div>
          <div className={`w-2 h-2 rounded-full ${time.getSeconds() % 2 === 0 ? 'bg-red-500 shadow-[0_0_5px_#ef4444]' : 'bg-red-900/30'}`}></div>
        </div>
        
        <div className="flex space-x-1">
          <CircuitDigit digit={minutes[0]} />
          <CircuitDigit digit={minutes[1]} />
        </div>
        
        {/* Blinking dots separator */}
        <div className="flex flex-col justify-center space-y-3">
          <div className={`w-2 h-2 rounded-full ${time.getSeconds() % 2 === 0 ? 'bg-red-500 shadow-[0_0_5px_#ef4444]' : 'bg-red-900/30'}`}></div>
          <div className={`w-2 h-2 rounded-full ${time.getSeconds() % 2 === 0 ? 'bg-red-500 shadow-[0_0_5px_#ef4444]' : 'bg-red-900/30'}`}></div>
        </div>
        
        <div className="flex space-x-1">
          <CircuitDigit digit={seconds[0]} />
          <CircuitDigit digit={seconds[1]} />
        </div>
      </div>
      
      {/* Label text */}
      <div className="absolute bottom-2 right-4 text-[0.6rem] font-mono text-emerald-500/80 tracking-wider">
        PCB-REV 60.1
      </div>
    </div>
  );
};

export default Clock_60; 