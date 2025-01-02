"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AnimatedPasswordInputProps {
  id?: string
  value?: string
  onChange?: (value: string) => void
  label?: string
  className?: string
}

export const AnimatedPasswordInput: React.FC<AnimatedPasswordInputProps> = ({
  id = "password",
  value = "",
  onChange,
  label = "Password",
  className = "",
}) => {
  const [password, setPassword] = useState(value)
  const [isVisible, setIsVisible] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [strength, setStrength] = useState(0)

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
    <div className={`relative ${className}`}>
      <motion.div
        className="relative"
        initial={false}
        animate={{
          height: isFocused || password ? '72px' : '56px',
        }}
        transition={{ duration: 0.4 }}
      >
        <motion.label
          htmlFor={id}
          className="absolute left-2 text-gray-600 pointer-events-none"
          initial={false}
          animate={{
            top: isFocused || password ? '-8px' : '16px',
            fontSize: isFocused || password ? '14px' : '18px',
            color: isFocused ? 'rgb(75, 85, 99)' : 'rgb(156, 163, 175)',
          }}
          transition={{ duration: 0.3 }}
        >
          {label}
        </motion.label>
        <input
          id={id}
          type={isVisible ? "text" : "password"}
          value={password}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full h-14 px-3 pt-6 pb-2 text-gray-900 bg-transparent border-2 rounded-md border-gray-300 focus:outline-none focus:border-indigo-600 transition-all"
        />
        <button
          type="button"
          className="absolute right-3 top-5 text-gray-600 hover:text-gray-800"
          onClick={() => setIsVisible(!isVisible)}
          aria-label="Toggle password visibility"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isVisible ? 'visible' : 'hidden'}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: 0.2 }}
            >
              {isVisible ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </motion.div>
          </AnimatePresence>
        </button>
      </motion.div>
      <AnimatePresence>
        {password && (
          <motion.div
            className="mt-3"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex space-x-2">
              {[...Array(4)].map((_, index) => (
                <motion.div
                  key={index}
                  className="h-1 w-full rounded-md bg-gray-300"
                  initial={false}
                  animate={{
                    backgroundColor: index < strength ? 'rgb(16, 185, 129)' : 'rgb(229, 231, 235)',
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <PasswordCriteria label="6+ characters" met={password.length > 6} />
              <PasswordCriteria label="Uppercase" met={/[A-Z]/.test(password)} />
              <PasswordCriteria label="Number" met={/[0-9]/.test(password)} />
              <PasswordCriteria label="Special char" met={/[^A-Za-z0-9]/.test(password)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const PasswordCriteria: React.FC<{ label: string; met: boolean }> = ({ label, met }) => (
  <div className="flex items-center space-x-1">
    <motion.div
      initial={false}
      animate={{
        backgroundColor: met ? 'rgb(16, 185, 129)' : 'rgb(239, 68, 68)',
        scale: met ? 1 : 1.2,
      }}
      className="rounded-full p-1"
    >
      {met ? (
        <img 
          src="https://img.icons8.com/?size=100&id=sz8cPVwzLrMP&format=png&color=000000" 
          alt="Valid" 
          className="w-3 h-3"
        />
      ) : (
        <img 
          src="https://img.icons8.com/?size=100&id=T9nkeADgD3z6&format=png&color=000000" 
          alt="Invalid" 
          className="w-3 h-3"
        />
      )}
    </motion.div>
    <span className={met ? 'text-green-600' : 'text-red-500'}>{label}</span>
  </div>
)

