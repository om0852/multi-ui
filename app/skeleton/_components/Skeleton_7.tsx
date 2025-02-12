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
        "relative overflow-hidden bg-black/20 backdrop-blur-sm",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff)",
            "linear-gradient(45deg, #8f00ff, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          opacity: 0.2,
          backgroundSize: "200% 200%",
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2), transparent)",
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
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            transform: `rotate(${i * 60}deg)`,
          }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      <motion.div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
        }}
        animate={{
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Skeleton; 