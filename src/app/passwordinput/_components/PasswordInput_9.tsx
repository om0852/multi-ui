"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FuturisticPasswordInputProps {
  id?: string
  value?: string
  onChange?: (value: string) => void
  label?: string
  className?: string
}

export const FuturisticPasswordInput: React.FC<FuturisticPasswordInputProps> = ({
  id = "password",
  value = "",
  onChange,
  label = "Enter Access Code",
  className = "",
}) => {
  const [password, setPassword] = useState(value)
  const [isVisible, setIsVisible] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [strength, setStrength] = useState(0)
  const [shake, setShake] = useState(false)

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

  return (
    <motion.div 
      className={`relative ${className}`}
      animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
      transition={{ duration: 0.4 }}
    >
      <div className="relative bg-gray-900 rounded-lg overflow-hidden border border-cyan-500 shadow-lg shadow-cyan-500/50">
        <div className="px-4 py-3">
          <motion.label
            htmlFor={id}
            className="block text-sm font-medium text-cyan-400 mb-1"
            animate={{
              y: isFocused || password ? -20 : 0,
              opacity: isFocused || password ? 0 : 1,
            }}
          >
            {label}
          </motion.label>
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md"
              animate={{
                opacity: isFocused ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <input
              id={id}
              type={isVisible ? "text" : "password"}
              value={password}
              onChange={(e) => handleInputChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="block w-full px-3 py-2 bg-gray-800 text-white placeholder-gray-400 border-2 border-transparent rounded-md focus:outline-none focus:border-cyan-500 transition-colors duration-200 z-10 relative"
              placeholder={isFocused || password ? label : ""}
            />
            <motion.button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-cyan-500 z-20"
              onClick={() => setIsVisible(!isVisible)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isVisible ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              className="bg-gray-800 px-4 py-3"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-cyan-400">
                  Security Level
                </div>
                <div className="text-sm font-medium text-cyan-400">
                  {['Critical', 'Low', 'Medium', 'High', 'Maximum'][strength]}
                </div>
              </div>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-700">
                  <motion.div
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
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
      </div>
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
        met ? 'bg-green-900' : 'bg-red-900'
      }`}
      animate={{ rotate: met ? 0 : 180 }}
    >
      <img 
        src={met 
          ? "https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000"
          : "https://img.icons8.com/?size=100&id=T9nkeADgD3z6&format=png&color=000000"
        }
        alt={met ? "Valid" : "Invalid"}
        className="w-3 h-3"
      />
    </motion.div>
    <span className={`text-sm ${met ? 'text-green-400' : 'text-red-400'}`}>
      {label}
    </span>
  </motion.div>
)
