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

const GlitchText: React.FC<{ text: string; isError: boolean }> = ({ text, isError }) => {
  if (!isError) return <span>{text}</span>;

  return (
    <motion.div
      className="relative text-red-500"
      animate={{
        x: [-1, 1, -1, 1, 0],
        y: [1, -1, 1, -1, 0],
      }}
      transition={{ duration: 0.2, repeat: 2 }}
    >
      <span className="absolute -left-[1px] top-0 text-blue-500 opacity-80 mix-blend-screen">
        {text}
      </span>
      <span className="absolute -left-[2px] top-0 text-red-500 opacity-80 mix-blend-screen">
        {text}
      </span>
      {text}
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
        rotate: [-1, 1, -1, 1, 0],
        scale: [1, 1.1, 1],
      } : {}}
      transition={{ duration: 0.3 }}
    >
      <motion.input
        type="text"
        maxLength={1}
        value={value}
        onChange={(e) => onChange(e.target.value, index)}
        onKeyDown={onKeyDown}
        className={`w-16 h-20 text-center text-3xl font-bold
                   border-[3px] rounded-md
                   focus:outline-none bg-gray-900
                   ${isError 
                     ? 'text-red-500 border-red-500' 
                     : isFocused 
                       ? 'text-fuchsia-400 border-fuchsia-500' 
                       : value 
                         ? 'text-fuchsia-300 border-fuchsia-400' 
                         : 'text-fuchsia-200 border-fuchsia-900'}`}
        style={{
          textShadow: isError
            ? '0 0 5px rgba(239, 68, 68, 0.8), 0 0 10px rgba(239, 68, 68, 0.5)'
            : value 
              ? '0 0 5px rgba(232, 121, 249, 0.8), 0 0 10px rgba(232, 121, 249, 0.5)'
              : 'none',
          boxShadow: isError
            ? '0 0 20px rgba(239, 68, 68, 0.3), inset 0 0 10px rgba(239, 68, 68, 0.2)'
            : isFocused 
              ? '0 0 20px rgba(232, 121, 249, 0.3), inset 0 0 10px rgba(232, 121, 249, 0.2)'
              : value
                ? '0 0 15px rgba(232, 121, 249, 0.2)'
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
              scale: [0.98, 1.02, 0.98],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              background: 'radial-gradient(circle at center, rgba(232, 121, 249, 0.2), transparent 70%)',
              borderRadius: '6px',
            }}
          />
        )}
      </AnimatePresence>

      {isError && (
        <motion.div
          className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
};

const NeonGrid: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute inset-0"
      style={{
        background: `
          linear-gradient(90deg, rgba(232, 121, 249, 0.05) 1px, transparent 1px),
          linear-gradient(rgba(232, 121, 249, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
      animate={{
        backgroundPosition: ['0px 0px', '40px 40px']
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  </div>
);

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
        <GlitchText 
          text="ENTER CODE" 
          isError={errorIndexes.length > 0}
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
        className="text-fuchsia-400/80 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Verification required
      </motion.p>
    </div>
  );
};

const OtpField_27: React.FC = () => {
  const handleOtpComplete = (otp: string) => {
    console.log('Completed OTP:', otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      <NeonGrid />
      
      <motion.div
        className="p-16 rounded-xl relative backdrop-blur-sm"
        style={{
          background: 'linear-gradient(145deg, rgba(232, 121, 249, 0.1), rgba(17, 24, 39, 0.6))',
          boxShadow: '0 0 40px rgba(232, 121, 249, 0.15)',
          border: '2px solid rgba(232, 121, 249, 0.2)',
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

export default OtpField_27; 