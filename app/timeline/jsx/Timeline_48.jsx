"use client";

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const TimelineItem = ({ 
  title, 
  description, 
  date, 
  icon, 
  category,
  tags,
  link,
  index,
  theme
}) => {
  const isEven = index % 2 === 0;
  const direction = isEven ? 1 : -1;
  
  // Animation variants
  const lineVariants = {
    hidden: { height: 0 },
    visible: { 
      height: '100%',
      transition: { 
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };
  
  const nodeVariants = {
    hidden: { 
      scale: 0,
      opacity: 0 
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: { 
        delay: 0.3,
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };
  
  const contentVariants = {
    hidden: { 
      opacity: 0,
      x: 20 * direction
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: { 
        delay: 0.4,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className={clsx(
      "flex items-center mb-12 last:mb-0",
      isEven ? "flex-row" : "flex-row-reverse"
    )}>
      {/* Timeline Line with Liquid Effect */}
      <div className="relative flex-shrink-0 w-24 flex justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={lineVariants}
          className={clsx(
            "absolute h-full w-1 rounded-full",
            theme === 'dark' 
              ? 'bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-pink-500/30' 
              : 'bg-gradient-to-b from-blue-400/40 via-purple-400/40 to-pink-400/40'
          )}
          style={{
            filter: "blur(0.5px)",
            boxShadow: theme === 'dark' 
              ? '0 0 8px 1px rgba(59, 130, 246, 0.3)' 
              : '0 0 8px 1px rgba(96, 165, 250, 0.3)'
          }}
        />
        
        {/* Morphing Node */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={nodeVariants}
          className={clsx(
            "relative z-10 w-10 h-10 rounded-full flex items-center justify-center",
            theme === 'dark' 
              ? 'bg-blue-500/10 border border-blue-500/30' 
              : 'bg-blue-400/10 border border-blue-400/30'
          )}
          style={{
            boxShadow: theme === 'dark' 
              ? '0 0 10px 1px rgba(59, 130, 246, 0.2)' 
              : '0 0 10px 1px rgba(96, 165, 250, 0.2)'
          }}
        >
          <div className={clsx(
            "text-xl",
            theme === 'dark' ? 'text-blue-400' : 'text-blue-500'
          )}>
            {icon || '•'}
          </div>
        </motion.div>
      </div>
      
      {/* Content Card with Liquid Glass Effect */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={contentVariants}
        className={clsx(
          "flex-1 p-6 rounded-xl",
          theme === 'dark' 
            ? 'bg-blue-950/30 border border-blue-800/30' 
            : 'bg-blue-50/80 border border-blue-200/50'
        )}
        style={{
          backdropFilter: "blur(8px)",
          boxShadow: theme === 'dark' 
            ? '0 4px 20px rgba(0, 0, 0, 0.2)' 
            : '0 4px 20px rgba(0, 0, 0, 0.05)'
        }}
      >
        <div className="flex justify-between items-start mb-2">
          <h3 className={clsx(
            "text-xl font-bold",
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          )}>
            {title}
          </h3>
          <span className={clsx(
            "px-3 py-1 rounded-full text-sm",
            theme === 'dark' 
              ? 'bg-blue-500/20 text-blue-300' 
              : 'bg-blue-100 text-blue-700'
          )}>
            {date}
          </span>
        </div>
        
        {category && (
          <div className="mb-2">
            <span className={clsx(
              "px-2 py-1 rounded text-xs",
              theme === 'dark' 
                ? 'bg-purple-500/20 text-purple-300' 
                : 'bg-purple-100 text-purple-700'
            )}>
              {category}
            </span>
          </div>
        )}
        
        <p className={clsx(
          "mb-3",
          theme === 'dark' ? 'text-blue-100/80' : 'text-gray-600'
        )}>
          {description}
        </p>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, i) => (
              <span 
                key={i}
                className={clsx(
                  "px-2 py-1 rounded-full text-xs",
                  theme === 'dark' 
                    ? 'bg-pink-500/20 text-pink-300' 
                    : 'bg-pink-100 text-pink-700'
                )}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
        
        {link && (
          <a 
            href={link}
            className={clsx(
              "inline-block px-4 py-2 rounded-lg text-sm transition-all",
              theme === 'dark' 
                ? 'bg-blue-500/20 text-blue-300 hover:bg-blue-500/30' 
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            )}
          >
            Learn more →
          </a>
        )}
      </motion.div>
    </div>
  );
};

const Timeline = ({ data, theme = 'light' }) => {
  return (
    <div className="relative py-10">
      {/* Liquid Background */}
      <div 
        className={clsx(
          "absolute inset-0 rounded-xl overflow-hidden",
          theme === 'dark' ? 'bg-blue-950/20' : 'bg-blue-50/50'
        )}
        style={{ 
          backdropFilter: "blur(40px)",
        }}
      />
      
      {/* Animated Waves */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, 10, -10, 0],
            y: [0, -10, 10, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={clsx(
            "absolute w-16 h-16",
            "rounded-full",
            theme === 'dark' 
              ? 'bg-blue-500/5' 
              : 'bg-blue-400/5',
            "pointer-events-none"
          )}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}

      {/* Content */}
      <div className="relative">
        {data.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            index={index}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline; 