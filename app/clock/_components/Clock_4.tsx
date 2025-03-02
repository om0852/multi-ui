"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Function to add zero padding
const zeroPadding = (num: number, digit: number) => {
  let zero = "";
  for (let i = 0; i < digit; i++) {
    zero += "0";
  }
  return (zero + num).slice(-digit);
};

// Array for weekdays
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export interface Clock4Props {
  interval?: number; // Update interval in milliseconds (default: 1000)
  formatter?: (value: number) => string; // Format the numeric display
  containerClassName?: string; // Custom container styles
  digitClassName?: string; // Custom digit styles
  is12HourFormat?: boolean; // Toggle 12-hour or 24-hour format (default: false)
}

const DigitalClock: React.FC<Clock4Props> = ({
  interval = 1000,
  formatter = (value) => value.toString().padStart(2, "0"),
  containerClassName = "h-screen flex justify-center items-center bg-gradient-to-br from-teal-500 to-blue-600",
  digitClassName = "text-6xl font-bold text-white mx-2",
  is12HourFormat = false,
}) => {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  // Function to format the time based on 12-hour or 24-hour format
  const formatTime = (hours: number, minutes: number, seconds: number): string => {
    if (is12HourFormat) {
      const period = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      return `${formatter(formattedHours)}:${formatter(minutes)}:${formatter(seconds)} ${period}`;
    } else {
      return `${formatter(hours)}:${formatter(minutes)}:${formatter(seconds)}`;
    }
  };

  // Update the clock every second
  useEffect(() => {
    const timerID = setInterval(updateTime, interval);
    updateTime(); // Set initial time immediately

    // Cleanup the timer when component unmounts
    return () => clearInterval(timerID);
  }, [interval]);

  // Update time and date
  const updateTime = () => {
    const cd = new Date();
    const hours = cd.getHours();
    const minutes = cd.getMinutes();
    const seconds = cd.getSeconds();
    const timeString = formatTime(hours, minutes, seconds);
    const dateString =
      zeroPadding(cd.getFullYear(), 4) +
      "-" +
      zeroPadding(cd.getMonth() + 1, 2) +
      "-" +
      zeroPadding(cd.getDate(), 2) +
      " " +
      week[cd.getDay()];

    setTime(timeString);
    setDate(dateString);
  };

  return (
    <div className={containerClassName}>
      <motion.div
        id="clock"
        className="text-center text-white font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Date */}
        <motion.p
          className="date text-xl tracking-wider"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {date}
        </motion.p>

        {/* Time */}
        <motion.p
          className={`time text-6xl font-bold tracking-widest py-2 mx-2 ${digitClassName} animate-glow`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {time}
        </motion.p>

        {/* Clock Text */}
      </motion.div>

      {/* Inline Tailwind Animation for Glowing Effect */}
      <style jsx global>{`
        @keyframes glow {
          0% {
            text-shadow: 0 0 5px rgba(0, 255, 255, 0.8), 0 0 10px rgba(0, 255, 255, 0.8);
          }
          50% {
            text-shadow: 0 0 20px rgba(0, 255, 255, 1), 0 0 30px rgba(0, 255, 255, 1);
          }
          100% {
            text-shadow: 0 0 5px rgba(0, 255, 255, 0.8), 0 0 10px rgba(0, 255, 255, 0.8);
          }
        }

        .animate-glow {
          animation: glow 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default DigitalClock;
