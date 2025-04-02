"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ChronographClock: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const [countdown, setCountdown] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
        if (countdown > 0) {
          setCountdown((prevCountdown) => Math.max(prevCountdown - 10, 0));
        }
      }, 10);
    } else if (!isRunning && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, countdown]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
    setCountdown(0);
  };

  const handleLap = () => {
    setLaps([...laps, time]);
  };

  const handleSetCountdown = (minutes: number) => {
    setCountdown(minutes * 60000);
    setTime(0);
    setLaps([]);
  };

  const formatTime = (time: number): string => {
    const milliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    const hours = `0${Math.floor(time / 3600000)}`.slice(-2);
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Chronograph Clock
      </motion.h1>
      <motion.div
        className="text-6xl font-mono mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {formatTime(countdown > 0 ? countdown : time)}
      </motion.div>
      <div className="flex space-x-4 mb-8">
        <button
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          onClick={handleStartStop}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleLap}
          disabled={!isRunning}
        >
          Lap
        </button>
      </div>
      <div className="flex space-x-4 mb-8">
        <button
          className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
          onClick={() => handleSetCountdown(1)}
        >
          Set 1 Min Countdown
        </button>
        <button
          className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
          onClick={() => handleSetCountdown(5)}
        >
          Set 5 Min Countdown
        </button>
      </div>
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-medium mb-4">Laps</h2>
        <ul className="list-decimal list-inside">
          {laps.map((lap, index) => (
            <li key={index} className="mb-2">
              {formatTime(lap)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChronographClock;

