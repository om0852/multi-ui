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
        "relative overflow-hidden bg-sky-950",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Ice background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(186, 230, 253, 0.1), rgba(125, 211, 252, 0.05))",
          backdropFilter: "blur(8px)",
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

      {/* Frost patterns */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`frost-${i}`}
          className="absolute"
          style={{
            width: "40%",
            height: "40%",
            left: `${(i % 3) * 30}%`,
            top: `${Math.floor(i / 3) * 60}%`,
            background: "radial-gradient(circle at center, rgba(186, 230, 253, 0.2), transparent)",
            filter: "blur(2px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Crystal formations */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`crystal-${i}`}
          className="absolute"
          style={{
            width: "2px",
            height: "20px",
            background: "linear-gradient(to bottom, rgba(186, 230, 253, 0.4), transparent)",
            left: `${(i * 12) + 10}%`,
            top: "50%",
            transformOrigin: "bottom",
          }}
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 0.8, 0],
            rotate: [(i % 2 === 0 ? -30 : 30), 0, (i % 2 === 0 ? 30 : -30)],
          }}
          transition={{
            duration: 3,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Snowflake particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`snow-${i}`}
          className="absolute w-1 h-1 bg-sky-200 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(0.5px)",
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
            y: [0, 10],
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Ice reflections */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(45deg, transparent 30%, rgba(186, 230, 253, 0.1) 50%, transparent 70%)",
        }}
        animate={{
          backgroundPosition: ["200% 200%", "-100% -100%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Frost overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "repeating-linear-gradient(45deg, rgba(186, 230, 253, 0.03) 0px, rgba(186, 230, 253, 0.03) 1px, transparent 1px, transparent 2px)",
          backgroundSize: "3px 3px",
        }}
      />
    </div>
  );
};

export default Skeleton; 