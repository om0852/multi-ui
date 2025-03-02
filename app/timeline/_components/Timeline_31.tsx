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
        theme === 'dark' ? 'text-white' : 'text-gray-800'
      )}
    >
      {/* Timeline Line with Holographic Effect */}
      <div className={clsx(
        "absolute left-0 top-0 bottom-0 w-0.5",
        "bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500",
        "shadow-[0_0_20px_rgba(219,39,119,0.5)]"
      )}>
        <motion.div
          animate={{ 
            y: [0, 100],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-full h-32 bg-gradient-to-b from-transparent via-white to-transparent opacity-30"
        />
      </div>

      {/* Holographic Node */}
      <motion.div
        animate={{ 
          boxShadow: [
            '0 0 20px rgba(219,39,119,0.5)',
            '0 0 40px rgba(168,85,247,0.5)',
            '0 0 20px rgba(59,130,246,0.5)',
            '0 0 20px rgba(219,39,119,0.5)'
          ]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
        className={clsx(
          "absolute left-0 top-0 -translate-x-1/2",
          "w-6 h-6 rounded-full",
          "bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500",
          "border border-white/30",
          "backdrop-blur-sm"
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
        "bg-gradient-to-br",
        theme === 'dark'
          ? 'from-gray-900/40 to-gray-800/40'
          : 'from-white/40 to-gray-50/40',
        "backdrop-blur-md",
        "border border-white/20",
        "shadow-[0_0_30px_rgba(219,39,119,0.2)]"
      )}>
        {/* Holographic Overlay */}
        <motion.div
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10"
          style={{
            backgroundSize: '200% 200%'
          }}
        />

        {/* Floating Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ 
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "linear"
            }}
            className={clsx(
              "absolute w-2 h-2 rounded-full",
              "bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500",
              "opacity-30",
              i % 2 === 0 ? 'left-1/4' : 'right-1/4',
              i % 3 === 0 ? 'top-1/4' : 'bottom-1/4'
            )}
          />
        ))}

        {/* Date Badge */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={clsx(
            "inline-block px-4 py-1 mb-3 rounded",
            "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500",
            "text-white font-medium",
            "shadow-[0_0_20px_rgba(219,39,119,0.3)]",
            "border border-white/20"
          )}
        >
          {date}
        </motion.div>

        {/* Title */}
        <motion.h3
          animate={{ 
            textShadow: [
              '0 0 8px rgba(219,39,119,0.5)',
              '0 0 16px rgba(168,85,247,0.5)',
              '0 0 8px rgba(59,130,246,0.5)',
              '0 0 8px rgba(219,39,119,0.5)'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-xl font-bold mb-2"
        >
          {title}
        </motion.h3>

        {/* Category */}
        {category && (
          <div className={clsx(
            "text-sm mb-2 italic",
            theme === 'dark' ? 'text-white/80' : 'text-gray-600'
          )}>
            {category}
          </div>
        )}

        {/* Description */}
        <p className={clsx(
          "mb-4",
          theme === 'dark' ? 'text-white/70' : 'text-gray-600'
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
                  boxShadow: '0 0 20px rgba(219,39,119,0.5)'
                }}
                className={clsx(
                  "px-3 py-1 text-sm rounded",
                  "bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20",
                  "backdrop-blur-sm",
                  "border border-white/20",
                  theme === 'dark' ? 'text-white' : 'text-gray-800'
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
              textShadow: '0 0 8px rgba(219,39,119,0.8)'
            }}
            className={clsx(
              "inline-flex items-center gap-2",
              "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500",
              "font-medium"
            )}
          >
            View Details
            <motion.span
              animate={{ x: [0, 5, 0] }}
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
      {/* Holographic Background */}
      <motion.div
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(219,39,119,0.3), rgba(168,85,247,0.3), rgba(59,130,246,0.3))',
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