"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderTwentyOne: React.FC = () => {
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
            className="w-6 h-24 rounded bg-gradient-to-b from-pink-500 to-indigo-500"
            animate={{
              scaleY: [1, 0.5, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoaderTwentyOne;
