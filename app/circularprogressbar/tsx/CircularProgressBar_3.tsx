"use client";
import { motion } from "framer-motion";
import React from "react";

type WaveCircularProgressBarProps = {
  progress: number; // Progress value (0 to 100)
  size?: number; // Diameter of the circular progress bar (default: 120)
  waveColor?: string; // Color of the wave (default: "#4A90E2")
  backgroundColor?: string; // Background color of the circle (default: "#e6e6e6")
  showPercentage?: boolean; // Whether to show the percentage in the center (default: true)
};

const WaveCircularProgressBar: React.FC<WaveCircularProgressBarProps> = ({
  progress,
  size = 120,
  waveColor = "#4A90E2",
  backgroundColor = "#e6e6e6",
  showPercentage = true,
}) => {
  const waveHeight = 10; // Height of the wave crest

  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
        overflow: "hidden",
        borderRadius: "50%",
        backgroundColor,
        boxShadow: `inset 0 0 15px rgba(0, 0, 0, 0.1)`,
      }}
    >
      {/* SVG Wave Layer */}
      <svg
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <motion.path
          d={`
            M 0 ${size - (progress / 100) * size}
            Q ${size / 4} ${size - (progress / 100) * size - waveHeight}
              ${size / 2} ${size - (progress / 100) * size}
            T ${size} ${size - (progress / 100) * size}
            T ${1.5 * size} ${size - (progress / 100) * size}
            V ${size} H 0 Z
          `}
          fill={waveColor}
          animate={{
            translateX: [-size / 2, 0], // Seamless wave motion
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

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
            fontSize: size * 0.2,
            fontWeight: "bold",
            color: "white",
            zIndex: 100,
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
    </div>
  );
};

export default WaveCircularProgressBar;

// Usage Example
// <WaveCircularProgressBar progress={60} size={150} waveColor="#1E90FF" backgroundColor="#F0F0F0" />
