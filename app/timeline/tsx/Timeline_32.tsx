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
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={clsx(
        "relative mb-16 pl-8",
        theme === 'dark' ? 'text-indigo-200' : 'text-indigo-900'
      )}
    >
      {/* Timeline Line with Cosmic Effect */}
      <div className={clsx(
        "absolute left-0 top-0 bottom-0 w-0.5",
        theme === 'dark' 
          ? 'bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500'
          : 'bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400',
        "shadow-[0_0_20px_rgba(99,102,241,0.5)]"
      )}>
        {/* Shooting Star Effect */}
        <motion.div
          animate={{ 
            y: [0, 200],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "absolute w-1 h-16",
            "bg-gradient-to-b from-white via-white to-transparent",
            "opacity-50"
          )}
        />
      </div>

      {/* Cosmic Node */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          boxShadow: [
            '0 0 20px rgba(99,102,241,0.5)',
            '0 0 40px rgba(99,102,241,0.3)',
            '0 0 20px rgba(99,102,241,0.5)'
          ]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={clsx(
          "absolute left-0 top-0 -translate-x-1/2",
          "w-6 h-6 rounded-full",
          theme === 'dark'
            ? 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'
            : 'bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400',
          "border border-white/30"
        )}
      >
        {icon && (
          <span className="flex items-center justify-center h-full text-white text-xs">
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
        "border border-indigo-500/30",
        "shadow-[0_0_30px_rgba(99,102,241,0.2)]"
      )}>
        {/* Star Field Background */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity
            }}
            className={clsx(
              "absolute w-0.5 h-0.5 rounded-full bg-white",
              "shadow-[0_0_4px_rgba(255,255,255,0.8)]"
            )}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}

        {/* Nebula Effect */}
        <motion.div
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "absolute inset-0",
            "bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10",
            "mix-blend-screen"
          )}
        />

        {/* Date Badge */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={clsx(
            "inline-block px-4 py-1 mb-3 rounded",
            theme === 'dark'
              ? 'bg-indigo-900/50 text-indigo-200'
              : 'bg-indigo-100 text-indigo-900',
            "border border-indigo-500/30",
            "shadow-[0_0_15px_rgba(99,102,241,0.3)]"
          )}
        >
          {date}
        </motion.div>

        {/* Title */}
        <motion.h3
          animate={{ 
            textShadow: [
              '0 0 8px rgba(99,102,241,0.5)',
              '0 0 16px rgba(99,102,241,0.3)',
              '0 0 8px rgba(99,102,241,0.5)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className={clsx(
            "text-xl font-bold mb-2",
            theme === 'dark' ? 'text-indigo-200' : 'text-indigo-900'
          )}
        >
          {title}
        </motion.h3>

        {/* Category */}
        {category && (
          <div className={clsx(
            "text-sm mb-2 italic",
            theme === 'dark' ? 'text-indigo-300' : 'text-indigo-700'
          )}>
            {category}
          </div>
        )}

        {/* Description */}
        <p className={clsx(
          "mb-4",
          theme === 'dark' ? 'text-indigo-200' : 'text-indigo-800'
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
                  boxShadow: '0 0 15px rgba(99,102,241,0.5)'
                }}
                className={clsx(
                  "px-3 py-1 text-sm rounded",
                  theme === 'dark'
                    ? 'bg-indigo-900/50 text-indigo-200'
                    : 'bg-indigo-100 text-indigo-900',
                  "border border-indigo-500/30"
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
            whileHover={{ 
              scale: 1.05,
              textShadow: '0 0 8px rgba(99,102,241,0.8)'
            }}
            className={clsx(
              "inline-flex items-center gap-2",
              theme === 'dark' ? 'text-indigo-300' : 'text-indigo-700'
            )}
          >
            Explore
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
      {/* Cosmic Background */}
      <motion.div
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(99,102,241,0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(168,85,247,0.4) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(236,72,153,0.4) 0%, transparent 50%)
          `,
          backgroundSize: '200% 200%'
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