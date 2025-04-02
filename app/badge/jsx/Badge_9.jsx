'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { clsx } from 'clsx'
import React, { useState, useEffect } from 'react'

export function CenterSlideLink({ 
  underlineColor = 'bg-primary',
  className,
  children,
  ...props 
}) {
  return (
    <Link
      className={clsx(
        'group relative inline-block font-medium no-underline',
        className
      )}
      {...props}
    >
      {children}
      <motion.span
        className={clsx(
          'absolute bottom-0 left-1/2 h-[2px] w-0 transform -translate-x-1/2',
          underlineColor
        )}
        initial={{ width: '0%' }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      />
    </Link>
  )
}

export function BounceUnderlineLink({ 
  underlineColor = 'bg-primary',
  className,
  children,
  ...props 
}) {
  return (
    <Link
      className={clsx(
        'group relative inline-block font-medium no-underline',
        className
      )}
      {...props}
    >
      {children}
      <motion.span
        className={clsx(
          'absolute bottom-0 left-0 right-0 h-[2px] origin-center scale-x-0',
          underlineColor
        )}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </Link>
  )
}

export function BlurBadge({ text, color = 'bg-orange-500' }) {
  return (
    <div
      className={`inline-block px-4 py-2 text-white font-semibold rounded-lg ${color} 
      hover:blur-[1px] hover:scale-110 transition-all duration-300 cursor-pointer`}
    >
      {text}
    </div>
  )
}

export function BounceBadge({ text, color = 'bg-yellow-500' }) {
  return (
    <span
      className={`inline-block px-4 py-2 text-white text-sm font-semibold rounded-full shadow-lg ${color} transform transition-transform duration-500 hover:animate-bounce`}
    >
      {text}
    </span>
  )
}

export function BounceOnClickBadge({ text, color = 'bg-red-500' }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`inline-block px-4 py-2 text-white font-semibold rounded-lg cursor-pointer transition-transform duration-300 ${
        clicked ? 'animate-bounce' : ''
      } ${color}`}
      onClick={() => {
        setClicked(true);
        setTimeout(() => setClicked(false), 300);
      }}
    >
      {text}
    </div>
  );
}

export function BouncingGlowBadge({ text, color = 'bg-amber-500' }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative inline-block px-4 py-2 text-white text-sm font-bold rounded-full transition-all duration-300 ${color} ${
        hovered ? 'scale-110 shadow-xl' : 'scale-100 shadow'
      }`}
      style={{
        animation: hovered ? 'bounce 0.6s infinite alternate' : undefined,
      }}
    >
      {text}
      <style>
        {`
          @keyframes bounce {
            0% {
              transform: translateY(0px);
            }
            100% {
              transform: translateY(-8px);
            }
          }
        `}
      </style>
    </span>
  );
}

export function GlowBadge({ text, color = 'bg-indigo-500' }) {
  return (
    <span
      className={`inline-block px-4 py-2 text-white text-sm font-bold rounded-full shadow-lg ${color} relative animate-glow`}
    >
      {text}
      <style>
        {`
          @keyframes glow {
            0% {
              box-shadow: 0 0 5px rgba(0, 0, 0, 0);
            }
            50% {
              box-shadow: 0 0 20px rgba(99, 102, 241, 0.8);
            }
            100% {
              box-shadow: 0 0 5px rgba(0, 0, 0, 0);
            }
          }
          .animate-glow {
            animation: glow 2s infinite;
          }
        `}
      </style>
    </span>
  );
}

export function GradientBorderBadge({ text, color = 'bg-slate-800' }) {
  return (
    <div className="p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-500">
      <div className={`${color} px-4 py-2 rounded-lg text-white font-semibold`}>
        {text}
      </div>
    </div>
  );
}

export default function Example() {
  return (
    <div className="space-y-4">
      <GradientBorderBadge text="Gradient Badge" color="bg-gray-900" />
    </div>
  );
}
