"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface BinaryDigitalClockProps {
    size?: number; // Clock size in pixels (default: 200)
    borderColor?: string; // Border color of the clock
    hourColor?: string; // Color of the hour hand
    minuteColor?: string; // Color of the minute hand
    secondColor?: string; // Color of the second hand
    backgroundColor?: string; // Background color of the clock
    containerClass?: string; // Custom class for the container
}

const BinaryDigitalClock: React.FC<BinaryDigitalClockProps> = ({
    size = 200,
    borderColor = "border-gray-400",
    hourColor = "bg-gray-800",
    minuteColor = "bg-gray-600",
    secondColor = "bg-red-500",
    backgroundColor = "bg-gray-900",
    containerClass = "", // Default to an empty string
}) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const formatBinary = (num: number): string => num.toString(2).padStart(6, "0");

    const hours = formatBinary(time.getHours());
    const minutes = formatBinary(time.getMinutes());
    const seconds = formatBinary(time.getSeconds());

    return (
        <div className={`flex items-center justify-center h-screen ${backgroundColor} ${containerClass}`}>
            <div className="text-center">
                {/* Binary Digital Clock Display */}
                <motion.div
                    className={`text-4xl font-bold text-green-400 drop-shadow-lg ${borderColor}`}
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <div>{hours}</div>
                    <div>{minutes}</div>
                    <div>{seconds}</div>
                </motion.div>
            </div>
        </div>
    );
};

export default BinaryDigitalClock;
