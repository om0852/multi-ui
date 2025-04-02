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

export function FallingConfettiBadge({ text, color = 'bg-purple-500' }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative inline-block">
      <span className={`text-white ${color} px-4 py-2 rounded-md font-semibold`}>
        {text}
      </span>
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-yellow-400 rounded-full absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-50px);
            opacity: 1;
          }
          100% {
            transform: translateY(150px);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}

export function FlipBadge({ text, color = 'bg-rose-500' }) {
  return (
    <div className="group perspective">
      <div className="relative preserve-3d hover:rotate-y-180 duration-500 cursor-pointer">
        <div className={`${color} px-4 py-2 text-white font-semibold rounded-lg backface-hidden`}>
          {text}
        </div>
        <div className={`absolute inset-0 ${color} px-4 py-2 text-white font-semibold 
          rounded-lg backface-hidden rotate-y-180 bg-opacity-80`}>
          ✨
        </div>
      </div>
    </div>
  );
}

export function FloatingBadge({ text, color = 'bg-amber-500' }) {
  return (
    <div
      className={`inline-block px-4 py-2 text-white font-semibold rounded-lg ${color} 
      hover:animate-float hover:-translate-y-1 hover:shadow-lg 
      transition-all duration-300 cursor-pointer`}
    >
      {text}
    </div>
  );
}

export default function Example() {
  return (
    <div className="space-y-4">
      <FlipBadge text="Flip Me" color="bg-indigo-500" />
    </div>
  );
}
