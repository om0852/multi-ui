"use client";
import { motion } from "framer-motion";
import React from "react";

const ProgressBar_18 = ({
  progress,
  height = "h-4",
  color = "bg-blue-500",
  backgroundColor = "bg-gray-200",
  rounded = true,
  animationDuration = 0.5,
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
          className={`${color} ${height} ${rounded ? "rounded-full" : ""} relative`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: animationDuration,
            ease: "easeInOut",
          }}
          style={{
            boxShadow: `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`,
            filter: "blur(2px)", // Adds a blur effect for the neon glow
          }}
        />
      </div>
      {showCounter && <div className="text-center text-sm font-medium">{Math.round(counter)}%</div>}
    </div>
  );
};

export default ProgressBar_18; 