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

const CrystalEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Prismatic overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg,
                  rgba(147, 51, 234, 0.1) 0%,
                  rgba(79, 70, 229, 0.1) 25%,
                  rgba(59, 130, 246, 0.1) 50%,
                  rgba(147, 51, 234, 0.1) 75%,
                  rgba(79, 70, 229, 0.1) 100%
                )
              `,
              backgroundSize: '400% 400%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />

          {/* Crystal facets */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-full"
              style={{
                background: 'linear-gradient(135deg, transparent 40%, rgba(147, 51, 234, 0.1) 60%)',
                transform: `rotate(${60 * i}deg)`,
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}

          {/* Sparkles */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(0.5px)',
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_89: React.FC = () => {
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
            background: 'linear-gradient(145deg, rgba(147, 51, 234, 0.1), rgba(79, 70, 229, 0.15))',
            border: '1px solid rgba(147, 51, 234, 0.3)',
            boxShadow: '0 8px 32px rgba(147, 51, 234, 0.2)',
          }}
        >
          <CrystalEffect isHovered={isHovered} />
          
          <motion.div className="relative z-10">
            <motion.div className="text-center mb-8">
              <motion.div
                className="w-32 h-32 mx-auto mb-6 relative"
                animate={isHovered ? {
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1],
                } : {}}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="absolute inset-0 rounded-lg bg-purple-500/20 animate-pulse" />
                <div className="relative w-full h-full rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center p-4">
                  <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </motion.div>

              <motion.h3
                className="text-3xl font-bold mb-2 bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #9333EA, #4F46E5)',
                  fontFamily: 'monospace',
                }}
              >
                CRYSTAL CORE
              </motion.h3>
              <motion.p className="text-purple-400">
                Prismatic Resonance
              </motion.p>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Clarity', value: '100%' },
                { label: 'Facets', value: '128' },
                { label: 'Purity', value: 'Perfect' },
                { label: 'Energy', value: 'Infinite' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="bg-purple-900/10 rounded-lg p-4 border border-purple-500/20"
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
                  <div className="text-purple-300 text-sm font-mono">{item.label}</div>
                  <div className="text-purple-100 font-bold font-mono">{item.value}</div>
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
            background: 'linear-gradient(145deg, rgba(79, 70, 229, 0.15), rgba(147, 51, 234, 0.1))',
            border: '1px solid rgba(147, 51, 234, 0.3)',
            boxShadow: '0 8px 32px rgba(147, 51, 234, 0.2)',
          }}
        >
          <CrystalEffect isHovered={isHovered} />

          <motion.div className="relative z-10">
            <motion.div className="text-center mb-8">
              <motion.div
                className="w-32 h-32 mx-auto mb-6"
                animate={isHovered ? {
                  rotateZ: [0, -360],
                } : {}}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 p-3">
                  <div className="w-full h-full rounded-lg border-4 border-purple-200/30 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 rounded-lg bg-purple-300/20"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.h3
                className="text-2xl font-bold mb-4 bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #9333EA, #4F46E5)',
                  fontFamily: 'monospace',
                }}
              >
                CRYSTAL MATRIX
              </motion.h3>
            </motion.div>

            <motion.div className="space-y-4">
              {[
                { label: 'Resonance', value: 'Harmonic' },
                { label: 'Structure', value: 'Lattice' },
                { label: 'Phase', value: 'Aligned' },
                { label: 'State', value: 'Quantum' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="bg-purple-900/10 rounded-lg p-4 border border-purple-500/20"
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
                  <div className="text-purple-300 text-sm font-mono">{item.label}</div>
                  <div className="text-purple-100 font-bold font-mono">{item.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </CardFace>
    </motion.div>
  );
};

export default Card_89; 