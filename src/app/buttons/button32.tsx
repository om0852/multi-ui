'use client'

import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'transparent'
  size?: 'small' | 'medium' | 'large'
  hoverEffect?: 'rotate' | 'fade' | 'pulse'
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  className,
  variant = 'solid',
  size = 'medium',
  hoverEffect = 'rotate',
}) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

  const variants = {
    solid: 'bg-indigo-600 text-white hover:bg-indigo-500',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-100',
    transparent: 'text-indigo-600 hover:bg-indigo-50'
  }

  const sizes = {
    small: 'h-8 px-4 text-sm',
    medium: 'h-10 px-6 text-base',
    large: 'h-12 px-8 text-lg'
  }

  const hoverAnimations = {
    rotate: { rotate: 5 },
    fade: { opacity: 0.8 },
    pulse: { scale: 1.1 }
  }

  return (
    <motion.button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      whileHover={hoverAnimations[hoverEffect]}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.button>
  )
}

export default AnimatedButton
