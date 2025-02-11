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

const Textarea_28 = React.forwardRef<HTMLTextAreaElement, FloatingTextareaProps>(
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
    const innerRef = useRef<HTMLTextAreaElement>(null);
    const combinedRef = useCombinedRefs(ref, innerRef);

    useEffect(() => {
      if (defaultValue || value) {
        setIsFocused(true);
      }
    }, [defaultValue, value]);

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      if (disabled) return;
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      if (disabled) return;
      setIsFocused(false);
      if (!e.target.value) {
        setIsFocused(false);
      }
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (disabled) return;
      setCharacterCount(e.target.value.length);
      onChange?.(e);
    };

    return (
      <motion.div 
        className={clsx("relative", containerClassName)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {label && (
          <motion.label 
            className={clsx(
              "block text-sm font-medium mb-2",
              {
                "text-blue-400": isFocused,
                "text-white/70": !isFocused,
              },
              labelClassName
            )}
            animate={{ x: isFocused ? 10 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {label}
            {required && <span className="text-red-500">*</span>}
          </motion.label>
        )}
        <div className="relative group">
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
              "w-full p-4 rounded-xl",
              "bg-white/10 backdrop-blur-md",
              "border border-white/20",
              {
                "bg-gray-900/50 cursor-not-allowed": disabled,
                "text-white placeholder-white/30": !disabled,
              },
              "transition-all duration-300 ease-in-out",
              {
                "focus:outline-none focus:border-blue-400/50 focus:bg-white/20": !disabled,
              },
              "resize-none min-h-[120px]",
              "shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
              {
                "group-hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)]": !disabled,
              },
              className
            )}
          />
          
          {/* Animated glow effect */}
          <motion.div
            className="absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100"
            animate={{
              boxShadow: isFocused 
                ? '0 0 20px rgba(59,130,246,0.3)' 
                : '0 0 0px rgba(59,130,246,0)'
            }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="mt-1 flex justify-between">
          <div>
            {error ? (
              <p className={clsx("text-red-400 text-sm", errorClassName)}>{error}</p>
            ) : helperText ? (
              <p className={clsx("text-blue-400/70 text-sm", helperClassName)}>{helperText}</p>
            ) : null}
          </div>
          {showCharacterCount && maxLength && (
            <p className={clsx("text-blue-400/70 text-sm")}>
              {characterCount}/{maxLength}
            </p>
          )}
        </div>
      </motion.div>
    );
  }
);

Textarea_28.displayName = 'Textarea_28';

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

export default Textarea_28; 