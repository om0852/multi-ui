'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ShimmerEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute w-[200%] h-full"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
          transform: 'skewX(-20deg)',
        }}
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
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

const Card_23: React.FC<CardProps> = ({ title, description, link, imageUrl, btnText }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const categories = ['Design', 'Technology', 'Trends'];

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
        boxShadow: '0 8px 32px rgba(244, 63, 94, 0.1)',
      }}
    >
      <div className="relative">
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            animate={isHovered ? {
              scale: 1.1,
              filter: 'brightness(0.8)',
            } : {
              scale: 1,
              filter: 'brightness(1)',
            }}
            transition={{ duration: 0.5 }}
          />
          <ShimmerEffect isHovered={isHovered} />
        </div>

        <motion.div
          className="absolute top-4 left-4 flex space-x-2"
          animate={isHovered ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {categories.map((category, i) => (
            <motion.span
              key={i}
              className="px-3 py-1 text-xs font-medium text-white rounded-full"
              style={{
                background: 'rgba(244, 63, 94, 0.9)',
                backdropFilter: 'blur(4px)',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: i * 0.1,
              }}
            >
              {category}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <motion.span
            animate={isHovered ? { color: '#F43F5E' } : { color: '#9CA3AF' }}
            transition={{ duration: 0.3 }}
          >
            5 min read
          </motion.span>
          <span>•</span>
          <span>2 days ago</span>
        </div>

        <motion.h3
          className="text-xl font-bold text-white"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-gray-300 text-sm line-clamp-3"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="pt-4 flex items-center justify-between"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href={link}
            className="text-rose-400 font-medium text-sm flex items-center space-x-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{btnText}</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>

          <div className="flex items-center space-x-4">
            <motion.button
              className="text-gray-400 hover:text-rose-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </motion.button>
            <motion.button
              className="text-gray-400 hover:text-rose-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_23; 