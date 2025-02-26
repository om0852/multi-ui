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
    const [cursorVisible, setCursorVisible] = useState(true);
    const innerRef = useRef<HTMLTextAreaElement>(null);
    const combinedRef = useCombinedRefs(ref, innerRef);

    useEffect(() => {
      if (defaultValue || value) {
        setIsFloating(true);
      }
    }, [defaultValue, value]);

    // Blinking cursor effect
    useEffect(() => {
      if (isFocused) {
        const interval = setInterval(() => {
          setCursorVisible(v => !v);
        }, 530);
        return () => clearInterval(interval);
      } else {
        setCursorVisible(true);
      }
    }, [isFocused]);

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
      <div className={clsx("relative font-mono", containerClassName)}>
        {/* Terminal Container */}
        <div className={clsx(
          "relative p-1",
          "bg-black border-2",
          "border-green-500",
          disabled && "opacity-50",
          "before:absolute before:inset-0",
          "before:bg-[radial-gradient(#0f0_1px,transparent_1px)]",
          "before:bg-[length:4px_4px]",
          "before:opacity-[0.15]",
          "before:animate-[scan_0.5s_linear_infinite]"
        )}>
          {/* Terminal Header */}
          <div className={clsx(
            "absolute -top-7 left-0 right-0",
            "h-6 px-2",
            "bg-green-500 text-black",
            "flex items-center justify-between",
            "text-xs uppercase tracking-wider"
          )}>
            <span>Terminal Input</span>
            {showCharacterCount && !disabled && (
              <span>
                {characterCount}
                {maxLength && ` / ${maxLength}`}
              </span>
            )}
          </div>

          {/* Textarea */}
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
              className={clsx(
                "block w-full p-3 text-base",
                "bg-transparent",
                "border-none",
                "text-green-500",
                "placeholder-green-800",
                "focus:outline-none focus:ring-0",
                "font-mono",
                disabled && "cursor-not-allowed",
                className
              )}
              style={{
                minHeight: "120px",
                caretColor: "transparent"
              }}
            />

            {/* Custom Cursor */}
            {isFocused && cursorVisible && (
              <span className="absolute bottom-3 right-3 w-3 h-5 bg-green-500 animate-pulse" />
            )}
          </div>

          {/* Floating Label */}
          <motion.label
            htmlFor={props.id}
            animate={{
              y: isFloating ? -40 : 0,
              x: isFloating ? 0 : 4,
              scale: isFloating ? 0.85 : 1
            }}
            transition={{ duration: 0.2 }}
            className={clsx(
              "absolute left-0 top-4",
              "text-green-500",
              "pointer-events-none",
              "origin-[0]",
              "transition-all",
              "flex items-center gap-1",
              labelClassName
            )}
          >
            <span className="text-green-500">$</span>
            {label}
            {required && (
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-red-500"
              >
                *
              </motion.span>
            )}
          </motion.label>
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
            ERROR: {error}
          </motion.p>
        )}

        {/* Helper Text */}
        {!error && helperText && (
          <p className={clsx(
            "mt-2 text-sm text-green-500",
            disabled && "opacity-50",
            helperClassName
          )}>
            {`> ${helperText}`}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea_18';

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