'use client';
import React, { useEffect, useState } from 'react';

// Define pixel arrays for each digit (5x7 grid)
const pixelDigits = {
  '0': [
    '11111',
    '10001',
    '10001',
    '10001',
    '10001',
    '10001',
    '11111'
  ],
  '1': [
    '00100',
    '01100',
    '00100',
    '00100',
    '00100',
    '00100',
    '01110'
  ],
  '2': [
    '11111',
    '00001',
    '00001',
    '11111',
    '10000',
    '10000',
    '11111'
  ],
  '3': [
    '11111',
    '00001',
    '00001',
    '11111',
    '00001',
    '00001',
    '11111'
  ],
  '4': [
    '10001',
    '10001',
    '10001',
    '11111',
    '00001',
    '00001',
    '00001'
  ],
  '5': [
    '11111',
    '10000',
    '10000',
    '11111',
    '00001',
    '00001',
    '11111'
  ],
  '6': [
    '11111',
    '10000',
    '10000',
    '11111',
    '10001',
    '10001',
    '11111'
  ],
  '7': [
    '11111',
    '00001',
    '00001',
    '00010',
    '00100',
    '00100',
    '00100'
  ],
  '8': [
    '11111',
    '10001',
    '10001',
    '11111',
    '10001',
    '10001',
    '11111'
  ],
  '9': [
    '11111',
    '10001',
    '10001',
    '11111',
    '00001',
    '00001',
    '11111'
  ]
};

// Arcade pixel digit component
const ArcadeDigit = ({ digit, color = 'text-pink-500' }) => {
  // Get pixel pattern for this digit
  const pixelPattern = pixelDigits[digit] || pixelDigits['0'];
  
  return (
    <div className="relative w-12 h-20">
      {/* CRT screen effect */}
      <div className="absolute inset-0 bg-gray-900 rounded-sm overflow-hidden shadow-lg border border-gray-800">
        {/* Scanline effect */}
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="h-0.5 w-full bg-black opacity-30 my-1"
              style={{ marginTop: `${i * 5}px` }}
            ></div>
          ))}
        </div>
        
        {/* Digit pixels */}
        <div className="relative z-10 grid grid-rows-7 gap-0.5 h-full p-1">
          {pixelPattern.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-0.5">
              {row.split('').map((cell, cellIndex) => (
                <div 
                  key={cellIndex} 
                  className={`flex-1 ${cell === '1' ? color : 'bg-transparent'}`}
                  style={{
                    boxShadow: cell === '1' ? `0 0 4px ${color.replace('text-', 'var(--color-')}` : 'none'
                  }}
                ></div>
              ))}
            </div>
          ))}
        </div>
        
        {/* CRT reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

// Separator component
const Separator = () => (
  <div className="h-20 flex flex-col justify-center items-center space-y-3">
    <div className="w-2 h-2 bg-blue-500 rounded-sm shadow-[0_0_5px_#3b82f6]"></div>
    <div className="w-2 h-2 bg-blue-500 rounded-sm shadow-[0_0_5px_#3b82f6]"></div>
  </div>
);

// Blinking "Insert Coin" text
const InsertCoin = () => {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(v => !v);
    }, 800);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={`text-yellow-400 text-sm font-bold tracking-wide transition-opacity ${
      visible ? 'opacity-100' : 'opacity-0'
    }`}>
      INSERT COIN
    </div>
  );
};

const Clock_73 = () => {
  const [time, setTime] = useState(new Date());
  const [score, setScore] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      // Increase "score" by random amount between 50-150
      setScore(prevScore => prevScore + Math.floor(Math.random() * 100) + 50);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="bg-black p-10 rounded-xl border-4 border-gray-800 shadow-[0_0_15px_rgba(31,41,55,0.5)] relative overflow-hidden">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px"
        }}
      ></div>
      
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500">
          RETRO TIME ATTACK
        </h1>
      </div>
      
      {/* Scoreboard */}
      <div className="bg-gray-900 border-2 border-blue-900 rounded-md p-2 flex justify-between items-center mb-8">
        <div className="text-blue-500 font-bold">PLAYER 1</div>
        <div className="text-white font-mono text-lg">{score.toString().padStart(8, '0')}</div>
      </div>
      
      {/* Main clock display */}
      <div className="bg-gray-900 border-2 border-gray-800 rounded-md p-6 shadow-inner">
        <div className="flex justify-center items-center space-x-2">
          {/* Hours */}
          <ArcadeDigit digit={hours[0]} color="bg-pink-500" />
          <ArcadeDigit digit={hours[1]} color="bg-pink-500" />
          
          <Separator />
          
          {/* Minutes */}
          <ArcadeDigit digit={minutes[0]} color="bg-blue-500" />
          <ArcadeDigit digit={minutes[1]} color="bg-blue-500" />
          
          <Separator />
          
          {/* Seconds */}
          <ArcadeDigit digit={seconds[0]} color="bg-green-500" />
          <ArcadeDigit digit={seconds[1]} color="bg-green-500" />
        </div>
      </div>
      
      {/* Game controls */}
      <div className="flex justify-between items-center mt-8">
        <div className="text-xs text-gray-500">LEVEL: {hours}</div>
        <InsertCoin />
        <div className="text-xs text-gray-500">LIVES: 3</div>
      </div>
      
      {/* CRT screen flicker effect */}
      <div 
        className="absolute inset-0 pointer-events-none bg-white opacity-0 animate-[flicker_0.2s_infinite]"
        style={{
          animationDuration: '0.2s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'steps(1)',
          animationPlayState: 'paused',
          animationPlayState: Math.random() > 0.995 ? 'running' : 'paused'
        }}
      ></div>
    </div>
  );
};

export default Clock_73;

// Add to globals.css:
/*
@keyframes flicker {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.02; }
}
*/ 