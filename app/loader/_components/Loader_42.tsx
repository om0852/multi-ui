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
        {Array.from({ length: 12 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-3 h-3 bg-yellow-500 rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transformOrigin: "40px",
            }}
            animate={{
              rotate: [0, 360],
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

export default LoaderSeven;
