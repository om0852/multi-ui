"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderSeven: React.FC = () => {
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
            className={`absolute border-2 ${
              index % 2 === 0 ? "border-blue-400" : "border-green-400"
            } rounded-full`}
            style={{
              width: 50 + index * 20,
              height: 50 + index * 20,
            }}
            animate={{
              rotate: [0, 360], // Rotate continuously
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5 + index * 0.3, // Slight delay for each ring
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoaderSeven;
