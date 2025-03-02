"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderThirteen: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <motion.div
        className="relative w-40 h-40"
        animate={{
          rotate: [0, 360], // Continuous rotation
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <motion.div
            key={index}
            className={`absolute h-1 bg-yellow-500`}
            style={{
              width: "100%",
              top: `${index * 15 + 10}%`,
            }}
            animate={{
              x: [-20, 20, -20], // Zigzag effect
            }}
            transition={{
              repeat: Infinity,
              duration: 1 + index * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LoaderThirteen;
