"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export interface NumericClockProps {
  interval?: number; // Update interval in milliseconds (default: 1000)
  formatter?: (value: number) => string; // Format the numeric display
  containerClassName?: string; // Custom container styles
  digitClassName?: string; // Custom digit styles
  is12HourFormat?: boolean; // Toggle 12-hour or 24-hour format (default: false)
}

const NumericClock: React.FC<NumericClockProps> = ({
  interval = 1000,
  formatter = (value) => value.toString().padStart(2, "0"), // Default: Pad single digits
  containerClassName = "flex justify-center items-center h-screen bg-black",
  digitClassName =
    "text-green-500 font-mono text-6xl font-bold mx-1 relative select-none",
  is12HourFormat = false,
}) => {
  const [time, setTime] = useState<number[]>([]);

  // Update the time every `interval`
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();

      // Handle 12-hour format conversion
      if (is12HourFormat && hours > 12) {
        hours -= 12; // Convert to 12-hour format
      } else if (is12HourFormat && hours === 0) {
        hours = 12; // Handle midnight as 12
      }

      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      setTime([hours, minutes, seconds]);
    };

    updateTime(); // Set initial time
    const timerId = setInterval(updateTime, interval);

    return () => clearInterval(timerId); // Cleanup on unmount
  }, [interval, is12HourFormat]);

  return (
    <div className={containerClassName}>
      {/* Time */}
      <div className="flex items-center">
        {time.map((unit, index) => (
          <React.Fragment key={`time-unit-${index}`}>
            {formatter(unit).split("").map((digit, digitIndex) => (
              <motion.div
                key={`digit-${index}-${digitIndex}`}
                className="flex items-center justify-center mx-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {renderSegment(digit)} {/* Render each digit in 8-segment format */}
              </motion.div>
            ))}
            {index < time.length - 1 && (
              <span
                className={clsx(
                  "text-red-400 mx-1",
                  "font-mono text-4xl select-none"
                )}
              >
                :
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// Function to render each digit in the form of 8-segment
const renderSegment = (digit: string) => {
    const segments: any = {
        0: [true, true, true, true, true, true, false],   // Top, top-right, bottom-right, bottom, bottom-left, top-left
        1: [false, true, true, false, false, false, false], // top-right, bottom-right
        2: [true, true, false, true, true, false, true],   // top, top-right, bottom, bottom-left, middle
        3: [true, true, true, true, false, false, true],   // top, top-right, bottom-right, bottom, middle
        4: [false, true, true, false, false, true, true],   // top-right, bottom-right, bottom-left, middle
        5: [true, false, true, true, false, true, true],   // top, bottom-right, bottom, bottom-left, middle
        6: [true, false, true, true, true, true, true],    // top, bottom-right, bottom, bottom-left, middle
        7: [true, true, true, false, false, false, false], // top, top-right, bottom-right
        8: [true, true, true, true, true, true, true],     // all segments
        9: [true, true, true, true, false, true, true],    // top, top-right, bottom-right, bottom, middle
      };
      
  // Segments mapping: [top, top-right, bottom-right, bottom, bottom-left, top-left, middle]
  const segmentConfig = segments[digit];

  return (
    <div className="relative w-24 h-48">
      {/* Top segment */}
      <motion.div
        className={clsx(
          "absolute top-0 left-5 w-14 h-2 bg-gray-800",
          segmentConfig[0] ? "bg-green-500" : "bg-gray-600"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: segmentConfig[0] ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      {/* Top-left and top-right segments */}
      <motion.div
        className={clsx(
          "absolute left-0 top-5 w-2 h-16 bg-gray-800",
          segmentConfig[5] ? "bg-green-500" : "bg-gray-600"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: segmentConfig[5] ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className={clsx(
          "absolute right-0 top-5 w-2 h-16 bg-gray-800",
          segmentConfig[1] ? "bg-green-500" : "bg-gray-600"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: segmentConfig[1] ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      {/* Middle segment */}
      <motion.div
        className={clsx(
          "absolute left-5 bottom-20 w-14 h-2 bg-gray-800",
          segmentConfig[6] ? "bg-green-500" : "bg-gray-600"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: segmentConfig[6] ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      {/* Bottom-left and bottom-right segments */}
      <motion.div
        className={clsx(
          "absolute left-0 bottom-5 w-2 h-16 bg-gray-800",
          segmentConfig[4] ? "bg-green-500" : "bg-gray-600"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: segmentConfig[4] ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className={clsx(
          "absolute right-0 bottom-5 w-2 h-16 bg-gray-800",
          segmentConfig[2] ? "bg-green-500" : "bg-gray-600"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: segmentConfig[2] ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      {/* Bottom segment */}
      <motion.div
        className={clsx(
          "absolute bottom-0 left-5 w-14 h-2 bg-gray-800",
          segmentConfig[3] ? "bg-green-500" : "bg-gray-600"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: segmentConfig[3] ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default NumericClock;
