"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type LoaderProps = {}; // Props can be extended in the future if needed

const Loader: React.FC<LoaderProps> = () => {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component is rendered on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid rendering on the server during hydration
  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-32 h-1 rounded-full bg-gray-300 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: ["0%", "100%", "0%"] }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
