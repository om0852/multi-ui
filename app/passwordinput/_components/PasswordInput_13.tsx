"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const InteractivePasswordInput = () => {
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityToggle = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg max-w-sm mx-auto">
      <label
        htmlFor="password"
        className="block text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2"
      >
        Password
      </label>
      <div className="relative">
        <motion.input
          id="password"
          type={isVisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent focus:outline-none focus:ring-4 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-opacity-50 transition-all"
          whileFocus={{ scale: 1.02 }}
        />
        <motion.button
          type="button"
          onClick={handleVisibilityToggle}
          className="absolute right-3 top-4  text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          {isVisible ? (
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          )}
        </motion.button>
      </div>
      <motion.button
        onClick={() => alert("Password submitted!")}
        className="mt-4 w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700 focus:ring-opacity-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Submit
      </motion.button>
    </div>
  );
};
