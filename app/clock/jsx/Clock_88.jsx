'use client';
import React, { useState, useEffect } from 'react';

// Pixel digit component that displays a number in pixel art style
const PixelDigit = ({ digit, prevDigit }) => {
  const [isChanging, setIsChanging] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsChanging(true);
      const timer = setTimeout(() => setIsChanging(false), 300);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);
  
  // Pixel layouts for each digit (0-9)
  const pixelLayouts = {
    '0': [
      [1, 1, 1],
      [1, 0, 1],
      [1, 0, 1],
      [1, 0, 1],
      [1, 1, 1]
    ],
    '1': [
      [0, 1, 0],
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 1]
    ],
    '2': [
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1],
      [1, 0, 0],
      [1, 1, 1]
    ],
    '3': [
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1]
    ],
    '4': [
      [1, 0, 1],
      [1, 0, 1],
      [1, 1, 1],
      [0, 0, 1],
      [0, 0, 1]
    ],
    '5': [
      [1, 1, 1],
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1]
    ],
    '6': [
      [1, 1, 1],
      [1, 0, 0],
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1]
    ],
    '7': [
      [1, 1, 1],
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
      [1, 0, 0]
    ],
    '8': [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1]
    ],
    '9': [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
      [0, 0, 1],
      [1, 1, 1]
    ]
  };
  
  const pixels = pixelLayouts[digit] || pixelLayouts['0'];
  
  return (
    <div className={`grid grid-cols-3 gap-1 mr-2 ${isChanging ? 'animate-[pixelChange_0.3s]' : ''}`}>
      {pixels.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((pixel, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-4 h-4 ${pixel 
                ? 'bg-green-500' 
                : 'bg-green-900 bg-opacity-20'}`}
              style={{ boxShadow: pixel ? '0 0 5px rgba(74, 222, 128, 0.7)' : 'none' }}
            ></div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

// Game character that moves around the clock
const GameCharacter = ({ position }) => {
  // Different frames for animation
  const frames = [
    { body: '◖', className: 'transform rotate-0' },
    { body: '◗', className: 'transform rotate-0' }
  ];
  
  const [frame, setFrame] = useState(0);
  
  useEffect(() => {
    const animInterval = setInterval(() => {
      setFrame((prev) => (prev + 1) % frames.length);
    }, 300);
    
    return () => clearInterval(animInterval);
  }, []);
  
  return (
    <div 
      className={`absolute text
      -lg font-bold text-yellow-400 ${frames[frame].className} animate-[bounce_2s_infinite]`}
      style={{ 
        top: `${position.y}%`, 
        left: `${position.x}%`,
        textShadow: '0 0 5px rgba(234, 179, 8, 0.7)'
      }}
    >
      {frames[frame].body}
    </div>
  );
};

// Pac-man style separator
const GameSeparator = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setIsOpen(prev => !prev);
    }, 500);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="flex flex-col justify-center items-center mx-2 h-full">
      <div className="text-2xl text-yellow-400" style={{ textShadow: '0 0 5px rgba(234, 179, 8, 0.7)' }}>
        {isOpen ? 'ᗧ' : '•'}
      </div>
    </div>
  );
};

// Coin that can be collected
const Coin = ({ position, isCollected, onCollect }) => {
  return (
    <div 
      className={`absolute w-3 h-3 rounded-full ${isCollected ? 'opacity-0' : 'bg-yellow-400 animate-[pulse_1s_infinite]'}`}
      style={{ 
        top: `${position.y}%`, 
        left: `${position.x}%`,
        boxShadow: '0 0 5px rgba(234, 179, 8, 0.7)',
        transition: 'opacity 0.3s'
      }}
      onClick={onCollect}
    ></div>
  );
};

// Enemy character
const Enemy = ({ position }) => {
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
  
  useEffect(() => {
    const moveInterval = setInterval(() => {
      if (position.x > 90) setDirection(-1);
      if (position.x < 10) setDirection(1);
      position.x += direction * 2;
    }, 200);
    
    return () => clearInterval(moveInterval);
  }, [direction, position]);
  
  return (
    <div 
      className="absolute text-red-500 text-lg"
      style={{ 
        top: `${position.y}%`, 
        left: `${position.x}%`,
        textShadow: '0 0 5px rgba(239, 68, 68, 0.7)'
      }}
    >
      ᗣ
    </div>
  );
};

// Game HUD displays scores and lives
const GameHUD = ({ score, lives }) => {
  return (
    <div className="flex justify-between mb-4 text-green-500 font-bold">
      <div>SCORE: {score.toString().padStart(5, '0')}</div>
      <div>
        LIVES: {Array.from({ length: lives }).map((_, i) => (
          <span key={i} className="text-yellow-400 ml-1">♥</span>
        ))}
      </div>
    </div>
  );
};

// Main clock component with retro game theme
const Clock_88 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [playerPosition, setPlayerPosition] = useState({ x: 20, y: 80 });
  const [enemyPosition, setEnemyPosition] = useState({ x: 80, y: 80 });
  
  // Generate 5 random coin positions
  const [coins, setCoins] = useState(
    Array.from({ length: 5 }, (_, i) => ({
      id: i,
      position: {
        x: 10 + Math.random() * 80,
        y: 20 + Math.random() * 60
      },
      collected: false
    }))
  );
  
  // Handle coin collection
  const collectCoin = (id) => {
    setCoins(coins.map(coin => 
      coin.id === id ? { ...coin, collected: true } : coin
    ));
    setScore(prevScore => prevScore + 100);
  };
  
  // Update player position on key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch(e.key) {
        case 'ArrowUp':
          setPlayerPosition(prev => ({ ...prev, y: Math.max(prev.y - 5, 0) }));
          break;
        case 'ArrowDown':
          setPlayerPosition(prev => ({ ...prev, y: Math.min(prev.y + 5, 95) }));
          break;
        case 'ArrowLeft':
          setPlayerPosition(prev => ({ ...prev, x: Math.max(prev.x - 5, 0) }));
          break;
        case 'ArrowRight':
          setPlayerPosition(prev => ({ ...prev, x: Math.min(prev.x + 5, 95) }));
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  // Clock timer
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
      
      // Occasionally increase score
      if (Math.random() > 0.7) {
        setScore(prevScore => prevScore + 10);
      }
      
      // Check for collisions with coins
      coins.forEach(coin => {
        if (!coin.collected && 
            Math.abs(playerPosition.x - coin.position.x) < 5 &&
            Math.abs(playerPosition.y - coin.position.y) < 5) {
          collectCoin(coin.id);
        }
      });
      
      // Check for collision with enemy
      if (Math.abs(playerPosition.x - enemyPosition.x) < 5 &&
          Math.abs(playerPosition.y - enemyPosition.y) < 5) {
        if (lives > 0) {
          setLives(prevLives => prevLives - 1);
          // Reset player position
          setPlayerPosition({ x: 20, y: 80 });
        }
      }
      
      // Regenerate coins if all collected
      if (coins.every(coin => coin.collected)) {
        setCoins(
          Array.from({ length: 5 }, (_, i) => ({
            id: i,
            position: {
              x: 10 + Math.random() * 80,
              y: 20 + Math.random() * 60
            },
            collected: false
          }))
        );
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [time, coins, playerPosition, enemyPosition, lives]);
  
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  
  const prevHours = prevTime.getHours().toString().padStart(2, '0');
  const prevMinutes = prevTime.getMinutes().toString().padStart(2, '0');
  const prevSeconds = prevTime.getSeconds().toString().padStart(2, '0');
  
  // Game date display
  const gameDate = time.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
  
  return (
    <div className="relative bg-black border-4 border-green-500 p-6 rounded-lg shadow-lg overflow-hidden" 
         style={{ boxShadow: '0 0 20px rgba(74, 222, 128, 0.4)' }}>
      {/* Game grid background */}
      <div className="absolute inset-0 bg-opacity-10 pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(74, 222, 128, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(74, 222, 128, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      {/* Game HUD */}
      <GameHUD score={score} lives={lives} />
      
      {/* Title */}
      <div className="text-center text-green-500 text-xl font-bold mb-6 tracking-widest">
        CHRONOQUEST-88
      </div>
      
      {/* Clock display */}
      <div className="bg-black border-2 border-green-500 p-4 rounded mb-6">
        <div className="flex justify-center items-start">
          {/* Hours */}
          <div className="flex">
            <PixelDigit digit={hours[0]} prevDigit={prevHours[0]} />
            <PixelDigit digit={hours[1]} prevDigit={prevHours[1]} />
          </div>
          
          <GameSeparator />
          
          {/* Minutes */}
          <div className="flex">
            <PixelDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
            <PixelDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
          </div>
          
          <GameSeparator />
          
          {/* Seconds */}
          <div className="flex">
            <PixelDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
            <PixelDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
          </div>
        </div>
      </div>
      
      {/* Game area */}
      <div className="relative h-40 border-2 border-green-500 mb-4 rounded">
        {/* Game character */}
        <GameCharacter position={playerPosition} />
        
        {/* Enemy */}
        <Enemy position={enemyPosition} />
        
        {/* Coins */}
        {coins.map(coin => (
          <Coin 
            key={coin.id} 
            position={coin.position} 
            isCollected={coin.collected}
            onCollect={() => collectCoin(coin.id)}
          />
        ))}
        
        {/* Game date display */}
        <div 
          className="absolute bottom-2 right-2 px-2 py-1 bg-black text-green-500 text-xs border border-green-500"
          style={{ fontFamily: 'monospace' }}
        >
          DATE: {gameDate}
        </div>
      </div>
      
      {/* Game controls help */}
      <div className="text-green-500 text-xs text-center">
        <div>USE ARROW KEYS TO MOVE - COLLECT COINS - AVOID ENEMIES</div>
        <div className="mt-2 text-green-500 opacity-70">INSERT COIN TO CONTINUE</div>
      </div>
    </div>
  );
};

export default Clock_88;

// Add these keyframes to your globals.css:
/*
@keyframes pixelChange {
  0% { transform: scale(1); filter: brightness(1); }
  50% { transform: scale(1.1); filter: brightness(1.5); }
  100% { transform: scale(1); filter: brightness(1); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
*/ 