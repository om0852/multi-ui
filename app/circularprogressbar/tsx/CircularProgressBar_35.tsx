import React from "react";
import { motion } from "framer-motion";

interface CircularProgressBarProps {
  value: number;
  max: number;
  size?: number;
  strokeWidth?: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  value,
  max,
  size = 100,
  strokeWidth = 8,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = (value / max) * 100;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Neumorphic outer shadow */}
      <div
        className="absolute rounded-full bg-gray-100"
        style={{
          width: size,
          height: size,
          boxShadow: "8px 8px 15px #d1d1d1, -8px -8px 15px #ffffff",
        }}
      />

      {/* Inner shadow ring */}
      <div
        className="absolute rounded-full"
        style={{
          width: size - strokeWidth,
          height: size - strokeWidth,
          top: strokeWidth / 2,
          left: strokeWidth / 2,
          boxShadow: "inset 4px 4px 6px #d1d1d1, inset -4px -4px 6px #ffffff",
        }}
      />

      {/* Progress Circle */}
      <svg className="absolute" width={size} height={size}>
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#6366f1"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          strokeLinecap="round"
          style={{
            filter: "drop-shadow(2px 2px 2px rgba(99, 102, 241, 0.2))",
          }}
        />
      </svg>

      {/* Center content */}
      <motion.div
        className="absolute rounded-full bg-gray-50 flex items-center justify-center"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          boxShadow: "inset 2px 2px 4px #d1d1d1, inset -2px -2px 4px #ffffff",
        }}
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-2xl font-semibold text-indigo-500">
            {Math.round(percentage)}
          </span>
          <span className="text-xs text-indigo-400">percent</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CircularProgressBar; 