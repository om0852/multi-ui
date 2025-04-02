"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface ClipboardButtonProps {
  text: string; // Text to be copied to clipboard
  className?: string; // Custom class for styling
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
      className={`relative flex items-center justify-center p-8 border-2 border-transparent rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-medium text-sm overflow-hidden ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 border-2 border-white opacity-30 rounded-full"
        animate={{ scale: copied ? 1.2 : 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* "Copied" text */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: copied ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute text-sm font-medium z-10"
      >
        Copied!
      </motion.span>

      {/* Default "Copy" text */}
      {!copied && (
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: copied ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute text-sm font-medium z-10"
        >
          Copy
        </motion.span>
      )}
    </motion.button>
  );
};

export default ClipboardButton;
