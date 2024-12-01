"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const FlipCardCountdown: React.FC<CountdownProps> = ({ to, interval = 1, className = "", onComplete }) => {
  const [timeLeft, setTimeLeft] = useState<number>(to.getTime() - Date.now());
  const [isMounted, setIsMounted] = useState(false); // Prevent SSR mismatch

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

    const timer = setInterval(tick, interval * 1000);
    return () => clearInterval(timer);
  }, [to, interval, onComplete]);

  if (!isMounted) return null;

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  const timeString = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{
        width: "600px",
        height: "150px",
        background: "linear-gradient(135deg, #1a1a1a, #333)",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.6)",
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "8px",
        }}
      >
        {timeString.split("").map((digit, index) => (
          <div
            key={index}
            style={{
              width: "60px",
              height: "100px",
              background: "#222",
              borderRadius: "6px",
              overflow: "hidden",
              position: "relative",
              color: "#00eaff",
              fontSize: "48px",
              fontWeight: "bold",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
              textAlign: "center",
              perspective: "1000px", // Ensure proper 3D effect
            }}
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={digit}
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                exit={{ rotateX: -90, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backfaceVisibility: "hidden", // Prevent back visibility during flip
                }}
              >
                {digit}
              </motion.div>
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlipCardCountdown;
