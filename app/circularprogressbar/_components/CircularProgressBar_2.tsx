"use client";
import { motion } from "framer-motion";
import React from "react";

type CircularProgressBarProps = {
  progress: number; // Progress value (0 to 100)
  size?: number; // Diameter of the circular progress bar (default: 100)
  strokeWidth?: number; // Thickness of the progress bar (default: 10)
  primaryColor?: string; // Primary color for the gradient (default: "#4A90E2")
  secondaryColor?: string; // Secondary color for the gradient (default: "#FF6347")
  backgroundColor?: string; // Background color of the circle (default: "#e6e6e6")
  animationDuration?: number; // Animation duration in seconds (default: 0.5)
  showPercentage?: boolean; // Whether to show the percentage in the center (default: true)
  glowEffect?: boolean; // Adds a glow effect when progress changes (default: true)
};

const EnhancedCircularProgressBar: React.FC<CircularProgressBarProps> = ({
  progress,
  size = 100,
  strokeWidth = 10,
  primaryColor = "#4A90E2",
  secondaryColor = "#FF6347",
  backgroundColor = "#e6e6e6",
  animationDuration = 1,
  showPercentage = true,
  glowEffect = true,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
        overflow: "visible",
      }}
    >
      {/* SVG Circle */}
      <svg width={size} height={size}>
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Gradient Progress Circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`url(#gradient-${primaryColor})`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: animationDuration, ease: "easeInOut" }}
          strokeLinecap="round"
        />
        {/* Gradient Definition */}
        <defs>
          <linearGradient id={`gradient-${primaryColor}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
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
            color: primaryColor,
          }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {progress}%
          </motion.span>
        </div>
      )}

      {/* Glow Effect */}
      {glowEffect && progress > 0 && (
        <motion.div
          className="absolute inset-0"
          style={{
            width: size + 20,
            height: size + 20,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${primaryColor}33, transparent)`,
            filter: "blur(8px)",
            transform: "translate(-10px, -10px)",
            opacity: 0.5,
          }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
};

export default EnhancedCircularProgressBar;

// Usage Example
// <EnhancedCircularProgressBar progress={75} size={150} strokeWidth={12} primaryColor="#6A0DAD" secondaryColor="#FFD700" backgroundColor="#EEE" animationDuration={2} glowEffect />
