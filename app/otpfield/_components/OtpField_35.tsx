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

const DigitalRainEffect: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-lime-500/30 text-xs font-mono"
          initial={{ 
            top: '-20px',
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            top: '120%',
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "linear",
          }}
        >
          {Math.random().toString(36).substring(2, 3)}
        </motion.div>
      ))}
    </motion.div>
  );
};

const GlitchText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="relative">
      <motion.span
        className="absolute -left-1 -top-1 text-red-500 opacity-50"
        animate={{
          x: [-1, 1, -1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute -right-1 -bottom-1 text-cyan-500 opacity-50"
        animate={{
          x: [1, -1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {text}
      </motion.span>
      <span className="relative text-lime-500">{text}</span>
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
        x: [-2, 2, -2, 2, 0],
        rotateY: [-10, 10, -10, 10, 0],
      } : {}}
      transition={{ duration: 0.4 }}
    >
      <motion.input
        type="text"
        maxLength={1}
        value={value}
        onChange={(e) => onChange(e.target.value, index)}
        onKeyDown={onKeyDown}
        className={`w-14 h-16 text-center text-2xl font-mono
                   border-2 rounded-lg
                   focus:outline-none bg-gray-900/80
                   ${isError 
                     ? 'text-red-400 border-red-500' 
                     : isFocused 
                       ? 'text-lime-400 border-lime-500' 
                       : value 
                         ? 'text-lime-300 border-lime-600' 
                         : 'text-lime-200 border-lime-900'}`}
        style={{
          textShadow: value 
            ? '0 0 10px rgba(132, 204, 22, 0.5)' 
            : 'none',
          boxShadow: isError
            ? '0 0 20px rgba(239, 68, 68, 0.3), inset 0 0 10px rgba(239, 68, 68, 0.2)'
            : isFocused 
              ? '0 0 20px rgba(132, 204, 22, 0.3), inset 0 0 10px rgba(132, 204, 22, 0.2)'
              : value
                ? '0 0 15px rgba(132, 204, 22, 0.2)'
                : 'none',
        }}
      />

      <DigitalRainEffect isActive={isFocused || (!!value && !isError)} />

      {isError && (
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
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
                scale: [1, 1.1, 1],
                x: [-2, 2, -2],
              }}
              transition={{
                duration: 0.3,
                delay: i * 0.1,
                repeat: Infinity,
              }}
              style={{
                background: 'linear-gradient(45deg, transparent, rgba(239, 68, 68, 0.2), transparent)',
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
        <GlitchText text="MATRIX CODE" />
        <motion.div
          className="absolute -bottom-2 left-0 right-0 h-0.5"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(132, 204, 22, 0.5), transparent)',
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
        className="text-lime-500/80 text-sm font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Enter the system verification code
      </motion.p>
    </div>
  );
};

const OtpField_35: React.FC = () => {
  const handleOtpComplete = (otp: string) => {
    console.log('Completed OTP:', otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-lime-500 text-xs font-mono"
            initial={{ 
              top: '-20px',
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              top: '120%',
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "linear",
            }}
          >
            {Math.random().toString(36).substring(2, 3)}
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="p-16 rounded-2xl relative backdrop-blur-sm"
        style={{
          background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.9))',
          boxShadow: '0 0 40px rgba(132, 204, 22, 0.1)',
          border: '1px solid rgba(132, 204, 22, 0.2)',
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

export default OtpField_35; 