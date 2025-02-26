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
        {/* HUD Container */}
        <div className={clsx(
          "relative p-1 rounded-lg",
          "bg-black/80",
          "border-2 border-cyan-500/30",
          "before:absolute before:inset-0 before:rounded-lg",
          "before:bg-gradient-to-r before:from-cyan-500/10 before:to-blue-500/10",
          "before:animate-pulse",
          disabled && "opacity-50"
        )}>
          {/* Scanning Line Effect */}
          <motion.div
            animate={{ 
              top: ["0%", "100%", "0%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className={clsx(
              "absolute left-0 right-0 h-1",
              "bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
            )}
          />

          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-cyan-500" />
          <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-cyan-500" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-cyan-500" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-cyan-500" />

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
              "text-cyan-400",
              "placeholder-cyan-700",
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
                  : "#22d3ee" 
                : error
                  ? "#ef4444"
                  : disabled
                    ? "#6b7280"
                    : "#22d3ee"
            }}
            transition={{ duration: 0.2 }}
            className={clsx(
              "absolute left-4 top-4",
              "text-cyan-400",
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
            <div className={clsx(
              "absolute right-3 bottom-3",
              "text-xs font-mono",
              "text-cyan-500"
            )}>
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {characterCount}
                {maxLength && ` / ${maxLength}`}
              </motion.span>
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
              "mt-2 text-sm text-red-500 font-mono",
              errorClassName
            )}
          >
            [ERROR] {error}
          </motion.p>
        )}

        {/* Helper Text */}
        {!error && helperText && (
          <p className={clsx(
            "mt-2 text-sm font-mono",
            "text-cyan-500",
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

Textarea.displayName = 'Textarea_17';

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