"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderSix: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="flex space-x-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-10 bg-purple-500 rounded"
            animate={{
              scaleY: [1, 2, 1], // Stretch vertically
              opacity: [1, 0.5, 1], // Pulse
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              delay: index * 0.2, // Staggered animation
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoaderSix;
