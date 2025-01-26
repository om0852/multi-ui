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
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0.8, 1.2, 0.8],
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "linear",
          }}
          style={{
            background: `linear-gradient(${i * 72}deg, 
              rgba(124, 58, 237, ${0.1 - i * 0.02}),
              rgba(236, 72, 153, ${0.1 - i * 0.02}),
              rgba(59, 130, 246, ${0.1 - i * 0.02})
            )`,
            filter: 'blur(4px)',
            transform: 'perspective(1000px)',
          }}
        />
      ))}
    </motion.div>
  );
};

const ScanlineEffect: React.FC = () => (
  <motion.div
    className="absolute inset-0 pointer-events-none"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.2, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
    style={{
      background: 'linear-gradient(transparent 50%, rgba(255, 255, 255, 0.05) 50%)',
      backgroundSize: '100% 4px',
    }}
  />
);

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
        rotateY: [0, -30, 30, -30, 0],
        z: [-20, 20, -20, 20, 0],
      } : {}}
      transition={{ duration: 0.4 }}
      style={{ perspective: '1000px' }}
    >
      <motion.input
        type="text"
        maxLength={1}
        value={value}
        onChange={(e) => onChange(e.target.value, index)}
        onKeyDown={onKeyDown}
        className={`w-14 h-16 text-center text-2xl font-bold
                   border-2 rounded-xl
                   focus:outline-none backdrop-blur-sm
                   ${isError 
                     ? 'text-red-400 border-red-500 bg-red-900/10' 
                     : isFocused 
                       ? 'text-violet-300 border-violet-500 bg-violet-900/20' 
                       : value 
                         ? 'text-violet-200 border-violet-600 bg-violet-900/10' 
                         : 'text-violet-100 border-violet-800 bg-violet-900/5'}`}
        style={{
          textShadow: value 
            ? '0 0 10px rgba(124, 58, 237, 0.5)' 
            : 'none',
          boxShadow: isError
            ? '0 0 20px rgba(239, 68, 68, 0.3), inset 0 0 10px rgba(239, 68, 68, 0.2)'
            : isFocused 
              ? '0 0 20px rgba(124, 58, 237, 0.3), inset 0 0 10px rgba(124, 58, 237, 0.2)'
              : value
                ? '0 0 15px rgba(124, 58, 237, 0.2)'
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
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              initial={{ y: '-100%' }}
              animate={{ y: '200%' }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background: 'linear-gradient(0deg, transparent, rgba(239, 68, 68, 0.2), transparent)',
                transform: 'perspective(1000px) rotateX(45deg)',
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
    <div className="flex flex-col items-center space-y-8">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400">
          HOLOGRAM CODE
        </h1>
        <motion.div
          className="absolute -bottom-2 left-0 right-0 h-0.5"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.5), transparent)',
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
        className="text-violet-300/80 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Enter the holographic verification code
      </motion.p>
    </div>
  );
};

const OtpField_41: React.FC = () => {
  const handleOtpComplete = (otp: string) => {
    console.log('Completed OTP:', otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-violet-950 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.3,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              rotateY: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              background: 'linear-gradient(45deg, rgba(124, 58, 237, 0.1), rgba(236, 72, 153, 0.1))',
              borderRadius: '20%',
              filter: 'blur(8px)',
            }}
          />
        ))}
      </div>
      
      <motion.div
        className="p-16 rounded-3xl relative backdrop-blur-sm"
        style={{
          background: 'linear-gradient(145deg, rgba(124, 58, 237, 0.1), rgba(17, 24, 39, 0.4))',
          boxShadow: '0 0 40px rgba(124, 58, 237, 0.15)',
          border: '1px solid rgba(124, 58, 237, 0.2)',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <InputOTP maxLength={6} onComplete={handleOtpComplete} />
        <ScanlineEffect />
      </motion.div>
    </div>
  );
};

export default OtpField_41; 