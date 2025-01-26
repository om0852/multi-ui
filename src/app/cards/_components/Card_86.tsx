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
    initial={{ rotateY }}
    animate={{ rotateY }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    style={{ 
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d',
      perspective: '1000px',
    }}
  >
    {children}
  </motion.div>
);

const MultiEffect: React.FC<{ mode: 'front' | 'back' }> = ({ mode }) => {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated background patterns */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: mode === 'front' 
            ? `linear-gradient(45deg, rgba(124, 58, 237, 0.1) 25%, transparent 25%) -20px 0,
               linear-gradient(-45deg, rgba(124, 58, 237, 0.1) 25%, transparent 25%) -20px 0`
            : `linear-gradient(45deg, rgba(239, 68, 68, 0.1) 25%, transparent 25%) -20px 0,
               linear-gradient(-45deg, rgba(239, 68, 68, 0.1) 25%, transparent 25%) -20px 0`,
          backgroundSize: '40px 40px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full ${mode === 'front' ? 'bg-violet-500' : 'bg-red-500'}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.2,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </motion.div>
  );
};

const Card_86: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotationMode, setRotationMode] = useState<'flip' | 'rotate'>('flip');
  const [uiMode, setUiMode] = useState<'minimal' | 'detailed'>('minimal');

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const toggleRotationMode = () => {
    setRotationMode(prev => prev === 'flip' ? 'rotate' : 'flip');
  };

  const toggleUiMode = () => {
    setUiMode(prev => prev === 'minimal' ? 'detailed' : 'minimal');
  };

  return (
    <motion.div
      className="relative w-[380px] h-[500px] cursor-pointer perspective-1000"
      animate={rotationMode === 'rotate' ? {
        rotateY: isFlipped ? 180 : 0,
        rotateX: isFlipped ? 180 : 0,
      } : {
        rotateY: isFlipped ? 180 : 0,
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ transformStyle: 'preserve-3d' }}
      onClick={handleFlip}
    >
      {/* Front face */}
      <CardFace isVisible={!isFlipped} rotateY={0}>
        <motion.div
          className="w-full h-full rounded-2xl p-6 relative overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(124, 58, 237, 0.1), rgba(139, 92, 246, 0.2))',
            border: '1px solid rgba(124, 58, 237, 0.2)',
            boxShadow: '0 8px 32px rgba(124, 58, 237, 0.2)',
          }}
        >
          <MultiEffect mode="front" />
          
          <motion.div className="relative z-10">
            <motion.div
              className="text-center mb-6"
              animate={uiMode === 'detailed' ? { scale: 0.8 } : { scale: 1 }}
            >
              <motion.div
                className="w-24 h-24 mx-auto mb-4"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
              </motion.div>

              <motion.h3
                className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #7C3AED, #8B5CF6)',
                }}
              >
                Multi-UI Card
              </motion.h3>
              <motion.p className="text-violet-400">
                Click to flip • Explore different modes
              </motion.p>
            </motion.div>

            <AnimatePresence mode="wait">
              {uiMode === 'detailed' && (
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {[
                    { label: 'Mode', value: rotationMode },
                    { label: 'State', value: isFlipped ? 'Flipped' : 'Normal' },
                    { label: 'UI', value: uiMode },
                    { label: 'Interactive', value: 'Yes' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      className="bg-violet-900/10 rounded-lg p-3 border border-violet-500/20"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="text-violet-300 text-sm">{item.label}</div>
                      <div className="text-violet-100 font-bold capitalize">{item.value}</div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div className="absolute bottom-6 left-6 right-6">
              <div className="flex justify-between space-x-4">
                <motion.button
                  className="px-4 py-2 rounded-lg bg-violet-500 text-white text-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleRotationMode();
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Mode: {rotationMode}
                </motion.button>
                <motion.button
                  className="px-4 py-2 rounded-lg bg-violet-500 text-white text-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleUiMode();
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  UI: {uiMode}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </CardFace>

      {/* Back face */}
      <CardFace isVisible={isFlipped} rotateY={180}>
        <motion.div
          className="w-full h-full rounded-2xl p-6 relative overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(239, 68, 68, 0.1), rgba(248, 113, 113, 0.2))',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            boxShadow: '0 8px 32px rgba(239, 68, 68, 0.2)',
            transform: 'rotateY(180deg)',
          }}
        >
          <MultiEffect mode="back" />

          <motion.div className="relative z-10">
            <motion.div
              className="text-center mb-6"
              animate={uiMode === 'detailed' ? { scale: 0.8 } : { scale: 1 }}
            >
              <motion.div
                className="w-24 h-24 mx-auto mb-4"
                animate={{ 
                  rotate: [0, -360],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
              </motion.div>

              <motion.h3
                className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #EF4444, #F87171)',
                }}
              >
                Flip Side
              </motion.h3>
              <motion.p className="text-red-400">
                Click to return • Try different modes
              </motion.p>
            </motion.div>

            <AnimatePresence mode="wait">
              {uiMode === 'detailed' && (
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {[
                    { label: 'Animation', value: 'Active' },
                    { label: 'Effects', value: 'Dynamic' },
                    { label: 'Theme', value: 'Red' },
                    { label: 'Status', value: 'Flipped' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      className="bg-red-900/10 rounded-lg p-3 border border-red-500/20"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="text-red-300 text-sm">{item.label}</div>
                      <div className="text-red-100 font-bold">{item.value}</div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div className="absolute bottom-6 left-6 right-6">
              <div className="flex justify-between space-x-4">
                <motion.button
                  className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleRotationMode();
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Mode: {rotationMode}
                </motion.button>
                <motion.button
                  className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleUiMode();
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  UI: {uiMode}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </CardFace>
    </motion.div>
  );
};

export default Card_86; 