'use client';
import React from 'react';
import { motion } from 'framer-motion';

const SparkleEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          initial={{
            scale: 0,
            x: '50%',
            y: '50%',
            opacity: 0,
          }}
          animate={{
            scale: [0, 1, 0],
            x: ['50%', `${Math.random() * 200 - 100}%`],
            y: ['50%', `${Math.random() * 200 - 100}%`],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            delay: i * 0.1,
          }}
          style={{
            width: Math.random() * 4 + 1 + 'px',
            height: Math.random() * 4 + 1 + 'px',
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
            filter: 'blur(0.5px)',
          }}
        />
      ))}
    </motion.div>
  );
};

const MagicAura: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0, 0.3, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            background: `radial-gradient(circle at center, rgba(216, 180, 254, ${0.2 - i * 0.05}), transparent 70%)`,
            border: '1px solid rgba(216, 180, 254, 0.1)',
            borderRadius: '16px',
          }}
        />
      ))}
    </motion.div>
  );
};

const FloatingRunes: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  const runes = ['✧', '⚝', '❋', '✺', '❈', '✤', '❆', '✥'];
  
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-purple-300/30 text-lg"
          initial={{
            x: Math.random() * 300,
            y: Math.random() * 300,
            scale: 0,
            rotate: 0,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        >
          {runes[i]}
        </motion.div>
      ))}
    </motion.div>
  );
};

const Card_14: React.FC = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="relative w-[380px] rounded-2xl backdrop-blur-sm cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: 'linear-gradient(145deg, rgba(216, 180, 254, 0.1), rgba(20, 20, 30, 0.4))',
        boxShadow: '0 0 30px rgba(216, 180, 254, 0.1)',
      }}
    >
      <SparkleEffect isHovered={isHovered} />
      <MagicAura isHovered={isHovered} />
      <FloatingRunes isHovered={isHovered} />

      <div className="relative p-6 space-y-4">
        <motion.div
          className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-violet-500 flex items-center justify-center"
          animate={isHovered ? {
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          } : {}}
          transition={{ duration: 1 }}
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
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        </motion.div>

        <motion.h3
          className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-violet-400 to-purple-300"
          animate={isHovered ? {
            textShadow: [
              '0 0 8px rgba(216, 180, 254, 0.3)',
              '0 0 12px rgba(216, 180, 254, 0.5)',
              '0 0 8px rgba(216, 180, 254, 0.3)',
            ],
          } : {}}
          transition={{ duration: 1, repeat: Infinity }}
        >
          Enchanted Card
        </motion.h3>

        <motion.p
          className="text-gray-300/80 text-sm leading-relaxed"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Discover the magic within this enchanted card. Watch as sparkles dance and mystical energies flow, creating an ethereal experience.
        </motion.p>

        <motion.div
          className="pt-4 flex items-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-400 to-violet-500 text-white text-sm font-medium"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(216, 180, 254, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Cast Spell
          </motion.button>
          <motion.button
            className="px-4 py-2 rounded-lg text-purple-300 text-sm font-medium"
            whileHover={{
              scale: 1.05,
              textShadow: '0 0 8px rgba(216, 180, 254, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'linear-gradient(145deg, rgba(216, 180, 254, 0.1), rgba(20, 20, 30, 0.2))',
              border: '1px solid rgba(216, 180, 254, 0.2)',
            }}
          >
            Learn Magic
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(216, 180, 254, 0.1), transparent 60%)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
    </motion.div>
  );
};

export default Card_14; 