'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingElements: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: 'linear-gradient(145deg, #3B82F6, #60A5FA)',
                left: `${20 + i * 15}%`,
                top: '0%',
              }}
              initial={{ y: '0%', opacity: 0 }}
              animate={{
                y: ['0%', '500%'],
                x: ['0%', `${(i % 2 === 0 ? 50 : -50)}%`],
                scale: [1, 0.5, 1],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_21: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div 
        className="relative w-[380px] rounded-2xl backdrop-blur-sm overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8))',
          boxShadow: '0 8px 32px rgba(59, 130, 246, 0.1)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
            <img
              src="/product-image.jpg"
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-gray-900">Premium Headphones</h3>
              <div className="text-2xl font-bold text-blue-600">$299</div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Experience crystal-clear sound with our premium wireless headphones. Features active noise cancellation and 30-hour battery life.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="relative w-[380px] rounded-2xl backdrop-blur-sm cursor-pointer overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={false}
      animate={{ opacity: 1 }}
      whileHover={{
        scale: 1.02,
        rotateY: 10,
        perspective: 1000,
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8))',
        boxShadow: '0 8px 32px rgba(59, 130, 246, 0.1)',
      }}
    >
      <FloatingElements isHovered={isHovered} />

      <div className="relative p-6">
        <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden group">
          <motion.img
            src="/product-image.jpg"
            alt="Product"
            className="w-full h-full object-cover"
            animate={isHovered ? {
              scale: 1.1,
            } : {
              scale: 1,
            }}
            transition={{ duration: 0.5 }}
          />
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute top-4 right-4 bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                New Arrival
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <motion.h3
              className="text-xl font-bold text-gray-900"
              animate={isHovered ? { y: -2 } : { y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Premium Headphones
            </motion.h3>
            <motion.div
              className="text-2xl font-bold text-blue-600"
              animate={isHovered ? {
                scale: 1.1,
                color: '#2563EB',
              } : {
                scale: 1,
                color: '#3B82F6',
              }}
              transition={{ duration: 0.3 }}
            >
              $299
            </motion.div>
          </div>

          <motion.p
            className="text-gray-600 text-sm leading-relaxed"
            animate={isHovered ? { y: -2 } : { y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Experience crystal-clear sound with our premium wireless headphones. Features active noise cancellation and 30-hour battery life.
          </motion.p>

          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  animate={isHovered ? {
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0],
                  } : {}}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.05,
                  }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>
            <span className="text-sm text-gray-500">(128 reviews)</span>
          </div>

          <motion.div
            className="pt-4 flex items-center space-x-4"
            animate={isHovered ? { y: -2 } : { y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="flex-1 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Add to Cart
            </motion.button>
            <motion.button
              className="p-2 rounded-lg text-blue-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05), transparent 70%)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
    </motion.div>
  );
};

export default Card_21; 