"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderEighteen: React.FC = () => {
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
            className="absolute rounded-full border-2 border-blue-500"
            style={{
              width: 20 + index * 20,
              height: 20 + index * 20,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [1, 0, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              delay: index * 0.4,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoaderEighteen;
