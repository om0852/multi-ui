'use client';
import React, { useEffect, useState } from 'react';

const AnalogMeter = ({ value, maxValue, label, color }: { value: number; maxValue: number; label: string; color: string }) => {
  // Convert value to angle (0-180 degrees)
  const angle = (value / maxValue) * 180;

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '120px',
        height: '80px',
        position: 'relative',
        background: '#222',
        borderRadius: '10px 10px 0 0',
        border: '2px solid #444',
        overflow: 'hidden',
      }}>
        {/* Scale markings */}
        {Array.from({ length: 11 }, (_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '60px',
              width: '2px',
              height: '10px',
              background: '#666',
              transformOrigin: 'bottom center',
              transform: `rotate(${i * 18 - 90}deg)`,
            }}
          />
        ))}

        {/* Needle */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '60px',
          width: '60px',
          height: '2px',
          background: color,
          transformOrigin: 'left center',
          transform: `rotate(${angle - 90}deg)`,
          transition: 'transform 0.3s ease-in-out',
          boxShadow: `0 0 5px ${color}`,
        }} />

        {/* Needle pivot */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '60px',
          width: '6px',
          height: '6px',
          background: color,
          borderRadius: '50%',
          transform: 'translate(-50%, 50%)',
          boxShadow: `0 0 5px ${color}`,
        }} />

        {/* Value display */}
        <div style={{
          position: 'absolute',
          bottom: '5px',
          left: '50%',
          transform: 'translateX(-50%)',
          color,
          fontSize: '0.8rem',
          fontFamily: 'monospace',
          textShadow: `0 0 5px ${color}`,
        }}>
          {value.toString().padStart(2, '0')}
        </div>
      </div>
      <div style={{
        color: '#888',
        fontSize: '0.8rem',
        fontFamily: 'monospace',
        marginTop: '8px',
        letterSpacing: '1px',
      }}>
        {label}
      </div>
    </div>
  );
};

const Clock_98 = () => {
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
        <AnalogMeter value={hours} maxValue={24} label="HOURS" color="#ff4444" />
        <AnalogMeter value={minutes} maxValue={60} label="MINUTES" color="#44ff44" />
        <AnalogMeter value={seconds} maxValue={60} label="SECONDS" color="#4444ff" />
      </div>

      {/* Model label */}
      <div style={{
        position: 'absolute',
        bottom: '15px',
        right: '20px',
        background: '#333',
        padding: '4px 8px',
        borderRadius: '4px',
        color: '#888',
        fontSize: '0.8rem',
        fontFamily: 'monospace',
        letterSpacing: '1px',
      }}>
        MTR-98
      </div>
    </div>
  );
};

export default Clock_98; 