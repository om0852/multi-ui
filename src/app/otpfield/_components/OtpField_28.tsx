'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InputOTPSlotProps {
  index: number;
  value: string;
  onChange: (value: string, index: number) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  isFocused: boolean;
  isError: boolean;
}

const BubbleBackground: React.FC = () => {
  const bubbles = Array.from({ length: 15 });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-t from-blue-300/20 to-blue-200/10"
          initial={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            scale: 0.8,
          }}
          animate={{
            y: -200,
            x: `calc(${Math.random() * 200 - 100}px)`,
            scale: [0.8, 1.2, 0.8],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
          style={{
            filter: 'blur(8px)',
          }}
        />
      ))}
    </div>
  );
};

const InputOTPSlot: React.FC<InputOTPSlotProps> = ({
  index,
  value,
  onChange,
  onKeyDown,
  isFocused,
  isError,
}) => {
  return (
    <motion.div 
      className="relative"
      animate={isError ? {
        scale: [1, 1.1, 0.9, 1.05, 1],
      } : {}}
      transition={{ duration: 0.4 }}
    >
      <motion.input
        type="text"
        maxLength={1}
        value={value}
        onChange={(e) => onChange(e.target.value, index)}
        onKeyDown={onKeyDown}
        className={`w-16 h-20 text-center text-2xl font-semibold
                   border-2 rounded-2xl
                   focus:outline-none backdrop-blur-sm
                   ${isError 
                     ? 'text-red-500 border-red-400 bg-red-50/10' 
                     : isFocused 
                       ? 'text-blue-500 border-blue-400 bg-blue-50/10' 
                       : value 
                         ? 'text-blue-400 border-blue-300 bg-blue-50/5' 
                         : 'text-blue-300 border-blue-200/50 bg-white/5'}`}
        style={{
          boxShadow: isError
            ? '0 0 20px rgba(239, 68, 68, 0.2), inset 0 0 10px rgba(239, 68, 68, 0.1)'
            : isFocused 
              ? '0 0 20px rgba(59, 130, 246, 0.2), inset 0 0 10px rgba(59, 130, 246, 0.1)'
              : 'none',
        }}
      />

      <AnimatePresence>
        {(isFocused || value) && !isError && (
          <motion.div
            className="absolute inset-0 -z-10 rounded-2xl overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.2), transparent 70%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {isError && (
        <motion.div
          className="absolute inset-0 rounded-2xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: [0, 0.5, 0],
            scale: [0.8, 1.2, 1.8],
          }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'radial-gradient(circle at center, rgba(239, 68, 68, 0.3), transparent 70%)',
          }}
        />
      )}
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
  const [errorIndexes, setErrorIndexes] = useState<number[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!value || /^\d+$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setErrorIndexes(prev => prev.filter(i => i !== index));

      if (value && index < maxLength - 1) {
        setFocusedIndex(index + 1);
      }
    } else {
      setErrorIndexes(prev => [...new Set([...prev, index])]);
      
      // Clear error after animation
      setTimeout(() => {
        setErrorIndexes(prev => prev.filter(i => i !== index));
      }, 1000);
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
      setErrorIndexes(prev => prev.filter(i => i !== index));
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
    <div className="flex flex-col items-center space-y-10">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-medium text-blue-100">
          Verification Code
        </h1>
        <motion.div
          className="absolute -bottom-2 left-0 right-0 h-0.5"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
          }}
        />
      </motion.div>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
            isError={errorIndexes.includes(index)}
          />
        ))}
      </motion.div>

      <motion.p
        className="text-blue-200/80 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Enter the verification code
      </motion.p>
    </div>
  );
};

const OtpField_28: React.FC = () => {
  const handleOtpComplete = (otp: string) => {
    console.log('Completed OTP:', otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 relative overflow-hidden">
      <BubbleBackground />
      
      <motion.div
        className="p-16 rounded-3xl relative backdrop-blur-xl"
        style={{
          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
          boxShadow: '0 0 40px rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <InputOTP maxLength={6} onComplete={handleOtpComplete} />
      </motion.div>
    </div>
  );
};

export default OtpField_28; 