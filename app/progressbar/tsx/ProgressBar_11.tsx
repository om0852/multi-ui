import React from "react";
import { motion } from "framer-motion";

interface OverlayProgressBarProps {
  progress: number; // Progress value (0-100)
  show: boolean; // Show or hide the overlay
  onClose?: () => void; // Optional close handler
  barColor?: string; // Custom color for the progress bar
  overlayColor?: string; // Background overlay color
}

const ProgressBar_6: React.FC<OverlayProgressBarProps> = ({
  progress,
  show,
  onClose,
  barColor = "bg-indigo-600",
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
        {/* Line progress bar with pulsing effect */}
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className={`h-full ${barColor}`}
            animate={{
              width: `${progress}%`,
              scaleX: progress === 100 ? 1.05 : 1,
            }}
            initial={{ width: "0%", scaleX: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              repeat: 0,
              scale: {
                repeat: Infinity,
                duration: 0.8,
                repeatType: "reverse",
              },
            }}
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

export default ProgressBar_6;
