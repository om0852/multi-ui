"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_18: React.FC<CountdownProps> = ({ to, interval = 1, className = "", onComplete }) => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const endTime = new Date(to).getTime();
    const timerInterval = interval * 1000;

    const calculateRemainingTime = () => {
      const currentTime = Date.now();
      const remainingTime = Math.max(0, endTime - currentTime);
      return remainingTime;
    };

    const updateTimeStates = (remainingTime: number) => {
      const secondsRemaining = Math.floor(remainingTime / 1000);
      const minutesRemaining = Math.floor(secondsRemaining / 60);
      const hoursRemaining = Math.floor(minutesRemaining / 60);
      const daysRemaining = Math.floor(hoursRemaining / 24);

      setDays(daysRemaining);
      setHours(hoursRemaining % 24);
      setMinutes(minutesRemaining % 60);
      setSeconds(secondsRemaining % 60);
    };

    updateTimeStates(calculateRemainingTime());

    const intervalId = setInterval(() => {
      const remainingTime = calculateRemainingTime();
      updateTimeStates(remainingTime);

      if (remainingTime <= 0) {
        clearInterval(intervalId);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        if (onComplete) onComplete();
      }
    }, timerInterval);

    return () => clearInterval(intervalId);
  }, [to, interval, onComplete]);

  const slideAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  const timeSections = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <div
      className={`relative flex flex-col items-center justify-center ${className}`}
      style={{
        background: "#f8f9fa", // Light minimal background
        border: "1px solid #e0e0e0", // Soft border for elegance
        borderRadius: "12px",
        padding: "30px",
        fontFamily: "'Inter', sans-serif",
        color: "#2c3e50",
        fontSize: "18px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="grid grid-cols-4 gap-4">
        {timeSections.map((section) => (
          <div
            key={section.label}
            className="flex flex-col items-center justify-center"
            style={{
              background: "#ffffff", // White card for each unit
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "8px",
              minWidth: "80px",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={section.value}
                variants={slideAnimation}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#34495e",
                }}
              >
                {section.value}
              </motion.div>
            </AnimatePresence>
            <div style={{ fontSize: "12px", color: "#7f8c8d", marginTop: "5px" }}>
              {section.label}
            </div>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        style={{
          marginTop: "15px",
          fontSize: "14px",
          color: "#95a5a6",
        }}
      >
        Counting Down to Event
      </motion.div>
    </div>
  );
};

export default Countdown_18;
