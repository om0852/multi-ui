'use client';
import React, { useEffect, useState } from 'react';

const LEDBar = ({ value, maxValue, color }: { value: number; maxValue: number; color: string }) => {
  const segments = Array.from({ length: 10 }, (_, i) => {
    const threshold = (i + 1) * (maxValue / 10);
    return value <= threshold;
  });

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '3px',
      height: '120px',
    }}>
      {segments.reverse().map((active, i) => (
        <div
          key={i}
          style={{
            width: '20px',
            height: '8px',
            background: active ? color : '#333',
            opacity: active ? 1 : 0.1,
            borderRadius: '1px',
            boxShadow: active ? `0 0 5px ${color}` : 'none',
            transition: 'all 0.2s ease-in-out',
          }}
        />
      ))}
    </div>
  );
};

const Clock_96 = () => {
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
      background: '#1a1a1a',
      padding: '3rem',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
      border: '2px solid #333',
    }}>
      {/* Display panel */}
      <div style={{
        position: 'relative',
        background: '#222',
        padding: '30px',
        borderRadius: '10px',
        border: '1px solid #444',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px',
        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
      }}>
        <div style={{ textAlign: 'center' }}>
          <LEDBar value={hours} maxValue={24} color="#ff4444" />
          <div style={{
            color: '#666',
            fontSize: '0.8rem',
            marginTop: '8px',
            fontFamily: 'monospace',
          }}>
            HRS
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <LEDBar value={minutes} maxValue={60} color="#44ff44" />
          <div style={{
            color: '#666',
            fontSize: '0.8rem',
            marginTop: '8px',
            fontFamily: 'monospace',
          }}>
            MIN
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <LEDBar value={seconds} maxValue={60} color="#4444ff" />
          <div style={{
            color: '#666',
            fontSize: '0.8rem',
            marginTop: '8px',
            fontFamily: 'monospace',
          }}>
            SEC
          </div>
        </div>
      </div>

      {/* Model label */}
      <div style={{
        position: 'absolute',
        bottom: '15px',
        right: '20px',
        background: '#333',
        padding: '4px 8px',
        borderRadius: '4px',
        color: '#666',
        fontSize: '0.8rem',
        fontFamily: 'monospace',
        letterSpacing: '1px',
      }}>
        BAR-96
      </div>
    </div>
  );
};

export default Clock_96; 