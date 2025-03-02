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
        "relative overflow-hidden backdrop-blur-sm",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/20 via-sky-100/30 to-white/20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)",
            "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 100%)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-full"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
            transform: `rotate(${i * 45}deg)`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <motion.div
        className="absolute inset-0"
        style={{
          boxShadow: "inset 0 0 20px rgba(255,255,255,0.5)",
          background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2), transparent 70%)",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
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
