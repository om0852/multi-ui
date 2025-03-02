'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InputOTPSlotProps {
  index: number;
  value: string;
  onChange: (value: string, index: number) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  invalid: boolean;
  isFocused: boolean;
}

// OTP Slot Component with 3D effect
const InputOTPSlot: React.FC<InputOTPSlotProps> = ({
  index,
  value,
  onChange,
  onKeyDown,
  invalid,
  isFocused,
}) => {
  return (
    <motion.div 
      className="relative perspective-1000"
      initial={{ rotateX: -30 }}
      animate={{ 
        rotateX: value ? 0 : -30,
        z: value ? 50 : 0
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.input
        type="text"
        maxLength={1}
        value={value}
        onChange={(e) => onChange(e.target.value, index)}
        onKeyDown={onKeyDown}
        className={`w-14 h-16 text-center text-2xl font-bold
                   border-b-4 rounded-t-lg
                   focus:outline-none relative z-10
                   transition-all duration-300
                   ${invalid 
                     ? 'text-orange-500 border-orange-500 bg-orange-100/10' 
                     : isFocused
                       ? 'text-indigo-400 border-indigo-500 bg-indigo-100/10'
                       : 'text-violet-300 border-violet-400/30 bg-violet-100/5'}`}
        style={{
          textShadow: value ? '0 0 10px rgba(129, 140, 248, 0.5)' : 'none',
          transform: 'translateZ(20px)',
        }}
      />
      
      <AnimatePresence>
        {value && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute inset-0 -z-10"
            style={{
              background: 'linear-gradient(180deg, rgba(129, 140, 248, 0.1), rgba(109, 40, 217, 0.2))',
              borderRadius: '8px 8px 0 0',
              transform: 'translateZ(10px)',
            }}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 -z-20"
        animate={{
          boxShadow: isFocused
            ? '0 10px 30px -10px rgba(129, 140, 248, 0.3)'
            : '0 5px 15px -5px rgba(109, 40, 217, 0.2)',
        }}
        style={{
          borderRadius: '8px 8px 0 0',
          transform: 'translateZ(0)',
        }}
      />
    </motion.div>
  );
};

// Holographic Separator Component
const InputOTPSeparator: React.FC = () => (
  <motion.div
    className="w-3 h-8 rounded-full relative"
    style={{ background: 'linear-gradient(180deg, rgba(129, 140, 248, 0.2), rgba(109, 40, 217, 0.1))' }}
    animate={{
      opacity: [0.5, 1, 0.5],
      scale: [0.95, 1.05, 0.95],
      rotateY: [0, 180, 360],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }}
  />
);

interface InputOTPProps {
  maxLength?: number;
  onComplete?: (otp: string) => void;
}

// Main OTP Component
const InputOTP: React.FC<InputOTPProps> = ({
  maxLength = 6,
  onComplete,
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(maxLength).fill(''));
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const [invalidIndexes, setInvalidIndexes] = useState<number[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!value || /^\d+$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setInvalidIndexes(prev => prev.filter(i => i !== index));

      if (value && index < maxLength - 1) {
        setFocusedIndex(index + 1);
      }
    } else {
      setInvalidIndexes((prev) => Array.from(new Set([...prev, index])));
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
    <div className="flex flex-col items-center space-y-8">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-violet-200">
          Security Code
        </h1>
        <motion.div
          className="absolute inset-x-0 bottom-0 h-px"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(129, 140, 248, 0.5), transparent)',
          }}
        />
      </motion.div>

      <motion.div
        className="flex items-center space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {otp.map((value, index) => (
          <React.Fragment key={index}>
            <InputOTPSlot
              index={index}
              value={value}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, index)}
              invalid={invalidIndexes.includes(index)}
              isFocused={focusedIndex === index}
            />
            {index === 2 && <InputOTPSeparator />}
          </React.Fragment>
        ))}
      </motion.div>

      <motion.p
        className="text-violet-300/70 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Enter the verification code
      </motion.p>
    </div>
  );
};

// Main Component
const OtpField_22: React.FC = () => {
  const handleOtpComplete = (otp: string) => {
    console.log('Completed OTP:', otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-violet-950 to-gray-900">
      <motion.div
        className="p-12 rounded-2xl relative"
        style={{
          background: 'linear-gradient(145deg, rgba(109, 40, 217, 0.1), rgba(67, 56, 202, 0.05))',
          backdropFilter: 'blur(10px)',
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'linear-gradient(145deg, rgba(129, 140, 248, 0.1), transparent)',
            filter: 'blur(5px)',
            transform: 'translateZ(-1px)',
          }}
        />
        <InputOTP maxLength={6} onComplete={handleOtpComplete} />
      </motion.div>
    </div>
  );
};

export default OtpField_22;
