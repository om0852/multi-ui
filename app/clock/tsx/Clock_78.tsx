'use client';
import React, { useEffect, useState } from 'react';

const arcadeAnimationKeyframes = `
  @keyframes marqueeGlow {
    0%, 100% { text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000; }
    50% { text-shadow: 0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000; }
  }
  @keyframes insertCoin {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  @keyframes cabinetLight {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  @keyframes scoreFlash {
    0%, 100% { color: #ffff00; }
    50% { color: #ffd700; }
  }
`;

const ArcadeDigit = ({ value }: { value: string }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 100);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div style={{
      position: 'relative',
      width: '80px',
      height: '120px',
      background: '#000',
      border: '4px solid #444',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: 'inset 0 0 20px rgba(255, 255, 0, 0.3)',
    }}>
      {/* LED segments effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '4rem',
        fontFamily: '"Press Start 2P", monospace',
        color: isAnimating ? '#ffd700' : '#ffff00',
        textShadow: '0 0 10px rgba(255, 255, 0, 0.5)',
        transition: 'color 0.1s ease-in-out',
      }}>
        {value}
      </div>
    </div>
  );
};

const Clock_78 = () => {
  const [time, setTime] = useState(new Date());
  const [credits, setCredits] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      // Randomly add credits for effect
      if (Math.random() < 0.01) {
        setCredits(prev => (prev + 1) % 10);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div style={{
      position: 'relative',
      background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)',
      padding: '4rem 3rem',
      borderRadius: '20px',
      boxShadow: '0 0 40px rgba(0,0,0,0.5)',
      border: '8px solid #333',
    }}>
      <style>{arcadeAnimationKeyframes}</style>

      {/* Arcade cabinet texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
        backgroundSize: '200% 200%',
        animation: 'cabinetLight 10s ease infinite',
      }} />

      {/* Marquee */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#ff0000',
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '1.2rem',
        letterSpacing: '2px',
        animation: 'marqueeGlow 2s ease-in-out infinite',
      }}>
        TIME CRISIS
      </div>

      {/* Main display */}
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '20px',
        padding: '20px',
        background: '#000',
        borderRadius: '10px',
        border: '4px solid #444',
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <ArcadeDigit value={hours[0]} />
          <ArcadeDigit value={hours[1]} />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {[0, 1].map(i => (
            <div
              key={i}
              style={{
                width: '12px',
                height: '12px',
                background: '#ffff00',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(255, 255, 0, 0.5)',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <ArcadeDigit value={minutes[0]} />
          <ArcadeDigit value={minutes[1]} />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {[0, 1].map(i => (
            <div
              key={i}
              style={{
                width: '12px',
                height: '12px',
                background: '#ffff00',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(255, 255, 0, 0.5)',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <ArcadeDigit value={seconds[0]} />
          <ArcadeDigit value={seconds[1]} />
        </div>
      </div>

      {/* High Score Display */}
      <div style={{
        position: 'absolute',
        top: '60px',
        right: '30px',
        color: '#ffff00',
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '0.8rem',
        animation: 'scoreFlash 2s ease-in-out infinite',
      }}>
        HI-SCORE
        <br />
        {Math.floor(time.getTime() / 1000).toString().padStart(8, '0')}
      </div>

      {/* Coin slot */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
      }}>
        <div style={{
          width: '40px',
          height: '30px',
          background: '#333',
          border: '2px solid #444',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.8rem',
          color: '#ffff00',
          fontFamily: '"Press Start 2P", monospace',
        }}>
          {credits}¢
        </div>
        <div style={{
          color: '#ffff00',
          fontFamily: '"Press Start 2P", monospace',
          fontSize: '0.8rem',
          animation: 'insertCoin 1s step-end infinite',
        }}>
          INSERT COIN
        </div>
      </div>

      {/* Control panel */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '30px',
        display: 'flex',
        gap: '10px',
      }}>
        {['1P', '2P'].map((btn, i) => (
          <div
            key={i}
            style={{
              width: '40px',
              height: '40px',
              background: '#ff0000',
              borderRadius: '50%',
              border: '4px solid #cc0000',
              boxShadow: 'inset 0 4px 8px rgba(255,255,255,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '0.8rem',
              fontFamily: '"Press Start 2P", monospace',
            }}
          >
            {btn}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clock_78; 