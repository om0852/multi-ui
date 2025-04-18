"use client";
import React, { useEffect, useState } from "react";

const RetroLEDClock = ({ className }: { className?: string }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (num: number): string => num.toString().padStart(2, "0");

  return (
    <div className={className}>
      {formatTime(time.getHours())}:{formatTime(time.getMinutes())}:{formatTime(time.getSeconds())}
    </div>
  );
};

export default RetroLEDClock;
