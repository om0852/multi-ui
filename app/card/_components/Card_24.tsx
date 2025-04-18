'use client';
import React from 'react';
import { motion } from 'framer-motion';

const GlowEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ rotate: i * 180 }}
          animate={{
            rotate: [i * 180, i * 180 + 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="absolute"
            style={{
              width: '50%',
              height: '200%',
              background: 'linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.1), transparent)',
              top: '-50%',
              left: '25%',
              filter: 'blur(20px)',
            }}
          />
        </motion.div>
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
  featured?: boolean;
}

const Card_24: React.FC<CardProps> = ({ title, description, link, imageUrl, btnText, featured = false }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className={`relative rounded-2xl backdrop-blur-sm cursor-pointer overflow-hidden ${featured ? 'w-full' : 'w-full md:w-[380px]'}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.8))',
        boxShadow: '0 8px 32px rgba(14, 165, 233, 0.1)',
        border: '1px solid rgba(14, 165, 233, 0.2)',
      }}
    >
      <GlowEffect isHovered={isHovered} />

      <div className="relative">
        <div className="aspect-[16/9] overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        <div className="p-6 space-y-4">
          <div className="text-center">
            <motion.h3
              className="text-xl font-semibold text-white mb-2"
              animate={isHovered ? {
                y: -2,
                color: '#0284C7',
              } : {
                y: 0,
                color: '#FFFFFF',
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>

            <motion.p
              className="text-gray-300 mb-4 line-clamp-2"
              animate={isHovered ? { opacity: 0.9 } : { opacity: 0.7 }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </motion.p>

            <motion.a
              href={link}
              className="inline-block py-2 px-6 rounded-lg bg-sky-500 text-white font-medium"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              {btnText}
            </motion.a>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.05), transparent 70%)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
    </motion.div>
  );
};

export default Card_24; 