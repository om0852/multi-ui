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

const SparkleEffect: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          initial={{ 
            scale: 0,
            x: '50%',
            y: '50%',
            opacity: 0,
          }}
          animate={{
            scale: [0, 1, 0],
            x: ['50%', `${Math.random() * 100}%`],
            y: ['50%', `${Math.random() * 100}%`],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 1.5 + 0.5,
            repeat: Infinity,
            delay: i * 0.1,
          }}
          style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
            filter: 'blur(0.5px)',
          }}
        />
      ))}
    </motion.div>
  );
};

const MagicAura: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <motion.div
      className="absolute inset-0 rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0, 0.3, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            background: `radial-gradient(circle at center, rgba(216, 180, 254, ${0.2 - i * 0.05}), transparent 70%)`,
            border: '1px solid rgba(216, 180, 254, 0.1)',
            borderRadius: '16px',
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
                     ? 'text-red-400 border-red-400 bg-red-900/10' 
                     : isFocused 
                       ? 'text-purple-300 border-purple-400 bg-purple-900/20' 
                       : value 
                         ? 'text-purple-200 border-purple-500 bg-purple-900/10' 
                         : 'text-purple-100 border-purple-800 bg-purple-900/5'}`}
        style={{
          textShadow: value ? '0 0 10px rgba(216, 180, 254, 0.5)' : 'none',
          boxShadow: isError
            ? '0 0 20px rgba(248, 113, 113, 0.3), inset 0 0 10px rgba(248, 113, 113, 0.2)'
            : isFocused 
              ? '0 0 20px rgba(216, 180, 254, 0.3), inset 0 0 10px rgba(216, 180, 254, 0.2)'
              : value
                ? '0 0 15px rgba(216, 180, 254, 0.2)'
                : 'none',
        }}
      />

      <SparkleEffect isActive={isFocused || (!!value && !isError)} />
      <MagicAura isActive={isFocused || (!!value && !isError)} />

      {isError && (
        <motion.div
          className="absolute inset-0 rounded-2xl overflow-hidden"
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
        <h1 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300">
          Mystic Code
        </h1>
        <motion.div
          className="absolute -bottom-2 left-0 right-0 h-0.5"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(216, 180, 254, 0.5), transparent)',
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
        className="text-purple-300/80 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Enter the mystical code
      </motion.p>
    </div>
  );
};

const OtpField_40: React.FC = () => {
  const handleOtpComplete = (otp: string) => {
    console.log('Completed OTP:', otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            initial={{ 
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              scale: Math.random(),
              opacity: Math.random() * 0.3,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
            }}
          />
        ))}
      </div>
      
      <motion.div
        className="p-16 rounded-3xl relative backdrop-blur-sm"
        style={{
          background: 'linear-gradient(145deg, rgba(216, 180, 254, 0.1), rgba(17, 24, 39, 0.4))',
          boxShadow: '0 0 40px rgba(216, 180, 254, 0.15)',
          border: '1px solid rgba(216, 180, 254, 0.2)',
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

export default OtpField_40; 