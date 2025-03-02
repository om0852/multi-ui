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
      {/* Base gradient layer */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, #0f172a, #1e293b, #0f172a)",
            "linear-gradient(45deg, #1e293b, #0f172a, #1e293b)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Rotating polygons */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`polygon-${i}`}
          className="absolute"
          style={{
            width: "60%",
            height: "60%",
            left: "20%",
            top: "20%",
            border: "2px solid rgba(226, 232, 240, 0.1)",
            clipPath: `polygon(${Array.from({ length: i + 3 }, (_, idx) => {
              const angle = (idx * 360) / (i + 3);
              const x = 50 + 50 * Math.cos((angle * Math.PI) / 180);
              const y = 50 + 50 * Math.sin((angle * Math.PI) / 180);
              return `${x}% ${y}%`;
            }).join(", ")})`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8 + i,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Light refractions */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`refraction-${i}`}
          className="absolute"
          style={{
            width: "100%",
            height: "2px",
            background: "linear-gradient(90deg, transparent, rgba(226, 232, 240, 0.3), transparent)",
            transform: `rotate(${i * 45}deg)`,
            transformOrigin: "center",
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [1, 1.2, 1],
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Prismatic edges */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`edge-${i}`}
          className="absolute inset-0"
          style={{
            border: "1px solid rgba(226, 232, 240, 0.1)",
            transform: `scale(${0.8 + i * 0.1})`,
          }}
          animate={{
            rotate: [0, 360],
            borderColor: [
              "rgba(226, 232, 240, 0.1)",
              "rgba(56, 189, 248, 0.2)",
              "rgba(226, 232, 240, 0.1)",
            ],
          }}
          transition={{
            duration: 10 - i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Shimmering overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(226, 232, 240, 0.1), transparent)",
          mixBlendMode: "overlay",
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