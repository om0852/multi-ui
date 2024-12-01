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

  const formatRemainingTime = () => {
    return `${days}d ${hours}hr ${minutes}min ${seconds}s`;
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center ${className}`}
      style={{
        background: "radial-gradient(circle, #ff9a9e, #fad0c4)", // Soft radial gradient
        borderRadius: "25px",
        padding: "25px",
        fontFamily: "'Poppins', sans-serif",
        color: "#2d3436",
        fontSize: "22px",
        textAlign: "center",
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)", // Softer shadow
      }}
    >
      <motion.div
        key={`time-${days}-${hours}-${minutes}-${seconds}`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.68, -0.55, 0.27, 1.55], // Custom easing (similar to back easing)
        }}
        className="font-extrabold"
        style={{ letterSpacing: "2px" }}
      >
        {formatRemainingTime()}
      </motion.div>

      {/* Rotating background effect */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 0.5, rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          width: "150%",
          height: "150%",
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "50%",
          zIndex: -1,
        }}
      ></motion.div>

      {/* Pulsing Text */}
      <motion.div
        initial={{ opacity: 0.7, scale: 1 }}
        animate={{ opacity: 1, scale: 1.05 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
        }}
        style={{ marginTop: "10px", fontSize: "14px", color: "#636e72" }}
      >
        Stay tuned!
      </motion.div>
    </div>
  );
};

export default Countdown_14;
