"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_19: React.FC<CountdownProps> = ({ to, interval = 1, className = "", onComplete }) => {
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
    { label: "Min", value: minutes },
    { label: "Sec", value: seconds },
  ];

  return (
    <div
      className={`relative flex flex-col items-center justify-center ${className}`}
      style={{
        background: "#282c34", // Dark modern background
        padding: "30px",
        borderRadius: "16px",
        fontFamily: "'Poppins', sans-serif",
        color: "#ffffff",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="grid grid-cols-4 gap-6">
        {timeSections.map((section) => (
          <div
            key={section.label}
            className="flex flex-col items-center justify-center"
            style={{
              background: "#444b56", // Card for each unit
              padding: "20px",
              borderRadius: "10px",
              minWidth: "90px",
              textAlign: "center",
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
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#00d8ff",
                }}
              >
                {section.value}
              </motion.div>
            </AnimatePresence>
            <div style={{ fontSize: "14px", color: "#a3a9b8", marginTop: "8px" }}>
              {section.label}
            </div>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        style={{
          marginTop: "20px",
          fontSize: "14px",
          color: "#a3a9b8",
          textAlign: "center",
        }}
      >
        Countdown in Progress
      </motion.div>
    </div>
  );
};

export default Countdown_19;
