"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderEight: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="flex space-x-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-10 bg-pink-500 rounded"
            animate={{
              scaleY: [1, 2, 1], // Stretch up and down
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              delay: index * 0.1, // Staggered timing
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoaderEight;
