"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderThirtySix: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <motion.div
        className="relative w-32 h-32"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute bg-yellow-400"
            style={{
              width: `${10 + index * 10}px`,
              height: `${10 + index * 10}px`,
              top: `${50 - index * 10}%`,
              left: `${50 - index * 10}%`,
            }}
            animate={{
              opacity: [1, 0.5, 1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: index * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LoaderThirtySix;
