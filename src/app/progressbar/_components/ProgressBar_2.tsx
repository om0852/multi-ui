import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Props interface
interface AnimatedProgressBarProps {
  progress: number; // Value from 0 to 100
}

const ProgressBar_2: React.FC<AnimatedProgressBarProps> = ({ progress }) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  // Simulate progress with a smooth animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentProgress(progress);
    }, 100); // Delay the animation to ensure a smoother experience
    return () => clearTimeout(timeout);
  }, [progress]);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Outer container */}
      <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden shadow-md">
        {/* Animated inner bar */}
        <motion.div
          className={`h-full bg-blue-500 rounded-full`}
          style={{ width: `${currentProgress}%` }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.1 }}
        />
      </div>
      {/* Progress indicator */}
      <div className="mt-2 text-sm text-blue-800 font-medium text-center">
        {currentProgress}%
      </div>
    </div>
  );
};

export default ProgressBar_2;
