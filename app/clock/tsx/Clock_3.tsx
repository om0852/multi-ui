"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface Clock3Props {
  interval?: number; // Update interval in milliseconds (default: 1000)
  formatter?: (value: number) => string; // Format the numeric display
  containerClassName?: string; // Custom container styles
  digitClassName?: string; // Custom digit styles
  is12HourFormat?: boolean; // Toggle 12-hour or 24-hour format (default: false)
}

const Clock3: React.FC<Clock3Props> = ({
  interval = 1000,
  formatter = (value) => value.toString().padStart(2, "0"), // Default: Pad single digits
  containerClassName = "flex justify-center items-center h-screen bg-gradient-to-br from-teal-400 to-blue-600",
  digitClassName = "text-7xl font-semibold text-white mx-2",
  is12HourFormat = false, // Default is 24-hour format
}) => {
  const [time, setTime] = useState<number[]>([]);
  const [period, setPeriod] = useState<string>("");

  // Format time based on 12-hour or 24-hour format
  const formatTime = (hours: number, minutes: number, seconds: number) => {
    let formattedHours = hours;
    let formattedPeriod = "";

    if (is12HourFormat) {
      // Convert to 12-hour format
      formattedPeriod = hours >= 12 ? "PM" : "AM";
      formattedHours = hours % 12 || 12; // Convert 0 to 12 (midnight)
    }

    return { formattedHours, minutes, seconds, formattedPeriod };
  };

  // Update the time every `interval`
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const { formattedHours, minutes: formattedMinutes, seconds: formattedSeconds, formattedPeriod } = formatTime(
        hours,
        minutes,
        seconds
      );

      setTime([formattedHours, formattedMinutes, formattedSeconds]);
      setPeriod(formattedPeriod);
    };

    updateTime(); // Set initial time
    const timerId = setInterval(updateTime, interval);

    return () => clearInterval(timerId); // Cleanup on unmount
  }, [interval, is12HourFormat]);

  return (
    <div className={containerClassName}>
      <motion.div
        className="flex items-center justify-center space-x-4 p-6 rounded-lg shadow-xl bg-gradient-to-br from-indigo-600 to-pink-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {time.map((unit, index) => (
          <div key={`time-unit-${index}`} className="flex items-center">
            {formatter(unit)
              .split("") // Split digits for display
              .map((digit, digitIndex) => (
                <motion.span
                  key={`digit-${index}-${digitIndex}`}
                  className={`${digitClassName}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                    delay: digitIndex * 0.2, // Staggered pop effect
                  }}
                >
                  {digit}
                </motion.span>
              ))}
            {index < time.length - 1 && (
              <motion.span
                className={`${digitClassName} text-red-400 mx-1 text-4xl`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                :
              </motion.span>
            )}
          </div>
        ))}
        {is12HourFormat && (
          <motion.span
            className={`${digitClassName} text-green-300 mx-2 text-3xl`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {period}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};

export default Clock3;
