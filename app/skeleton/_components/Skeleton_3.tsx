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
        "relative p-[1px] overflow-hidden",
        borderRadius,
        className
      )}
      style={{ width, height }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(90deg, #f0f0f0, #e0e0e0, #f0f0f0)",
            "linear-gradient(90deg, #e0e0e0, #f0f0f0, #e0e0e0)",
          ],
          boxShadow: [
            "0 0 10px rgba(255,255,255,0.5)",
            "0 0 20px rgba(255,255,255,0.8)",
            "0 0 10px rgba(255,255,255,0.5)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={clsx(
          "relative h-full w-full bg-gray-100 dark:bg-gray-800",
          borderRadius
        )}
        animate={{
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1), transparent 70%)",
              "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1), transparent 70%)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Skeleton;
