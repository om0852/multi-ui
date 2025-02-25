"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on the server during hydration
  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center h-full w-full">
      <motion.div
        className="relative w-12 h-12 border-2 border-gray-700 rounded-full"
        style={{
          boxShadow:
            "-10px -10px 10px #6359f8, 0px -10px 10px #9c32e2, 10px -10px 10px #f36896, 10px 0px 10px #ff0b0b, 10px 10px 10px #ff5500, 0px 10px 10px #ff9500, -10px 10px 10px #ffb700",
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
      >
        <div className="absolute top-1/2 left-1/2 w-6 h-6 border-2 border-gray-700 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </div>
  );
};

export default Loader;
