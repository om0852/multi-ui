import React from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  loadingName?: string;
}

const Loader: React.FC<LoaderProps> = ({ loadingName = "Loading" }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 text-white">
      <div className="text-6xl font-bold uppercase tracking-wider">
        {loadingName.split("").map((char, index) => (
          <motion.span
            key={index}
            className="relative inline-block"
            animate={{
              textShadow: ["0px 0px 0px #ffffff", "0px 0px 8px #00ff00", "0px 0px 0px #ffffff"],
            }}
            transition={{
              duration: 1.5,
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
