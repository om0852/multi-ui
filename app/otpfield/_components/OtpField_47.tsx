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
      className="absolute inset-0 overflow-hidden rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
              rgba(236, 72, 153, ${0.2 - i * 0.05}),
              transparent
            )`,
            filter: 'blur(1px)',
          }}
        />
      ))}
    </motion.div>
  );
};

const NeonBorder: React.FC<{ isActive: boolean }> = ({ isActive }) => {
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
          className="absolute bg-pink-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.25,
          }}
          style={{
            ...(i === 0 && { top: '-2px', left: '-2px', width: '20px', height: '2px' }),
            ...(i === 1 && { top: '-2px', right: '-2px', width: '2px', height: '20px' }),
            ...(i === 2 && { bottom: '-2px', right: '-2px', width: '20px', height: '2px' }),
            ...(i === 3 && { bottom: '-2px', left: '-2px', width: '2px', height: '20px' }),
            boxShadow: '0 0 5px #ec4899, 0 0 10px #ec4899',
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
                   border-2 rounded-lg
                   focus:outline-none bg-gray-900/50
                   ${isError 
                     ? 'text-red-400 border-red-500' 
                     : isFocused 
                       ? 'text-pink-300 border-pink-500' 
                       : value 
                         ? 'text-pink-200 border-pink-600' 
                         : 'text-pink-100 border-pink-900'}`}
        style={{
          fontFamily: '"VT323", monospace',
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

      <GlitchEffect isActive={isFocused || (!!value && !isError)} />
      <NeonBorder isActive={isFocused || (!!value && !isError)} />

      {isError && (
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
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
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400"
            style={{ fontFamily: '"VT323", monospace' }}>
          RETRO CODE
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
        className="text-pink-300/80 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{ fontFamily: '"VT323", monospace' }}
      >
        ENTER THE RETRO CODE
      </motion.p>
    </div>
  );
};

const OtpField_47: React.FC = () => {
  const handleOtpComplete = (otp: string) => {
    console.log('Completed OTP:', otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-pink-950 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(transparent 0%, rgba(236, 72, 153, 0.1) 2%, transparent 2%),
            linear-gradient(90deg, transparent 0%, rgba(236, 72, 153, 0.1) 2%, transparent 2%)
          `,
          backgroundSize: '40px 40px',
          animation: 'grid 20s linear infinite',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'center 80%',
        }} />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-pink-500"
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
              boxShadow: '0 0 4px rgba(236, 72, 153, 0.8)',
            }}
          />
        ))}
      </div>
      
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

      <style jsx global>{`
        @keyframes grid {
          from { background-position: 0 0; }
          to { background-position: 0 40px; }
        }
      `}</style>
    </div>
  );
};

export default OtpField_47; 