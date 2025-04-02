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
      {/* Cosmic background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, #312e81, #1e1b4b, #1e1b4b)",
            "radial-gradient(circle at 70% 50%, #1e1b4b, #312e81, #1e1b4b)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dust particles */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute rounded-full bg-indigo-200"
          style={{
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)",
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 0.6, 0],
            x: [0, (Math.random() - 0.5) * 100],
            y: [0, (Math.random() - 0.5) * 100],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Nebula clouds */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`nebula-${i}`}
          className="absolute"
          style={{
            width: "100%",
            height: "60%",
            background: `radial-gradient(ellipse at center, rgba(${
              i % 2 ? "167, 139, 250" : "129, 140, 248"
            }, 0.2), transparent 70%)`,
            top: `${20 + i * 20}%`,
            filter: "blur(20px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: ["-10%", "10%", "-10%"],
          }}
          transition={{
            duration: 10,
            delay: i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Star clusters */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`cluster-${i}`}
          className="absolute"
          style={{
            width: "20%",
            height: "20%",
            background: "radial-gradient(circle at center, rgba(199, 210, 254, 0.3), transparent)",
            left: `${20 * i}%`,
            top: `${30 + Math.sin(i) * 20}%`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Cosmic rays */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`ray-${i}`}
          className="absolute"
          style={{
            width: "2px",
            height: "30%",
            background: "linear-gradient(180deg, transparent, rgba(199, 210, 254, 0.3), transparent)",
            left: `${(i + 1) * 15}%`,
            transform: `rotate(${i * 30}deg)`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [1, 1.5, 1],
            rotate: [`${i * 30}deg`, `${i * 30 + 180}deg`],
          }}
          transition={{
            duration: 5,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Space glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(199, 210, 254, 0.1), transparent 70%)",
          mixBlendMode: "screen",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Skeleton; 