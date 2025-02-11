"use client";
import { motion } from "framer-motion";
import React from "react";

type StripedProgressBarProps = {
  progress: number; // Progress value (0 to 100)
  height?: string; // Height of the progress bar (default: "h-4")
  color?: string; // Color of the stripes (default: "bg-blue-500")
  backgroundColor?: string; // Background color (default: "bg-gray-200")
  animationDuration?: number; // Animation duration in seconds (default: 0.5)
  showCounter?: boolean; // Whether to show a counter (default: false)
};

const StripedProgressBar: React.FC<StripedProgressBarProps> = ({
  progress,
  height = "h-4", // Default height for progress bar
  color = "bg-blue-500", // Default stripe color
  backgroundColor = "bg-gray-200", // Default background color
  animationDuration = 0.5,
  showCounter = false,
}) => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
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
            backgroundImage: `repeating-linear-gradient(45deg, ${color} 25%, transparent 25%, transparent 50%, ${color} 50%, ${color} 75%, transparent 75%, transparent)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>
      {showCounter && <div className="text-center text-sm font-medium">{Math.round(counter)}%</div>}
    </div>
  );
};

export default StripedProgressBar;
