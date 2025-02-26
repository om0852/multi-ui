"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderThirtyTwo: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="relative flex justify-center items-center">
        {Array.from({ length: 4 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute border border-blue-500 rounded-full"
            style={{
              width: `${20 + index * 20}px`,
              height: `${20 + index * 20}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5 + index * 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoaderThirtyTwo;
