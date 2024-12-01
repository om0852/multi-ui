"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const CompactFlipCountdown: React.FC<CountdownProps> = ({ to, interval = 1, className = "", onComplete }) => {
  const [timeLeft, setTimeLeft] = useState<number>(to.getTime() - Date.now());
  const [isMounted, setIsMounted] = useState(false);

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
        width: "400px",
        height: "80px",
        background: "#1c1c1e",
        borderRadius: "10px",
        padding: "8px",
        boxShadow: "0 3px 8px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div style={{ display: "flex", gap: "6px" }}>
        {timeString.split("").map((digit, index) => (
          <div
            key={index}
            style={{
              width: "40px",
              height: "60px",
              background: "#333",
              borderRadius: "4px",
              position: "relative",
              overflow: "hidden",
              color: "#00ffcc",
              fontSize: "28px",
              fontWeight: "bold",
              textAlign: "center",
              perspective: "600px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.4)",
            }}
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={digit}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{
                  duration: 0.5,
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
                  backfaceVisibility: "hidden",
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

export default CompactFlipCountdown;
