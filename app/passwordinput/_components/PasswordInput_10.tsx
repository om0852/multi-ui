"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const PlayfulPasswordInput: React.FC<{
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  className?: string;
  isValid?: boolean; // Determines validity from parent
  errorMessage?: string; // Custom error message
}> = ({
  id = "password",
  value = "",
  onChange,
  label = "Password",
  className = "",
  isValid = true,
  errorMessage = "Invalid password.",
}) => {
  const [password, setPassword] = useState(value);
  const [isVisible, setIsVisible] = useState(false);
  const [shake, setShake] = useState(false);

  const handleInputChange = (value: string) => {
    setPassword(value);
    onChange?.(value);
  };

  const handleShake = () => {
    if (!isValid) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <motion.div
      className={`relative ${className}`}
      animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
      transition={{ duration: 0.4 }}
    >
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden px-4 py-3">
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          {label}
        </label>
        <div className="relative">
          <input
            id={id}
            type={isVisible ? "text" : "password"}
            value={password}
            onChange={(e) => handleInputChange(e.target.value)}
            className={`block w-full outline-none sm:text-sm border ${
              isValid
                ? "border-gray-300 dark:border-gray-600"
                : "border-red-500 dark:border-red-600"
            } rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-transparent`}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? "🙈" : "👁️"}
          </button>
        </div>
        {!isValid && (
          <div className="mt-2 text-sm text-red-500">{errorMessage}</div>
        )}
      </div>
    </motion.div>
  );
};

export default PlayfulPasswordInput;
