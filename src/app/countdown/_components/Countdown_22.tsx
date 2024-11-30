"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const FlipCountdown: React.FC<CountdownProps> = ({ to, interval = 1, className = "", onComplete }) => {
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

  if (!isMounted) return null; // Prevent rendering the timer until the component is mounted on the client

  const flipAnimation = {
    hidden: { rotateX: 90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
    exit: { rotateX: -90, opacity: 0 },
  };

  return (
    <div className={`relative flex items-center justify-center space-x-4 ${className}`} style={{ fontFamily: "'Roboto', sans-serif" }}>
      {/* Flip Animation for each time section */}
      {[
        { label: "Hours", value: hours },
        { label: "Minutes", value: minutes },
        { label: "Seconds", value: seconds },
      ].map((section) => (
        <div
          key={section.label}
          style={{
            position: "relative",
            width: "80px",
            height: "120px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#222222",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
            color: "#fff",
            fontSize: "36px",
            fontWeight: "bold",
            overflow: "hidden",
          }}
        >
          <motion.div
            key={section.value}
            variants={flipAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.6 }}
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 10,
            }}
          >
            {String(section.value).padStart(2, "0")}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default FlipCountdown;
