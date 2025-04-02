"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderForty: React.FC = () => {
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
            className="w-4 h-12 bg-orange-500"
            animate={{
              y: [0, -20, 0],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              delay: index * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoaderForty;
