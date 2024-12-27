import React from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  loadingName?: string;
}

const Loader: React.FC<LoaderProps> = ({ loadingName = "Loading" }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-5xl font-extrabold uppercase">
        {loadingName.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            animate={{
              scaleY: [1, 1.5, 1],
            }}
            transition={{
              duration: 0.8,
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
