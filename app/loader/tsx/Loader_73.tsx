import React from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  loadingName?: string;
}

const Loader: React.FC<LoaderProps> = ({ loadingName = "Loading" }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      {/* Pulsing Bars */}
      <div className="flex space-x-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-8 bg-blue-500 rounded"
            animate={{
              scaleY: [0.5, 1, 0.5],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      {/* Loading Name */}
      <div className="mt-4 text-lg font-medium">{loadingName}</div>
    </div>
  );
};

export default Loader;
