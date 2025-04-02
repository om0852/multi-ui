'use client'

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// OTP Slot Component
const InputOTPSlot = ({
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
const InputOTPGroup = ({ children }) => {
  return <div className="flex items-center space-x-4">{children}</div>;
};

// OTP Separator Component
export const InputOTPSeparator = () => (
  <div className="text-2xl font-semibold text-gray-600 dark:text-gray-300">-</div>
);

// Main OTP Input Component
export const InputOTP = ({
  maxLength,
  children,
  onComplete,
  validationRegex = /^[A-Za-z0-9]*$/,
}) => {
  const [otp, setOtp] = useState(new Array(maxLength).fill(""));
  const [invalidIndexes, setInvalidIndexes] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(0);

  // Handle OTP Slot Change
  const handleChange = (value, index) => {
    if (value.match(validationRegex)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setInvalidIndexes((prev) => prev.filter((i) => i !== index));
      if (value && index < maxLength - 1) {
        setFocusedIndex(index + 1);
      }
    } else {
      setInvalidIndexes((prev) => (prev.includes(index) ? prev : [...prev, index]));
    }
  };

  // Handle KeyDown to move to the next or previous slot
  const handleKeyDown = (e, index) => {
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

  // Focus on the input when focusedIndex changes
  useEffect(() => {
    if (focusedIndex !== null) {
      document.querySelectorAll("input")[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  // Trigger onComplete callback when OTP is complete
  useEffect(() => {
    if (otp.every((slot) => slot !== "") && onComplete) {
      onComplete(otp.join(""));
    }
  }, [otp, onComplete]);

  const isInputOTPSlot = (element) => {
    return element.type === InputOTPSlot;
  };

  const isInputOTPGroup = (element) => {
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
            onKeyDown: (e) => handleKeyDown(e, slot.props.index),
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
  const handleOtpComplete = (otp) => {
    console.log("Completed OTP:", otp);
  };

  return (
    <div className="p-8">
      <InputOTP
        maxLength={6}
        onComplete={handleOtpComplete}
        validationRegex={/^[A-Za-z0-9]*$/} // Alphanumeric values allowed
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