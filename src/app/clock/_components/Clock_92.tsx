'use client';
import React, { useEffect, useState } from 'react';

const gasDischargeAnimationKeyframes = `
  @keyframes plasmaGlow {
    0%, 100% { filter: brightness(1) blur(0.5px); }
    50% { filter: brightness(0.8) blur(1px); }
  }
  @keyframes ionization {
    0% { opacity: 0; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1); }
  }
`;

const GasDischargeDigit = ({ value }: { value: string }) => {
  const [isIonizing, setIsIonizing] = useState(false);

  useEffect(() => {
    setIsIonizing(true);
    const timer = setTimeout(() => setIsIonizing(false), 150);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div style={{
      position: 'relative',
      width: '60px',
      height: '100px',
      background: '#000',
      border: '2px solid #222',
      borderRadius: '4px',
      padding: '4px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '5rem',
      fontFamily: 'monospace',
      color: '#ff3800',
      textShadow: '0 0 10px #ff3800, 0 0 20px #ff3800',
      animation: isIonizing ? 'ionization 0.15s ease-out' : 'plasmaGlow 2s ease-in-out infinite',
    }}>
      {value}
      
      {/* Plasma effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(255, 56, 0, 0.1) 0%, transparent 70%)',
        opacity: 0.2,
        pointerEvents: 'none',
      }} />
    </div>
  );
};

const Clock_92 = () => {
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
    <div style={{
      position: 'relative',
      background: '#1a1a1a',
      padding: '4rem',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(255, 56, 0, 0.1)',
      border: '4px solid #333',
    }}>
      <style>{gasDischargeAnimationKeyframes}</style>

      {/* Display panel */}
      <div style={{
        position: 'relative',
        background: '#000',
        padding: '30px',
        borderRadius: '10px',
        border: '2px solid #333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <GasDischargeDigit value={hours[0]} />
          <GasDischargeDigit value={hours[1]} />
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
                width: '8px',
                height: '8px',
                background: time.getSeconds() % 2 === 0 ? '#ff3800' : '#1a0f0d',
                borderRadius: '50%',
                boxShadow: time.getSeconds() % 2 === 0
                  ? '0 0 10px #ff3800, 0 0 20px #ff3800'
                  : 'none',
                transition: 'all 0.15s ease-in-out',
                animation: 'plasmaGlow 2s ease-in-out infinite',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <GasDischargeDigit value={minutes[0]} />
          <GasDischargeDigit value={minutes[1]} />
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
                width: '8px',
                height: '8px',
                background: time.getSeconds() % 2 === 0 ? '#ff3800' : '#1a0f0d',
                borderRadius: '50%',
                boxShadow: time.getSeconds() % 2 === 0
                  ? '0 0 10px #ff3800, 0 0 20px #ff3800'
                  : 'none',
                transition: 'all 0.15s ease-in-out',
                animation: 'plasmaGlow 2s ease-in-out infinite',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <GasDischargeDigit value={seconds[0]} />
          <GasDischargeDigit value={seconds[1]} />
        </div>
      </div>

      {/* Manufacturer plate */}
      <div style={{
        position: 'absolute',
        bottom: '15px',
        right: '20px',
        background: '#222',
        padding: '4px 8px',
        borderRadius: '4px',
        border: '1px solid #444',
        color: '#ff3800',
        fontSize: '0.8rem',
        fontFamily: 'monospace',
        letterSpacing: '1px',
        textShadow: '0 0 5px #ff3800',
      }}>
        PLASMA-92
      </div>
    </div>
  );
};

export default Clock_92; 