'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { clsx } from 'clsx'
import React, { useState } from 'react'

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

// Example Usage
export default function Example() {
  return (
    <div className="space-y-4">
      <CenterSlideLink href="/home" underlineColor="bg-blue-500">
        Home
      </CenterSlideLink>
      <CenterSlideLink href="/about" underlineColor="bg-green-500">
        About Us
      </CenterSlideLink>
      <CenterSlideLink href="/contact" underlineColor="bg-red-500">
        Contact
      </CenterSlideLink>
      <BounceUnderlineLink href="/services" underlineColor="bg-purple-500">
        Services
      </BounceUnderlineLink>
      <BounceUnderlineLink href="/portfolio" underlineColor="bg-yellow-500">
        Portfolio
      </BounceUnderlineLink>
      <BlurBadge text="New Feature" color="bg-blue-600" />
      <BounceBadge text="Hot Deal" color="bg-red-500" />
      <BounceOnClickBadge text="Click Me" color="bg-green-500" />
    </div>
  )
}
