"use client"
import { motion } from "framer-motion";
import React from "react";
type ProgressBarProps = {
    progress: number; // Progress value (0 to 100)
    height?: string; // Bar height (default: "h-4")
    color?: string; // Bar color (default: "bg-blue-500")
    backgroundColor?: string; // Background color (default: "bg-gray-200")
    rounded?: boolean; // Whether the bar should have rounded corners (default: true)
    animationDuration?: number; // Animation duration in seconds (default: 0.5)
    onStart?: () => void; // Callback when the animation starts
    onComplete?: () => void; // Callback when the animation completes
    showCounter?: boolean; // Whether to show a counter (default: false)
  };
  const ProgressBar: React.FC<ProgressBarProps> = ({
    progress,
    height = "h-4",
    color = "bg-blue-500",
    backgroundColor = "bg-gray-200",
    rounded = true,
    animationDuration = 0.5,
    onStart,
    onComplete,
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
          className={`${backgroundColor} ${height} w-full ${rounded ? "rounded-full" : ""} overflow-hidden`}
        >
          <motion.div
            className={`${color} ${height} ${rounded ? "rounded-full" : ""}`}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: animationDuration }}
            onAnimationStart={onStart}
            onAnimationComplete={onComplete}
          />
        </div>
        {showCounter && <div className="text-center text-sm font-medium">{Math.round(counter)}%</div>}
      </div>
    );
  };
  export default ProgressBar
// Usage Example
// <ProgressBar 
//   progress={75} 
//   height="h-6" 
//   color="bg-green-500" 
//   backgroundColor="bg-gray-300" 
//   rounded={false} 
//   animationDuration={1} 
//   onStart={() => console.log("Animation started")} 
//   onComplete={() => console.log("Animation completed")} 
// />
