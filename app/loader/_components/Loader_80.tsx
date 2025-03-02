import React from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  loadingName?: string;
}

const Loader: React.FC<LoaderProps> = ({ loadingName = "Loading" }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-4xl font-bold uppercase">
        {loadingName.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.1,
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
