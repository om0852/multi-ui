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
            readOnly={disabled}
            className={clsx(
              "peer",
              "block w-full px-4 pt-6 pb-2 text-base",
              "bg-white dark:bg-gray-900",
              "border-2 rounded-lg transition-colors duration-200",
              error
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400",
              disabled && "bg-gray-100 dark:bg-gray-800 cursor-not-allowed opacity-75 select-none",
              className
            )}
            aria-invalid={error ? "true" : "false"}
            aria-disabled={disabled}
            aria-describedby={
              error ? "error-message" : helperText ? "helper-text" : undefined
            }
          />
          <motion.label
            htmlFor={props.id}
            animate={{
              y: isFloating ? -20 : 0,
              scale: isFloating ? 0.85 : 1,
              color: isFocused 
                ? error 
                  ? "rgb(239, 68, 68)" 
                  : "rgb(59, 130, 246)" 
                : error
                  ? "rgb(239, 68, 68)"
                  : disabled
                    ? "rgb(156, 163, 175)"
                    : "rgb(107, 114, 128)"
            }}
            transition={{ duration: 0.2 }}
            className={clsx(
              "absolute left-4 top-4 z-10",
              "text-gray-500 dark:text-gray-400",
              "pointer-events-none origin-[0]",
              "transition-all duration-200",
              "bg-transparent px-1",
              disabled && "text-gray-400",
              labelClassName
            )}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </motion.label>
        </div>

        {/* Error Message */}
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={clsx(
              "mt-1 text-sm text-red-500",
              errorClassName
            )}
            id="error-message"
          >
            {error}
          </motion.p>
        )}

        {/* Helper Text */}
        {!error && helperText && (
          <p
            className={clsx(
              "mt-1 text-sm text-gray-500 dark:text-gray-400",
              disabled && "opacity-75",
              helperClassName
            )}
            id="helper-text"
          >
            {helperText}
          </p>
        )}

        {/* Character Count */}
        {showCharacterCount && !disabled && (
          <div className="absolute right-3 bottom-3 text-xs text-gray-400">
            {characterCount}
            {maxLength && ` / ${maxLength}`}
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea_6';

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