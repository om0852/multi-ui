"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderTwentyNine: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <motion.div
            key={index}
            className="w-8 h-8 bg-green-500"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              delay: index * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoaderTwentyNine;
