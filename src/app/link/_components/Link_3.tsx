'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { clsx } from 'clsx'
import { ComponentProps } from 'react'

interface AnimatedLinkProps extends ComponentProps<typeof Link> {
  underlineColor?: string
  className?: string
  children: React.ReactNode
}

export function CenterSlideLink({ 
  underlineColor = 'bg-primary',
  className,
  children,
  ...props 
}: AnimatedLinkProps) {
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
}: AnimatedLinkProps) {
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
    </div>
  )
}
