"use client";
import { motion } from "framer-motion";
import React from "react";

type RadialProgressBarProps = {
  progress: number; // Progress value (0 to 100)
  size?: number; // Diameter of the circular progress bar (default: 120)
  strokeWidth?: number; // Thickness of the progress ring (default: 10)
  progressColor?: string; // Color of the progress (default: "#4A90E2")
  backgroundColor?: string; // Background color of the circle (default: "#f0f0f0")
  showPercentage?: boolean; // Whether to show the percentage in the center (default: true)
};

const RadialProgressBar: React.FC<RadialProgressBarProps> = ({
  progress,
  size = 120,
  strokeWidth = 10,
  progressColor = "#4A90E2",
  backgroundColor = "#f0f0f0",
  showPercentage = true,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  // Calculate the position of the dot based on the progress
  const angle = (progress / 100) * 2 * Math.PI; // Angle in radians
  const x = size / 2 + radius * Math.cos(angle); // X position
  const y = size / 2 + radius * Math.sin(angle); // Y position

  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
      }}
    >
      {/* Background Circle */}
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
      </svg>

      {/* Animated Gradient Progress Ring */}
      <svg
        width={size}
        height={size}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#gradient)`}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          animate={{
            strokeDashoffset: offset,
          }}
          transition={{
            duration: 2, // Smooth transition for gradual filling
            ease: "easeInOut",
          }}
        />
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6347" />
            <stop offset="100%" stopColor="#4A90E2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center Percentage */}
      {showPercentage && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: size * 0.2,
            fontWeight: "bold",
            color: progressColor,
          }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {progress}%
          </motion.span>
        </div>
      )}

      {/* Bouncing Circle (Highlighting Progress) */}
      <motion.div
        style={{
          position: "absolute",
          top: `${y - 10}px`, // Adjusted for centering the dot
          left: `${x - 10}px`, // Adjusted for centering the dot
          width: "20px", // Adjust the size of the dot
          height: "20px", // Adjust the size of the dot
          backgroundColor: progressColor,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)", // Ensures the dot is centered
        }}
        animate={{
          y: [0, -10, 0], // Bouncing effect
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default RadialProgressBar;

// Usage Example
// <RadialProgressBar progress={65} size={150} progressColor="#1E90FF" backgroundColor="#EEE" />
