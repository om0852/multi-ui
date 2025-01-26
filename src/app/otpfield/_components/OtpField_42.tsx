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
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      }}
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ x: '-100%' }}
          animate={{
            x: ['100%', '-100%'],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            delay: i * 0.1,
            repeatDelay: Math.random() * 5,
          }}
          style={{
            background: `linear-gradient(90deg,
              transparent,
              rgba(0, 255, 0, ${0.2 - i * 0.05}),
              transparent
            )`,
            filter: 'blur(1px)',
          }}
        />
      ))}
    </motion.div>
  );
};

const PixelBorder: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-green-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: i * 0.125,
          }}
          style={{
            ...(i === 0 && { top: 0, left: 0, width: '4px', height: '4px' }),
            ...(i === 1 && { top: 0, right: 0, width: '4px', height: '4px' }),
            ...(i === 2 && { bottom: 0, left: 0, width: '4px', height: '4px' }),
            ...(i === 3 && { bottom: 0, right: 0, width: '4px', height: '4px' }),
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
        x: [-2, 2, -2, 2, 0],
        y: [2, -2, 2, -2, 0],
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
                   border-2
                   focus:outline-none
                   ${isError 
                     ? 'text-red-500 border-red-500 bg-red-900/10' 
                     : isFocused 
                       ? 'text-green-400 border-green-500 bg-green-900/20' 
                       : value 
                         ? 'text-green-300 border-green-600 bg-green-900/10' 
                         : 'text-green-200 border-green-800 bg-green-900/5'}`}
        style={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: '1.25rem',
          textShadow: value 
            ? '0 0 5px rgba(34, 197, 94, 0.5)' 
            : 'none',
          boxShadow: isError
            ? '0 0 10px rgba(239, 68, 68, 0.3), inset 0 0 5px rgba(239, 68, 68, 0.2)'
            : isFocused 
              ? '0 0 10px rgba(34, 197, 94, 0.3), inset 0 0 5px rgba(34, 197, 94, 0.2)'
              : value
                ? '0 0 8px rgba(34, 197, 94, 0.2)'
                : 'none',
          imageRendering: 'pixelated',
        }}
      />

      <GlitchEffect isActive={isFocused || (!!value && !isError)} />
      <PixelBorder isActive={isFocused || (!!value && !isError)} />

      {isError && (
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 bg-red-500/10"
              initial={{ y: '-100%' }}
              animate={{ y: '200%' }}
              transition={{
                duration: 0.2,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 0.5,
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
        <h1 className="text-2xl font-bold text-green-400"
            style={{ fontFamily: '"Press Start 2P", monospace' }}>
          GAME CODE
        </h1>
        <motion.div
          className="absolute -bottom-2 left-0 right-0 h-1"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: 'linear-gradient(90deg, transparent, #22c55e, transparent)',
            imageRendering: 'pixelated',
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
        className="text-green-400/80 text-xs"
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

const OtpField_42: React.FC = () => {
  const handleOtpComplete = (otp: string) => {
    console.log('Completed OTP:', otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-green-950 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(transparent 0%, rgba(34, 197, 94, 0.1) 2%, transparent 2%)',
          backgroundSize: '100% 4px',
          animation: 'scan 8s linear infinite',
        }} />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-green-500"
            initial={{ 
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.3,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              width: '2px',
              height: '2px',
              boxShadow: '0 0 4px rgba(34, 197, 94, 0.8)',
              imageRendering: 'pixelated',
            }}
          />
        ))}
      </div>
      
      <motion.div
        className="p-16 rounded-lg relative"
        style={{
          background: 'linear-gradient(145deg, rgba(34, 197, 94, 0.1), rgba(17, 24, 39, 0.4))',
          boxShadow: '0 0 40px rgba(34, 197, 94, 0.15)',
          border: '2px solid rgba(34, 197, 94, 0.2)',
          imageRendering: 'pixelated',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <InputOTP maxLength={6} onComplete={handleOtpComplete} />
      </motion.div>

      <style jsx global>{`
        @keyframes scan {
          from { transform: translateY(-100%); }
          to { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
};

export default OtpField_42; 