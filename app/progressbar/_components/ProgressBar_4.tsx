import React from "react";
import { motion } from "framer-motion";

interface OverlayCircularProgressBarProps {
  progress: number; // Progress value (0-100)
  show: boolean; // Show or hide the overlay
  onClose?: () => void; // Optional close handler
  overlayColor?: string; // Background overlay color
  circleColor?: string; // Circle color for progress indicator
  trackColor?: string; // Track color for progress indicator
}

const ProgressBar_4: React.FC<OverlayCircularProgressBarProps> = ({
  progress,
  show,
  onClose,
  overlayColor = "bg-black bg-opacity-60",
  circleColor = "stroke-blue-500",
  trackColor = "stroke-gray-300",
}) => {
  if (!show) return null;

  const circleSize = 120;
  const strokeWidth = 10;
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${overlayColor}`}
    >
      <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
        {/* Close button */}
        {onClose && (
          <button
            className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
            onClick={onClose}
          >
            ✕
          </button>
        )}

        {/* Circular progress indicator */}
        <div className="relative">
          <svg
            width={circleSize}
            height={circleSize}
            className="transform -rotate-90"
          >
            <circle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={radius}
              strokeWidth={strokeWidth}
              className={trackColor}
              fill="none"
            />
            <motion.circle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={radius}
              strokeWidth={strokeWidth}
              className={`${circleColor}`}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
              animate={{ strokeDashoffset: circumference - (progress / 100) * circumference }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-800">
            {progress}%
          </div>
        </div>

        {/* Description or Additional Information */}
        <div className="mt-4 text-sm text-gray-600 text-center">
          Progress is {progress}% complete.
        </div>
      </div>
    </div>
  );
};

export default ProgressBar_4;
