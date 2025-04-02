"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export interface FlipClockProps {
  interval?: number; // Update interval in milliseconds (default: 1000)
  size?: "small" | "medium" | "large"; // Size of the clock
  containerClassName?: string; // Custom container styles
  digitClassName?: string; // Custom digit styles
  labelClassName?: string; // Custom label styles
}

const sizeStyles = {
  small: {
    containerSize: "w-16 h-16",
    digitText: "text-lg",
    labelText: { fontSize: "8px", lineHeight: "8px" }, // Smaller than text-xs
  },
  medium: {
    containerSize: "w-24 h-24",
    digitText: "text-2xl",
    labelText: { fontSize: "12px", lineHeight: "15px" }, // Small but readable
  },
  large: {
    containerSize: "w-32 h-32",
    digitText: "text-4xl",
    labelText: { fontSize: "15px", lineHeight: "22px" }, // Slightly larger for clarity
  },
};

const FlipClock: React.FC<FlipClockProps> = ({
  interval = 1000,
  size = "medium",
  containerClassName = "h-screen flex justify-center items-center bg-gray-900",
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

  const { containerSize, digitText, labelText } = sizeStyles[size];

  return (
    <div className={`${containerClassName}`}>
      <div className="flex space-x-6">
        {Object.entries(time).map(([unit, value]) => (
          <div
            key={unit}
            className={`relative ${containerSize} rounded-full bg-gradient-to-b from-blue-500 to-blue-700 shadow-lg flex flex-col justify-center items-center`}
          >
            <motion.div
              key={value}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex items-center justify-center"
            >
              <p
                className={`font-bold text-white ${digitText} ${digitClassName}`}
              >
                {formatNumber(value)}
              </p>
            </motion.div>
            <p
              className={`absolute bottom-2 text-gray-200 uppercase ${labelClassName}`}
              style={labelText}
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
