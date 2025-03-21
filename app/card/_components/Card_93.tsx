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

const ElectricEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Lightning bolts */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-blue-400"
              style={{
                left: `${20 + i * 15}%`,
                height: '100%',
                filter: 'blur(1px)',
              }}
              animate={{
                scaleY: [0, 1, 0],
                opacity: [0, 0.5, 0],
                translateY: ['0%', '100%'],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}

          {/* Energy pulse */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2), transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Electric arcs */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: '100px',
                height: '100px',
                left: `${Math.random() * 70}%`,
                top: `${Math.random() * 70}%`,
                background: `
                  radial-gradient(circle at 50% 50%, 
                    rgba(59, 130, 246, 0.3) 0%,
                    transparent 70%
                  )
                `,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0, 0.8, 0],
                rotate: [0, 90, 180],
              }}
              transition={{
                duration: 1,
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

const Card_93: React.FC = () => {
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
            background: 'linear-gradient(145deg, rgba(30, 58, 138, 0.95), rgba(30, 64, 175, 0.97))',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            boxShadow: '0 8px 32px rgba(59, 130, 246, 0.2)',
          }}
        >
          <ElectricEffect isHovered={isHovered} />
          
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
                <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse" />
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center p-4">
                  <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </motion.div>

              <motion.h3
                className="text-3xl font-bold mb-2 bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #60A5FA, #3B82F6)',
                  fontFamily: 'monospace',
                }}
              >
                VOLTAGE SURGE
              </motion.h3>
              <motion.p className="text-blue-400">
                High Energy Protocol
              </motion.p>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Voltage', value: '100kV' },
                { label: 'Current', value: '1000A' },
                { label: 'Frequency', value: '60Hz' },
                { label: 'Power', value: 'Maximum' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="bg-blue-900/10 rounded-lg p-4 border border-blue-500/20"
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
                  <div className="text-blue-300 text-sm font-mono">{item.label}</div>
                  <div className="text-blue-100 font-bold font-mono">{item.value}</div>
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
            background: 'linear-gradient(145deg, rgba(30, 64, 175, 0.97), rgba(30, 58, 138, 0.95))',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            boxShadow: '0 8px 32px rgba(59, 130, 246, 0.2)',
          }}
        >
          <ElectricEffect isHovered={isHovered} />

          <motion.div className="relative z-10">
            <motion.div className="text-center mb-8">
              <motion.div
                className="w-32 h-32 mx-auto mb-6"
                animate={isHovered ? {
                  rotateZ: [0, -360],
                } : {}}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-3">
                  <div className="w-full h-full rounded-full border-4 border-blue-200/30 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-blue-300/20"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              </motion.div>

              <motion.h3
                className="text-2xl font-bold mb-4 bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #60A5FA, #3B82F6)',
                  fontFamily: 'monospace',
                }}
              >
                POWER METRICS
              </motion.h3>
            </motion.div>

            <motion.div className="space-y-4">
              {[
                { label: 'Load', value: '92%' },
                { label: 'Efficiency', value: '98.5%' },
                { label: 'Temperature', value: '85°C' },
                { label: 'Status', value: 'Optimal' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="bg-blue-900/10 rounded-lg p-4 border border-blue-500/20"
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
                  <div className="text-blue-300 text-sm font-mono">{item.label}</div>
                  <div className="text-blue-100 font-bold font-mono">{item.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </CardFace>
    </motion.div>
  );
};

export default Card_93; 