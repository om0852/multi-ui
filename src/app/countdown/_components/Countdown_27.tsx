"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_27: React.FC<CountdownProps> = ({ to, interval = 1, className = "", onComplete }) => {
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

  // We are going to display digits separately to apply the scrolling effect.
  const timeString = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{
        width: "500px",
        height: "120px",
        background: "#222",
        borderRadius: "8px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Outer Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Each digit is wrapped in its own scrollable container */}
        {timeString.split("").map((digit, index) => (
          <div
            key={index}
            style={{
              width: "50px", // Increased width for proper spacing
              height: "60px", // Increased height for smooth motion
              margin: "0 4px", // Space between digits
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              background: "#111",
              borderRadius: "5px",
              color: "#00eaff",
              fontSize: "40px", // Bigger font size for better clarity
              fontWeight: "bold",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.7)",
            }}
          >
            <motion.div
              key={digit}
              animate={{
                y: ["0%", "-100%"], // Moves the digits upward
                opacity: [1, 0],
              }}
              transition={{
                y: { duration: 0.6, ease: "easeInOut" }, // Smooth easing for upward motion
                opacity: { duration: 0.2 },
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                display: "grid",
                width:"100%",
                placeItems:"center"
              }}
            >
              {digit}
            </motion.div>
            {/* Next digit coming from the bottom */}
            <motion.div
              animate={{
                y: ["100%", "0%"], // Start from the bottom and move up
                opacity: [0, 1],
              }}
              transition={{
                y: { duration: 0.6, ease: "easeInOut" },
                opacity: { duration: 0.2 },
                delay: 0.3,
              }}
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width:"100%"
              }}
            >
              {digit}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown_27;
