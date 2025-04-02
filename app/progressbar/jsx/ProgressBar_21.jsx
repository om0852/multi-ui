"use client";
import { motion } from "framer-motion";
import React from "react";

const diagonalStripesKeyframes = `
  @keyframes moveDiagonalStripes {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 100%;
    }
  }
`;

const ProgressBar_21 = ({
  progress,
  height = "h-4",
  color = "bg-red-500",
  backgroundColor = "bg-gray-200",
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
        className={`${backgroundColor} ${height} w-full relative overflow-hidden`}
        style={{ borderRadius: "8px" }}
      >
        <motion.div
          className={`relative ${height} ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: animationDuration,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, ${color} 20%, transparent 20%, transparent 40%, ${color} 40%, ${color} 60%, transparent 60%, transparent 80%)`,
            backgroundSize: "20px 20px", // Creates diagonal stripes
            animation: `${diagonalStripesKeyframes} 1.5s linear infinite`,
          }}
        />
      </div>
      {showCounter && <div className="text-center text-sm font-medium">{Math.round(counter)}%</div>}
    </div>
  );
};

export default ProgressBar_21; 