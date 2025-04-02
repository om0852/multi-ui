"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FloatingTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  containerClassName?: string
  labelClassName?: string
  errorClassName?: string
  helperClassName?: string
  showCharacterCount?: boolean
  maxLength?: number
}

const FloatingTextarea = React.forwardRef<HTMLTextAreaElement, FloatingTextareaProps>(
  (
    {
      className,
      containerClassName,
      labelClassName,
      errorClassName,
      helperClassName,
      label,
      error,
      helperText,
      required,
      showCharacterCount = false,
      maxLength,
      value,
      defaultValue,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [characterCount, setCharacterCount] = React.useState(
      String(value || defaultValue || "").length
    )
    const textareaRef = React.useRef<HTMLTextAreaElement>(null)
    const combinedRef = useCombinedRefs(ref, textareaRef)

    // Handle auto-resize
    const handleResize = React.useCallback(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto"
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
      }
    }, [])

    React.useEffect(() => {
      handleResize()
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [handleResize])

    // Animation variants
    const labelVariants = {
      default: { y: 0, scale: 1 },
      focused: { y: -28, scale: 0.9 },
    }

    const glowVariants = {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.3 } },
      exit: { opacity: 0, transition: { duration: 0.3 } },
    }

    const hasContent = characterCount > 0 || isFocused

    return (
      <div className={`relative w-full ${containerClassName || ""}`}>
        <div className="relative">
          <motion.div
            className="absolute left-3 top-1 origin-left"
            initial="default"
            animate={hasContent ? "focused" : "default"}
            variants={labelVariants}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <span
              className={`block pointer-events-none text-gray-500 transition-colors ${
                isFocused ? "text-primary" : ""
              } ${error ? "text-red-500" : ""} ${labelClassName || ""}`}
            >
              {label}
              {required && <span className="ml-1 text-red-500">*</span>}
            </span>
          </motion.div>

          <textarea
            ref={combinedRef}
            className={`w-full min-h-[120px] rounded-lg border-2 px-4 py-3 text-base transition-all duration-300 placeholder:text-transparent focus:outline-none focus:ring-0 ${
              error
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-primary"
            } ${
              isFocused
                ? "shadow-[0_0_8px_rgba(0,123,255,0.5)] dark:shadow-[0_0_8px_rgba(0,123,255,0.8)]"
                : ""
            } dark:border-gray-700 dark:bg-gray-950 dark:text-white ${
              className || ""
            }`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => {
              handleResize()
              setCharacterCount(e.target.value.length)
              props.onChange?.(e)
            }}
            maxLength={maxLength}
            {...props}
          />
          <AnimatePresence>
            {isFocused && (
              <motion.div
                className="absolute inset-0 rounded-lg border-2 border-primary"
                variants={glowVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              />
            )}
          </AnimatePresence>
        </div>

        <div className="mt-1 flex items-center justify-between">
          <div className="flex-1">
            {error ? (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className={`text-sm text-red-500 ${errorClassName || ""}`}
              >
                {error}
              </motion.p>
            ) : helperText ? (
              <p
                className={`text-sm text-gray-500 dark:text-gray-400 ${
                  helperClassName || ""
                }`}
              >
                {helperText}
              </p>
            ) : null}
          </div>

          {showCharacterCount && maxLength && (
            <div
              className={`text-sm ${
                characterCount >= maxLength
                  ? "text-red-500"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {characterCount}/{maxLength}
            </div>
          )}
        </div>
      </div>
    )
  }
)
FloatingTextarea.displayName = "FloatingTextarea"

// Helper function to combine refs
function useCombinedRefs<T>(
  ...refs: Array<React.ForwardedRef<T> | React.RefObject<T>>
): React.RefCallback<T> {
  return React.useCallback(
    (element: T) => {
      refs.forEach((ref) => {
        if (!ref) return

        if (typeof ref === "function") {
          ref(element)
        } else {
          (ref as React.MutableRefObject<T>).current = element
        }
      })
    },
    [refs]
  )
}

export { FloatingTextarea }
