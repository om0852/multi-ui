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
        "relative overflow-hidden bg-indigo-950",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Nebula background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, #312e81, #1e1b4b, #0c0a1f)",
            "radial-gradient(circle at 70% 50%, #1e1b4b, #312e81, #0c0a1f)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Gas clouds */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`cloud-${i}`}
          className="absolute"
          style={{
            width: "60%",
            height: "60%",
            background: `radial-gradient(circle at center, rgba(${
              i % 2 ? "199, 210, 254" : "216, 180, 254"
            }, 0.15), transparent 70%)`,
            filter: "blur(20px)",
            left: `${(i % 3) * 30}%`,
            top: `${Math.floor(i / 3) * 30}%`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            delay: i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Star clusters */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            background: "white",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: "0 0 3px white",
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1 + Math.random() * 2,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Cosmic rays */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`ray-${i}`}
          className="absolute"
          style={{
            width: "100%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(199, 210, 254, 0.3), transparent)",
            top: `${(i + 1) * 12}%`,
            transform: `rotate(${i * 45}deg)`,
            transformOrigin: "center",
            filter: "blur(1px)",
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Nebula glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(199, 210, 254, 0.1), transparent)",
          mixBlendMode: "screen",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Skeleton; 