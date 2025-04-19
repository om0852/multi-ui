"use client";
import { motion } from "framer-motion";
import React from "react";

type TexturedCircularProgressBarProps = {
  progress: number; // Progress value (0 to 100)
  size?: number; // Diameter of the circular progress bar (default: 120)
  strokeWidth?: number; // Thickness of the circular progress bar (default: 12)
  textureImage?: string; // URL of the texture image (default: a patterned SVG)
  ringColor?: string; // Fallback color of the progress ring (default: "#4A90E2")
  backgroundColor?: string; // Background color of the circle (default: "#f0f0f0")
  showPercentage?: boolean; // Whether to display the percentage in the center (default: true)
};

const TexturedCircularProgressBar: React.FC<TexturedCircularProgressBarProps> = ({
  progress,
  size = 120,
  strokeWidth = 12,
  textureImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIHZpZXdCb3g9JzAgMCAxMCAxMCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIGZpbGw9JyNlMGVmZjAnLz48cGF0aCBkPSdNMCAwTDEwIDEwTTEwIDBMIDAgMTAnIHN0cm9rZT0nI2QwZDlkMCcgLz48L3N2Zz4=",
  ringColor = "#4A90E2",
  backgroundColor = "#f0f0f0",
  showPercentage = true,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

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

      {/* Textured Progress Ring */}
      <svg
        width={size}
        height={size}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <defs>
          <pattern
            id="texture-pattern"
            patternUnits="userSpaceOnUse"
            width={10}
            height={10}
          >
            <image
              href={textureImage}
              x="0"
              y="0"
              width="10"
              height="10"
              preserveAspectRatio="none"
            />
          </pattern>
        </defs>
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#texture-pattern)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
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
            color: ringColor,
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

export default TexturedCircularProgressBar;

// Usage Example
// <TexturedCircularProgressBar progress={85} size={150} ringColor="#1E90FF" backgroundColor="#EEE" textureImage="https://via.placeholder.com/10" />
