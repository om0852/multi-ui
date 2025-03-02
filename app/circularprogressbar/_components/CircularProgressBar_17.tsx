import React from "react";
import { motion } from "framer-motion";

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
  const percentage = (value / max) * 100;
  const dots = 40; // Number of dots
  const activeDots = Math.floor((percentage / 100) * dots);

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Background circle */}
      <div className="absolute w-full h-full rounded-full border-4 border-gray-700" />

      {/* Dots */}
      {Array.from({ length: dots }).map((_, index) => {
        const angle = (index / dots) * 360;
        const isActive = index < activeDots;
        return (
          <motion.div
            key={index}
            className={`absolute w-2 h-2 rounded-full ${isActive ? 'bg-emerald-400' : 'bg-gray-600'}`}
            style={{
              transformOrigin: "center",
              transform: `rotate(${angle}deg) translateY(-${size / 2}px)`,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: isActive ? 1 : 0.5 }}
            transition={{
              duration: 0.3,
              delay: index * 0.02,
              type: "spring",
            }}
          />
        );
      })}

      {/* Center content */}
      <motion.div
        className="absolute bg-gray-800 rounded-full flex items-center justify-center"
        style={{ width: size * 0.7, height: size * 0.7 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        <motion.span
          className="text-2xl font-bold text-emerald-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {Math.round(percentage)}%
        </motion.span>
      </motion.div>

      {/* Rotating glow effect */}
      <motion.div
        className="absolute w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="w-4 h-4 bg-emerald-400 rounded-full absolute"
          style={{
            filter: "blur(8px)",
            top: -strokeWidth,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </motion.div>
    </div>
  );
};

export default CircularProgressBar; 