"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoaderThirtyFour: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-900">
      <div className="flex space-x-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={index}
            className="w-6 h-6 bg-teal-500"
            animate={{
              y: [-10, 10, -10],
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

export default LoaderThirtyFour;
