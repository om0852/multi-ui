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
  theme?: 'light' | 'dark';
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
      theme = 'light',
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
        {/* Container with Neon Effect */}
        <div className={clsx(
          "relative rounded-lg overflow-hidden",
          theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100',
          disabled && "opacity-50"
        )}>
          {/* Neon Glow Effect */}
          <motion.div
            animate={{ 
              boxShadow: isFocused
                ? error
                  ? [
                      "0 0 5px #ef4444",
                      "0 0 10px #ef4444",
                      "0 0 15px #ef4444"
                    ]
                  : [
                      "0 0 5px #0ea5e9",
                      "0 0 10px #0ea5e9",
                      "0 0 15px #0ea5e9"
                    ]
                : ["none"]
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 rounded-lg"
          />

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
              "border-2 rounded-lg",
              error
                ? "border-red-500"
                : isFocused
                  ? "border-sky-500"
                  : theme === 'dark'
                    ? "border-gray-700"
                    : "border-gray-300",
              theme === 'dark' ? 'text-white' : 'text-gray-900',
              "placeholder-gray-500",
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
              color: isFocused 
                ? error 
                  ? "#ef4444" 
                  : "#0ea5e9" 
                : error
                  ? "#ef4444"
                  : disabled
                    ? "#9ca3af"
                    : "#6b7280"
            }}
            transition={{ duration: 0.2 }}
            className={clsx(
              "absolute left-4 top-4",
              "text-gray-500",
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
              >
                *
              </motion.span>
            )}
          </motion.label>

          {/* Character Counter */}
          {showCharacterCount && !disabled && (
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={clsx(
                "absolute right-3 bottom-3",
                "text-xs",
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              )}
            >
              {characterCount}
              {maxLength && ` / ${maxLength}`}
            </motion.div>
          )}
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
          <motion.p
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={clsx(
              "mt-2 text-sm",
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500',
              disabled && "opacity-50",
              helperClassName
            )}
          >
            {helperText}
          </motion.p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea_22';

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