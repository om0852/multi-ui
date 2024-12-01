"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const CircularCountdown: React.FC<CountdownProps> = ({ to, interval = 1, className = "", onComplete }) => {
  const [timeLeft, setTimeLeft] = useState<number>(to.getTime() - Date.now());
  const [isMounted, setIsMounted] = useState(false); // Flag to check if mounted

  useEffect(() => {
    setIsMounted(true); // Set mounted to true after the component is mounted

    const tick = () => {
      const remainingTime = to.getTime() - Date.now();
      setTimeLeft(Math.max(0, remainingTime));
      if (remainingTime <= 0 && onComplete) {
        clearInterval(timer);
        onComplete();
      }
    };

    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer); // Clean up the timer when the component is unmounted
  }, [to, onComplete]);

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  const progressBarLength = 2 * Math.PI * 125; // Circumference of the circle (radius 125px)

  if (!isMounted) return null; // Prevent rendering the timer until the component is mounted on the client

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`} style={{ width: '300px', height: '300px', position: 'relative' }}>
      {/* Outer Circle (static) */}
      <svg width="300" height="300" viewBox="0 0 300 300">
        <circle
          cx="150"
          cy="150"
          r="125"
          fill="transparent"
          stroke="#333333"
          strokeWidth="20"
        />
      </svg>

      {/* Circular Progress Bar */}
      <svg width="300" height="300" viewBox="0 0 300 300" style={{ position: "absolute", top: 0, left: 0 }}>
        <motion.circle
          cx="150"
          cy="150"
          r="125"
          fill="transparent"
          stroke="#00eaff"
          strokeWidth="20"
          strokeDasharray={progressBarLength}
          strokeDashoffset={(100 - (timeLeft / to.getTime()) * 100) * (progressBarLength / 100)}
          transition={{ duration: 1 }}
        />
      </svg>

      {/* Time Display - Positioned at the Center */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '36px',
          color: '#00eaff',
          fontWeight: 'bold'
        }}
      >
        {`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
      </div>
    </div>
  );
};

export default CircularCountdown;
