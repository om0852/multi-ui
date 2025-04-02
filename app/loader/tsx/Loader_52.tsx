"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderTwentyTwo: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative flex items-center justify-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full border-4 border-blue-500"
            style={{
              width: 40 + index * 20,
              height: 40 + index * 20,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              delay: index * 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoaderTwentyTwo;
