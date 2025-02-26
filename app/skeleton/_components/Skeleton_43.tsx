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
        "relative overflow-hidden bg-emerald-950",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Circuit background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "#064e3b",
          opacity: 0.7,
        }}
      />

      {/* Circuit paths */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`path-${i}`}
          className="absolute"
          style={{
            height: "2px",
            background: "linear-gradient(90deg, transparent, rgba(52, 211, 153, 0.5), transparent)",
            width: "40%",
            left: `${(i % 4) * 25}%`,
            top: `${Math.floor(i / 4) * 60 + 20}%`,
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scaleX: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Vertical paths */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`vpath-${i}`}
          className="absolute"
          style={{
            width: "2px",
            background: "linear-gradient(to bottom, transparent, rgba(52, 211, 153, 0.5), transparent)",
            height: "50%",
            left: `${(i + 1) * 15}%`,
            top: "25%",
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Connection nodes */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute rounded-full bg-emerald-400"
          style={{
            width: "6px",
            height: "6px",
            left: `${(i % 4) * 25 + 15}%`,
            top: `${Math.floor(i / 4) * 30 + 20}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
            boxShadow: [
              "0 0 2px rgba(52, 211, 153, 0.5)",
              "0 0 4px rgba(52, 211, 153, 0.8)",
              "0 0 2px rgba(52, 211, 153, 0.5)",
            ],
          }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Pulse signals */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute bg-emerald-400/30"
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            left: `${(i % 3) * 30 + 15}%`,
            top: `${Math.floor(i / 3) * 60 + 20}%`,
          }}
          animate={{
            scale: [0, 3, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Circuit overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(52, 211, 153, 0.1), transparent)",
          mixBlendMode: "screen",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Skeleton;