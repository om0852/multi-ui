"use client";

import React, { useEffect, useState } from "react";

export interface AnalogClockProps {
  size?: number; // Clock size in pixels (default: 200)
  borderColor?: string; // Border color of the clock
  hourColor?: string; // Color of the hour hand
  minuteColor?: string; // Color of the minute hand
  secondColor?: string; // Color of the second hand
  backgroundColor?: string; // Background color of the clock
}

const AnalogClock: React.FC<AnalogClockProps> = ({
  size = 200,
  borderColor = "border-gray-400",
  hourColor = "bg-gray-800",
  minuteColor = "bg-gray-600",
  secondColor = "bg-red-500",
  backgroundColor = "bg-gray-900",
}) => {
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId); // Cleanup on unmount
  }, []);

  // Calculate angles for clock hands
  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const hourAngle = (hours + minutes / 60) * 30; // 360° / 12 hours
  const minuteAngle = (minutes + seconds / 60) * 6; // 360° / 60 minutes
  const secondAngle = seconds * 6; // 360° / 60 seconds

  return (
    <div
      className={`relative ${backgroundColor} ${borderColor} border-4 rounded-full`}
      style={{ width: size, height: size }}
    >
      {/* Clock face */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute bg-gray-300 w-1 h-6 transform origin-bottom"
          style={{
            transform: `rotate(${i * 30}deg) translateY(-50%)`,
            top: "5%",
            left: "50%",
          }}
        />
      ))}

      {/* Hour hand */}
      <div
        className={`absolute ${hourColor} w-2 rounded transform origin-bottom`}
        style={{
          height: size * 0.25,
          transform: `rotate(${hourAngle}deg)`,
          top: "25%",
          left: "50%",
          transformOrigin: "bottom center",
        }}
      />

      {/* Minute hand */}
      <div
        className={`absolute ${minuteColor} w-1.5 rounded transform origin-bottom`}
        style={{
          height: size * 0.35,
          transform: `rotate(${minuteAngle}deg)`,
          top: "15%",
          left: "50%",
          transformOrigin: "bottom center",
        }}
      />

      {/* Second hand */}
      <div
        className={`absolute ${secondColor} w-1 rounded transform origin-bottom`}
        style={{
          height: size * 0.4,
          transform: `rotate(${secondAngle}deg)`,
          top: "10%",
          left: "50%",
          transformOrigin: "bottom center",
        }}
      />

      {/* Clock center */}
      <div
        className="absolute bg-white rounded-full"
        style={{
          width: size * 0.05,
          height: size * 0.05,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default AnalogClock;
