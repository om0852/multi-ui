"use client";

import React, { useEffect, useState } from "react";

export interface EnhancedAnalogClockProps {
  size?: number; // Clock size in pixels
  borderColor?: string; // Border color of the clock
  hourHandColor?: string; // Color of the hour hand
  minuteHandColor?: string; // Color of the minute hand
  secondHandColor?: string; // Color of the second hand
  backgroundColor?: string; // Background color of the clock
  numberColor?: string; // Color of the numbers
  markerColor?: string; // Color of the hour markers
  digitalTimeColor?: string; // Color of the digital time
}

const EnhancedAnalogClock: React.FC<EnhancedAnalogClockProps> = ({
  size = 300,
  borderColor = "border-gray-700",
  hourHandColor = "bg-black",
  minuteHandColor = "bg-blue-700",
  secondHandColor = "bg-red-500",
  backgroundColor = "bg-gray-900",
  numberColor = "text-white",
  digitalTimeColor = "text-white",
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

  // Format digital time
  const formattedTime = time
    .toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
    .toUpperCase();

  return (
    <div className="flex flex-col items-center">
      {/* Analog Clock */}
      <div
        className={`relative ${backgroundColor} ${borderColor} border-8 rounded-full shadow-lg`}
        style={{ width: size, height: size }}
      >
        {/* Numbers (1-12) */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = i * 30 - 90; // Offset by -90 degrees for correct alignment
          const x = Math.cos((angle * Math.PI) / 180) * (size / 2.5);
          const y = Math.sin((angle * Math.PI) / 180) * (size / 2.5);
          return (
            <div
              key={`number-${i}`}
              className={`absolute ${numberColor} font-bold text-lg`}
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {i === 0 ? 12 : i}
            </div>
          );
        })}

        {/* Hour Hand */}
        <div
          className={`absolute ${hourHandColor} w-2 rounded transform origin-bottom`}
          style={{
            height: size * 0.2,
            transform: `rotate(${hourAngle}deg)`,
            top: "30%",
            left: "50%",
            transformOrigin: "bottom center",
          }}
        />

        {/* Minute Hand */}
        <div
          className={`absolute ${minuteHandColor} w-1.5 rounded transform origin-bottom`}
          style={{
            height: size * 0.3,
            transform: `rotate(${minuteAngle}deg)`,
            top: "20%",
            left: "50%",
            transformOrigin: "bottom center",
          }}
        />

        {/* Second Hand */}
        <div
          className={`absolute ${secondHandColor} w-1 rounded transform origin-bottom`}
          style={{
            height: size * 0.35,
            transform: `rotate(${secondAngle}deg)`,
            top: "15%",
            left: "50%",
            transformOrigin: "bottom center",
          }}
        />

        {/* Clock Center */}
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

      {/* Digital Time */}
      <div
        className={`mt-4 ${digitalTimeColor} text-xl font-bold`}
      >
        {formattedTime}
      </div>
    </div>
  );
};

export default EnhancedAnalogClock;
