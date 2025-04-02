"use client";

import React, { useEffect, useState } from "react";

export interface Clock_5Props {
  interval?: number; // Update interval in milliseconds (default: 1000)
  formatter?: (value: number) => string; // Format the numeric display
  containerClassName?: string; // Custom container styles
  digitClassName?: string; // Custom digit styles
  is12HourFormat?: boolean; // Toggle 12-hour or 24-hour format (default: false)
}

const Clock_5: React.FC<Clock_5Props> = ({
  interval = 1000,
  formatter = (value) => value.toString().padStart(2, "0"), // Default: Pad single digits
  containerClassName = "flex flex-col justify-center items-center h-screen bg-gray-900",
  digitClassName = "text-6xl font-bold text-white mx-2",
  is12HourFormat = false,
}) => {
  const [time, setTime] = useState<number[]>([]);
  const [currentDay, setCurrentDay] = useState<number>(new Date().getDay()); // Track the current day index

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Update the time and day every `interval`
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
      setCurrentDay(now.getDay()); // Update current day
    };

    updateTime(); // Set initial time
    const timerId = setInterval(updateTime, interval);

    return () => clearInterval(timerId); // Cleanup on unmount
  }, [interval, is12HourFormat]); // Stable dependencies

  return (
    <div className={containerClassName}>
      {/* Day List */}
      <div className="flex space-x-2 mb-4">
        {weekDays.map((day, index) => (
          <span
            key={day}
            className={`text-xl font-medium ${
              index === currentDay ? "text-red-400 font-bold" : "text-white"
            }`}
          >
            {day}
          </span>
        ))}
      </div>

      {/* Time */}
      <div className="flex space-x-2">
        {time.map((unit, index) => (
          <div key={`time-unit-${index}`} className="flex items-center">
            {formatter(unit)
              .split("") // Split digits for display
              .map((digit, digitIndex) => (
                <span
                  key={`digit-${index}-${digitIndex}`}
                  className={digitClassName}
                >
                  {digit}
                </span>
              ))}
            {index < time.length - 1 && (
              <span className={`${digitClassName} text-red-400 mx-1`}>:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clock_5;
