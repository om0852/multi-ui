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
        "relative overflow-hidden bg-gradient-to-br from-gray-300 to-gray-400",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Base metallic layer */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, #c0c0c0, #e8e8e8, #c0c0c0)",
            "linear-gradient(45deg, #e8e8e8, #c0c0c0, #e8e8e8)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Liquid flow effect */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
            transform: `rotate(${i * 36}deg)`,
          }}
          animate={{
            x: ["-200%", "200%"],
          }}
          transition={{
            duration: 2.5,
            delay: i * 0.2,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
          }}
        />
      ))}

      {/* Chrome reflection */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Moving highlights */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)",
        }}
        animate={{
          backgroundPosition: ["200% 200%", "-100% -100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Surface tension effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          boxShadow: "inset 0 0 20px rgba(255,255,255,0.5)",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Skeleton; 