"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_23: React.FC<CountdownProps> = ({ to,  className = "", onComplete }) => {
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
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return { minutes, seconds };
  };

  const { minutes, seconds } = formatTime(timeLeft);

  if (!isMounted) return null; // Prevent rendering the timer until the component is mounted on the client

  const progress = (timeLeft / to.getTime()) * 100; // Calculate the progress percentage

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: "250px", height: "250px", position: "relative", borderRadius: "50%" }}
    >
      {/* Radial Progress Circle */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 36 36"
        style={{
          transform: "rotate(-90deg)", // Rotate to start progress from top
          position: "absolute",
        }}
      >
        <circle
          cx="18"
          cy="18"
          r="15.915"
          fill="none"
          stroke="#e6e6e6"
          strokeWidth="2"
        />
        <motion.circle
          cx="18"
          cy="18"
          r="15.915"
          fill="none"
          stroke="#00eaff"
          strokeWidth="2"
          strokeDasharray="100"
          strokeDashoffset={100 - progress} // Use the calculated progress for stroke offset
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>

      {/* Time in the center */}
      <div
        style={{
          fontSize: "36px",
          color: "#00eaff",
          fontWeight: "bold",
          position: "absolute",
        }}
      >
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>
    </div>
  );
};

export default Countdown_23;
