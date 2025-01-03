"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ModernPasswordInputProps {
  id?: string
  value?: string
  onChange?: (value: string) => void
  label?: string
  className?: string
  onSubmit?: (isValid: boolean) => void
}

export const ModernPasswordInput: React.FC<ModernPasswordInputProps> = ({
  id = "password",
  value = "",
  onChange,
  label = "Password",
  className = "",
  onSubmit,
}) => {
  const [password, setPassword] = useState(value)
  const [isVisible, setIsVisible] = useState(false)
  const [strength, setStrength] = useState(0)
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    const calculateStrength = (pwd: string) => {
      let score = 0
      if (pwd.length > 8) score++
      if (pwd.match(/[A-Z]/)) score++
      if (pwd.match(/[0-9]/)) score++
      if (pwd.match(/[^A-Za-z0-9]/)) score++
      setStrength(score)
      setIsValid(score === 4)
    }

    calculateStrength(password)
  }, [password])

  const handleInputChange = (value: string) => {
    setPassword(value)
    onChange?.(value)
  }

  const handleSubmit = () => {
    if (isValid) {
      onSubmit?.(true)
    } else {
      onSubmit?.(false)
    }
  }

  const strengthText = ['Very Weak', 'Weak', 'Moderate', 'Strong', 'Very Strong'][strength]

  return (
    <motion.div
      className={`relative ${className}`}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative bg-gradient-to-r from-teal-500 to-cyan-400 dark:from-teal-700 dark:to-cyan-700 rounded-xl shadow-lg overflow-hidden"
        animate={{
          boxShadow: isValid
            ? '0 0 10px 4px rgba(72, 187, 120, 0.7)'
            : '0 0 4px 2px rgba(244, 63, 94, 0.7)',
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-5">
          <motion.label
            htmlFor={id}
            className="block text-lg font-semibold text-white dark:text-gray-200 mb-2"
            animate={{ y: -20, opacity: password ? 0 : 1 }}
          >
            {label}
          </motion.label>
          <div className="relative">
            <input
              id={id}
              type={isVisible ? "text" : "password"}
              value={password}
              onChange={(e) => handleInputChange(e.target.value)}
              className="block w-full pr-10 sm:text-lg border-transparent rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-transparent outline-none placeholder:text-gray-300"
              placeholder="Enter your password"
            />
            <motion.button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-4"
              onClick={() => setIsVisible(!isVisible)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isVisible ? (
                <svg className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {password && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 px-6 py-4 rounded-b-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <motion.div
                  className="text-lg text-gray-600 dark:text-gray-200"
                  animate={{ opacity: 1 }}
                >
                  Password Strength
                </motion.div>
                <motion.div
                  className="text-xl font-semibold"
                  animate={{ opacity: strength > 0 ? 1 : 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {strengthText}
                </motion.div>
              </div>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200 dark:bg-gray-600">
                  <motion.div
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${(strength / 4) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.button
        className="mt-5 w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        onClick={handleSubmit}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Submit
      </motion.button>
    </motion.div>
  )
}
