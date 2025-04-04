'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { clsx } from 'clsx'

export function AnimatedLink({ 
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
          'absolute bottom-0 left-0 h-[2px] w-0',
          underlineColor
        )}
        initial={{ width: '0%' }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
    </Link>
  )
}


