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
      {/* Background Circle with dashed stroke */}
      <svg className="absolute top-0 left-0" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          strokeDasharray="4 4"
        />
      </svg>

      {/* Progress Circle */}
      <svg className="absolute top-0 left-0" width={size} height={size}>
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#6366f1"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 20} ${circumference / 20}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ 
            strokeDashoffset,
            rotate: 360
          }}
          transition={{ 
            strokeDashoffset: { duration: 1, ease: "easeOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          style={{ transformOrigin: "center" }}
        />
      </svg>

      {/* Minimal Percentage Display */}
      <div className="absolute flex flex-col items-center">
        <motion.span
          className="text-lg font-medium text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {Math.round(percentage)}
        </motion.span>
        <motion.span
          className="text-xs text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          percent
        </motion.span>
      </div>

      {/* Decorative dots */}
      {[0, 90, 180, 270].map((angle) => (
        <motion.div
          key={angle}
          className="absolute w-1.5 h-1.5 bg-indigo-400 rounded-full"
          style={{
            transform: `rotate(${angle}deg) translateY(-${size / 2}px)`,
            transformOrigin: "center",
          }}
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: angle / 360,
          }}
        />
      ))}
    </div>
  );
};

export default CircularProgressBar; 