'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface InputOTPSlotProps {
  index: number;
  value: string;
  onChange: (value: string, index: number) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  isFocused: boolean;
  isError: boolean;
}

const HologramEffect: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden rounded-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0.8, 1.2, 0.8],
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            background: `linear-gradient(${45 + i * 30}deg, rgba(56, 189, 248, ${0.1 - i * 0.02}), rgba(59, 130, 246, ${0.1 - i * 0.02}))`,
            border: '1px solid rgba(56, 189, 248, 0.1)',
            borderRadius: '16px',
            transform: 'perspective(1000px)',
          }}
        />
      ))}
    </motion.div>
  );
};

const CircuitLines: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-sky-400"
          initial={{
            opacity: 0,
            [i % 2 === 0 ? 'width' : 'height']: '2px',
            [i % 2 === 0 ? 'height' : 'width']: '20%',
            top: i < 2 ? '0' : 'auto',
            bottom: i >= 2 ? '0' : 'auto',
            left: i % 2 === 0 ? '0' : 'auto',
            right: i % 2 === 1 ? '0' : 'auto',
          }}
          animate={{
            opacity: [0, 0.5, 0],
            [i % 2 === 0 ? 'width' : 'height']: ['2px', '2px', '2px'],
            [i % 2 === 0 ? 'height' : 'width']: ['20%', '100%', '20%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
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
        x: [-2, 2, -2, 2, 0],
        y: [1, -1, 1, -1, 0],
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
                   border-2 rounded-xl
                   focus:outline-none backdrop-blur-sm
                   ${isError 
                     ? 'text-red-400 border-red-400 bg-red-900/10' 
                     : isFocused 
                       ? 'text-sky-300 border-sky-400 bg-sky-900/20' 
                       : value 
                         ? 'text-sky-200 border-sky-500 bg-sky-900/10' 
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

      <HologramEffect isActive={isFocused || (!!value && !isError)} />
      <CircuitLines isActive={isFocused || (!!value && !isError)} />

      {isError && (
        <motion.div
          className="absolute inset-0 rounded-xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            style={{
              background: 'radial-gradient(circle at center, rgba(239, 68, 68, 0.3), transparent 70%)',
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
      setErrorIndexes(prev => Array.from(new Set([...prev, index])));
      
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
          Security Code
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
        Enter the security code
      </motion.p>
    </div>
  );
};

const OtpField_50: React.FC = () => {
  const handleOtpComplete = (otp: string) => {
    console.log('Completed OTP:', otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-sky-950 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-sky-400/30 w-px h-px"
            initial={{ 
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              scale: Math.random(),
              opacity: Math.random() * 0.3,
            }}
            animate={{
              top: [
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
              ],
              left: [
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
              ],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
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

export default OtpField_50; 