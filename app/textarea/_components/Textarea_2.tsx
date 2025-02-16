"use client"

import * as React from "react"
import { motion } from "framer-motion"

interface AnimatedTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  animate?: boolean
  containerClassName?: string
  labelClassName?: string
  errorClassName?: string
}

const AnimatedTextarea = React.forwardRef<HTMLTextAreaElement, AnimatedTextareaProps>(
  (
    {
      className = "",
      containerClassName = "",
      labelClassName = "",
      errorClassName = "",
      label,
      error,
      animate = true,
      required,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(false)

    const handleFocus = () => setIsFocused(true)
    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false)
      setHasValue(!!e.target.value)
    }

    return (
      <div className={`relative w-full ${containerClassName}`}>
        {label && (
          <motion.label
            initial={false}
            animate={animate ? {
              y: isFocused || hasValue ? -20 : 10,
              scale: isFocused || hasValue ? 0.85 : 1,
              color: isFocused ? "#2563EB" : "#374151",
            } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`absolute left-4 cursor-text select-none ${labelClassName}`}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </motion.label>
        )}
        <textarea
          ref={ref}
          {...props}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`peer w-full min-h-[100px] p-4 rounded-lg border bg-transparent transition-colors
            focus:outline-none focus:ring-2 focus:ring-blue-500 
            ${error ? "border-red-500" : "border-gray-300 dark:border-gray-700"}
            ${className}`}
        />
        {error && (
          <motion.p
            initial={animate ? { opacity: 0, y: -10 } : false}
            animate={animate ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`mt-2 text-sm text-red-500 ${errorClassName}`}
          >
            {error}
          </motion.p>
        )}
      </div>
    )
  }
)
AnimatedTextarea.displayName = "AnimatedTextarea"

export { AnimatedTextarea }
