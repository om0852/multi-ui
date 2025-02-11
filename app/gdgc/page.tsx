"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function GDGCPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">
      {/* Stars Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Spaceship */}
      <motion.div
        className="absolute"
        initial={{ x: -100, y: 100 }}
        animate={{
          x: [null, 100, -100],
          y: [null, -100, 100],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-16 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative">
          <div className="absolute -right-2 top-1/2 w-4 h-4 bg-blue-300 rounded-full transform -translate-y-1/2" />
          <div className="absolute -left-4 top-1/2 w-6 h-2 bg-blue-400 rounded-full transform -translate-y-1/2" />
        </div>
      </motion.div>

      {/* GDGC Letters */}
      <div className="flex space-x-4">
        {['G', 'D', 'G', 'C'].map((letter, index) => (
          <motion.div
            key={letter + index}
            className="text-8xl font-bold relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              {letter}
            </span>
            {/* Glowing effect */}
            <motion.div
              className="absolute inset-0 blur-lg opacity-50"
              initial={{ scale: 0.8 }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            >
              <span className="text-blue-400">{letter}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Floating Graphs */}
      <div className="absolute bottom-20 left-20">
        <motion.div
          className="w-32 h-32 border-2 border-blue-500 rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="w-full h-full bg-gradient-to-t from-blue-500 to-transparent"
            animate={{
              height: ["0%", "80%", "30%", "90%", "40%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </div>

      {/* Data Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
} 