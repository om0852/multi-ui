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
        "relative overflow-hidden bg-slate-100",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      {/* Base frost layer */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, #e2e8f0 0%, #f8fafc 50%, #e2e8f0 100%)",
            "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%)",
          ],
        }}
        transition={{
          duration: 6,
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
            width: "30%",
            height: "30%",
            left: `${(i % 3) * 35}%`,
            top: `${Math.floor(i / 3) * 70}%`,
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(241, 245, 249, 0.2))",
            clipPath: `polygon(${Array.from({ length: 8 }, (_, idx) => {
              const angle = (idx * 360) / 8;
              const radius = 50 + Math.sin(idx * 2) * 20;
              const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
              const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
              return `${x}% ${y}%`;
            }).join(", ")})`,
            filter: "blur(1px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Ice crystals */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`crystal-${i}`}
          className="absolute"
          style={{
            width: "2px",
            height: `${10 + Math.random() * 20}px`,
            background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(241, 245, 249, 0.3))",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transformOrigin: "center",
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 90, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Frost branches */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`branch-${i}`}
          className="absolute"
          style={{
            width: "40%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)",
            left: "30%",
            top: `${20 + i * 20}%`,
            transform: `rotate(${i * 45}deg)`,
            transformOrigin: "center",
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Snowflakes */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`snow-${i}`}
          className="absolute w-1 h-1"
          style={{
            background: "white",
            borderRadius: "50%",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: "0 0 2px rgba(255, 255, 255, 0.8)",
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Frost overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2), transparent)",
          filter: "blur(8px)",
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