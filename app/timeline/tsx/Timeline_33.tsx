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
        theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'
      )}
    >
      {/* Timeline Line with Scanning Effect */}
      <div className={clsx(
        "absolute left-0 top-0 bottom-0 w-0.5",
        theme === 'dark' ? 'bg-cyan-800' : 'bg-cyan-200'
      )}>
        <motion.div
          animate={{ 
            y: [0, "100%"],
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
              ? 'bg-gradient-to-b from-cyan-400 via-cyan-500 to-transparent'
              : 'bg-gradient-to-b from-cyan-500 via-cyan-400 to-transparent'
          )}
        />
      </div>

      {/* Node with Holographic Effect */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          boxShadow: [
            '0 0 10px rgba(34,211,238,0.3)',
            '0 0 20px rgba(34,211,238,0.5)',
            '0 0 10px rgba(34,211,238,0.3)'
          ]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={clsx(
          "absolute left-0 top-0 -translate-x-1/2",
          "w-6 h-6 rounded-full",
          theme === 'dark'
            ? 'bg-cyan-900 border border-cyan-400'
            : 'bg-cyan-100 border border-cyan-500',
          "before:absolute before:inset-0 before:rounded-full",
          "before:bg-gradient-to-r before:from-cyan-400 before:to-blue-500",
          "before:opacity-50 before:blur-sm"
        )}
      >
        {icon && (
          <span className="absolute inset-0 flex items-center justify-center text-xs">
            {icon}
          </span>
        )}
      </motion.div>

      {/* Content Card */}
      <div className={clsx(
        "relative p-6 rounded-lg",
        theme === 'dark' 
          ? 'bg-gray-900/80 backdrop-blur-sm'
          : 'bg-white/80 backdrop-blur-sm',
        "border border-cyan-500/30",
        "before:absolute before:inset-0 before:rounded-lg",
        "before:bg-gradient-to-r before:from-cyan-500/10 before:to-blue-500/10",
        "before:pointer-events-none"
      )}>
        {/* Scanning Line Effect */}
        <motion.div
          animate={{ 
            y: [0, "100%"],
            opacity: [0, 0.2, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-gradient-to-b from-cyan-400/20 to-transparent"
        />

        {/* Date Badge */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={clsx(
            "inline-block px-4 py-1 mb-3 rounded",
            theme === 'dark'
              ? 'bg-cyan-900/50 text-cyan-300'
              : 'bg-cyan-100 text-cyan-800',
            "border border-cyan-500/30",
            "shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          )}
        >
          {date}
        </motion.div>

        {/* Title */}
        <motion.h3
          animate={{ 
            textShadow: [
              '0 0 8px rgba(34,211,238,0.3)',
              '0 0 16px rgba(34,211,238,0.5)',
              '0 0 8px rgba(34,211,238,0.3)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className={clsx(
            "text-xl font-bold mb-2",
            theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'
          )}
        >
          {title}
        </motion.h3>

        {/* Category */}
        {category && (
          <div className={clsx(
            "text-sm mb-2 italic",
            theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
          )}>
            {category}
          </div>
        )}

        {/* Description */}
        <p className={clsx(
          "mb-4",
          theme === 'dark' ? 'text-cyan-200' : 'text-cyan-800'
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
                  "px-3 py-1 text-sm rounded",
                  theme === 'dark'
                    ? 'bg-cyan-900/50 text-cyan-300'
                    : 'bg-cyan-100 text-cyan-800',
                  "border border-cyan-500/30"
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
              textShadow: '0 0 8px rgba(34,211,238,0.8)'
            }}
            className={clsx(
              "inline-flex items-center gap-2",
              theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
            )}
          >
            Access Data
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
      {/* HUD Background */}
      <motion.div
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(34,211,238,0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(56,189,248,0.4) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(14,165,233,0.4) 0%, transparent 50%)
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