"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type FillingProgressBarProps = {
  progress: number; // Progress value (0 to 100)
  text?: string; // Custom text to display
  animationDuration?: number; // Animation duration in seconds (default: 0.5)
  showCounter?: boolean; // Whether to show a counter (default: false)
};

const FillingProgressBar: React.FC<FillingProgressBarProps> = ({
  progress,
  text = "Loading...",
  animationDuration = 0.5,
  showCounter = true,
}) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const increment = progress / (animationDuration * 60); // Assuming 60 FPS
    let current = 0;

    if (showCounter) {
      timer = setInterval(() => {
        current += increment;
        if (current >= progress) {
          clearInterval(timer);
          setCurrentProgress(progress);
        } else {
          setCurrentProgress(current);
        }
      }, 1000 / 60);
    } else {
      setCurrentProgress(progress);
    }

    return () => clearInterval(timer);
  }, [progress, animationDuration, showCounter]);

  return (
    <div className="flex items-center justify-center space-x-2 w-full">
      <div className="text-xl font-medium text-gray-700">{text}</div>
      <motion.div
        className="text-xl font-medium text-blue-500"
        animate={{
          width: ["0%", "100%"], // Filling effect
        }}
        transition={{
          duration: animationDuration,
          ease: "easeInOut",
        }}
      >
        {Math.round(currentProgress)}%
      </motion.div>
    </div>
  );
};

export default FillingProgressBar;
