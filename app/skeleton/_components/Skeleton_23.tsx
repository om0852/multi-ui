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
        "relative overflow-hidden bg-slate-900",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Night sky background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, rgba(15,23,42,0.8), rgba(15,23,42,1))",
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Fireflies */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`firefly-${i}`}
          className="absolute w-1 h-1 rounded-full bg-yellow-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(0.5px)",
            boxShadow: "0 0 4px rgba(253,224,71,0.8)",
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0, 0.8, 0],
            x: [0, (Math.random() - 0.5) * 30],
            y: [0, (Math.random() - 0.5) * 30],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Light trails */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`trail-${i}`}
          className="absolute"
          style={{
            width: "2px",
            height: "20px",
            background: "linear-gradient(to bottom, rgba(253,224,71,0.4), transparent)",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)",
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.5, 1.5, 0.5],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Ambient glow */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${30 + i * 20}%`,
            height: `${30 + i * 20}%`,
            left: `${30 + Math.random() * 40}%`,
            top: `${30 + Math.random() * 40}%`,
            background: "radial-gradient(circle at center, rgba(253,224,71,0.1), transparent)",
            filter: "blur(10px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20],
            y: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20],
          }}
          transition={{
            duration: 5,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Soft overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, transparent, rgba(15,23,42,0.3))",
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