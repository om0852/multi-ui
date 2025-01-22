'use client'

import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface HoverAnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  hoverEffect?: 'grow' | 'lift' | 'glow'
}

const HoverAnimatedButton: React.FC<HoverAnimatedButtonProps> = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  hoverEffect = 'grow',
}) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background'

  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground'
  }

  const sizes = {
    sm: 'h-9 px-3 text-xs',
    md: 'h-10 py-2 px-4',
    lg: 'h-11 px-8 text-lg'
  }

  const hoverAnimations = {
    grow: { scale: 1.05 },
    lift: { y: -5 },
    glow: { boxShadow: '0 0 15px rgba(0,0,0,0.3)' }
  }

  return (
    <motion.button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      whileHover={hoverAnimations[hoverEffect]}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.button>
  )
}

export default HoverAnimatedButton
