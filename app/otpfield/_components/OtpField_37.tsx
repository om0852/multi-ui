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

const NeonGlow: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  if (!isActive) return null;

  return (
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
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          style={{
            background: `
              linear-gradient(45deg, 
                rgba(255, 0, 255, ${0.1 - i * 0.02}), 
                rgba(0, 255, 255, ${0.1 - i * 0.02})
              )
            `,
            filter: 'blur(8px)',
          }}
        />
      ))}
    </motion.div>
  );
};

const GridBackground: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <motion.div
        className="absolute inset-0"
        initial={{ backgroundPosition: '0% 0%' }}
        animate={{ backgroundPosition: ['0% 0%', '0% 100%'] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            linear-gradient(transparent 0%, rgba(255, 0, 255, 0.1) 2%, transparent 5%),
            linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.1) 2%, transparent 5%)
          `,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'center 80%',
        }}
      />
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
        x: [-4, 4, -4, 4, 0],
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
        className={`w-14 h-16 text-center text-2xl font-bold
                   border-2 rounded-xl
                   focus:outline-none bg-gray-900/50
                   ${isError 
                     ? 'text-red-400 border-red-500' 
                     : isFocused 
                       ? 'text-fuchsia-300 border-fuchsia-500' 
                       : value 
                         ? 'text-fuchsia-200 border-fuchsia-600' 
                         : 'text-fuchsia-100 border-fuchsia-900'}`}
        style={{
          textShadow: value 
            ? '0 0 10px rgba(236, 72, 153, 0.5)' 
            : 'none',
          boxShadow: isError
            ? '0 0 20px rgba(239, 68, 68, 0.3), inset 0 0 10px rgba(239, 68, 68, 0.2)'
            : isFocused 
              ? '0 0 20px rgba(236, 72, 153, 0.3), inset 0 0 10px rgba(236, 72, 153, 0.2)'
              : value
                ? '0 0 15px rgba(236, 72, 153, 0.2)'
                : 'none',
        }}
      />

      <NeonGlow isActive={isFocused || (!!value && !isError)} />

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
                duration: 0.3,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 2px, 0 2px)',
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
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-fuchsia-400">
          SYNTHWAVE CODE
        </h1>
        <motion.div
          className="absolute -bottom-2 left-0 right-0 h-0.5"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.5), transparent)',
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
        className="text-fuchsia-300/80 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Enter the neon verification code
      </motion.p>
    </div>
  );
};

const OtpField_37: React.FC = () => {
  const handleOtpComplete = (otp: string) => {
    console.log('Completed OTP:', otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-fuchsia-950 to-gray-900 relative overflow-hidden">
      <GridBackground />
      
      <motion.div
        className="p-16 rounded-2xl relative backdrop-blur-sm"
        style={{
          background: 'linear-gradient(145deg, rgba(236, 72, 153, 0.1), rgba(17, 24, 39, 0.4))',
          boxShadow: '0 0 40px rgba(236, 72, 153, 0.15)',
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

export default OtpField_37; 