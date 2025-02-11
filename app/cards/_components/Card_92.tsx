'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CardFaceProps {
  isVisible: boolean;
  children: React.ReactNode;
  rotateY: number;
}

const CardFace: React.FC<CardFaceProps> = ({ isVisible, children, rotateY }) => (
  <motion.div
    className="absolute inset-0 w-full h-full backface-hidden"
    initial={{ rotateY, opacity: isVisible ? 1 : 0 }}
    animate={{ rotateY, opacity: isVisible ? 1 : 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    style={{ 
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d',
      pointerEvents: isVisible ? 'auto' : 'none',
    }}
  >
    {children}
  </motion.div>
);

const MatrixEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Digital rain */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-lime-500/30 font-mono text-sm"
              style={{
                left: `${(i * 5)}%`,
                top: '-20px',
                writingMode: 'vertical-rl',
                textOrientation: 'upright',
              }}
              initial={{ y: -100 }}
              animate={{
                y: ['0%', '120%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            >
              {[...Array(10)].map((_, j) => (
                <span key={j} style={{ opacity: 1 - (j * 0.1) }}>
                  {String.fromCharCode(0x30A0 + Math.random() * 96)}
                </span>
              ))}
            </motion.div>
          ))}

          {/* Glitch overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(0, 255, 0, 0.1), transparent)',
              mixBlendMode: 'overlay',
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_92: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-[380px] h-[500px] cursor-pointer preserve-3d perspective-1000"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Front face */}
      <CardFace isVisible={!isFlipped} rotateY={0}>
        <motion.div
          className="w-full h-full rounded-2xl p-6 relative overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(0, 0, 0, 0.95), rgba(0, 20, 0, 0.97))',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            boxShadow: '0 8px 32px rgba(34, 197, 94, 0.2)',
          }}
        >
          <MatrixEffect isHovered={isHovered} />
          
          <motion.div className="relative z-10">
            <motion.div className="text-center mb-8">
              <motion.div
                className="w-32 h-32 mx-auto mb-6 relative"
                animate={isHovered ? {
                  rotateZ: [0, 360],
                  scale: [1, 1.1, 1],
                } : {}}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="absolute inset-0 rounded-full bg-green-500/20 animate-pulse" />
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center p-4">
                  <svg className="w-16 h-16 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
              </motion.div>

              <motion.h3
                className="text-3xl font-bold mb-2 bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #22C55E, #4ADE80)',
                  fontFamily: 'monospace',
                }}
              >
                MATRIX CORE
              </motion.h3>
              <motion.p className="text-green-400">
                System Override Protocol
              </motion.p>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Access', value: 'Granted' },
                { label: 'Encryption', value: 'AES-256' },
                { label: 'Protocol', value: 'Quantum' },
                { label: 'Status', value: 'Active' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="bg-green-900/10 rounded-lg p-4 border border-green-500/20"
                  initial={false}
                  animate={isHovered ? {
                    x: [-2, 2],
                    transition: { 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      delay: i * 0.1,
                    },
                  } : {}}
                >
                  <div className="text-green-300 text-sm font-mono">{item.label}</div>
                  <div className="text-green-100 font-bold font-mono">{item.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </CardFace>

      {/* Back face */}
      <CardFace isVisible={isFlipped} rotateY={180}>
        <motion.div
          className="w-full h-full rounded-2xl p-6 relative overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(0, 20, 0, 0.97), rgba(0, 0, 0, 0.95))',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            boxShadow: '0 8px 32px rgba(34, 197, 94, 0.2)',
          }}
        >
          <MatrixEffect isHovered={isHovered} />

          <motion.div className="relative z-10">
            <motion.div className="text-center mb-8">
              <motion.div
                className="w-32 h-32 mx-auto mb-6"
                animate={isHovered ? {
                  rotateZ: [0, -360],
                } : {}}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-green-400 to-green-600 p-3">
                  <div className="w-full h-full rounded-full border-4 border-green-200/30 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-green-300/20"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.h3
                className="text-2xl font-bold mb-4 bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #22C55E, #4ADE80)',
                  fontFamily: 'monospace',
                }}
              >
                SYSTEM STATS
              </motion.h3>
            </motion.div>

            <motion.div className="space-y-4">
              {[
                { label: 'CPU Load', value: '87%' },
                { label: 'Memory', value: '16GB/32GB' },
                { label: 'Processes', value: '2048' },
                { label: 'Uptime', value: '99.99%' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="bg-green-900/10 rounded-lg p-4 border border-green-500/20"
                  initial={false}
                  animate={isHovered ? {
                    y: [-2, 2],
                    transition: { 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      delay: i * 0.1,
                    },
                  } : {}}
                >
                  <div className="text-green-300 text-sm font-mono">{item.label}</div>
                  <div className="text-green-100 font-bold font-mono">{item.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </CardFace>
    </motion.div>
  );
};

export default Card_92; 