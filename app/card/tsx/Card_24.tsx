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

const Card_24: React.FC = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  const features = [
    'Unlimited Projects',
    'Priority Support',
    'Custom Domain',
    'Analytics Dashboard',
    'Team Collaboration',
    'API Access',
  ];

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
        boxShadow: '0 8px 32px rgba(14, 165, 233, 0.1)',
        border: '1px solid rgba(14, 165, 233, 0.2)',
      }}
    >
      <GlowEffect isHovered={isHovered} />

      <div className="relative p-6 space-y-6">
        <div className="text-center">
          <motion.div
            className="text-sky-600 font-medium mb-2"
            animate={isHovered ? {
              y: -2,
              color: '#0284C7',
            } : {
              y: 0,
              color: '#0EA5E9',
            }}
            transition={{ duration: 0.3 }}
          >
            Professional Plan
          </motion.div>

          <motion.div
            className="flex items-center justify-center mb-4"
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-3xl font-bold text-gray-900">$</span>
            <span className="text-6xl font-bold text-gray-900">49</span>
            <span className="text-xl text-gray-600 ml-2">/mo</span>
          </motion.div>

          <motion.button
            className="w-full py-3 px-6 rounded-lg bg-sky-500 text-white font-medium"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>

        <div className="space-y-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                delay: i * 0.1,
              }}
            >
              <motion.div
                className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center"
                animate={isHovered ? {
                  scale: [1, 1.2, 1],
                  backgroundColor: ['rgb(224, 242, 254)', 'rgb(186, 230, 253)', 'rgb(224, 242, 254)'],
                } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
              >
                <svg
                  className="w-3 h-3 text-sky-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>
              <motion.span
                className="text-gray-600"
                animate={isHovered ? { x: 2 } : { x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {feature}
              </motion.span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="pt-6 text-center text-sm text-gray-500"
          animate={isHovered ? { opacity: 1 } : { opacity: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          30-day money-back guarantee
        </motion.div>
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