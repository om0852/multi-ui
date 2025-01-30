import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CircularProgressBarProps {
  value: number;
  max: number;
  size?: number;
  strokeWidth?: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  value,
  max,
  size = 100,
  strokeWidth = 8,
}) => {
  const radius = (size - strokeWidth) / 2;
  const percentage = (value / max) * 100;
  const [balls, setBalls] = useState<{ id: number; x: number }[]>([]);
  const maxBalls = Math.floor((percentage / 100) * 20); // Maximum number of balls based on percentage

  useEffect(() => {
    const interval = setInterval(() => {
      if (balls.length < maxBalls) {
        setBalls(prev => [
          ...prev,
          {
            id: Date.now(),
            x: Math.random() * (size - 16), // Random x position within container
          }
        ]);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [balls.length, maxBalls, size]);

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Container */}
      <div 
        className="absolute rounded-full overflow-hidden"
        style={{
          width: size,
          height: size,
          border: `${strokeWidth}px solid rgba(59, 130, 246, 0.2)`,
          background: "linear-gradient(to bottom, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.15))",
          clipPath: `circle(${radius}px at ${size/2}px ${size/2}px)`,
        }}
      >
        {/* Falling balls */}
        <AnimatePresence>
          {balls.map(ball => (
            <motion.div
              key={ball.id}
              className="absolute"
              initial={{ y: -20, x: ball.x }}
              animate={{
                y: size,
                x: [
                  ball.x,
                  ball.x + Math.sin(ball.x) * 20,
                  ball.x,
                ],
              }}
              exit={{ opacity: 0 }}
              transition={{
                y: { duration: 1.5, ease: "easeIn" },
                x: { duration: 1.5, ease: "linear" },
              }}
              onAnimationComplete={() => {
                setBalls(prev => prev.filter(b => b.id !== ball.id));
              }}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "radial-gradient(circle at 30% 30%, #60a5fa, #2563eb)",
                boxShadow: "0 0 10px rgba(37, 99, 235, 0.5)",
              }}
            />
          ))}
        </AnimatePresence>

        {/* Accumulated balls at bottom */}
        <div
          className="absolute bottom-0 w-full transition-all duration-300"
          style={{
            height: `${percentage}%`,
            background: "linear-gradient(to bottom, rgba(37, 99, 235, 0.8), rgba(59, 130, 246, 0.9))",
            borderTop: "2px solid rgba(96, 165, 250, 0.6)",
            boxShadow: "0 -4px 12px rgba(37, 99, 235, 0.3)",
          }}
        >
          {/* Surface shine effect */}
          <div
            className="absolute top-0 left-0 w-full h-2"
            style={{
              background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.4), transparent)",
            }}
          />
        </div>
      </div>

      {/* Percentage display */}
      <motion.div
        className="absolute z-10 flex items-center justify-center"
        style={{
          width: size - strokeWidth * 4,
          height: size - strokeWidth * 4,
        }}
      >
        <motion.span
          className="text-xl font-bold text-white"
          style={{
            textShadow: "0 2px 4px rgba(37, 99, 235, 0.5)",
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {Math.round(percentage)}%
        </motion.span>
      </motion.div>
    </div>
  );
};

export default CircularProgressBar; 