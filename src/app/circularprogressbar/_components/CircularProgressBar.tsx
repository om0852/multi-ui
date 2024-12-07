"use client"
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

type CircularProgressBarProps = {
  progress: number; // Progress value (0 to 100)
  size?: number; // Diameter of the circular progress bar (default: 100)
  strokeWidth?: number; // Thickness of the progress bar (default: 10)
  color?: string; // Color of the progress bar (default: "#4A90E2")
  backgroundColor?: string; // Background color of the circle (default: "#e6e6e6")
  animationDuration?: number; // Animation duration in seconds (default: 0.5)
  showPercentage?: boolean; // Whether to show the percentage in the center (default: true)
  onStart?: () => void; // Callback when the animation starts
  onComplete?: () => void; // Callback when the animation completes
};

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  progress,
  size = 100,
  strokeWidth = 10,
  color = "#4A90E2",
  backgroundColor = "#e6e6e6",
  animationDuration = 0.5,
  showPercentage = true,
  onStart,
  onComplete,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    if (onStart) onStart();

    const intervalDuration = (animationDuration * 1000) / progress;
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setCurrentProgress(current);
      if (current >= progress) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [progress, animationDuration, onStart, onComplete]);

  return (
    <div style={{ width: size, height: size, position: "relative" }}>
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: animationDuration }}
          onAnimationStart={onStart}
          onAnimationComplete={onComplete}
          strokeLinecap="round"
        />
      </svg>
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
            color,
          }}
        >
          {currentProgress}%
        </div>
      )}
    </div>
  );
};

export default CircularProgressBar;

// Usage Example
// <CircularProgressBar progress={75} size={120} strokeWidth={12} color="#FF6347" backgroundColor="#ddd" animationDuration={1.5} onStart={() => console.log("Animation started")} onComplete={() => console.log("Animation completed")} />