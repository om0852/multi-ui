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
  const innerRadius = radius - strokeWidth * 2;
  const circumference = 2 * Math.PI * radius;
  const innerCircumference = 2 * Math.PI * innerRadius;
  const percentage = (value / max) * 100;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const innerStrokeDashoffset = innerCircumference - (percentage / 100) * innerCircumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Outer ring */}
      <svg className="absolute top-0 left-0 -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#334155"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#f43f5e"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1 }}
        />
      </svg>

      {/* Inner ring */}
      <svg className="absolute top-0 left-0 rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={innerRadius}
          fill="none"
          stroke="#334155"
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={innerRadius}
          fill="none"
          stroke="#0ea5e9"
          strokeWidth={strokeWidth}
          strokeDasharray={innerCircumference}
          strokeDashoffset={innerStrokeDashoffset}
          strokeLinecap="round"
          initial={{ strokeDashoffset: innerCircumference }}
          animate={{ strokeDashoffset: innerStrokeDashoffset }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </svg>

      {/* Percentage display */}
      <motion.div
        className="absolute flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.8 }}
      >
        <span className="text-2xl font-bold text-white">
          {Math.round(percentage)}%
        </span>
      </motion.div>
    </div>
  );
};

export default CircularProgressBar; 