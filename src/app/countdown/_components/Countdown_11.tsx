"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface CountdownProps {
  to: Date; // Ending date/time (must be a future date)
  interval?: number; // Time between each decrement (in seconds)
  className?: string; // Custom class for styling
  formatter?: (time: string) => string; // Function to format the remaining time
  onComplete?: () => void; // Function called when countdown completes
}

const Countdown: React.FC<CountdownProps> = ({
  to,
  interval = 1,
  className = "",
  formatter = (value) => value, // Default formatter just returns the string
  onComplete,
}) => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const endTime = new Date(to).getTime(); // Convert the target date to timestamp
    const timerInterval = interval * 1000; // Interval in milliseconds

    // Function to calculate remaining time
    const calculateRemainingTime = () => {
      const currentTime = Date.now();
      const remainingTime = Math.max(0, endTime - currentTime); // Ensure time isn't negative
      return remainingTime;
    };

    // Function to update the time
    const updateTimeStates = (remainingTime: number) => {
      const secondsRemaining = Math.floor(remainingTime / 1000); // Convert to seconds
      const minutesRemaining = Math.floor(secondsRemaining / 60); // Convert to minutes
      const hoursRemaining = Math.floor(minutesRemaining / 60); // Convert to hours
      const daysRemaining = Math.floor(hoursRemaining / 24); // Convert to days

      const newSeconds = secondsRemaining % 60;
      const newMinutes = minutesRemaining % 60;
      const newHours = hoursRemaining % 24;

      setDays(daysRemaining);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);
    };

    // Initial time update to avoid delay
    updateTimeStates(calculateRemainingTime());

    // Set interval to update the countdown every second
    const intervalId = setInterval(() => {
      const remainingTime = calculateRemainingTime();
      updateTimeStates(remainingTime);

      if (remainingTime <= 0) {
        clearInterval(intervalId); // Clear the interval when the countdown reaches zero
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        if (onComplete) onComplete(); // Call the callback when completed
      }
    }, timerInterval);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [to, interval, onComplete]);

  // Format remaining time as "x days, y hours, z minutes"
  const formatRemainingTime = () => {
    let timeString = "";

    if (days > 0) {
      timeString += `${days} day${days !== 1 ? "s" : ""}`;
    }
    if (hours > 0 || minutes > 0 || seconds > 0) {
      timeString += `, ${hours} hour${hours !== 1 ? "s" : ""}`;
    }
    if (minutes > 0 || seconds > 0) {
      timeString += `, ${minutes} minute${minutes !== 1 ? "s" : ""}`;
    }
    if (seconds >= 0) {
      timeString += `, ${seconds} second${seconds !== 1 ? "s" : ""}`;
    }

    return timeString;
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden ${className}`}
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#000", // Black text color for better contrast
        borderRadius: "15px",
        padding: "20px 40px",
        width: "450px",
        height: "200px",
        background: "linear-gradient(to right, #FF7F50, #FF6347)", // Subtle gradient background
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Slight shadow for depth
        textAlign: "center", // Center text
      }}
    >
      <div className="flex justify-center items-center space-x-4">
        {/* Days */}
        <motion.div
          key={`days-${days}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="text-3xl font-semibold"
        >
          {days} {days === 1 ? "day" : "days"}
        </motion.div>

        {/* Hours */}
        <motion.div
          key={`hours-${hours}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="text-3xl font-semibold"
        >
          {hours} {hours === 1 ? "hour" : "hours"}
        </motion.div>

        {/* Minutes */}
        <motion.div
          key={`minutes-${minutes}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="text-3xl font-semibold"
        >
          {minutes} {minutes === 1 ? "minute" : "minutes"}
        </motion.div>

        {/* Seconds */}
        <motion.div
          key={`seconds-${seconds}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="text-3xl font-semibold"
        >
          {seconds} {seconds === 1 ? "second" : "seconds"}
        </motion.div>
      </div>
    </div>
  );
};

export default Countdown;
