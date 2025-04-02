import React from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  loadingName?: string;
}

const Loader: React.FC<LoaderProps> = ({ loadingName = "Loading" }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="relative text-4xl font-bold uppercase">
        {loadingName}
        <motion.div
          className="absolute left-0 bottom-0 h-1 bg-green-500"
          animate={{
            x: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ width: "30%" }}
        />
      </div>
    </div>
  );
};

export default Loader;
