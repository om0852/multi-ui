'use client';
import React, { useEffect, useState } from 'react';

const BinaryDigit = ({ value, label }: { value: number; label: string }) => {
  // Convert number to 6-bit binary array
  const bits = Array.from({ length: 6 }, (_, i) => {
    const bitValue = 1 << (5 - i);
    return (value & bitValue) === bitValue;
  });

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        marginBottom: '8px',
      }}>
        {bits.map((active, i) => (
          <div
            key={i}
            style={{
              width: '30px',
              height: '30px',
              background: active ? '#ff0' : '#333',
              borderRadius: '50%',
              boxShadow: active ? '0 0 10px #ff0' : 'none',
              border: '2px solid #444',
              transition: 'all 0.2s ease-in-out',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: active ? '#000' : '#666',
              fontSize: '0.7rem',
              fontFamily: 'monospace',
            }}
          >
            {Math.pow(2, 5 - i)}
          </div>
        ))}
      </div>
      <div style={{
        color: '#888',
        fontSize: '0.8rem',
        fontFamily: 'monospace',
        letterSpacing: '1px',
      }}>
        {label}
      </div>
    </div>
  );
};

const Clock_97 = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div style={{
      position: 'relative',
      background: '#111',
      padding: '3rem',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
      border: '2px solid #333',
    }}>
      {/* Display panel */}
      <div style={{
        position: 'relative',
        background: '#1a1a1a',
        padding: '30px',
        borderRadius: '10px',
        border: '1px solid #333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px',
        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
      }}>
        <BinaryDigit value={hours} label="HOURS" />
        <BinaryDigit value={minutes} label="MINUTES" />
        <BinaryDigit value={seconds} label="SECONDS" />
      </div>

      {/* Model label */}
      <div style={{
        position: 'absolute',
        bottom: '15px',
        right: '20px',
        background: '#222',
        padding: '4px 8px',
        borderRadius: '4px',
        color: '#888',
        fontSize: '0.8rem',
        fontFamily: 'monospace',
        letterSpacing: '1px',
      }}>
        BIN-97
      </div>
    </div>
  );
};

export default Clock_97; 