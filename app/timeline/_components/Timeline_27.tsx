"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface TimelineItemProps {
  title: string;
  description: string;
  date: string;
  icon?: React.ReactNode;
  category?: string;
  tags?: string[];
  link?: string;
}

interface TimelineProps {
  data: TimelineItemProps[];
  theme?: 'light' | 'dark';
  animated?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps & { 
  index: number; 
  theme: 'light' | 'dark';
}> = ({
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
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={clsx(
        "relative mb-16 last:mb-0 pl-12",
        theme === 'dark' ? 'text-teal-50' : 'text-teal-900'
      )}
    >
      {/* Circuit Line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5">
        <motion.div 
          animate={{ 
            background: [
              "linear-gradient(180deg, #2DD4BF, #14B8A6, #0D9488)",
              "linear-gradient(180deg, #14B8A6, #0D9488, #2DD4BF)",
              "linear-gradient(180deg, #0D9488, #2DD4BF, #14B8A6)"
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
          style={{
            boxShadow: '0 0 10px rgba(45, 212, 191, 0.3)'
          }}
        />

        {/* Data Flow */}
        <motion.div
          animate={{ 
            y: [0, 100],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-full h-4"
          style={{
            background: 'linear-gradient(to bottom, rgba(45, 212, 191, 0.5), transparent)'
          }}
        />
      </div>

      {/* Circuit Node */}
      <motion.div
        animate={{ 
          boxShadow: [
            '0 0 0 2px rgba(45, 212, 191, 0.3)',
            '0 0 0 4px rgba(45, 212, 191, 0.2)',
            '0 0 0 2px rgba(45, 212, 191, 0.3)'
          ]
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
        className={clsx(
          "absolute left-0 top-0 -translate-x-[13px]",
          "w-6 h-6 rounded-full",
          "flex items-center justify-center",
          theme === 'dark' ? 'bg-teal-900' : 'bg-teal-50',
          "border-2 border-teal-500"
        )}
      >
        <motion.div
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="text-sm"
        >
          {icon}
        </motion.div>
      </motion.div>

      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={clsx(
          "relative p-6 rounded-lg overflow-hidden",
          theme === 'dark' 
            ? 'bg-teal-900/20 backdrop-blur-sm' 
            : 'bg-teal-50/80 backdrop-blur-sm',
          "border border-teal-200/20"
        )}
        style={{
          boxShadow: theme === 'dark'
            ? '0 8px 32px rgba(45, 212, 191, 0.1)'
            : '0 8px 32px rgba(45, 212, 191, 0.05)'
        }}
      >
        {/* Circuit Pattern Background */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${theme === 'dark' ? '#2DD4BF' : '#0D9488'} 1px, transparent 1px),
              linear-gradient(to bottom, ${theme === 'dark' ? '#2DD4BF' : '#0D9488'} 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />

        {/* Circuit Paths */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 2,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute"
            style={{
              width: '100px',
              height: '100px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              border: `1px solid ${theme === 'dark' ? '#2DD4BF' : '#0D9488'}`,
              borderRadius: '10px',
              transform: `rotate(${i * 45}deg)`
            }}
          />
        ))}

        {/* Date */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={clsx(
            "inline-block px-4 py-1 mb-3 rounded",
            theme === 'dark' 
              ? 'bg-teal-900/30 text-teal-200' 
              : 'bg-teal-100 text-teal-700'
          )}
        >
          <motion.span
            animate={{ 
              color: [
                theme === 'dark' ? '#2DD4BF' : '#0D9488',
                theme === 'dark' ? '#14B8A6' : '#0F766E',
                theme === 'dark' ? '#2DD4BF' : '#0D9488'
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {date}
          </motion.span>
        </motion.div>

        {/* Title */}
        <h3 className={clsx(
          "text-xl font-bold mb-2",
          theme === 'dark' ? 'text-teal-100' : 'text-teal-900'
        )}>
          {title}
        </h3>

        {/* Category */}
        {category && (
          <div className={clsx(
            "text-sm mb-2 italic",
            theme === 'dark' ? 'text-teal-300' : 'text-teal-600'
          )}>
            {category}
          </div>
        )}

        {/* Description */}
        <p className={clsx(
          "mb-4",
          theme === 'dark' ? 'text-teal-200' : 'text-teal-700'
        )}>
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <motion.span
                key={i}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 0 15px currentColor'
                }}
                className={clsx(
                  "px-3 py-1 text-sm rounded",
                  theme === 'dark' 
                    ? 'bg-teal-900/30 text-teal-200' 
                    : 'bg-teal-100 text-teal-700'
                )}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        )}

        {/* Link */}
        {link && (
          <motion.a
            href={link}
            whileHover={{ x: 5 }}
            className={clsx(
              "inline-flex items-center gap-2",
              "text-sm font-medium",
              theme === 'dark' ? 'text-teal-300' : 'text-teal-600'
            )}
            style={{
              textShadow: theme === 'dark'
                ? '0 0 8px rgba(45, 212, 191, 0.5)'
                : 'none'
            }}
          >
            Access Node
            <motion.span
              animate={{ 
                x: [0, 5, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              →
            </motion.span>
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  );
};

const Timeline: React.FC<TimelineProps> = ({
  data,
  theme = 'light',
  animated = true,
}) => {
  return (
    <div className={clsx(
      "relative max-w-3xl mx-auto p-8",
      theme === 'dark' ? 'bg-teal-950' : 'bg-teal-50'
    )}>
      {/* Circuit Background */}
      <motion.div
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(circle at 50% 50%, rgba(45, 212, 191, 0.2), transparent)'
            : 'radial-gradient(circle at 50% 50%, rgba(45, 212, 191, 0.1), transparent)',
          filter: 'blur(40px)'
        }}
      />

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