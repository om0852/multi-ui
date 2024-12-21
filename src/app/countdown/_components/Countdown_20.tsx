"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_20: React.FC<CountdownProps> = ({ to, className = "", onComplete }) => {
  const [timeLeft, setTimeLeft] = useState<number>(to.getTime() - Date.now());
  const [isMounted, setIsMounted] = useState(false); // Client-side mounting flag

  useEffect(() => {
    // Mark the component as mounted on the client
    setIsMounted(true);

    const tick = () => {
      const remainingTime = to.getTime() - Date.now();
      setTimeLeft(Math.max(0, remainingTime));

      if (remainingTime <= 0 && onComplete) {
        clearInterval(timer);
        onComplete();
      }
    };

    tick(); // Ensure immediate tick at mount
    const timer = setInterval(tick, 1000);

    return () => clearInterval(timer);
  }, [to, onComplete]);

  if (!isMounted) return null; // Don't render the countdown before mount

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Adding leading zero to single-digit values
    const addZero = (value: number) => (value < 10 ? `0${value}` : value.toString());

    return { 
      days: addZero(days),
      hours: addZero(hours),
      minutes: addZero(minutes),
      seconds: addZero(seconds),
    };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  const bounceAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  const timeSections = [
    { label: "Days", value: days },
    { label: "Hrs", value: hours },
    { label: "Min", value: minutes },
    { label: "Sec", value: seconds },
  ];

  return (
    <div
      className={`relative flex flex-col items-center justify-center ${className}`}
      style={{
        background: "#1b1b2f",
        padding: "40px",
        borderRadius: "12px",
        fontFamily: "'Roboto', sans-serif",
        color: "#ffffff",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="grid grid-cols-4 gap-4">
        {timeSections.map((section) => (
          <div
            key={section.label}
            className="flex flex-col items-center justify-center"
            style={{
              background: "#141e30",
              padding: "25px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={section.value}
                variants={bounceAnimation}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  duration: 0.5,
                }}
                style={{
                  fontSize: "36px",
                  fontWeight: "800",
                  color: "#00eaff",
                  textShadow: "0 0 8px #00eaff",
                }}
              >
                {section.value}
              </motion.div>
            </AnimatePresence>
            <div style={{ fontSize: "14px", color: "#b5b5b5", marginTop: "8px" }}>
              {section.label}
            </div>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        style={{
          marginTop: "20px",
          fontSize: "14px",
          color: "#aaa",
          textAlign: "center",
        }}
      >
        Your time is ticking!
      </motion.div>
    </div>
  );
};

export default Countdown_20;
