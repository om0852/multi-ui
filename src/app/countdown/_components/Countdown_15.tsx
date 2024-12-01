"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_15: React.FC<CountdownProps> = ({ to, interval = 1, className = "", onComplete }) => {
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

      const newSeconds = secondsRemaining % 60;
      const newMinutes = minutesRemaining % 60;
      const newHours = hoursRemaining % 24;

      setDays(daysRemaining);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);
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

  const formatRemainingTime = () => {
    return `${days}d ${hours}hr ${minutes}min ${seconds}s`;
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center ${className}`}
      style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)", // Gradient background
        borderRadius: "20px",
        padding: "20px",
        fontFamily: "Verdana, sans-serif",
        color: "#fff",
        fontSize: "20px",
        textAlign: "center",
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)", // Shadow effect
      }}
    >
      <motion.div
        key={`time-${days}-${hours}-${minutes}-${seconds}`}
        initial={{ opacity: 0, y: -20, rotateX: 90 }} // 3D rotate effect
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        exit={{ opacity: 0, y: 20, rotateX: 90 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="font-bold"
      >
        {formatRemainingTime()}
      </motion.div>

      {/* Add additional bouncing indicator */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
        style={{
          marginTop: "10px",
          color: "#fed330",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        Counting down...
      </motion.div>
    </div>
  );
};

export default Countdown_15;
