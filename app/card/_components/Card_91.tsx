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

const CosmicEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Star field */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Nebula effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, rgba(167, 139, 250, 0.2), transparent 50%),
                radial-gradient(circle at 70% 70%, rgba(244, 114, 182, 0.2), transparent 50%)
              `,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Orbital rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-violet-500/20"
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                left: '50%',
                top: '50%',
                marginLeft: `-${(200 + i * 100) / 2}px`,
                marginTop: `-${(200 + i * 100) / 2}px`,
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 15 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_91: React.FC = () => {
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
            background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.95), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(167, 139, 250, 0.3)',
            boxShadow: '0 8px 32px rgba(167, 139, 250, 0.2)',
          }}
        >
          <CosmicEffect isHovered={isHovered} />
          
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
                <div className="absolute inset-0 rounded-full bg-violet-500/20 animate-pulse" />
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center p-4">
                  <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                    <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
                    <path strokeLinecap="round" strokeWidth={1.5} d="M12 2a15 15 0 000 20M2 12h20" />
                  </svg>
                </div>
              </motion.div>

              <motion.h3
                className="text-3xl font-bold mb-2 bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #A78BFA, #F472B6)',
                  fontFamily: 'Space Mono',
                }}
              >
                COSMIC PULSE
              </motion.h3>
              <motion.p className="text-violet-400">
                Universal Resonance
              </motion.p>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Distance', value: '∞ LY' },
                { label: 'Galaxies', value: '10B+' },
                { label: 'Dark Matter', value: '27%' },
                { label: 'Energy', value: 'Cosmic' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="bg-violet-900/10 rounded-lg p-4 border border-violet-500/20"
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
                  <div className="text-violet-300 text-sm font-mono">{item.label}</div>
                  <div className="text-violet-100 font-bold font-mono">{item.value}</div>
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
            background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.95), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(167, 139, 250, 0.3)',
            boxShadow: '0 8px 32px rgba(167, 139, 250, 0.2)',
          }}
        >
          <CosmicEffect isHovered={isHovered} />

          <motion.div className="relative z-10">
            <motion.div className="text-center mb-8">
              <motion.div
                className="w-32 h-32 mx-auto mb-6"
                animate={isHovered ? {
                  rotateZ: [0, -360],
                } : {}}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 p-3">
                  <div className="w-full h-full rounded-full border-4 border-violet-200/30 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-violet-300/20"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.h3
                className="text-2xl font-bold mb-4 bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #A78BFA, #F472B6)',
                  fontFamily: 'Space Mono',
                }}
              >
                SPACE TIME
              </motion.h3>
            </motion.div>

            <motion.div className="space-y-4">
              {[
                { label: 'Dimension', value: 'Quantum' },
                { label: 'Gravity', value: '9.8 m/s²' },
                { label: 'Time', value: 'Relative' },
                { label: 'Space', value: 'Infinite' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="bg-violet-900/10 rounded-lg p-4 border border-violet-500/20"
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
                  <div className="text-violet-300 text-sm font-mono">{item.label}</div>
                  <div className="text-violet-100 font-bold font-mono">{item.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </CardFace>
    </motion.div>
  );
};

export default Card_91; 