"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Password input component with visibility toggle, animations, and error handling
interface PasswordInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;  // Whether the input is valid
  error?: string;    // Error message to display
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  label,
  value,
  onChange,
  isValid,
  error,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityToggle = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="relative w-full">
      {/* Label */}
      <label
        htmlFor={id}
        className="block text-lg font-medium text-gray-900 dark:text-gray-100 mb-2"
      >
        {label}
      </label>

      {/* Password input field with smooth animations */}
      <motion.input
        id={id}
        type={isVisible ? "text" : "password"}
        value={value}
        onChange={onChange}
        className={`w-full px-6 py-3 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 placeholder-gray-500 dark:placeholder-gray-300 ${
          isValid
            ? "border-gray-300 dark:border-gray-700"
            : "border-red-500 dark:border-red-700"
        } transition-all ease-in-out`}
        placeholder="Enter your password"
        whileFocus={{ scale: 1.05 }}
        whileHover={{ scale: 1.02 }}
        animate={{ x: isValid ? 0 : [0, -10, 10, -10, 0] }} // Shake animation when invalid
        transition={{ duration: 0.4 }}
      />

      {/* Error message */}
      {!isValid && error && (
        <p className="text-sm text-red-500 mt-2">{error}</p>
      )}

      {/* Visibility toggle button */}
      <button
        type="button"
        onClick={handleVisibilityToggle}
        className="absolute right-3 top-[9.5vh] transform -translate-y-1/2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
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
      </button>
    </div>
  );
};

export default PasswordInput;
