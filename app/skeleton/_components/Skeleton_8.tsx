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
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, #000428, #004e92)",
            "linear-gradient(45deg, #004e92, #000428)",
          ],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0,78,146,0.3), transparent)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
        }}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default Skeleton;