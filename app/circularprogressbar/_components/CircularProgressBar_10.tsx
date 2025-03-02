import React from "react";
import { motion } from "framer-motion";

interface CircularProgressBarProps {
  value: number; // Current value
  max: number; // Maximum value
  size?: number; // Size of the circular progress bar (in pixels)
  strokeWidth?: number; // Thickness of the circular stroke
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  value,
  max,
  size = 100,
  strokeWidth = 8,
}) => {
  const radius = (size - strokeWidth) / 2; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const percentage = (value / max) * 100; // Calculate percentage
  const strokeDashoffset = circumference - (percentage / 100) * circumference; // Offset for progress

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Pulsating Background Effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full rounded-full bg-blue-100"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Background Circle */}
      <svg className="absolute top-0 left-0" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e5e7eb" // Tailwind's gray-200
          strokeWidth={strokeWidth}
        />
      </svg>

      {/* Foreground Circle (Progress) */}
      <svg className="absolute top-0 left-0" width={size} height={size}>
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#3b82f6" // Tailwind's blue-500
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1 }}
          strokeLinecap="round" // Rounded ends for the progress stroke
        />
      </svg>

      {/* Percentage Text with Scale Animation */}
      <motion.div
        className="absolute text-center"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-xl font-semibold text-blue-500">
          {Math.round(percentage)}%
        </span>
      </motion.div>
    </div>
  );
};

export default CircularProgressBar;
