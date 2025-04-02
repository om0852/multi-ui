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
        {/* Glass Container */}
        <div className={clsx(
          "relative p-1 rounded-xl",
          "bg-gradient-to-br from-white/20 to-white/5",
          "backdrop-blur-xl",
          "shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
          "border border-white/20",
          error && "!border-red-500/50",
          disabled && "opacity-70"
        )}>
          {/* Background Shapes */}
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            <div className={clsx(
              "absolute -top-1/2 -left-1/2 w-full h-full rounded-full",
              "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
              "animate-pulse"
            )} />
            <div className={clsx(
              "absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full",
              "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
              "animate-pulse delay-1000"
            )} />
          </div>

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
              "border-none rounded-lg",
              "text-gray-800 dark:text-white",
              "placeholder-gray-500 dark:placeholder-gray-400",
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
                  ? "rgb(239, 68, 68)" 
                  : "rgb(99, 102, 241)" 
                : error
                  ? "rgb(239, 68, 68)"
                  : disabled
                    ? "rgb(156, 163, 175)"
                    : "rgb(107, 114, 128)"
            }}
            transition={{ duration: 0.2 }}
            className={clsx(
              "absolute left-4 top-4",
              "text-gray-600 dark:text-gray-300",
              "pointer-events-none",
              "origin-[0]",
              "transition-all",
              "bg-transparent px-1",
              labelClassName
            )}
          >
            {label}
            {required && (
              <span className="ml-1 text-red-500">*</span>
            )}
          </motion.label>

          {/* Character Counter */}
          {showCharacterCount && !disabled && (
            <div className={clsx(
              "absolute right-3 bottom-3",
              "text-xs",
              "text-gray-600 dark:text-gray-300"
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
            "text-gray-600 dark:text-gray-300",
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

Textarea.displayName = 'Textarea_13';

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