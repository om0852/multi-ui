import React from "react";
import { motion } from "framer-motion";

const ProgressBar_12 = ({
  progress,
  show,
  onClose,
  barColor = "bg-yellow-400",
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
        {/* Retro-style loading bar */}
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className={`h-full ${barColor} bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500`}
            animate={{
              width: `${progress}%`,
              opacity: progress === 100 ? 0 : 1,
            }}
            initial={{ width: "0%", opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: 0,
              repeatType: "reverse",
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

export default ProgressBar_12; 