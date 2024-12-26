"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderTwelve: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative flex items-center justify-center">
        {Array.from({ length: 4 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute bg-blue-500"
            style={{
              width: 20 + index * 20,
              height: 20 + index * 20,
              borderRadius: index % 2 === 0 ? "0%" : "50%", // Alternating square and circle
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1 + index * 0.2,
              delay: index * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoaderTwelve;
