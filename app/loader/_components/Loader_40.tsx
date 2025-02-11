"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderFour: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative flex items-center justify-center">
        {Array.from({ length: 3 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute border-2 border-blue-500 rounded-full"
            style={{
              width: 50,
              height: 50,
            }}
            animate={{
              scale: [1, 3], // Expand
              opacity: [1, 0], // Fade out
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: index * 0.3, // Staggered rings
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoaderFour;
