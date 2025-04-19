'use client';
import React from 'react';
import { motion } from 'framer-motion';

const WavePattern: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%]"
          style={{
            background: `radial-gradient(circle at ${50 + (i - 1) * 20}% ${50 + (i - 1) * 20}%, rgba(99, 102, 241, 0.1), transparent 70%)`,
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear",
          }}
        />
      ))}
    </motion.div>
  );
};


interface CardProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  btnText: string;
}

const Card_22: React.FC<CardProps> = ({ title, description, link, imageUrl, btnText }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="relative w-full rounded-2xl backdrop-blur-sm cursor-pointer overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        boxShadow: '0 8px 32px rgba(99, 102, 241, 0.1)',
      }}
    >
      <WavePattern isHovered={isHovered} />

      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>

      <div className="relative p-6">
        <motion.h3
          className="text-xl font-bold text-white mb-2"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-gray-300 text-sm mb-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>

        <motion.a
          href={link}
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-indigo-500 text-white rounded-lg font-medium text-sm transition-colors"
          whileHover={{
            backgroundColor: '#4F46E5',
          }}
          whileTap={{ scale: 0.98 }}
        >
          {btnText}
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.a>
      </div>

      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1), transparent 70%)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
    </motion.div>
  );
};

export default Card_22; 