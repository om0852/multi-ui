"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface PlayfulPasswordInputProps {
  id?: string
  value?: string
  onChange?: (value: string) => void
  label?: string
  className?: string
  onSubmit?: (isValid: boolean) => void
}

export const PlayfulPasswordInput: React.FC<PlayfulPasswordInputProps> = ({
  id = "password",
  value = "",
  onChange,
  label = "Password",
  className = "",
  onSubmit,
}) => {
  const [password, setPassword] = useState(value)
  const [isVisible, setIsVisible] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [strength, setStrength] = useState(0)
  const [isShaking, setIsShaking] = useState(false)

  useEffect(() => {
    const calculateStrength = (pwd: string) => {
      let score = 0
      if (pwd.length > 6) score++
      if (pwd.match(/[A-Z]/)) score++
      if (pwd.match(/[0-9]/)) score++
      if (pwd.match(/[^A-Za-z0-9]/)) score++
      setStrength(score)
    }

    calculateStrength(password)
  }, [password])

  const handleInputChange = (value: string) => {
    setPassword(value)
    onChange?.(value)
  }

  const strengthEmoji = ['😰', '😓', '😐', '😊', '😎'][strength]

  const isPasswordValid = strength === 4

  const handleSubmit = () => {
    if (isPasswordValid) {
      onSubmit?.(true)
    } else {
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
      onSubmit?.(false)
    }
  }

  return (
    <motion.div 
      className={`relative ${className}`}
      animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
        animate={{
          boxShadow: isFocused
            ? '0 0 0 3px rgba(99, 102, 241, 0.5)'
            : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-4 py-3">
          <motion.label
            htmlFor={id}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            animate={{
              y: isFocused || password ? -20 : 0,
              opacity: isFocused || password ? 0 : 1,
            }}
          >
            {label}
          </motion.label>
          <div className="relative">
            <input
              id={id}
              type={isVisible ? "text" : "password"}
              value={password}
              onChange={(e) => handleInputChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="block w-full pr-10 sm:text-sm border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-transparent outline-none placeholder:hidden" />
            <motion.button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={() => setIsVisible(!isVisible)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isVisible ? (
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 dark:bg-gray-700 px-4 py-3"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password Strength
                </div>
                <motion.div
                  className="text-2xl"
                  key={strength}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 10 }}
                >
                  {strengthEmoji}
                </motion.div>
              </div>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200 dark:bg-gray-600">
                  <motion.div
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${(strength / 4) * 100}%` }}
                    transition={{ duration: 0.5, type: 'spring' }}
                  />
                </div>
              </div>
              <motion.div 
                className="mt-3 grid grid-cols-2 gap-2"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05
                    }
                  }
                }}
              >
                <Criteria label="6+ characters" met={password.length > 6} />
                <Criteria label="Uppercase" met={/[A-Z]/.test(password)} />
                <Criteria label="Number" met={/[0-9]/.test(password)} />
                <Criteria label="Special char" met={/[^A-Za-z0-9]/.test(password)} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.button
        className="mt-4 w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg text-lg transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={handleSubmit}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Submit
      </motion.button>
    </motion.div>
  )
}

const Criteria: React.FC<{ label: string; met: boolean }> = ({ label, met }) => (
  <motion.div 
    className="flex items-center space-x-2"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
  >
    <motion.div
      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
        met ? 'bg-green-100 dark:bg-green-800' : 'bg-red-100 dark:bg-red-800'
      }`}
      animate={{ rotate: met ? 0 : 180 }}
    >
      <Image 
        src={met 
          ? "https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000"
          : "https://img.icons8.com/?size=100&id=T9nkeADgD3z6&format=png&color=000000"
        }
        alt={met ? "Valid" : "Invalid"}
        width={12}
        height={12}
        className="w-3 h-3"
      />
    </motion.div>
    <span className={`text-sm ${met ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
      {label}
    </span>
  </motion.div>
)
