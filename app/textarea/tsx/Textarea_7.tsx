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
        <div className="relative">
          {/* Neon Border Effect */}
          <div className={clsx(
            "absolute -inset-0.5 rounded-lg opacity-75",
            "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500",
            "animate-gradient-x",
            "blur",
            error ? "!bg-red-500" : "",
            disabled ? "opacity-30" : ""
          )} />

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
              "bg-black rounded-lg",
              "border-transparent placeholder-gray-500",
              "text-white",
              "focus:outline-none focus:ring-0",
              disabled && "cursor-not-allowed opacity-75",
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
                  : "#22d3ee"
                : error
                  ? "#ef4444"
                  : disabled
                    ? "#6b7280"
                    : "#d1d5db"
            }}
            transition={{ duration: 0.2 }}
            className={clsx(
              "absolute left-4 top-4",
              "text-gray-300",
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
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute right-3 bottom-3 text-xs text-cyan-400"
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
              "mt-2 text-sm text-cyan-400",
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

Textarea.displayName = 'Textarea_7';

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