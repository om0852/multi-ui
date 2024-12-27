import React from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  loadingName?: string;
}

const Loader: React.FC<LoaderProps> = ({ loadingName = "Loading" }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <motion.div
        className="text-5xl font-extrabold uppercase"
        animate={{
          skewX: [-10, 10, -10],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {loadingName}
      </motion.div>
    </div>
  );
};

export default Loader;
