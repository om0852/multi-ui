'use client';
import React, { useEffect, useState } from 'react';

const matrixAnimationKeyframes = `
  @keyframes ledPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
  @keyframes ledOn {
    0% { opacity: 0; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1); }
  }
`;

// 5x7 LED matrix patterns for digits
const digitPatterns: { [key: string]: boolean[][] } = {
  '0': [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
  ].map(row => row.map(Boolean)),
  '1': [
    [0,0,1,0,0],
    [0,1,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,1,1,1,0],
  ].map(row => row.map(Boolean)),
  '2': [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [0,0,0,0,1],
    [0,0,1,1,0],
    [0,1,0,0,0],
    [1,0,0,0,0],
    [1,1,1,1,1],
  ].map(row => row.map(Boolean)),
  '3': [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [0,0,0,0,1],
    [0,0,1,1,0],
    [0,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
  ].map(row => row.map(Boolean)),
  '4': [
    [0,0,0,1,0],
    [0,0,1,1,0],
    [0,1,0,1,0],
    [1,0,0,1,0],
    [1,1,1,1,1],
    [0,0,0,1,0],
    [0,0,0,1,0],
  ].map(row => row.map(Boolean)),
  '5': [
    [1,1,1,1,1],
    [1,0,0,0,0],
    [1,1,1,1,0],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
  ].map(row => row.map(Boolean)),
  '6': [
    [0,1,1,1,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
  ].map(row => row.map(Boolean)),
  '7': [
    [1,1,1,1,1],
    [0,0,0,0,1],
    [0,0,0,1,0],
    [0,0,1,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
  ].map(row => row.map(Boolean)),
  '8': [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
  ].map(row => row.map(Boolean)),
  '9': [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,1],
    [0,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
  ].map(row => row.map(Boolean)),
};

const MatrixDigit = ({ value }: { value: string }) => {
  const [isChanging, setIsChanging] = useState(false);
  const pattern = digitPatterns[value] || digitPatterns['0'];

  useEffect(() => {
    setIsChanging(true);
    const timer = setTimeout(() => setIsChanging(false), 100);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div style={{
      position: 'relative',
      width: '50px',
      height: '70px',
      background: '#000',
      border: '2px solid #333',
      borderRadius: '4px',
      padding: '4px',
      display: 'grid',
      gridTemplateRows: 'repeat(7, 1fr)',
      gap: '1px',
    }}>
      {pattern.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1px' }}>
          {row.map((isOn, colIndex) => (
            <div
              key={colIndex}
              style={{
                width: '100%',
                height: '100%',
                background: isOn ? '#ff0000' : '#300000',
                borderRadius: '50%',
                boxShadow: isOn ? '0 0 4px #ff0000' : 'none',
                animation: isOn
                  ? isChanging
                    ? 'ledOn 0.1s ease-out'
                    : 'ledPulse 2s ease-in-out infinite'
                  : 'none',
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const Clock_93 = () => {
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
      boxShadow: '0 10px 30px rgba(255, 0, 0, 0.1)',
      border: '4px solid #333',
    }}>
      <style>{matrixAnimationKeyframes}</style>

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
        gap: '15px',
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <MatrixDigit value={hours[0]} />
          <MatrixDigit value={hours[1]} />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}>
          {[0, 1].map(i => (
            <div
              key={i}
              style={{
                width: '6px',
                height: '6px',
                background: time.getSeconds() % 2 === 0 ? '#ff0000' : '#300000',
                borderRadius: '50%',
                boxShadow: time.getSeconds() % 2 === 0 ? '0 0 4px #ff0000' : 'none',
                animation: 'ledPulse 2s ease-in-out infinite',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <MatrixDigit value={minutes[0]} />
          <MatrixDigit value={minutes[1]} />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}>
          {[0, 1].map(i => (
            <div
              key={i}
              style={{
                width: '6px',
                height: '6px',
                background: time.getSeconds() % 2 === 0 ? '#ff0000' : '#300000',
                borderRadius: '50%',
                boxShadow: time.getSeconds() % 2 === 0 ? '0 0 4px #ff0000' : 'none',
                animation: 'ledPulse 2s ease-in-out infinite',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <MatrixDigit value={seconds[0]} />
          <MatrixDigit value={seconds[1]} />
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
        color: '#ff0000',
        fontSize: '0.8rem',
        fontFamily: 'monospace',
        letterSpacing: '1px',
        textShadow: '0 0 5px #ff0000',
      }}>
        MATRIX-93
      </div>
    </div>
  );
};

export default Clock_93; 