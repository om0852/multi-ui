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
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={clsx(
        "relative mb-16 pl-8",
        theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
      )}
    >
      {/* Timeline Line with Neon Glow */}
      <div className={clsx(
        "absolute left-0 top-0 bottom-0 w-0.5",
        theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-500',
        "shadow-[0_0_10px_rgba(34,211,238,0.7)]"
      )}>
        <motion.div
          animate={{ 
            y: [0, 100],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "absolute w-full h-24",
            theme === 'dark'
              ? 'bg-gradient-to-b from-cyan-400 via-cyan-400/50 to-transparent'
              : 'bg-gradient-to-b from-cyan-500 via-cyan-500/50 to-transparent'
          )}
        />
      </div>

      {/* Node with Glitch Effect */}
      <motion.div
        animate={{ 
          boxShadow: [
            '0 0 0 0 rgba(34,211,238,0.4)',
            '0 0 20px 10px rgba(34,211,238,0.2)',
            '0 0 0 0 rgba(34,211,238,0.4)'
          ]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
        className={clsx(
          "absolute left-0 top-0 -translate-x-1/2",
          "w-6 h-6 rounded-full",
          theme === 'dark' 
            ? 'bg-cyan-900 border-cyan-400' 
            : 'bg-cyan-100 border-cyan-500',
          "border-2",
          "shadow-[0_0_10px_rgba(34,211,238,0.5)]"
        )}
      >
        {icon && (
          <span className="flex items-center justify-center h-full text-xs">
            {icon}
          </span>
        )}
      </motion.div>

      {/* Content Card */}
      <div className={clsx(
        "relative p-6 rounded-lg overflow-hidden",
        theme === 'dark' 
          ? 'bg-gray-900/80 backdrop-blur-sm' 
          : 'bg-white/80 backdrop-blur-sm',
        "border border-cyan-500/30",
        "shadow-[0_0_20px_rgba(34,211,238,0.2)]"
      )}>
        {/* Glitch Lines */}
        <motion.div
          animate={{ 
            opacity: [0, 0.1, 0],
            height: ['0%', '100%', '0%']
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "steps(3)"
          }}
          className={clsx(
            "absolute inset-0",
            theme === 'dark'
              ? 'bg-gradient-to-b from-cyan-400/10 via-transparent to-cyan-400/10'
              : 'bg-gradient-to-b from-cyan-500/10 via-transparent to-cyan-500/10'
          )}
        />

        {/* Date Badge */}
        <div className={clsx(
          "inline-block px-4 py-1 mb-3 rounded",
          theme === 'dark' 
            ? 'bg-cyan-900/50 text-cyan-300' 
            : 'bg-cyan-100 text-cyan-700',
          "border border-cyan-500/30"
        )}>
          <motion.span
            animate={{ 
              textShadow: [
                '0 0 5px rgba(34,211,238,0.5)',
                '0 0 20px rgba(34,211,238,0.8)',
                '0 0 5px rgba(34,211,238,0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="font-mono"
          >
            {date}
          </motion.span>
        </div>

        {/* Title with Glitch Effect */}
        <motion.h3
          animate={{ 
            textShadow: [
              '0 0 5px rgba(34,211,238,0.5)',
              '0 0 10px rgba(34,211,238,0.7)',
              '0 0 5px rgba(34,211,238,0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className={clsx(
            "text-xl font-bold mb-2 font-mono",
            theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'
          )}
        >
          {title}
        </motion.h3>

        {/* Category */}
        {category && (
          <div className={clsx(
            "text-sm mb-2 font-mono",
            theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
          )}>
            &lt;{category}&gt;
          </div>
        )}

        {/* Description */}
        <p className={clsx(
          "mb-4 font-mono",
          theme === 'dark' ? 'text-cyan-200' : 'text-cyan-700'
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
                  scale: 1.05,
                  boxShadow: '0 0 15px rgba(34,211,238,0.5)'
                }}
                className={clsx(
                  "px-3 py-1 text-sm font-mono rounded",
                  theme === 'dark' 
                    ? 'bg-cyan-900/50 text-cyan-300 border-cyan-500/30' 
                    : 'bg-cyan-100 text-cyan-700 border-cyan-500/30',
                  "border"
                )}
              >
                #{tag}
              </motion.span>
            ))}
          </div>
        )}

        {/* Link */}
        {link && (
          <motion.a
            href={link}
            whileHover={{ 
              scale: 1.05,
              textShadow: '0 0 8px rgba(34,211,238,0.8)'
            }}
            className={clsx(
              "inline-flex items-center gap-2 font-mono",
              theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'
            )}
          >
            ACCESS_DATA
            <motion.span
              animate={{ 
                x: [0, 5, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

const Timeline: React.FC<TimelineProps> = ({
  data,
  theme = 'light',
}) => {
  return (
    <div className={clsx(
      "relative max-w-3xl mx-auto p-8",
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    )}>
      {/* Cyberpunk Grid Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${theme === 'dark' ? '#22d3ee' : '#0891b2'} 1px, transparent 1px),
            linear-gradient(to bottom, ${theme === 'dark' ? '#22d3ee' : '#0891b2'} 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
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