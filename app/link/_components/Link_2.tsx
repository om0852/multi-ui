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
