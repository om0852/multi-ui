"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface BinaryDigitalClockProps {
    borderColor?: string; // Border color of the clock
    hourColor?: string; // Color of the hour hand
    minuteColor?: string; // Color of the minute hand
    secondColor?: string; // Color of the second hand
    backgroundColor?: string; // Background color of the clock
    containerClass?: string; // Custom class for the container
}

const BinaryDigitalClock: React.FC<BinaryDigitalClockProps> = ({
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

const AnalogClock: React.FC<{ className?: string }> = ({ className }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const hours = time.getHours() % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourDegrees = (hours * 30) + (minutes / 2);
    const minuteDegrees = minutes * 6;
    const secondDegrees = seconds * 6;

    return (
        <div className={`flex items-center justify-center h-screen bg-gray-900 ${className || ''}`}>
            <div className="relative w-64 h-64">
                {/* Clock Face */}
                <div className="absolute w-full h-full rounded-full border-4 border-white">
                    {/* Hour Markers */}
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-4 bg-white"
                            style={{
                                transform: `rotate(${i * 30}deg) translateY(2px)`,
                                transformOrigin: '50% 100%',
                                left: 'calc(50% - 2px)',
                            }}
                        />
                    ))}

                    {/* Hour Hand */}
                    <motion.div
                        className="absolute w-1.5 h-16 bg-white rounded-full origin-bottom"
                        style={{
                            left: 'calc(50% - 3px)',
                            bottom: '50%',
                            transformOrigin: 'bottom',
                            rotate: hourDegrees,
                        }}
                    />

                    {/* Minute Hand */}
                    <motion.div
                        className="absolute w-1 h-24 bg-white rounded-full origin-bottom"
                        style={{
                            left: 'calc(50% - 2px)',
                            bottom: '50%',
                            transformOrigin: 'bottom',
                            rotate: minuteDegrees,
                        }}
                    />

                    {/* Second Hand */}
                    <motion.div
                        className="absolute w-0.5 h-28 bg-red-500 rounded-full origin-bottom"
                        style={{
                            left: 'calc(50% - 1px)',
                            bottom: '50%',
                            transformOrigin: 'bottom',
                            rotate: secondDegrees,
                        }}
                    />

                    {/* Center Dot */}
                    <div className="absolute w-3 h-3 bg-white rounded-full"
                        style={{
                            left: 'calc(50% - 6px)',
                            top: 'calc(50% - 6px)',
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default BinaryDigitalClock;
