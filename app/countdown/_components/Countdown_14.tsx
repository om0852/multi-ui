"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_14: React.FC<CountdownProps> = ({ to, interval = 1, className = "", onComplete }) => {
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
        background: "linear-gradient(to right, #ff7e5f, #feb47b)", // Gradient Background
        borderRadius: "15px",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        color: "#fff",
        fontSize: "18px",
        textAlign: "center",
      }}
    >
      <motion.div
        key={`time-${days}-${hours}-${minutes}-${seconds}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="font-bold"
      >
        {formatRemainingTime()}
      </motion.div>
    </div>
  );
};

export default Countdown_14;
