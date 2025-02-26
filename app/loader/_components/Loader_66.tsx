"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderFortyThree: React.FC = () => {
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
            className="w-4 h-4 bg-purple-500 rounded-full"
            animate={{
              y: [0, -15, 0],
              x: [0, index % 2 === 0 ? 10 : -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoaderFortyThree;
