"use client";

import React, { useEffect, useState } from "react";

const EnhancedCircularClock = ({
  size = 300,
  borderColor = "border-gray-700",
  hourHandColor = "bg-black",
  minuteHandColor = "bg-blue-700",
  secondHandColor = "bg-red-500",
  backgroundColor = "bg-gray-900",
  markerColor = "bg-gray-400",
  digitalTimeColor = "text-white",
  dateColor = "text-gray-400",
}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const hourAngle = (hours + minutes / 60) * 30;
  const minuteAngle = (minutes + seconds / 60) * 6;
  const secondAngle = seconds * 6;

  const formattedTime = time
    .toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
    .toUpperCase();

  const formattedDate = time.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col items-center">
      {/* Circular Clock */}
      <div
        aria-label="Analog Clock"
        className={`relative rounded-full ${backgroundColor} ${borderColor} border-8 shadow-lg`}
        style={{ width: size, height: size }}
      >
        {/* Hour Markers */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = i * 30 - 90;
          const x = Math.cos((angle * Math.PI) / 180) * (size / 2.5);
          const y = Math.sin((angle * Math.PI) / 180) * (size / 2.5);
          return (
            <div
              key={`marker-${i}`}
              className={`absolute ${markerColor} rounded-full`}
              style={{
                width: size * 0.02,
                height: size * 0.02,
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: "translate(-50%, -50%)",
              }}
            />
          );
        })}

        {/* Hour Hand */}
        <div
          className={`absolute ${hourHandColor} w-3 transform`}
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
          className={`absolute ${minuteHandColor} w-2 transform`}
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
          className={`absolute ${secondHandColor} w-1 transform`}
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
        aria-label={`Digital time: ${formattedTime}`}
        className={`mt-4 ${digitalTimeColor} text-xl font-bold`}
      >
        {formattedTime}
      </div>

      {/* Date */}
      <div
        aria-label={`Current date: ${formattedDate}`}
        className={`mt-2 ${dateColor} text-lg italic`}
      >
        {formattedDate}
      </div>
    </div>
  );
};

export default EnhancedCircularClock; 