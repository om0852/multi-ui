"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  onComplete?: () => void;
}

const Countdown_24: React.FC<CountdownProps> = ({ to, interval = 1, className = "", onComplete }) => {
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

    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [to, onComplete]);

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  if (!isMounted) return null;

  const flipAnimation = {
    hidden: { rotateX: -90 },
    visible: { rotateX: 0 },
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center ${className}`}
      style={{
        background: "#333",
        padding: "30px",
        borderRadius: "12px",
        color: "#fff",
        fontFamily: "'Roboto', sans-serif",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
        maxWidth: "500px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Days", value: days },
          { label: "Hours", value: hours },
          { label: "Minutes", value: minutes },
          { label: "Seconds", value: seconds },
        ].map((section, index) => (
          <div
            key={section.label}
            className="flex flex-col items-center justify-center"
            style={{
              background: "#444",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={section.value}
                variants={flipAnimation}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.6 }}
                style={{
                  fontSize: "48px",
                  fontWeight: "bold",
                  color: "#00eaff",
                }}
              >
                {String(section.value).padStart(2, "0")}
              </motion.div>
            </AnimatePresence>
            <div style={{ fontSize: "14px", color: "#aaa", marginTop: "8px" }}>
              {section.label}
            </div>
          </div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{
          marginTop: "20px",
          fontSize: "14px",
          color: "#aaa",
        }}
      >
        Time is ticking!
      </motion.div>
    </div>
  );
};

export default Countdown_24;
