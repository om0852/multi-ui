"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_13: React.FC<CountdownProps> = ({ to, interval = 1, className = "", onComplete }) => {
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
        fontFamily: "Arial, sans-serif",
        color: "#FFF",
        fontSize: "20px",
        padding: "20px",
        backgroundColor: "#333",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <motion.div
        key={`time-${days}-${hours}-${minutes}-${seconds}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
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

export default Countdown_13;
