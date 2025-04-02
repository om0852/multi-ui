"use client";

import React, { useEffect, useState } from "react";

const NumericClock = ({
  interval = 1000,
  formatter = (value) => value.toString().padStart(2, "0"), // Default: Pad single digits
  containerClassName = "flex justify-center items-center h-screen bg-gray-900",
  digitClassName = "text-6xl font-bold text-white mx-2",
}) => {
  const [time, setTime] = useState([]);

  // Update the time every `interval`
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      setTime([hours, minutes, seconds]);
    };

    updateTime(); // Set initial time
    const timerId = setInterval(updateTime, interval);

    return () => clearInterval(timerId); // Cleanup on unmount
  }, [interval]);

  return (
    <div className={containerClassName}>
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
  );
};

export default NumericClock; 