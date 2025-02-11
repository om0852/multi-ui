"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface FloatingTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  helperClassName?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, FloatingTextareaProps>(
  (
    {
      label,
      error,
      helperText,
      containerClassName,
      labelClassName,
      errorClassName,
      helperClassName,
      showCharacterCount,
      maxLength,
      className,
      required,
      disabled,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [characterCount, setCharacterCount] = useState(0);
    const [isFloating, setIsFloating] = useState(false);
    const innerRef = useRef<HTMLTextAreaElement>(null);
    const combinedRef = useCombinedRefs(ref, innerRef);

    useEffect(() => {
      if (defaultValue || value) {
        setIsFloating(true);
      }
    }, [defaultValue, value]);

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      if (disabled) return;
      setIsFocused(true);
      setIsFloating(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      if (disabled) return;
      setIsFocused(false);
      if (!e.target.value) {
        setIsFloating(false);
      }
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (disabled) return;
      setCharacterCount(e.target.value.length);
      onChange?.(e);
    };

    return (
      <div className={clsx("relative", containerClassName)}>
        {/* Gradient Border Container */}
        <div className={clsx(
          "relative p-[2px] rounded-xl",
          "bg-gradient-to-r",
          error
            ? "from-red-500 via-red-400 to-red-500"
            : "from-violet-500 via-fuchsia-500 to-pink-500",
          "animate-gradient-x",
          disabled && "opacity-50"
        )}>
          {/* Inner Container */}
          <div className={clsx(
            "relative h-full",
            "bg-white dark:bg-gray-900",
            "rounded-[10px]",
            "overflow-hidden"
          )}>
            {/* Background Pattern */}
            <div className={clsx(
              "absolute inset-0",
              "bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent)]",
              "dark:bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.2),transparent)]"
            )} />

            {/* Textarea */}
            <textarea
              ref={combinedRef}
              {...props}
              value={value}
              defaultValue={defaultValue}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              maxLength={maxLength}
              disabled={disabled}
              className={clsx(
                "block w-full p-4 text-base",
                "bg-transparent",
                "border-none",
                "text-gray-900 dark:text-white",
                "placeholder-gray-400 dark:placeholder-gray-500",
                "focus:outline-none focus:ring-0",
                disabled && "cursor-not-allowed",
                className
              )}
              style={{
                minHeight: "120px"
              }}
            />

            {/* Floating Label */}
            <motion.label
              htmlFor={props.id}
              animate={{
                y: isFloating ? -28 : 0,
                scale: isFloating ? 0.85 : 1,
                background: isFloating 
                  ? "linear-gradient(to right, rgb(139, 92, 246), rgb(236, 72, 153))" 
                  : "none",
                WebkitBackgroundClip: isFloating ? "text" : "none",
                WebkitTextFillColor: isFloating ? "transparent" : "currentColor",
                color: !isFloating 
                  ? error
                    ? "#ef4444"
                    : disabled
                      ? "#9ca3af"
                      : "#6b7280"
                  : undefined
              }}
              transition={{ duration: 0.2 }}
              className={clsx(
                "absolute left-4 top-4",
                "pointer-events-none",
                "origin-[0]",
                "transition-all",
                labelClassName
              )}
            >
              {label}
              {required && (
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="ml-1 text-red-500"
                  style={{ WebkitTextFillColor: "#ef4444" }}
                >
                  *
                </motion.span>
              )}
            </motion.label>

            {/* Character Counter */}
            {showCharacterCount && !disabled && (
              <div className={clsx(
                "absolute right-3 bottom-2",
                "text-sm",
                error
                  ? "text-red-500"
                  : "bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent"
              )}>
                {characterCount}
                {maxLength && ` / ${maxLength}`}
              </div>
            )}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={clsx(
              "mt-2 text-sm text-red-500",
              errorClassName
            )}
          >
            {error}
          </motion.p>
        )}

        {/* Helper Text */}
        {!error && helperText && (
          <p className={clsx(
            "mt-2 text-sm",
            "bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent",
            disabled && "opacity-50",
            helperClassName
          )}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea_20';

function useCombinedRefs<T>(
  ...refs: Array<React.ForwardedRef<T> | React.RefObject<T>>
): React.RefCallback<T> {
  return React.useCallback((element: T) => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(element);
      } else {
        (ref as React.MutableRefObject<T>).current = element;
      }
    });
  }, [refs]);
}

export default Textarea; 