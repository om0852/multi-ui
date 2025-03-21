'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CardFaceProps {
  isVisible: boolean;
  children: React.ReactNode;
  rotateY: number;
  rotateX: number;
}

const CardFace: React.FC<CardFaceProps> = ({ isVisible, children, rotateY, rotateX }) => (
  <motion.div
    className="absolute inset-0 w-full h-full backface-hidden"
    initial={{ rotateY, rotateX, opacity: isVisible ? 1 : 0 }}
    animate={{ rotateY, rotateX, opacity: isVisible ? 1 : 0 }}
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

const NeonEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Neon glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(244, 114, 182, 0.2), transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Neon lines */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-full"
              style={{
                top: `${25 * (i + 1)}%`,
                background: 'linear-gradient(90deg, transparent, rgba(244, 114, 182, 0.8), transparent)',
                filter: 'blur(2px)',
              }}
              animate={{
                opacity: [0, 1, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_88: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-[380px] h-[500px] cursor-pointer preserve-3d perspective-1000"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      animate={{ 
        rotateY: isFlipped ? 180 : 0,
        rotateX: isFlipped ? 180 : 0,
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Front face */}
      <CardFace isVisible={!isFlipped} rotateY={0} rotateX={0}>
        <motion.div
          className="w-full h-full rounded-2xl p-6 relative overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.95), rgba(17, 24, 39, 0.97))',
            border: '1px solid rgba(244, 114, 182, 0.3)',
            boxShadow: '0 8px 32px rgba(244, 114, 182, 0.2)',
          }}
        >
          <NeonEffect isHovered={isHovered} />
          
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
                <div className="absolute inset-0 rounded-full bg-pink-500/20 animate-pulse" />
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </motion.div>

              <motion.h3
                className="text-3xl font-bold mb-2 bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #F472B6, #EC4899)',
                  fontFamily: 'monospace',
                }}
              >
                NEON PULSE
              </motion.h3>
              <motion.p className="text-pink-400">
                Electrifying Experience
              </motion.p>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Power', value: '1.21 GW' },
                { label: 'Frequency', value: '88 Hz' },
                { label: 'Intensity', value: 'Maximum' },
                { label: 'Mode', value: 'Overdrive' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="bg-pink-900/10 rounded-lg p-4 border border-pink-500/20"
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
                  <div className="text-pink-300 text-sm font-mono">{item.label}</div>
                  <div className="text-pink-100 font-bold font-mono">{item.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </CardFace>

      {/* Back face */}
      <CardFace isVisible={isFlipped} rotateY={180} rotateX={180}>
        <motion.div
          className="w-full h-full rounded-2xl p-6 relative overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.95), rgba(17, 24, 39, 0.97))',
            border: '1px solid rgba(244, 114, 182, 0.3)',
            boxShadow: '0 8px 32px rgba(244, 114, 182, 0.2)',
          }}
        >
          <NeonEffect isHovered={isHovered} />

          <motion.div className="relative z-10">
            <motion.div className="text-center mb-8">
              <motion.div
                className="w-32 h-32 mx-auto mb-6"
                animate={isHovered ? {
                  rotateZ: [0, -360],
                } : {}}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-400 to-pink-600 p-3">
                  <div className="w-full h-full rounded-full border-4 border-pink-200/30 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-pink-300/20"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.h3
                className="text-2xl font-bold mb-4 bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #F472B6, #EC4899)',
                  fontFamily: 'monospace',
                }}
              >
                POWER MATRIX
              </motion.h3>
            </motion.div>

            <motion.div className="space-y-4">
              {[
                { label: 'Core Temp', value: '3000K' },
                { label: 'Resonance', value: 'Stable' },
                { label: 'Flux', value: 'Optimal' },
                { label: 'Output', value: 'Maximum' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="bg-pink-900/10 rounded-lg p-4 border border-pink-500/20"
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
                  <div className="text-pink-300 text-sm font-mono">{item.label}</div>
                  <div className="text-pink-100 font-bold font-mono">{item.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </CardFace>
    </motion.div>
  );
};

export default Card_88; 