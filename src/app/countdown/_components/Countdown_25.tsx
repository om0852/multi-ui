"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const ExplodingCountdown: React.FC<CountdownProps> = ({ to, interval = 1, className = "", onComplete }) => {
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

  return (
    <div
      className={`relative flex flex-col items-center justify-center ${className}`}
      style={{
        width: "350px",
        height: "350px",
        background: "transparent",
        position: "relative",
        textAlign: "center",
        borderRadius: "50%",
        border: "10px solid #00eaff",
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Background with Animated Pulse Effect */}
      <motion.div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle, rgba(0, 255, 255, 0.3), rgba(0, 0, 0, 0.7))",
          borderRadius: "50%",
          boxShadow: "0 0 40px rgba(0, 255, 255, 0.7)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          loop: Infinity,
        }}
      />

      {/* Exploding Time Display */}
      <motion.div
        style={{
          fontSize: "50px",
          fontWeight: "bold",
          color: "#00eaff",
          position: "relative",
          zIndex: 1,
          textShadow: "0 0 10px #00eaff, 0 0 20px #00eaff, 0 0 30px #00eaff",
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.3, 1], // "Bombing" effect on each second
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        {/* Showing hours, minutes, and seconds */}
        {`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
      </motion.div>
    </div>
  );
};

export default ExplodingCountdown;
