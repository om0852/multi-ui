import React from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  loadingName?: string;
}

const Loader: React.FC<LoaderProps> = ({ loadingName = "Loading" }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-5xl font-extrabold uppercase flex">
        {loadingName.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
