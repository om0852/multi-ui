"use client";

import React, { useEffect, useState } from "react";

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
  containerClassName = "flex justify-center items-center h-screen bg-gray-900",
  digitClassName = "w-16 h-32 border-2 border-gray-500 text-6xl font-mono text-white mx-1 flex items-center justify-center bg-gray-800 rounded-lg",
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
              <span
                key={`digit-${index}-${digitIndex}`}
                className={digitClassName}
              >
                {digit}
              </span>
            ))}
            {index < time.length - 1 && (
              <span className="text-red-400 mx-1">:</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NumericClock;
