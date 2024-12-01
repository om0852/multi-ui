"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const MinimalCircularCountdown: React.FC<CountdownProps> = ({ to, interval = 1, className = "", onComplete }) => {
  const [timeLeft, setTimeLeft] = useState<number>(to.getTime() - Date.now());
  const [isMounted, setIsMounted] = useState(false); // To ensure client-side rendering

  useEffect(() => {
    setIsMounted(true);
    const tick = () => {
      const remainingTime = to.getTime() - Date.now();
      setTimeLeft(Math.max(0, remainingTime));
      if (remainingTime <= 0 && onComplete) {
        clearInterval(timer);
        onComplete();
      }
    };

    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [to, onComplete]);

  if (!isMounted) return null; // Prevent SSR mismatch

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);
  const percentage = (timeLeft / to.getTime()) * 100; // Percentage for the progress circle

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{
        width: "250px",
        height: "250px",
        background: "transparent",
        borderRadius: "50%",
        position: "relative",
        border: "5px solid #00eaff",
      }}
    >
      {/* Circular Progress Bar */}
      <motion.div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: "conic-gradient(#00eaff " + percentage + "%, rgba(0, 0, 0, 0) 0%)",
        }}
        animate={{
          background: `conic-gradient(#00eaff ${percentage}%, rgba(0, 0, 0, 0) 0%)`,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      />

      {/* Time Text in the Center with continuous scaling */}
      <motion.div
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          color: "#00eaff",
          position: "relative",
          zIndex: 1,
        }}
        animate={{
          opacity: [0.5, 1, 0.5], // Smooth fade effect
          scale: [1, 1.1, 1], // Continuous scaling effect
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          loop: Infinity, // Infinite loop for continuous scaling
        }}
      >
        {/* Showing hours, minutes, and seconds */}
        {`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
      </motion.div>
    </div>
  );
};

export default MinimalCircularCountdown;
