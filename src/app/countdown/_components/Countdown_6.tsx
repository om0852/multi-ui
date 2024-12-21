"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface CountdownProps {
  to: Date;
  interval?: number;
  className?: string;
  formatter?: (time: string) => string;
  onComplete?: () => void;
}

const Countdown_6: React.FC<CountdownProps> = ({
  to,
  interval = 1,
  className = "",
  formatter = (value) => value,
  onComplete,
}) => {
   const [visibleTime, setVisibleTime] = useState<string>("");

  useEffect(() => {
    const endTime = new Date(to).getTime();
    const calculateRemainingTime = () => Math.max(0, endTime - Date.now());

    const updateTime = () => {
      const remainingTime = calculateRemainingTime();
       setVisibleTime(formatTime(Math.floor(remainingTime / 1000)));
      if (remainingTime <= 0) {
        if (onComplete) onComplete();
      }
    };

    updateTime();
    const intervalId = setInterval(updateTime, interval * 1000);

    return () => clearInterval(intervalId);
  }, [to, interval, onComplete]);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className={`${className} flex justify-center items-center`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={visibleTime}
          initial={{ rotateX: 180, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -180, opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="text-4xl font-bold"
        >
          {formatter(visibleTime)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Countdown_6;
