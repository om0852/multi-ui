'use client';
import React from 'react';
import { motion } from 'framer-motion';

const PrismEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-full"
          style={{
            background: `linear-gradient(${60 * i}deg, transparent, rgba(251, 191, 36, 0.1), transparent)`,
            transform: `rotate(${60 * i}deg)`,
            transformOrigin: 'center',
            filter: 'blur(2px)',
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};

const FacetedBorder: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: '2px',
            height: '30%',
            background: 'linear-gradient(to bottom, transparent, rgba(251, 191, 36, 0.5), transparent)',
            left: `${(i / 8) * 100}%`,
            top: '35%',
            filter: 'blur(1px)',
          }}
          animate={{
            height: ['30%', '40%', '30%'],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </motion.div>
  );
};

const Card_20: React.FC = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="relative w-[380px] rounded-2xl backdrop-blur-sm cursor-pointer overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8))',
        boxShadow: '0 8px 32px rgba(251, 191, 36, 0.1)',
        border: '1px solid rgba(251, 191, 36, 0.2)',
      }}
    >
      <PrismEffect isHovered={isHovered} />
      <FacetedBorder isHovered={isHovered} />

      <div className="relative p-6 space-y-4">
        <motion.div
          className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center"
          animate={isHovered ? {
            rotateY: [0, 180, 360],
            scale: [1, 1.1, 1],
          } : {}}
          transition={{ duration: 1 }}
          style={{
            clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
          }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </motion.div>

        <motion.h3
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700"
          style={{ fontFamily: '"Orbitron", sans-serif' }}
          animate={isHovered ? {
            textShadow: [
              '0 0 8px rgba(251, 191, 36, 0.3)',
              '0 0 12px rgba(251, 191, 36, 0.5)',
              '0 0 8px rgba(251, 191, 36, 0.3)',
            ],
          } : {}}
          transition={{ duration: 1, repeat: Infinity }}
        >
          Crystal Edge
        </motion.h3>

        <motion.p
          className="text-amber-900/70 text-sm leading-relaxed"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Discover the brilliance of geometric design. Watch as light refracts through crystalline structures and faceted surfaces.
        </motion.p>

        <motion.div
          className="pt-4 flex items-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-medium"
            whileHover={{
              scale: 1.05,
              boxShadow: [
                '0 0 20px rgba(251, 191, 36, 0.5)',
                '0 0 30px rgba(251, 191, 36, 0.7)',
                '0 0 20px rgba(251, 191, 36, 0.5)',
              ],
            }}
            whileTap={{ scale: 0.95 }}
          >
            Refract
          </motion.button>
          <motion.button
            className="px-4 py-2 rounded-lg text-amber-700 text-sm font-medium"
            whileHover={{
              scale: 1.05,
              textShadow: '0 0 8px rgba(251, 191, 36, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'rgba(251, 191, 36, 0.1)',
              border: '1px solid rgba(251, 191, 36, 0.2)',
            }}
          >
            Reflect
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.1), transparent 70%)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
    </motion.div>
  );
};

export default Card_20; 