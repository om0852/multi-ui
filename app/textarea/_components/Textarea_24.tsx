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
        {/* Holographic Container */}
        <div className={clsx(
          "relative p-1 rounded-lg overflow-hidden",
          "backdrop-blur-xl",
          "bg-gradient-to-br from-white/20 to-white/5",
          isFocused && "shadow-[0_0_15px_rgba(255,0,204,0.3)]",
          disabled && "opacity-50"
        )}>
          {/* Holographic Background */}
          <motion.div
            animate={{ 
              background: [
                "linear-gradient(45deg, #ff00cc, #3333ff, #00ccff)",
                "linear-gradient(45deg, #00ccff, #ff00cc, #3333ff)",
                "linear-gradient(45deg, #3333ff, #00ccff, #ff00cc)"
              ],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0"
          />

          {/* Prismatic Border */}
          <motion.div
            animate={{ 
              background: [
                "linear-gradient(90deg, #ff00cc, #3333ff, #00ccff, #ff00cc)",
                "linear-gradient(90deg, #00ccff, #ff00cc, #3333ff, #00ccff)",
                "linear-gradient(90deg, #3333ff, #00ccff, #ff00cc, #3333ff)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-lg opacity-50"
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
              "relative block w-full p-4 text-base",
              "bg-transparent",
              "border border-white/20 rounded-lg",
              theme === 'dark' ? 'text-white' : 'text-gray-900',
              "placeholder-gray-500",
              "focus:outline-none focus:ring-0",
              disabled && "cursor-not-allowed",
              isFocused && "placeholder-white/40",
              className
            )}
            style={{
              minHeight: "120px",
              boxShadow: isFocused ? 'inset 0 0 10px rgba(255,0,204,0.1)' : 'none'
            }}
          />

          {/* Floating Label */}
          <motion.label
            htmlFor={props.id}
            animate={{
              y: isFloating ? -28 : 0,
              scale: isFloating ? 0.85 : 1,
              background: [
                "linear-gradient(45deg, #ff00cc, #3333ff)",
                "linear-gradient(45deg, #3333ff, #00ccff)",
                "linear-gradient(45deg, #00ccff, #ff00cc)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className={clsx(
              "absolute left-4 top-4",
              "text-transparent bg-clip-text",
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
              animate={{ 
                background: [
                  "linear-gradient(45deg, #ff00cc, #3333ff)",
                  "linear-gradient(45deg, #3333ff, #00ccff)",
                  "linear-gradient(45deg, #00ccff, #ff00cc)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className={clsx(
                "absolute right-3 bottom-3",
                "text-xs",
                "text-transparent bg-clip-text"
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
            animate={{ 
              background: [
                "linear-gradient(45deg, #ff00cc, #3333ff)",
                "linear-gradient(45deg, #3333ff, #00ccff)",
                "linear-gradient(45deg, #00ccff, #ff00cc)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className={clsx(
              "mt-2 text-sm",
              "text-transparent bg-clip-text",
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

Textarea.displayName = 'Textarea_24';

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