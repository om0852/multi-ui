"use client";
import { motion } from "framer-motion";
import React from "react";

const ProgressBar_10 = ({
  progress,
  height = "h-4",
  color = "bg-gradient-to-r from-pink-500 to-yellow-500",
  backgroundColor = "bg-gray-200",
  rounded = true,
  animationDuration = 0.5,
  onStart,
  onComplete,
  showCounter = false,
}) => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    let timer;
    if (showCounter && progress > 0) {
      const increment = progress / (animationDuration * 60); // Assuming 60 FPS
      timer = setInterval(() => {
        setCounter((prev) => {
          if (prev + increment >= progress) {
            clearInterval(timer);
            return progress;
          }
          return prev + increment;
        });
      }, 1000 / 60);
    } else {
      setCounter(progress);
    }
    return () => clearInterval(timer);
  }, [progress, animationDuration, showCounter]);

  return (
    <div className="space-y-2">
      <div
        className={`${backgroundColor} ${height} w-full ${rounded ? "rounded-full" : ""} overflow-hidden`}
      >
        <motion.div
          className={`${color} ${height} ${rounded ? "rounded-full" : ""}`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: animationDuration,
            ease: "easeInOut",
          }}
          onAnimationStart={onStart}
          onAnimationComplete={onComplete}
        />
      </div>
      {showCounter && <div className="text-center text-sm font-medium">{Math.round(counter)}%</div>}
    </div>
  );
};

export default ProgressBar_10; 