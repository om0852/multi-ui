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

const BubbleEffect: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-sky-400/20 rounded-full"
          initial={{ 
            bottom: '-20%',
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            opacity: 0,
          }}
          animate={{
            bottom: '120%',
            opacity: [0, 0.5, 0],
            scale: [1, 1.2, 0.8],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeOut",
          }}
          style={{
            filter: 'blur(1px)',
          }}
        />
      ))}
    </motion.div>
  );
};

const WaveEffect: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ scaleY: 1.5, y: '100%' }}
          animate={{ y: '-100%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
          style={{
            background: `linear-gradient(180deg, transparent, rgba(56, 189, 248, ${0.1 - i * 0.03}))`,
            borderRadius: '50% 50% 0 0',
          }}
        />
      ))}
    </motion.div>
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
        scale: [1, 0.95, 1.05, 0.95, 1],
        rotate: [0, -3, 3, -3, 0],
      } : {}}
      transition={{ duration: 0.4 }}
    >
      <motion.input
        type="text"
        maxLength={1}
        value={value}
        onChange={(e) => onChange(e.target.value, index)}
        onKeyDown={onKeyDown}
        className={`w-14 h-16 text-center text-2xl font-medium
                   border-2 rounded-2xl
                   focus:outline-none backdrop-blur-sm
                   ${isError 
                     ? 'text-red-400 border-red-400 bg-red-50/10' 
                     : isFocused 
                       ? 'text-sky-300 border-sky-400 bg-sky-50/10' 
                       : value 
                         ? 'text-sky-200 border-sky-500 bg-sky-50/5' 
                         : 'text-sky-100 border-sky-800 bg-sky-900/5'}`}
        style={{
          textShadow: value ? '0 0 10px rgba(56, 189, 248, 0.5)' : 'none',
          boxShadow: isError
            ? '0 0 20px rgba(248, 113, 113, 0.2)'
            : isFocused 
              ? '0 0 20px rgba(56, 189, 248, 0.2)'
              : value
                ? '0 0 15px rgba(56, 189, 248, 0.1)'
                : 'none',
        }}
      />

      <BubbleEffect isActive={isFocused || (!!value && !isError)} />
      <WaveEffect isActive={isFocused || (!!value && !isError)} />

      {isError && (
        <motion.div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ y: '-100%' }}
            animate={{ y: '200%' }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: 'linear-gradient(180deg, transparent, rgba(248, 113, 113, 0.2), transparent)',
            }}
          />
        </motion.div>
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
    <div className="flex flex-col items-center space-y-8">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-400 to-sky-300">
          Liquid Code
        </h1>
        <motion.div
          className="absolute -bottom-2 left-0 right-0 h-0.5"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.5), transparent)',
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
        className="text-sky-300/80 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Enter the fluid verification code
      </motion.p>
    </div>
  );
};

const OtpField_38: React.FC = () => {
  const handleOtpComplete = (otp: string) => {
    console.log('Completed OTP:', otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-sky-950 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-sky-400/10 rounded-full blur-sm"
            initial={{ 
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.3,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
            }}
          />
        ))}
      </div>
      
      <motion.div
        className="p-16 rounded-3xl relative backdrop-blur-sm"
        style={{
          background: 'linear-gradient(145deg, rgba(56, 189, 248, 0.1), rgba(17, 24, 39, 0.4))',
          boxShadow: '0 0 40px rgba(56, 189, 248, 0.15)',
          border: '1px solid rgba(56, 189, 248, 0.2)',
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

export default OtpField_38; 