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
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.23, 1, 0.32, 1]
      }}
      className={clsx(
        "relative mb-16 last:mb-0 pl-12",
        theme === 'dark' ? 'text-purple-50' : 'text-purple-900'
      )}
    >
      {/* Cosmic Line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5">
        <motion.div 
          animate={{ 
            background: [
              "linear-gradient(180deg, #C084FC, #A855F7, #7C3AED)",
              "linear-gradient(180deg, #A855F7, #7C3AED, #C084FC)",
              "linear-gradient(180deg, #7C3AED, #C084FC, #A855F7)"
            ],
            boxShadow: [
              "0 0 10px rgba(192, 132, 252, 0.5)",
              "0 0 20px rgba(168, 85, 247, 0.5)",
              "0 0 10px rgba(124, 58, 237, 0.5)"
            ]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        />

        {/* Floating Particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 3,
              delay: i * 1,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: '-2px',
              background: theme === 'dark' ? '#C084FC' : '#7C3AED',
              boxShadow: '0 0 10px currentColor'
            }}
          />
        ))}
      </div>

      {/* Cosmic Node */}
      <motion.div
        animate={{ 
          rotate: 360,
          boxShadow: [
            "0 0 15px rgba(192, 132, 252, 0.5)",
            "0 0 30px rgba(168, 85, 247, 0.5)",
            "0 0 15px rgba(124, 58, 237, 0.5)"
          ]
        }}
        transition={{ 
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          },
          boxShadow: {
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }
        }}
        className={clsx(
          "absolute left-0 top-0 -translate-x-[13px]",
          "w-7 h-7 rounded-full",
          "flex items-center justify-center",
          theme === 'dark' ? 'bg-purple-900' : 'bg-purple-100',
          "border-2 border-purple-500"
        )}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
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
            ? 'bg-purple-900/30 backdrop-blur-sm' 
            : 'bg-purple-50/80 backdrop-blur-sm',
          "border border-purple-200/20"
        )}
        style={{
          boxShadow: theme === 'dark'
            ? '0 8px 32px rgba(124, 58, 237, 0.2)'
            : '0 8px 32px rgba(192, 132, 252, 0.1)'
        }}
      >
        {/* Cosmic Background */}
        <motion.div
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: theme === 'dark'
              ? 'radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.2), rgba(124, 58, 237, 0.1), transparent)'
              : 'radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.1), rgba(124, 58, 237, 0.05), transparent)'
          }}
        />

        {/* Star Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50]
            }}
            transition={{ 
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: theme === 'dark' ? '#C084FC' : '#7C3AED',
              boxShadow: '0 0 5px currentColor'
            }}
          />
        ))}

        {/* Date */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={clsx(
            "inline-block px-4 py-1 mb-3 rounded-full",
            theme === 'dark' 
              ? 'bg-purple-900/50 text-purple-200' 
              : 'bg-purple-100 text-purple-700'
          )}
        >
          <motion.span
            animate={{ 
              textShadow: [
                "0 0 8px rgba(192, 132, 252, 0.5)",
                "0 0 16px rgba(168, 85, 247, 0.5)",
                "0 0 8px rgba(124, 58, 237, 0.5)"
              ]
            }}
            transition={{ 
              duration: 4,
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
          theme === 'dark' ? 'text-purple-100' : 'text-purple-900'
        )}>
          {title}
        </h3>

        {/* Category */}
        {category && (
          <div className={clsx(
            "text-sm mb-2 italic",
            theme === 'dark' ? 'text-purple-300' : 'text-purple-600'
          )}>
            {category}
          </div>
        )}

        {/* Description */}
        <p className={clsx(
          "mb-4",
          theme === 'dark' ? 'text-purple-200' : 'text-purple-700'
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
                  "px-3 py-1 text-sm rounded-full",
                  theme === 'dark' 
                    ? 'bg-purple-900/50 text-purple-200' 
                    : 'bg-purple-100 text-purple-700'
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
              theme === 'dark' ? 'text-purple-300' : 'text-purple-600'
            )}
            style={{
              textShadow: theme === 'dark'
                ? '0 0 8px rgba(192, 132, 252, 0.5)'
                : 'none'
            }}
          >
            Explore Universe
            <motion.span
              animate={{ 
                x: [0, 5, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              ✧
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
      theme === 'dark' ? 'bg-purple-950' : 'bg-purple-50'
    )}>
      {/* Cosmic Background */}
      <motion.div
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.2), rgba(124, 58, 237, 0.1), transparent)'
            : 'radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.1), rgba(124, 58, 237, 0.05), transparent)',
          backgroundSize: '200% 200%',
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