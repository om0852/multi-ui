'use client';
import React, { useState, useEffect } from 'react';

// LED segment display for digits
const LedDigit = ({ digit, prevDigit }) => {
  const [isChanging, setIsChanging] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsChanging(true);
      const timer = setTimeout(() => setIsChanging(false), 200);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);
  
  // Define LED segments (which segments are active for each digit 0-9)
  const segmentsMap = {
    '0': [true, true, true, false, true, true, true],
    '1': [false, false, true, false, false, true, false],
    '2': [true, false, true, true, true, false, true],
    '3': [true, false, true, true, false, true, true],
    '4': [false, true, true, true, false, true, false],
    '5': [true, true, false, true, false, true, true],
    '6': [true, true, false, true, true, true, true],
    '7': [true, false, true, false, false, true, false],
    '8': [true, true, true, true, true, true, true],
    '9': [true, true, true, true, false, true, true],
  };
  
  const segments = segmentsMap[digit] || [false, false, false, false, false, false, false];
  
  return (
    <div className="relative w-16 h-28 mx-1">
      {/* Digit background */}
      <div className="absolute inset-0 bg-gray-900 rounded-sm"></div>
      
      {/* LED segments */}
      <div className="absolute inset-2">
        {/* Segment A (top horizontal) */}
        <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-2 rounded-sm 
                     ${segments[0] ? 'bg-red-600 shadow-[0_0_5px_rgba(239,68,68,0.7)]' : 'bg-red-900'} 
                     transition-colors duration-200 ${isChanging ? 'animate-[ledBlink_0.2s]' : ''}`}></div>
        
        {/* Segment B (top right vertical) */}
        <div className={`absolute top-1 right-0 transform h-10 w-2 rounded-sm 
                     ${segments[1] ? 'bg-red-600 shadow-[0_0_5px_rgba(239,68,68,0.7)]' : 'bg-red-900'} 
                     transition-colors duration-200 ${isChanging ? 'animate-[ledBlink_0.2s]' : ''}`}></div>
        
        {/* Segment C (bottom right vertical) */}
        <div className={`absolute bottom-1 right-0 transform h-10 w-2 rounded-sm 
                     ${segments[2] ? 'bg-red-600 shadow-[0_0_5px_rgba(239,68,68,0.7)]' : 'bg-red-900'} 
                     transition-colors duration-200 ${isChanging ? 'animate-[ledBlink_0.2s]' : ''}`}></div>
        
        {/* Segment D (bottom horizontal) */}
        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-2 rounded-sm 
                     ${segments[3] ? 'bg-red-600 shadow-[0_0_5px_rgba(239,68,68,0.7)]' : 'bg-red-900'} 
                     transition-colors duration-200 ${isChanging ? 'animate-[ledBlink_0.2s]' : ''}`}></div>
        
        {/* Segment E (bottom left vertical) */}
        <div className={`absolute bottom-1 left-0 transform h-10 w-2 rounded-sm 
                     ${segments[4] ? 'bg-red-600 shadow-[0_0_5px_rgba(239,68,68,0.7)]' : 'bg-red-900'} 
                     transition-colors duration-200 ${isChanging ? 'animate-[ledBlink_0.2s]' : ''}`}></div>
        
        {/* Segment F (top left vertical) */}
        <div className={`absolute top-1 left-0 transform h-10 w-2 rounded-sm 
                     ${segments[5] ? 'bg-red-600 shadow-[0_0_5px_rgba(239,68,68,0.7)]' : 'bg-red-900'} 
                     transition-colors duration-200 ${isChanging ? 'animate-[ledBlink_0.2s]' : ''}`}></div>
        
        {/* Segment G (middle horizontal) */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-2 rounded-sm 
                     ${segments[6] ? 'bg-red-600 shadow-[0_0_5px_rgba(239,68,68,0.7)]' : 'bg-red-900'} 
                     transition-colors duration-200 ${isChanging ? 'animate-[ledBlink_0.2s]' : ''}`}></div>
      </div>
    </div>
  );
};

// Separator between digit groups
const ScoreboardSeparator = ({ blinking = false }) => {
  return (
    <div className="relative h-28 flex flex-col items-center justify-center space-y-4 mx-1">
      <div className={`w-2 h-2 rounded-full 
                    ${blinking ? 'bg-red-600 shadow-[0_0_5px_rgba(239,68,68,0.7)] animate-[scoreSepBlink_1s_infinite]' : 'bg-red-600 shadow-[0_0_5px_rgba(239,68,68,0.7)]'}`}></div>
      <div className={`w-2 h-2 rounded-full 
                    ${blinking ? 'bg-red-600 shadow-[0_0_5px_rgba(239,68,68,0.7)] animate-[scoreSepBlink_1s_infinite_0.5s]' : 'bg-red-600 shadow-[0_0_5px_rgba(239,68,68,0.7)]'}`}></div>
    </div>
  );
};

// Team display with team name and score
const TeamDisplay = ({ name, score, isHome = false }) => {
  return (
    <div className={`flex flex-col items-${isHome ? 'end' : 'start'} rounded px-4 py-2 bg-gray-800 text-white`}>
      <div className="text-sm font-bold uppercase tracking-wider mb-1">{name}</div>
      <div className="text-3xl font-bold text-red-500">{score}</div>
    </div>
  );
};

// Period display
const PeriodDisplay = ({ period }) => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-2 bg-gray-800 text-white rounded">
      <div className="text-xs uppercase tracking-wider mb-1">Period</div>
      <div className="text-2xl font-bold text-red-500">{period}</div>
    </div>
  );
};

// Creates random scores for the teams
const generateRandomScores = () => {
  // Teams are more likely to have scores under 10
  const homeScore = Math.floor(Math.random() * 15);
  const awayScore = Math.floor(Math.random() * 15);
  return { home: homeScore, away: awayScore };
};

// Main scoreboard component
const Clock_87 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());
  const [scores, setScores] = useState({ home: 7, away: 3 });
  const [period, setPeriod] = useState(2);
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
      
      // Occasionally update scores and period for effect
      if (Math.random() > 0.95) {
        setScores(generateRandomScores());
        setPeriod(Math.floor(Math.random() * 4) + 1);
        
        // Show message
        const messages = ["TOUCHDOWN!", "GOAL!", "SCORE!", "INTERCEPTION!", "HOME RUN!"];
        setMessage(messages[Math.floor(Math.random() * messages.length)]);
        setTimeout(() => setMessage(""), 3000);
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
  
  // Format date like game day
  const gameDay = time.toLocaleDateString('en-US', { 
    weekday: 'short',
    month: 'short', 
    day: 'numeric',
    year: 'numeric' 
  });
  
  return (
    <div className="relative bg-gray-700 p-8 rounded-lg shadow-xl border-t-8 border-gray-900 overflow-hidden">
      {/* Stadium background noise texture */}
      <div className="absolute inset-0 bg-gray-800 opacity-20" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      {/* Scoreboard header */}
      <div className="flex justify-between items-center mb-6 relative z-10">
        <TeamDisplay name="VISITORS" score={scores.away} />
        <PeriodDisplay period={period} />
        <TeamDisplay name="HOME" score={scores.home} isHome={true} />
      </div>
      
      {/* Message banner (appears when scores change) */}
      {message && (
        <div className="text-center mb-6 py-2 bg-red-600 text-white text-lg font-bold rounded animate-[messageFlash_0.5s_infinite]">
          {message}
        </div>
      )}
      
      {/* Clock display */}
      <div className="bg-black p-4 rounded-lg shadow-inner mb-6">
        <div className="flex justify-center items-center">
          {/* Hours */}
          <div className="flex">
            <LedDigit digit={hours[0]} prevDigit={prevHours[0]} />
            <LedDigit digit={hours[1]} prevDigit={prevHours[1]} />
          </div>
          
          <ScoreboardSeparator blinking={true} />
          
          {/* Minutes */}
          <div className="flex">
            <LedDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
            <LedDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
          </div>
          
          <ScoreboardSeparator blinking={seconds % 2 === 0} />
          
          {/* Seconds */}
          <div className="flex">
            <LedDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
            <LedDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
          </div>
        </div>
      </div>
      
      {/* Scoreboard footer */}
      <div className="flex justify-between items-center text-white text-sm relative z-10">
        <div className="bg-gray-800 px-3 py-1 rounded text-xs">GAME DAY: {gameDay}</div>
        
        <div className="flex space-x-2">
          <div className="bg-red-600 animate-pulse w-2 h-2 rounded-full"></div>
          <div className="text-xs">LIVE</div>
        </div>
        
        <div className="bg-gray-800 px-3 py-1 rounded text-xs">ARENA TIME</div>
      </div>
      
      {/* Stadium audience/crowd effect */}
      <div className="absolute -bottom-4 left-0 right-0 h-16">
        {Array.from({ length: 60 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bottom-0 bg-gray-800 rounded-t-full"
            style={{
              left: `${(i / 60) * 100}%`,
              width: '10px',
              height: `${5 + Math.random() * 12}px`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Clock_87;

// Add these keyframes to your globals.css:
/*
@keyframes ledBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes scoreSepBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

@keyframes messageFlash {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}
*/ 