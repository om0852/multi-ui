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
    const textareaRef = React.useRef<HTMLTextAreaElement>(null)
    const combinedRef = useCombinedRefs(ref, textareaRef)

    // Auto-resize functionality
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

    const variants = {
      focused: { scale: 0.95 },
      unfocused: { scale: 1 },
    }

    return (
      <div className={`relative w-full ${containerClassName}`}>
        {label && (
          <label
            className={`mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100 ${labelClassName}`}
          >
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}
        <motion.div
          animate={animate && (isFocused ? "focused" : "unfocused")}
          variants={variants}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative"
        >
          <textarea
            ref={combinedRef}
            className={[
              "min-h-[100px] w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900",
              "placeholder:text-gray-500",
              "focus:border-primary focus:ring-2 focus:ring-primary/20",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100",
              "dark:placeholder:text-gray-400",
              "dark:focus:border-primary dark:focus:ring-primary/20",
              error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "",
              className,
            ].join(" ")}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => {
              handleResize()
              props.onChange?.(e)
            }}
            {...props}
          />
        </motion.div>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
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

export { AnimatedTextarea }
