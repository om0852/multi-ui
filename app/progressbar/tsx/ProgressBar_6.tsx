import React from "react";
import { motion } from "framer-motion";

interface OverlayProgressBarProps {
  progress: number; // Progress value (0-100)
  show: boolean; // Show or hide the overlay
  onClose?: () => void; // Optional close handler
  barColor?: string; // Custom color for the progress bar
  overlayColor?: string; // Background overlay color
}

const ProgressBar_1: React.FC<OverlayProgressBarProps> = ({
  progress,
  show,
  onClose,
  barColor = "bg-green-500",
  overlayColor = "bg-black bg-opacity-50",
}) => {
  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${overlayColor}`}
    >
      <div className="relative w-64 h-64 flex items-center justify-center bg-white rounded-full shadow-lg p-4">
        {/* Close button */}
        {onClose && (
          <button
            className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
            onClick={onClose}
          >
            ✕
          </button>
        )}
        {/* Circular progress bar */}
        <motion.div
          className="relative w-full h-full flex items-center justify-center"
          initial={{ rotate: -90 }}
          animate={{ rotate: 360 * (progress / 100) - 90 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: 0,
          }}
        >
          <div
            className={`w-full h-full border-8 border-t-transparent border-${barColor} border-solid rounded-full`}
            style={{
              transform: `rotate(${progress === 100 ? 0 : -90}deg)`,
              strokeDasharray: 440,
              strokeDashoffset: 440 - (440 * progress) / 100,
            }}
          />
        </motion.div>
        {/* Progress label */}
        <div className="absolute text-center text-lg text-gray-800 font-medium">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar_1;
