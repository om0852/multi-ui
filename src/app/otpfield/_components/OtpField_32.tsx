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

const GlitchEffect: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 bg-purple-500/20"
          initial={{ x: 0, opacity: 0 }}
          animate={{
            x: [2, -2, 2],
            opacity: [0, 0.5, 0],
            clipPath: [
              'inset(0% 0% 100% 0%)',
              'inset(0% 0% 0% 0%)',
              'inset(100% 0% 0% 0%)',
            ],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "linear",
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
        x: [-4, 4, -4, 4, 0],
        y: [0, -4, 0, 4, 0],
      } : {}}
      transition={{ duration: 0.4 }}
      style={{
        imageRendering: 'pixelated',
      }}
    >
      <motion.input
        type="text"
        maxLength={1}
        value={value}
        onChange={(e) => onChange(e.target.value, index)}
        onKeyDown={onKeyDown}
        className={`w-16 h-20 text-center text-2xl font-bold
                   border-4 
                   focus:outline-none
                   ${isError 
                     ? 'text-red-400 border-red-400 bg-red-900/20' 
                     : isFocused 
                       ? 'text-purple-300 border-purple-400 bg-purple-900/20' 
                       : value 
                         ? 'text-purple-200 border-purple-500 bg-purple-900/10' 
                         : 'text-purple-100 border-purple-800 bg-purple-900/5'}`}
        style={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: '1.25rem',
          clipPath: 'polygon(0 10%, 10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%)',
          textShadow: value 
            ? '2px 2px 0px rgba(168, 85, 247, 0.5)' 
            : 'none',
          boxShadow: isError
            ? 'inset 2px 2px 0px rgba(248, 113, 113, 0.5), inset -2px -2px 0px rgba(248, 113, 113, 0.5)'
            : isFocused 
              ? 'inset 2px 2px 0px rgba(168, 85, 247, 0.5), inset -2px -2px 0px rgba(168, 85, 247, 0.5)'
              : value
                ? 'inset 2px 2px 0px rgba(168, 85, 247, 0.3), inset -2px -2px 0px rgba(168, 85, 247, 0.3)'
                : 'none',
        }}
      />

      <GlitchEffect isActive={isFocused || (!!value && !isError)} />

      {isError && (
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            clipPath: 'polygon(0 10%, 10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%)',
          }}
        >
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 bg-red-500/20"
              initial={{ y: '-100%' }}
              animate={{ y: '200%' }}
              transition={{
                duration: 0.3,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "steps(4)",
              }}
              style={{
                height: '2px',
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
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300"
            style={{ fontFamily: '"Press Start 2P", monospace' }}>
          ARCADE CODE
        </h1>
        <motion.div
          className="absolute -bottom-2 left-0 right-0 h-1"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: 'repeating-linear-gradient(90deg, rgba(168, 85, 247, 0.5) 0px, rgba(168, 85, 247, 0.5) 4px, transparent 4px, transparent 8px)',
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
        className="text-purple-300/80 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{ fontFamily: '"Press Start 2P", monospace' }}
      >
        ENTER THE SECRET CODE
      </motion.p>
    </div>
  );
};

const OtpField_32: React.FC = () => {
  const handleOtpComplete = (otp: string) => {
    console.log('Completed OTP:', otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0" 
           style={{
             backgroundImage: 'radial-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px)',
             backgroundSize: '32px 32px',
             backgroundPosition: '-16px -16px',
           }} />
      
      <motion.div
        className="p-16 rounded-lg relative"
        style={{
          background: 'linear-gradient(145deg, rgba(168, 85, 247, 0.1), rgba(17, 24, 39, 0.4))',
          boxShadow: 'inset 2px 2px 0px rgba(168, 85, 247, 0.2), inset -2px -2px 0px rgba(168, 85, 247, 0.2)',
          border: '4px solid rgba(168, 85, 247, 0.2)',
          imageRendering: 'pixelated',
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

export default OtpField_32; 