"use client";
import { motion } from "framer-motion";
import React from "react";

type RotatingSegmentCircularProgressBarProps = {
  progress: number; // Progress value (0 to 100)
  size?: number; // Diameter of the circular progress bar (default: 120)
  strokeWidth?: number; // Thickness of the progress segments (default: 8)
  segmentColor?: string; // Color of the segments (default: "#4A90E2")
  backgroundColor?: string; // Background color of the circle (default: "#f0f0f0")
  showPercentage?: boolean; // Whether to display the percentage in the center (default: true)
  segments?: number; // Number of segments (default: 12)
};

const RotatingSegmentCircularProgressBar: React.FC<RotatingSegmentCircularProgressBarProps> = ({
  progress,
  size = 120,
  strokeWidth = 8,
  segmentColor = "#4A90E2",
  backgroundColor = "#f0f0f0",
  showPercentage = true,
  segments = 12,
}) => {
  const radius = (size - strokeWidth) / 2;
  const segmentAngle = (2 * Math.PI) / segments;
  const totalOffset = (progress / 100) * segments;

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

      {/* Rotating Segments */}
      <svg
        width={size}
        height={size}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {Array.from({ length: segments }).map((_, index) => {
          const startAngle = segmentAngle * index;
          const endAngle = segmentAngle * (index + 1);

          const startX = size / 2 + radius * Math.cos(startAngle);
          const startY = size / 2 + radius * Math.sin(startAngle);

          const endX = size / 2 + radius * Math.cos(endAngle);
          const endY = size / 2 + radius * Math.sin(endAngle);

          return (
            <motion.path
              key={index}
              d={`M ${size / 2},${size / 2} L ${startX},${startY} A ${radius},${radius} 0 0,1 ${endX},${endY} Z`}
              fill={index < totalOffset ? segmentColor : "transparent"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: index * 0.05,
                ease: "easeInOut",
              }}
            />
          );
        })}
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
            fontSize: `${size * 0.2}px`,
            fontWeight: "bold",
            color: "red",
          }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {progress}%
          </motion.span>
        </div>
      )}

      {/* Additional Animation: Rotating Effect */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: "transparent",
          border: `${strokeWidth}px solid ${segmentColor}`,
          zIndex: 10,
        }}
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default RotatingSegmentCircularProgressBar;

// Usage Example
// <RotatingSegmentCircularProgressBar progress={75} size={150} segmentColor="#FFD700" backgroundColor="#EEE" />
