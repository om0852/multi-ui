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
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(to bottom, #ff1f9c, #ff758c, #ff8c42)",
            "linear-gradient(to bottom, #ff758c, #ff8c42, #ff1f9c)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ opacity: 0.2 }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,31,156,0.3) 1px, transparent 1px),
            linear-gradient(0deg, rgba(255,31,156,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "bottom",
        }}
      />

      {/* Moving horizon line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{
          background: "linear-gradient(90deg, #ff1f9c, #ff758c)",
          boxShadow: "0 0 20px rgba(255,31,156,0.8)",
        }}
        animate={{
          y: [0, -100, 0],
          opacity: [1, 0.3, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Neon lines */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-full w-[2px]"
          style={{
            left: `${33 * (i + 1)}%`,
            background: "linear-gradient(to bottom, #ff1f9c, transparent)",
            boxShadow: "0 0 10px rgba(255,31,156,0.8)",
          }}
          animate={{
            height: ["0%", "100%", "0%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Sun effect */}
      <motion.div
        className="absolute w-32 h-32 rounded-full"
        style={{
          background: "radial-gradient(circle, #ff1f9c 0%, transparent 70%)",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          filter: "blur(20px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Scanlines */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 4px)",
          opacity: 0.2,
        }}
        animate={{
          backgroundPosition: ["0 0", "0 -100px"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default Skeleton; 