"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi"; // For "Copied" icon

interface ClipboardButtonProps {
  text: string;
  className?: string;
}

const ClipboardButton: React.FC<ClipboardButtonProps> = ({ text, className = "" }) => {
  const [copied, setCopied] = useState(false);

  // Handle copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1500); // Reset copied state after 1.5 seconds
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  return (
    <motion.button
      onClick={handleCopy}
      className={`relative flex items-center justify-center p-4 border-2 border-transparent rounded-md bg-black text-white font-medium text-sm ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      {/* Copied Icon */}
      {copied && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <FiCheckCircle className="text-green-500 text-xl" />
        </motion.div>
      )}

      {/* Default "Copy" Text */}
      {!copied && (
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: copied ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="z-10"
        >
          Copy
        </motion.span>
      )}

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-30 rounded-md"
        animate={{ scale: copied ? 1.2 : 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />
    </motion.button>
  );
};

export default ClipboardButton;
