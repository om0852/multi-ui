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

  // Generate dots around the circle
  const numDots = 12;
  const dots = Array.from({ length: numDots }).map((_, i) => {
    const angle = (i * 360) / numDots;
    const x = size / 2 + (radius + 10) * Math.cos((angle * Math.PI) / 180);
    const y = size / 2 + (radius + 10) * Math.sin((angle * Math.PI) / 180);
    return { x, y, delay: i * 0.1 };
  });

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Dots */}
      <svg className="absolute" width={size + 20} height={size + 20}>
        {dots.map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.x}
            cy={dot.y}
            r={2}
            fill="#e5e7eb"
            initial={{ scale: 0 }}
            animate={{
              scale: percentage > (i / numDots) * 100 ? [0.5, 1, 0.5] : 0.5,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: dot.delay,
            }}
          />
        ))}
      </svg>

      {/* Background Circle */}
      <svg className="absolute" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#f3f4f6"
          strokeWidth={strokeWidth}
        />
      </svg>

      {/* Progress Circle */}
      <svg className="absolute" width={size} height={size}>
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#64748b"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1 }}
          strokeLinecap="round"
        />
      </svg>

      {/* Percentage Text */}
      <motion.div
        className="absolute"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xl font-medium text-slate-600">
          {Math.round(percentage)}%
        </span>
      </motion.div>
    </div>
  );
};

export default CircularProgressBar; 