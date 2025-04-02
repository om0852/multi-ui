"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderTwentyFour: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <motion.div
        className="flex space-x-2"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            className="w-4 h-4 rounded-full bg-purple-500"
            animate={{
              y: [0, -20, 0],
              x: [0, index % 2 === 0 ? 20 : -20, 0],
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

export default LoaderTwentyFour;
