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
      {/* Split background circles */}
      <svg className="absolute top-0 left-0" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#f0f9ff"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 2} ${circumference / 2}`}
          transform={`rotate(-45 ${size / 2} ${size / 2})`}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e0f2fe"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 2} ${circumference / 2}`}
          transform={`rotate(135 ${size / 2} ${size / 2})`}
        />
      </svg>

      {/* Split progress circles */}
      <svg className="absolute top-0 left-0" width={size} height={size}>
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#0ea5e9"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 2} ${circumference / 2}`}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-45 ${size / 2} ${size / 2})`}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#0284c7"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 2} ${circumference / 2}`}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(135 ${size / 2} ${size / 2})`}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        />
      </svg>

      {/* Center display */}
      <motion.div
        className="absolute bg-white rounded-full shadow-lg flex items-center justify-center"
        style={{ width: size * 0.6, height: size * 0.6 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.span
            className="text-2xl font-bold text-sky-600"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {Math.round(percentage)}%
          </motion.span>
          <span className="text-xs text-sky-400">Complete</span>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      {[0, 120, 240].map((angle, index) => (
        <motion.div
          key={angle}
          className="absolute w-2 h-2"
          style={{
            transform: `rotate(${angle}deg) translateY(-${size * 0.4}px)`,
            transformOrigin: "center",
          }}
          animate={{
            scale: [1, 0, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        >
          <div className="w-full h-full bg-sky-400 rounded-full" />
        </motion.div>
      ))}
    </div>
  );
};

export default CircularProgressBar; 