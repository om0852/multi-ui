import React from "react";
import { motion } from "framer-motion";

interface OverlayProgressBarProps {
  progress: number; // Progress value (0-100)
  show: boolean; // Show or hide the overlay
  onClose?: () => void; // Optional close handler
  barColor?: string; // Custom color for the progress bar
  overlayColor?: string; // Background overlay color
}

const ProgressBar_4: React.FC<OverlayProgressBarProps> = ({
  progress,
  show,
  onClose,
  barColor = "bg-gradient-to-r from-pink-500 to-yellow-500",
  overlayColor = "bg-black bg-opacity-50",
}) => {
  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${overlayColor}`}
    >
      <div className="relative w-4/5 max-w-lg bg-white rounded-lg shadow-lg p-4">
        {/* Close button */}
        {onClose && (
          <button
            className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
            onClick={onClose}
          >
            ✕
          </button>
        )}
        {/* Progress bar with stripes */}
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden relative">
          <motion.div
            className={`h-full ${barColor} animate-stripes`}
            style={{
              backgroundSize: "200% 100%",
              backgroundPosition: "right center",
            }}
            animate={{ width: `${progress}%` }}
            initial={{ width: "0%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>
        {/* Progress label */}
        <div className="mt-2 text-center text-sm text-gray-800 font-medium">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar_4;
