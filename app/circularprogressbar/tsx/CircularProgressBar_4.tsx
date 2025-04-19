"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type ParticleCircularProgressBarProps = {
  progress: number; // Progress value (0 to 100)
  size?: number; // Diameter of the circular progress bar (default: 120)
  ringColor?: string; // Color of the progress ring (default: "#4A90E2")
  backgroundColor?: string; // Background color of the circle (default: "#e6e6e6")
  particleColor?: string; // Color of the particles (default: "#FFD700")
  showPercentage?: boolean; // Whether to show the percentage in the center (default: true)
};

const ParticleCircularProgressBar: React.FC<ParticleCircularProgressBarProps> = ({
  progress,
  size = 120,
  ringColor = "#4A90E2",
  backgroundColor = "#e6e6e6",
  particleColor = "#FFD700",
  showPercentage = true,
}) => {
  const [hydrated, setHydrated] = useState(false);
  const strokeWidth = 10; // Thickness of the progress ring
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    setHydrated(true); // Mark component as hydrated
  }, []);

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
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

      {/* Animated Progress Ring */}
      <svg
        width={size}
        height={size}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={ringColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          initial={false}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </svg>

      {/* Particle Animation */}
      {hydrated && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <motion.div
              key={index}
              style={{
                position: "absolute",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: particleColor,
                top: "50%",
                left: "50%",
              }}
              initial={{
                opacity: 0,
                x: Math.cos((index / 20) * 2 * Math.PI) * radius,
                y: Math.sin((index / 20) * 2 * Math.PI) * radius,
              }}
              animate={{
                opacity: [0, 1, 0],
                x: Math.cos((index / 20) * 2 * Math.PI) * radius * (progress / 100),
                y: Math.sin((index / 20) * 2 * Math.PI) * radius * (progress / 100),
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                delay: index * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Center Text */}
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
            fontSize: `${size * 0.2}px`,
            fontWeight: "bold",
            color: ringColor,
          }}
        >
          {progress}%
        </div>
      )}
    </div>
  );
};

export default ParticleCircularProgressBar;

// Usage Example
// <ParticleCircularProgressBar progress={75} size={150} ringColor="#00BFFF" particleColor="#FF4500" backgroundC
