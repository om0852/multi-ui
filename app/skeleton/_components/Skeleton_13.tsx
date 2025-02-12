"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface SkeletonProps {
  width: string;
  height: string;
  borderRadius?: string;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  borderRadius = "rounded-md",
  className = "",
}) => {
  return (
    <div
      className={clsx(
        "relative overflow-hidden bg-gray-900",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Base glow effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0,255,0,0.1), transparent)",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Digital rain columns */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 w-4 text-center text-green-500 text-xs opacity-0"
          style={{
            left: `${i * 10}%`,
            fontFamily: "monospace",
            textShadow: "0 0 5px #00ff00",
          }}
          initial={{ y: -20 }}
          animate={{
            y: ["0%", "100%"],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "linear",
          }}
        >
          {Array.from({ length: 5 }).map((_, j) => (
            <motion.div
              key={j}
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: j * 0.1,
              }}
            >
              {String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))}
            </motion.div>
          ))}
        </motion.div>
      ))}

      {/* Horizontal scan effect */}
      <motion.div
        className="absolute left-0 w-full h-[2px]"
        style={{
          background: "linear-gradient(90deg, transparent, #00ff00, transparent)",
          filter: "blur(2px)",
        }}
        animate={{
          top: ["0%", "100%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Matrix code overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, rgba(0,255,0,0.1) 0px, transparent 2px, transparent 4px)",
          backgroundSize: "100% 4px",
          opacity: 0.3,
        }}
      />

      {/* Glitch effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "rgba(0,255,0,0.1)",
          mixBlendMode: "overlay",
        }}
        animate={{
          opacity: [0, 0.3, 0],
          x: [-2, 2, -2],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          ease: "steps(3)",
        }}
      />

      {/* CRT flicker */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "rgba(255,255,255,0.03)",
          mixBlendMode: "overlay",
        }}
        animate={{
          opacity: [0, 0.1, 0],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          ease: "steps(2)",
        }}
      />
    </div>
  );
};

export default Skeleton; 