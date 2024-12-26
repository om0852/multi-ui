"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderFive: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative flex space-x-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <motion.div
            key={index}
            className="w-6 h-6 bg-green-500"
            animate={{
              rotate: [0, 360], // Full rotation
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: index * 0.2, // Staggered rotation
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoaderFive;
