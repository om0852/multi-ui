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
      <div className={clsx("relative font-[Press_Start_2P]", containerClassName)}>
        {/* Container with Pixelated Border */}
        <div className={clsx(
          "relative p-1",
          theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100',
          disabled && "opacity-50"
        )}>
          {/* Pixelated Border */}
          <div className={clsx(
            "absolute inset-0",
            "border-4 border-dashed",
            error
              ? "border-red-500"
              : isFocused
                ? "border-yellow-400"
                : theme === 'dark'
                  ? "border-gray-700"
                  : "border-gray-300",
            "animate-border-march"
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
              "border-4",
              error
                ? "border-red-500"
                : isFocused
                  ? "border-yellow-400"
                  : theme === 'dark'
                    ? "border-gray-700"
                    : "border-gray-300",
              theme === 'dark' ? 'text-green-400' : 'text-gray-900',
              "placeholder-gray-500",
              "focus:outline-none focus:ring-0",
              disabled && "cursor-not-allowed",
              "font-[Press_Start_2P] text-sm leading-6",
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
                  : "#facc15" 
                : error
                  ? "#ef4444"
                  : disabled
                    ? "#9ca3af"
                    : "#6b7280"
            }}
            transition={{ duration: 0.2 }}
            className={clsx(
              "absolute left-4 top-4",
              "text-xs",
              "pointer-events-none",
              "origin-[0]",
              "transition-all",
              labelClassName
            )}
          >
            {label}
            {required && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-1 text-red-500"
              >
                *
              </motion.span>
            )}
          </motion.label>

          {/* Character Counter */}
          {showCharacterCount && !disabled && (
            <motion.div
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className={clsx(
                "absolute right-3 bottom-3",
                "text-xs",
                theme === 'dark' ? 'text-green-400' : 'text-gray-500'
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
              "mt-2 text-xs text-red-500",
              "font-[Press_Start_2P]",
              errorClassName
            )}
          >
            ! {error}
          </motion.p>
        )}

        {/* Helper Text */}
        {!error && helperText && (
          <motion.p
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className={clsx(
              "mt-2 text-xs",
              theme === 'dark' ? 'text-green-400' : 'text-gray-500',
              disabled && "opacity-50",
              "font-[Press_Start_2P]",
              helperClassName
            )}
          >
            &gt; {helperText}
          </motion.p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea_23';

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