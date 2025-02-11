"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderThirtyEight: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="flex space-x-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={index}
            className="w-6 h-6 bg-green-500 rounded-full"
            animate={{
              x: [0, 20 * index, 0],
              y: [0, 10 * index, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoaderThirtyEight;
