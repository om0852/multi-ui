'use client';
import React, { useEffect, useState, useRef } from 'react';

const swissRailwayAnimationKeyframes = `
  @keyframes secondHandPause {
    0% { transform: rotate(0deg); }
    90% { transform: rotate(6deg); }
    100% { transform: rotate(6deg); }
  }
  @keyframes minuteHandMove {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(6deg); }
  }
`;

const Clock_80 = () => {
  const [time, setTime] = useState(new Date());
  const secondHandRef = useRef<HTMLDivElement>(null);
  const minuteHandRef = useRef<HTMLDivElement>(null);
  const hourHandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (secondHandRef.current && minuteHandRef.current && hourHandRef.current) {
      const seconds = time.getSeconds();
      const minutes = time.getMinutes();
      const hours = time.getHours() % 12;

      // Smooth rotation for second hand
      secondHandRef.current.style.transform = `rotate(${seconds * 6}deg)`;

      // Smooth rotation for minute hand
      const minuteDegrees = (minutes * 6) + (seconds / 10);
      minuteHandRef.current.style.transform = `rotate(${minuteDegrees}deg)`;

      // Smooth rotation for hour hand
      const hourDegrees = (hours * 30) + (minutes / 2);
      hourHandRef.current.style.transform = `rotate(${hourDegrees}deg)`;
    }
  }, [time]);

  return (
    <div style={{
      position: 'relative',
      width: '400px',
      height: '400px',
      background: '#ffffff',
      borderRadius: '50%',
      boxShadow: '0 0 30px rgba(0, 0, 0, 0.1), inset 0 0 30px rgba(0, 0, 0, 0.1)',
      padding: '20px',
    }}>
      <style>{swissRailwayAnimationKeyframes}</style>

      {/* Clock face */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '10px solid #1a1a1a',
      }}>
        {/* Hour markers */}
        {Array.from({ length: 12 }).map((_, i) => (
          <React.Fragment key={i}>
            {/* Hour marker */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '10px',
              width: '8px',
              height: '30px',
              background: '#1a1a1a',
              transform: `rotate(${i * 30}deg)`,
              transformOrigin: '50% 170px',
            }} />
            
            {/* Minute markers */}
            {Array.from({ length: 4 }).map((_, j) => (
              <div
                key={j}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '10px',
                  width: '4px',
                  height: '15px',
                  background: '#1a1a1a',
                  transform: `rotate(${i * 30 + (j + 1) * 6}deg)`,
                  transformOrigin: '50% 170px',
                }}
              />
            ))}
          </React.Fragment>
        ))}

        {/* Hour hand */}
        <div
          ref={hourHandRef}
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '50%',
            width: '8px',
            height: '100px',
            background: '#1a1a1a',
            transformOrigin: 'bottom',
            borderRadius: '4px',
            transition: 'transform 0.2s cubic-bezier(0.4, 2.08, 0.55, 0.44)',
          }}
        />

        {/* Minute hand */}
        <div
          ref={minuteHandRef}
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '50%',
            width: '6px',
            height: '140px',
            background: '#1a1a1a',
            transformOrigin: 'bottom',
            borderRadius: '3px',
            transition: 'transform 0.2s cubic-bezier(0.4, 2.08, 0.55, 0.44)',
          }}
        />

        {/* Second hand */}
        <div
          ref={secondHandRef}
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '50%',
            width: '2px',
            height: '160px',
            background: '#ff0000',
            transformOrigin: 'bottom',
            transition: 'transform 0.2s cubic-bezier(0.4, 2.08, 0.55, 0.44)',
          }}
        >
          {/* Second hand circle */}
          <div style={{
            position: 'absolute',
            bottom: '-20px',
            left: '-7px',
            width: '16px',
            height: '16px',
            background: '#ff0000',
            borderRadius: '50%',
          }} />
        </div>

        {/* Center pin */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '20px',
          height: '20px',
          background: '#1a1a1a',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        }} />

        {/* SBB CFF FFS Logo */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '25%',
          transform: 'translateX(-50%)',
          color: '#1a1a1a',
          fontSize: '14px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 'bold',
          letterSpacing: '2px',
        }}>
          SBB CFF FFS
        </div>
      </div>
    </div>
  );
};

export default Clock_80;