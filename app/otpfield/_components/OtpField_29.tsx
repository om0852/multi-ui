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

const CrystalBackground: React.FC = () => {
  const crystals = Array.from({ length: 20 });
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {crystals.map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-gradient-to-br from-amber-200/10 to-amber-100/5"
          initial={{
            clipPath: `polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`,
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: Math.random() * 360,
          }}
          animate={{
            rotate: [null, Math.random() * 360],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backdropFilter: 'blur(2px)',
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
        rotate: [0, -5, 5, -5, 5, 0],
        scale: [1, 0.95, 1.05, 0.95, 1.05, 1],
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
                   border-2 
                   focus:outline-none backdrop-blur-sm
                   ${isError 
                     ? 'text-red-500 border-red-400 bg-red-50/5' 
                     : isFocused 
                       ? 'text-amber-400 border-amber-400 bg-amber-50/5' 
                       : value 
                         ? 'text-amber-300 border-amber-300 bg-amber-50/5' 
                         : 'text-amber-200 border-amber-200/30 bg-white/5'}`}
        style={{
          clipPath: 'polygon(92% 0, 100% 25%, 100% 75%, 92% 100%, 8% 100%, 0 75%, 0 25%, 8% 0)',
          boxShadow: isError
            ? '0 0 20px rgba(239, 68, 68, 0.2)'
            : isFocused 
              ? '0 0 30px rgba(251, 191, 36, 0.2)'
              : value
                ? '0 0 20px rgba(251, 191, 36, 0.1)'
                : 'none',
        }}
      />

      <AnimatePresence>
        {(isFocused || value) && !isError && (
          <motion.div
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 180],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(251, 191, 36, 0.2), transparent)',
              clipPath: 'polygon(92% 0, 100% 25%, 100% 75%, 92% 100%, 8% 100%, 0 75%, 0 25%, 8% 0)',
            }}
          />
        )}
      </AnimatePresence>

      {isError && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.5, 0],
          }}
          transition={{ duration: 0.4 }}
          style={{
            background: 'radial-gradient(circle at center, rgba(239, 68, 68, 0.3), transparent 70%)',
            clipPath: 'polygon(92% 0, 100% 25%, 100% 75%, 92% 100%, 8% 100%, 0 75%, 0 25%, 8% 0)',
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
      setErrorIndexes(prev => Array.from(new Set([...prev, index])));
      
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
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200">
          Crystal Code
        </h1>
        <motion.div
          className="absolute -bottom-2 left-0 right-0 h-0.5"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.5), transparent)',
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
        className="text-amber-200/80 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Enter the verification code
      </motion.p>
    </div>
  );
};

const OtpField_29: React.FC = () => {
  const handleOtpComplete = (otp: string) => {
    console.log('Completed OTP:', otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-amber-950 to-gray-900 relative overflow-hidden">
      <CrystalBackground />
      
      <motion.div
        className="p-16 rounded-3xl relative backdrop-blur-xl"
        style={{
          background: 'linear-gradient(145deg, rgba(251, 191, 36, 0.1), rgba(17, 24, 39, 0.4))',
          boxShadow: '0 0 40px rgba(251, 191, 36, 0.1)',
          border: '1px solid rgba(251, 191, 36, 0.2)',
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

export default OtpField_29; 