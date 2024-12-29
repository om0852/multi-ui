"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// OTP Slot Component
type InputOTPSlotProps = {
  index: number;
  value: string;
  onChange: (value: string, index: number) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  invalid: boolean;
};
const InputOTPSlot: React.FC<InputOTPSlotProps> = ({
  index,
  value,
  onChange,
  onKeyDown,
  invalid,
}) => {
  return (
    <motion.input
      type="text"
      maxLength={1}
      value={value}
      onChange={(e) => onChange(e.target.value, index)}
      onKeyDown={onKeyDown}
      className={`w-14 h-14 text-center text-2xl font-bold rounded-full focus:outline-none ${
        invalid
          ? "border-red-500 bg-red-50 dark:bg-red-800"
          : "border-gray-300 bg-white dark:bg-gray-800"
      } focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-600`}
      animate={invalid ? { scale: [1, 1.2, 1], y: [0, -10, 0] } : {}}
      transition={{ duration: 0.3 }}
    />
  );
};

// OTP Group Component
type InputOTPGroupProps = {
  children: React.ReactNode;
};
const InputOTPGroup: React.FC<InputOTPGroupProps> = ({ children }) => {
  return <div className="flex items-center space-x-4">{children}</div>;
};

// OTP Separator Component
export const InputOTPSeparator = () => (
  <div className="mx-2 text-2xl font-semibold text-gray-500 dark:text-gray-300">-</div>
);

// Main OTP Input Component
type InputOTPProps = {
  maxLength: number;
  children: React.ReactNode;
  onComplete?: (otp: string) => void;
  validationRegex?: RegExp;
};
export const InputOTP: React.FC<InputOTPProps> = ({
  maxLength,
  children,
  onComplete,
  validationRegex = /^[0-9]*$/,
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(maxLength).fill(""));
  const [focusedIndex, setFocusedIndex] = useState<number | null>(0);
  const [invalidIndexes, setInvalidIndexes] = useState<number[]>([]);

  // Handle OTP Slot Change
  const handleChange = (value: string, index: number) => {
    if (value.match(validationRegex)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setInvalidIndexes((prev) => prev.filter((i) => i !== index)); // Clear invalid state
      if (value && index < maxLength - 1) {
        focusNextSlot(index); // Automatically focus next slot after typing
      }
    } else {
      // Mark the index as invalid
      setInvalidIndexes((prev) => (prev.includes(index) ? prev : [...prev, index]));
    }
  };

  // Focus on the next OTP slot
  const focusNextSlot = (index: number) => {
    const nextIndex = index + 1;
    if (nextIndex < maxLength) {
      setFocusedIndex(nextIndex);
    }
  };

  // Handle KeyDown to move to the next or previous slot
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (newOtp[index] === "" && index > 0) {
        setFocusedIndex(index - 1);
      } else {
        newOtp[index] = "";
      }
      setOtp(newOtp);
    } else if (e.key === "ArrowRight" && index < maxLength - 1) {
      setFocusedIndex(index + 1);
    } else if (e.key === "ArrowLeft" && index > 0) {
      setFocusedIndex(index - 1);
    }
  };

  useEffect(() => {
    if (focusedIndex !== null) {
      document.querySelectorAll("input")[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  // Trigger the callback when OTP is complete
  useEffect(() => {
    if (otp.every((slot) => slot !== "") && onComplete) {
      onComplete(otp.join(""));
    }
  }, [otp, onComplete]);

  const isInputOTPSlot = (element: React.ReactElement): element is React.ReactElement<InputOTPSlotProps> => {
    return element.type === InputOTPSlot;
  };

  const isInputOTPGroup = (element: React.ReactElement): element is React.ReactElement<InputOTPGroupProps> => {
    return element.type === InputOTPGroup;
  };

  // Inject OTP values into InputOTPSlot components
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && isInputOTPGroup(child)) {
      const groupChildren = React.Children.map(child.props.children, (slot) => {
        if (React.isValidElement(slot) && isInputOTPSlot(slot)) {
          return React.cloneElement(slot, {
            value: otp[slot.props.index],
            onChange: handleChange,
            onKeyDown: (e: React.KeyboardEvent) => handleKeyDown(e, slot.props.index),
            invalid: invalidIndexes.includes(slot.props.index),
          });
        }
        return slot;
      });
      return React.cloneElement(child, { children: groupChildren });
    }
    return child;
  });

  return <div className="flex flex-col items-center">{childrenWithProps}</div>;
};

// Example Usage
export const Example = () => {
  const handleOtpComplete = (otp: string) => {
    console.log("Completed OTP:", otp);
  };

  return (
    <div className="p-8">
      <InputOTP
        maxLength={6}
        onComplete={handleOtpComplete}
        validationRegex={/^[0-9]*$/} // Only numeric values allowed
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} value="" onChange={() => {}} onKeyDown={() => {}} invalid={false} />
          <InputOTPSlot index={1} value="" onChange={() => {}} onKeyDown={() => {}} invalid={false} />
          <InputOTPSlot index={2} value="" onChange={() => {}} onKeyDown={() => {}} invalid={false} />
          <InputOTPSeparator />
          <InputOTPSlot index={3} value="" onChange={() => {}} onKeyDown={() => {}} invalid={false} />
          <InputOTPSlot index={4} value="" onChange={() => {}} onKeyDown={() => {}} invalid={false} />
          <InputOTPSlot index={5} value="" onChange={() => {}} onKeyDown={() => {}} invalid={false} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
};
