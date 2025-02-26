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
        {/* Container */}
        <div className={clsx(
          "relative",
          disabled && "opacity-50"
        )}>
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
              "block w-full px-4 pt-6 pb-2",
              "text-base bg-transparent",
              "border-0 border-b-2",
              "focus:ring-0",
              error
                ? "border-red-500 focus:border-red-500"
                : isFocused
                  ? "border-blue-500"
                  : "border-gray-300 dark:border-gray-600",
              "text-gray-900 dark:text-white",
              "placeholder-transparent",
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
              y: isFloating ? -24 : 0,
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
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={clsx(
              "absolute left-4 top-4",
              "text-gray-500 dark:text-gray-400",
              "pointer-events-none",
              "origin-[0]",
              "transition-all",
              labelClassName
            )}
          >
            {label}
            {required && (
              <span className="ml-1 text-red-500">*</span>
            )}
          </motion.label>

          {/* Focus Line */}
          {isFocused && !error && !disabled && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.2 }}
              className={clsx(
                "absolute bottom-0 left-0 right-0 h-0.5",
                "bg-blue-500"
              )}
              style={{ transformOrigin: "left" }}
            />
          )}

          {/* Character Counter */}
          {showCharacterCount && !disabled && (
            <div className={clsx(
              "absolute right-0 -bottom-6",
              "text-xs",
              error
                ? "text-red-500"
                : "text-gray-500 dark:text-gray-400"
            )}>
              {characterCount}
              {maxLength && ` / ${maxLength}`}
            </div>
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
          <p className={clsx(
            "mt-2 text-sm",
            "text-gray-500 dark:text-gray-400",
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

Textarea.displayName = 'Textarea_10';

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