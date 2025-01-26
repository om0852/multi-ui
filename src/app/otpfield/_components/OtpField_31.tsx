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
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [1, 1.2, 1],
            rotateX: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "linear",
          }}
          style={{
            border: '1px solid rgba(0, 255, 255, 0.3)',
            borderRadius: '12px',
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
      className="relative perspective-1000"
      animate={isError ? {
        x: [-8, 8, -8, 8, 0],
        rotateY: [-20, 20, -20, 20, 0],
      } : {}}
      transition={{ duration: 0.4 }}
    >
      <motion.input
        type="text"
        maxLength={1}
        value={value}
        onChange={(e) => onChange(e.target.value, index)}
        onKeyDown={onKeyDown}
        className={`w-16 h-20 text-center text-2xl font-bold
                   border-2 rounded-xl
                   focus:outline-none backdrop-blur-sm
                   ${isError 
                     ? 'text-red-400 border-red-400 bg-red-900/10' 
                     : isFocused 
                       ? 'text-cyan-300 border-cyan-400 bg-cyan-900/20' 
                       : value 
                         ? 'text-cyan-200 border-cyan-500 bg-cyan-900/10' 
                         : 'text-cyan-100 border-cyan-800 bg-cyan-900/5'}`}
        style={{
          transform: 'translateZ(20px)',
          textShadow: value ? '0 0 10px rgba(34, 211, 238, 0.5)' : 'none',
          boxShadow: isError
            ? '0 0 20px rgba(248, 113, 113, 0.3), inset 0 0 10px rgba(248, 113, 113, 0.2)'
            : isFocused 
              ? '0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 10px rgba(34, 211, 238, 0.2)'
              : value
                ? '0 0 15px rgba(34, 211, 238, 0.2)'
                : 'none',
        }}
      />

      <HologramEffect isActive={isFocused || (!!value && !isError)} />

      {isError && (
        <motion.div
          className="absolute inset-0 rounded-xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 bg-red-500/10"
              initial={{ y: '-100%' }}
              animate={{ y: '200%' }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 1px, 0 1px)',
              }}
            />
          ))}
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
    <div className="flex flex-col items-center space-y-10">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-300">
          HOLOGRAM CODE
        </h1>
        <motion.div
          className="absolute -bottom-2 left-0 right-0 h-0.5"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.5), transparent)',
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
        className="text-cyan-300/80 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Enter the holographic code
      </motion.p>
    </div>
  );
};

const OtpField_31: React.FC = () => {
  const handleOtpComplete = (otp: string) => {
    console.log('Completed OTP:', otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-cyan-950 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(34,211,238,0.1)_0%,_transparent_50%)]" />
      
      <motion.div
        className="p-16 rounded-3xl relative backdrop-blur-xl"
        style={{
          background: 'linear-gradient(145deg, rgba(34, 211, 238, 0.1), rgba(17, 24, 39, 0.4))',
          boxShadow: '0 0 40px rgba(34, 211, 238, 0.15)',
          border: '1px solid rgba(34, 211, 238, 0.2)',
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

export default OtpField_31; 