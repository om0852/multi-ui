"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Define the LoaderProps type
interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  const [mounted, setMounted] = useState(false);

  // Ensure the component only renders after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const circleAnimation = {
    animate: {
      strokeDasharray: "150 50",
      strokeDashoffset: 75,
      transition: {
        duration: 3,
        ease: [0.785, 0.135, 0.15, 0.86],
        repeat: Infinity,
      },
    },
  };

  const rectAnimation = {
    animate: {
      strokeDasharray: "192 64",
      strokeDashoffset: 64,
      transition: {
        duration: 3,
        ease: [0.785, 0.135, 0.15, 0.86],
        repeat: Infinity,
      },
    },
  };

  const triangleAnimation = {
    animate: {
      strokeDasharray: "145 76",
      strokeDashoffset: 0,
      transition: {
        duration: 3,
        ease: [0.785, 0.135, 0.15, 0.86],
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="flex justify-center items-center space-x-6">
      {/* Circle Loader */}
      <div className="relative w-12 h-12">
        <motion.svg viewBox="0 0 80 80" className="w-full h-full">
          <motion.circle
            r="32"
            cx="40"
            cy="40"
            fill="none"
            stroke="#2f3545"
            strokeWidth="10"
            strokeLinecap="round"
            {...circleAnimation.animate}
          />
        </motion.svg>
        <motion.div
          className="absolute top-[37px] left-[19px] w-[6px] h-[6px] bg-[#5628ee] rounded-full"
          animate={{
            x: [0, 18, 0, -18],
            y: [0, -18, -36, -18],
          }}
          transition={{ duration: 3, ease: [0.785, 0.135, 0.15, 0.86], repeat: Infinity }}
        ></motion.div>
      </div>

      {/* Triangle Loader */}
      <div className="relative w-12 h-12">
        <motion.svg viewBox="0 0 86 80" className="w-full h-full">
          <motion.polygon
            points="43 8 79 72 7 72"
            fill="none"
            stroke="#2f3545"
            strokeWidth="10"
            strokeLinejoin="round"
            {...triangleAnimation.animate}
          />
        </motion.svg>
        <motion.div
          className="absolute top-[37px] left-[21px] w-[6px] h-[6px] bg-[#5628ee] rounded-full"
          animate={{ x: [0, 10, -10], y: [0, -18, -18] }}
          transition={{ duration: 3, ease: [0.785, 0.135, 0.15, 0.86], repeat: Infinity }}
        ></motion.div>
      </div>

      {/* Rectangle Loader */}
      <div className="relative w-12 h-12">
        <motion.svg viewBox="0 0 80 80" className="w-full h-full">
          <motion.rect
            x="8"
            y="8"
            width="64"
            height="64"
            fill="none"
            stroke="#2f3545"
            strokeWidth="10"
            strokeLinejoin="round"
            {...rectAnimation.animate}
          />
        </motion.svg>
        <motion.div
          className="absolute top-[37px] left-[19px] w-[6px] h-[6px] bg-[#5628ee] rounded-full"
          animate={{
            x: [0, 18, 0, -18],
            y: [0, -18, -36, -18],
          }}
          transition={{ duration: 3, ease: [0.785, 0.135, 0.15, 0.86], repeat: Infinity }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Loader;
