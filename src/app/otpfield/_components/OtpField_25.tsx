'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InputOTPSlotProps {
  index: number;
  value: string;
  onChange: (value: string, index: number) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  isFocused: boolean;
}

const LeafPattern: React.FC = () => (
  <motion.div
    className="absolute inset-0 opacity-10"
    style={{
      background: `
        radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.4) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.4) 0%, transparent 50%)
      `,
    }}
    animate={{
      scale: [1, 1.1, 1],
      rotate: [0, 5, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

const InputOTPSlot: React.FC<InputOTPSlotProps> = ({
  index,
  value,
  onChange,
  onKeyDown,
  isFocused,
}) => {
  return (
    <motion.div 
      className="relative"
      animate={{
        y: value ? [0, -4, 0] : 0,
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.input
        type="text"
        maxLength={1}
        value={value}
        onChange={(e) => onChange(e.target.value, index)}
        onKeyDown={onKeyDown}
        className={`w-14 h-16 text-center text-2xl font-medium
                   border-2 rounded-full
                   focus:outline-none bg-white/10 backdrop-blur-sm
                   text-green-600
                   ${isFocused 
                     ? 'border-green-500 bg-green-50/20' 
                     : value 
                       ? 'border-green-400 bg-green-50/10' 
                       : 'border-green-200'}`}
        style={{
          boxShadow: isFocused 
            ? '0 0 20px rgba(34, 197, 94, 0.2), inset 0 0 10px rgba(34, 197, 94, 0.1)'
            : value
              ? '0 0 15px rgba(34, 197, 94, 0.15)'
              : 'none',
        }}
      />
      
      <AnimatePresence>
        {(isFocused || value) && (
          <motion.div
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              background: [
                'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.2) 0%, transparent 70%)',
                'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.3) 0%, transparent 70%)',
                'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.2) 0%, transparent 70%)',
              ]
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ borderRadius: '9999px' }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface InputOTPProps {
  maxLength?: number;
  onComplete?: (otp: string) => void;
}

const InputOTP: React.FC<InputOTPProps> = ({
  maxLength = 6,
  onComplete,
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(maxLength).fill(''));
  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  const handleChange = (value: string, index: number) => {
    if (!value || /^\d+$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < maxLength - 1) {
        setFocusedIndex(index + 1);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
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
    if (otp.every(slot => slot !== '') && onComplete) {
      onComplete(otp.join(''));
    }
  }, [otp, onComplete]);

  return (
    <div className="flex flex-col items-center space-y-8 relative z-10">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-medium text-green-800 dark:text-green-200">
          Verification Code
        </h1>
        <motion.div
          className="absolute -bottom-2 left-0 right-0 h-0.5"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.5), transparent)',
          }}
        />
      </motion.div>

      <motion.div
        className="flex gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {otp.map((value, index) => (
          <InputOTPSlot
            key={index}
            index={index}
            value={value}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, index)}
            isFocused={focusedIndex === index}
          />
        ))}
      </motion.div>

      <motion.p
        className="text-green-600/80 dark:text-green-400/80 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Please enter the verification code
      </motion.p>
    </div>
  );
};

const FloatingLeaves: React.FC = () => {
  const leaves = Array.from({ length: 20 });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {leaves.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full bg-green-500/10"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: window.innerHeight + 20,
            x: `calc(${Math.random() * 100}vw)`,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  );
};

const OtpField_25: React.FC = () => {
  const handleOtpComplete = (otp: string) => {
    console.log('Completed OTP:', otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-green-900 relative overflow-hidden">
      <FloatingLeaves />
      
      <motion.div
        className="p-12 rounded-3xl relative backdrop-blur-xl"
        style={{
          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
          boxShadow: '0 0 40px rgba(34, 197, 94, 0.2)',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <LeafPattern />
        <InputOTP maxLength={6} onComplete={handleOtpComplete} />
      </motion.div>
    </div>
  );
};

export default OtpField_25; 