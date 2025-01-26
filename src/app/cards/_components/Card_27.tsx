'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PaperFoldEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Corner fold effect */}
          <motion.div
            className="absolute top-0 right-0 w-16 h-16"
            initial={{ rotate: 0 }}
            animate={{ rotate: -15 }}
            transition={{ duration: 0.5 }}
            style={{
              background: 'linear-gradient(135deg, transparent 50%, rgba(99, 102, 241, 0.1) 50%)',
              clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
            }}
          />
          
          {/* Paper texture lines */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent)',
                top: `${(i + 1) * 12}%`,
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 0.5 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_27: React.FC = () => {
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
          boxShadow: '0 8px 32px rgba(99, 102, 241, 0.1)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Project Proposal.pdf</h3>
              <p className="text-sm text-gray-500">PDF Document • 2.4 MB</p>
            </div>
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
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8))',
        boxShadow: '0 8px 32px rgba(99, 102, 241, 0.1)',
      }}
    >
      <PaperFoldEffect isHovered={isHovered} />

      <div className="relative p-6">
        <motion.div 
          className="flex items-center space-x-3 mb-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center"
            animate={isHovered ? {
              scale: 1.1,
              backgroundColor: 'rgb(224, 231, 255)',
            } : {
              scale: 1,
              backgroundColor: 'rgb(238, 242, 255)',
            }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </motion.div>
          <div>
            <motion.h3
              className="text-lg font-semibold text-gray-900"
              animate={isHovered ? { color: '#4F46E5' } : { color: '#111827' }}
              transition={{ duration: 0.3 }}
            >
              Project Proposal.pdf
            </motion.h3>
            <motion.p className="text-sm text-gray-500">
              PDF Document • 2.4 MB
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="space-y-2"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
            <motion.div
              className="h-full bg-indigo-500 rounded-full"
              initial={{ width: '65%' }}
              animate={isHovered ? {
                width: ['65%', '100%'],
                backgroundColor: ['rgb(99, 102, 241)', 'rgb(79, 70, 229)'],
              } : {
                width: '65%',
                backgroundColor: 'rgb(99, 102, 241)',
              }}
              transition={{ duration: 1.5 }}
            />
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Downloaded</span>
            <motion.span
              className="font-medium"
              animate={isHovered ? { color: '#4F46E5' } : { color: '#6366F1' }}
              transition={{ duration: 0.3 }}
            >
              65%
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          className="mt-6 flex items-center justify-between"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="text-sm font-medium text-indigo-600 flex items-center space-x-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download</span>
          </motion.button>

          <div className="flex items-center space-x-2">
            <motion.button
              className="p-2 rounded-lg hover:bg-gray-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </motion.button>
            <motion.button
              className="p-2 rounded-lg hover:bg-gray-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_27; 