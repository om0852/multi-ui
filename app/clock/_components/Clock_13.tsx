"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface FlipClockProps {
  interval?: number; // Update interval in milliseconds (default: 1000)
  size?: "small" | "medium" | "large"; // Size of the clock
  containerClassName?: string; // Custom container styles
  digitContainerClassName?: string; // Custom digit container styles
  digitClassName?: string; // Custom digit styles
  labelClassName?: string; // Custom label styles
}

const sizeStyles = {
  small: {
    containerHeight: "h-16",
    digitContainer: "w-10 h-12",
    digit: "text-lg",
    label: "text-xs mt-1",
  },
  medium: {
    containerHeight: "h-24",
    digitContainer: "w-14 h-16",
    digit: "text-2xl",
    label: "text-sm mt-1.5",
  },
  large: {
    containerHeight: "h-32",
    digitContainer: "w-20 h-24",
    digit: "text-4xl",
    label: "text-base mt-2",
  },
};

const FlipClock: React.FC<FlipClockProps> = ({
  interval = 1000,
  size = "medium",
  containerClassName = "h-screen flex justify-center items-center bg-gray-800",
  digitContainerClassName = "",
  digitClassName = "",
  labelClassName = "",
}) => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    };

    const timer = setInterval(updateClock, interval);
    updateClock(); // Set initial time immediately

    return () => clearInterval(timer);
  }, [interval]);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  const { containerHeight, digitContainer, digit, label } = sizeStyles[size];

  return (
    <div className={`${containerClassName}`}>
      <div className={`flex space-x-4 ${containerHeight}`}>
        {Object.entries(time).map(([unit, value]) => (
          <div
            key={unit}
            className={`relative flex flex-col items-center justify-between bg-gray-900 rounded-md shadow-md ${digitContainer} ${digitContainerClassName}`}
          >
            <div className="flex-1 flex items-center justify-center">
              <AnimatePresence initial={false}>
                <motion.div
                  key={value}
                  initial={{ y: "-100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute"
                >
                  <p
                    className={`font-bold text-white ${digit} ${digitClassName}`}
                  >
                    {formatNumber(value)}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <p
              className={`absolute bottom-2 text-gray-400 uppercase ${label} ${labelClassName} `}
              style={{
                fontSize: size == "small" ? "6px" :size=="medium"?"10px" :"15px",
                lineHeight: size == "small" ? "1vh" : "2vh",
              }}
            >
              {unit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlipClock;
