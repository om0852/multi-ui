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
      {/* Outer rotating segments */}
      <motion.div
        className="absolute w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        {[0, 90, 180, 270].map((rotation, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-full"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <div
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              style={{
                top: -1,
                left: "50%",
                transform: "translateX(-50%)",
                boxShadow: "0 0 10px #60a5fa",
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Tech pattern background */}
      <div className="absolute w-full h-full rounded-full border border-blue-200/20" />
      <div
        className="absolute rounded-full border border-blue-400/20"
        style={{
          width: size - strokeWidth * 2,
          height: size - strokeWidth * 2,
        }}
      />

      {/* Background Circle */}
      <svg className="absolute" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#1e3a8a"
          strokeWidth={strokeWidth}
          className="opacity-20"
        />
      </svg>

      {/* Progress Circle */}
      <svg className="absolute" width={size} height={size}>
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#3b82f6"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference / 40} ${circumference / 40}`}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5 }}
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0 0 4px #3b82f6)" }}
        />
      </svg>

      {/* Center tech circle */}
      <motion.div
        className="absolute bg-blue-900/20 rounded-full flex items-center justify-center"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
          border: "1px solid rgba(59, 130, 246, 0.2)",
        }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(59, 130, 246, 0)",
            "0 0 0 10px rgba(59, 130, 246, 0.1)",
            "0 0 0 0 rgba(59, 130, 246, 0)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.span
          className="text-xl font-bold text-blue-400"
          animate={{
            textShadow: [
              "0 0 4px rgba(59, 130, 246, 0.4)",
              "0 0 8px rgba(59, 130, 246, 0.6)",
              "0 0 4px rgba(59, 130, 246, 0.4)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {Math.round(percentage)}%
        </motion.span>
      </motion.div>
    </div>
  );
};

export default CircularProgressBar; 