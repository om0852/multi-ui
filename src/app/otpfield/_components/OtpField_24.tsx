'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InputOTPSlotProps {
  index: number;
  value: string;
  onChange: (value: string, index: number) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  isFocused: boolean;
}

const InputOTPSlot: React.FC<InputOTPSlotProps> = ({
  index,
  value,
  onChange,
  onKeyDown,
  isFocused,
}) => {
  return (
    <motion.div 
      className="relative"
      animate={{
        y: value ? [-2, 2, -2] : 0,
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.input
        type="text"
        maxLength={1}
        value={value}
        onChange={(e) => onChange(e.target.value, index)}
        onKeyDown={onKeyDown}
        className={`w-14 h-16 text-center text-2xl font-bold
                   border-2 rounded-lg
                   focus:outline-none bg-gray-900/80
                   text-pink-500 placeholder-pink-700/50
                   ${isFocused 
                     ? 'border-pink-500' 
                     : value 
                       ? 'border-pink-400' 
                       : 'border-pink-900'}`}
        style={{
          textShadow: value ? '0 0 10px rgba(236, 72, 153, 0.7)' : 'none',
          boxShadow: isFocused 
            ? '0 0 20px rgba(236, 72, 153, 0.4), inset 0 0 10px rgba(236, 72, 153, 0.2)'
            : value
              ? '0 0 15px rgba(236, 72, 153, 0.3), inset 0 0 5px rgba(236, 72, 153, 0.1)'
              : 'none',
        }}
      />
      
      <AnimatePresence>
        {(isFocused || value) && (
          <motion.div
            className="absolute inset-0 -z-10 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              background: [
                'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 70%)',
                'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
                'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 70%)',
              ]
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const GridBackground: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute inset-0"
      style={{
        background: `
          linear-gradient(transparent 0%, rgba(236, 72, 153, 0.1) 100%),
          linear-gradient(90deg, rgba(236, 72, 153, 0.1) 1px, transparent 1px),
          linear-gradient(rgba(236, 72, 153, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        transform: 'perspective(1000px) rotateX(60deg)',
        transformOrigin: 'bottom',
      }}
      animate={{
        backgroundPosition: ['0 0', '0 40px']
      }}
      transition={{
        duration: 2,
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

  const handleChange = (value: string, index: number) => {
    if (!value || /^\d+$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < maxLength - 1) {
        setFocusedIndex(index + 1);
      }
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
    <div className="flex flex-col items-center space-y-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500">
          VERIFY CODE
        </h1>
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
          />
        ))}
      </motion.div>

      <motion.p
        className="text-pink-400/80 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Enter your verification code
      </motion.p>
    </div>
  );
};

const OtpField_24: React.FC = () => {
  const handleOtpComplete = (otp: string) => {
    console.log('Completed OTP:', otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      <GridBackground />
      
      <motion.div
        className="p-12 rounded-2xl bg-gray-900/90 backdrop-blur-xl relative"
        style={{
          boxShadow: '0 0 40px rgba(236, 72, 153, 0.2)',
          border: '1px solid rgba(236, 72, 153, 0.2)',
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

export default OtpField_24; 