'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type InputOTPSlotProps = {
  index: number;
  value: string;
  onChange: (value: string, index: number) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  invalid: boolean;
};

const InputOTPSlot: React.FC<InputOTPSlotProps> = ({ index, value, onChange, onKeyDown, invalid }) => {
  return (
    <motion.div className="relative">
      <motion.input
        type="text"
        maxLength={1}
        value={value}
        onChange={(e) => onChange(e.target.value, index)}
        onKeyDown={onKeyDown}
        className={`w-16 h-20 text-center text-2xl font-bold rounded-lg 
                   bg-opacity-10 backdrop-blur-sm
                   transition-all duration-300 
                   focus:outline-none relative z-10
                   ${invalid 
                     ? 'text-red-500 border-red-500' 
                     : 'text-emerald-500 border-emerald-300'}`}
        style={{
          boxShadow: value 
            ? '0 0 15px rgba(16, 185, 129, 0.5)' 
            : '0 0 10px rgba(16, 185, 129, 0.2)',
          background: 'rgba(16, 185, 129, 0.05)',
          borderWidth: '2px',
        }}
        animate={{
          scale: value ? [1, 1.1, 1] : 1,
          borderColor: invalid 
            ? ['#ef4444', '#f87171', '#ef4444']
            : value 
              ? ['#10b981', '#34d399', '#10b981']
              : '#6ee7b7',
        }}
        transition={{
          duration: 0.3,
          borderColor: { duration: 1, repeat: Infinity }
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-lg"
        animate={{
          boxShadow: value 
            ? '0 0 25px rgba(16, 185, 129, 0.3)' 
            : '0 0 0px rgba(16, 185, 129, 0)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

type InputOTPGroupProps = {
  children: React.ReactNode;
};

const InputOTPGroup: React.FC<InputOTPGroupProps> = ({ children }) => {
  return (
    <motion.div 
      className="flex space-x-4 items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const InputOTPSeparator: React.FC = () => (
  <motion.div 
    className="text-3xl font-light text-emerald-400"
    animate={{ opacity: [0.4, 1, 0.4] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  >
    ●
  </motion.div>
);

type InputOTPProps = {
  maxLength?: number;
  onComplete?: (otp: string) => void;
  validationRegex?: RegExp;
};

const InputOTP: React.FC<InputOTPProps> = ({ maxLength = 6, onComplete, validationRegex = /^[0-9]*$/ }) => {
  const [otp, setOtp] = useState<string[]>(new Array(maxLength).fill(''));
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const [invalidIndexes, setInvalidIndexes] = useState<number[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!value || value.match(validationRegex)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setInvalidIndexes((prev) => prev.filter((i) => i !== index));

      if (value && index < maxLength - 1) {
        setFocusedIndex(index + 1);
      }
    } else {
      setInvalidIndexes((prev) => [...new Set([...prev, index])]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      if (otp[index] === '' && index > 0) {
        setFocusedIndex(index - 1);
      }
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    } else if (e.key === 'ArrowRight' && index < maxLength - 1) {
      setFocusedIndex(index + 1);
    } else if (e.key === 'ArrowLeft' && index > 0) {
      setFocusedIndex(index - 1);
    }
  };

  useEffect(() => {
    document.querySelectorAll('input')[focusedIndex]?.focus();
  }, [focusedIndex]);

  useEffect(() => {
    if (otp.every((slot) => slot !== '') && onComplete) {
      onComplete(otp.join(''));
    }
  }, [otp, onComplete]);

  return (
    <div className="flex flex-col items-center space-y-8">
      <motion.h1
        className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Verification Code
      </motion.h1>

      <InputOTPGroup>
        {otp.map((value, index) => (
          <React.Fragment key={index}>
            <InputOTPSlot
              index={index}
              value={value}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, index)}
              invalid={invalidIndexes.includes(index)}
            />
            {index === 2 && <InputOTPSeparator />}
          </React.Fragment>
        ))}
      </InputOTPGroup>

      <motion.p
        className="text-emerald-600/80 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.5 }}
      >
        Enter the 6-digit verification code
      </motion.p>
    </div>
  );
};

const OtpField_21: React.FC = () => {
  const handleOtpComplete = (otp: string) => {
    console.log('Completed OTP:', otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <motion.div
        className="p-12 rounded-2xl bg-gray-900/50 backdrop-blur-xl shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <InputOTP
          maxLength={6}
          onComplete={handleOtpComplete}
          validationRegex={/^[0-9]*$/}
        />
      </motion.div>
    </div>
  );
};

export default OtpField_21;
