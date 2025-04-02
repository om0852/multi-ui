"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BinaryDigitalClock = ({
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

    const formatBinary = (num) => num.toString(2).padStart(6, "0");

    const hours = formatBinary(time.getHours());
    const minutes = formatBinary(time.getMinutes());
    const seconds = formatBinary(time.getSeconds());

    return (
        <div className={`flex items-center justify-center h-screen ${backgroundColor} ${containerClass}`}>
            <div className="text-center">
                {/* Binary Digital Clock Display */}
                <motion.div
                    className={`text-4xl font-bold ${hourColor} drop-shadow-lg ${borderColor}`}
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <div>{hours}</div>
                    <div className={`${minuteColor}`}>{minutes}</div>
                    <div className={`${secondColor}`}>{seconds}</div>
                </motion.div>
            </div>
        </div>
    );
};

export default BinaryDigitalClock; 