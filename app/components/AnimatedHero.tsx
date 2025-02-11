import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '@fontsource/press-start-2p'; // Minecraft-like font

const AnimatedHero = () => {
  const letters = ['G', 'D', 'G', 'C'];
  const colors = ['#FF4136', '#2ECC40', '#0074D9', '#B10DC9'];

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Moving spacecraft in background */}
      <motion.div
        className="absolute"
        initial={{ x: -100, y: 100 }}
        animate={{ 
          x: window.innerWidth + 100,
          y: 50,
          transition: { 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        <img 
          width="48" 
          height="48" 
          src="https://img.icons8.com/emoji/48/rocket-emji.png" 
          alt="rocket-emoji"
          className="w-12 h-12 md:w-16 md:h-16"
        />
      </motion.div>

      <motion.div
        className="absolute"
        initial={{ x: window.innerWidth + 100, y: 200 }}
        animate={{ 
          x: -100,
          y: 250,
          transition: { 
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }
        }}
      >
        <img 
          width="48" 
          height="48" 
          src="https://img.icons8.com/color/48/airplane-mode-on.png" 
          alt="airplane"
          className="w-12 h-12 md:w-16 md:h-16"
        />
      </motion.div>

      {/* Main GDGC Text */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex space-x-4">
          {letters.map((letter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.2
                }
              }}
            >
              <motion.span
                className="text-6xl md:text-8xl lg:text-9xl font-bold"
                style={{ 
                  fontFamily: '"Press Start 2P", cursive',
                  color: colors[index],
                  display: 'inline-block'
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                {letter}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedHero; 