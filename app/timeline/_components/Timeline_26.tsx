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
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.7,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={clsx(
        "relative mb-16 last:mb-0 pl-10",
        theme === 'dark' ? 'text-emerald-50' : 'text-emerald-900'
      )}
    >
      {/* Crystal Line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5">
        <motion.div 
          animate={{ 
            background: [
              "linear-gradient(180deg, #10B981, #059669, #047857)",
              "linear-gradient(180deg, #059669, #047857, #10B981)",
              "linear-gradient(180deg, #047857, #10B981, #059669)"
            ]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
          style={{
            boxShadow: '0 0 15px rgba(16, 185, 129, 0.3)'
          }}
        />
      </div>

      {/* Crystal Node */}
      <motion.div
        animate={{ 
          rotateY: [0, 180, 360],
          boxShadow: [
            '0 0 20px rgba(16, 185, 129, 0.3)',
            '0 0 30px rgba(16, 185, 129, 0.5)',
            '0 0 20px rgba(16, 185, 129, 0.3)'
          ]
        }}
        transition={{ 
          rotateY: {
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          },
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }
        }}
        className={clsx(
          "absolute left-0 top-0 -translate-x-[12px]",
          "w-6 h-6",
          "flex items-center justify-center",
          theme === 'dark' ? 'bg-emerald-900' : 'bg-emerald-50',
          "transform-style-preserve-3d"
        )}
        style={{
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
        }}
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
            ? 'bg-emerald-900/20 backdrop-blur-sm' 
            : 'bg-emerald-50/80 backdrop-blur-sm',
          "border border-emerald-200/20"
        )}
        style={{
          boxShadow: theme === 'dark'
            ? '0 8px 32px rgba(16, 185, 129, 0.1)'
            : '0 8px 32px rgba(16, 185, 129, 0.05)'
        }}
      >
        {/* Prismatic Effects */}
        <motion.div
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'conic-gradient(from 0deg, #10B981, #059669, #047857, #10B981)',
            filter: 'blur(40px)'
          }}
        />

        {/* Crystal Shards */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 8,
              delay: i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute"
            style={{
              width: '100px',
              height: '100px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(45deg, rgba(16, 185, 129, 0.1), transparent)',
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              transform: `rotate(${i * 45}deg)`
            }}
          />
        ))}

        {/* Date */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={clsx(
            "inline-block px-4 py-1 mb-3 rounded-lg",
            theme === 'dark' 
              ? 'bg-emerald-900/30 text-emerald-200' 
              : 'bg-emerald-100 text-emerald-700'
          )}
          style={{
            clipPath: 'polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)'
          }}
        >
          {date}
        </motion.div>

        {/* Title */}
        <h3 className={clsx(
          "text-xl font-bold mb-2",
          theme === 'dark' ? 'text-emerald-100' : 'text-emerald-900'
        )}>
          {title}
        </h3>

        {/* Category */}
        {category && (
          <div className={clsx(
            "text-sm mb-2 italic",
            theme === 'dark' ? 'text-emerald-300' : 'text-emerald-600'
          )}>
            {category}
          </div>
        )}

        {/* Description */}
        <p className={clsx(
          "mb-4",
          theme === 'dark' ? 'text-emerald-200' : 'text-emerald-700'
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
                  "px-3 py-1 text-sm",
                  theme === 'dark' 
                    ? 'bg-emerald-900/30 text-emerald-200' 
                    : 'bg-emerald-100 text-emerald-700'
                )}
                style={{
                  clipPath: 'polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)'
                }}
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
              theme === 'dark' ? 'text-emerald-300' : 'text-emerald-600'
            )}
            style={{
              textShadow: theme === 'dark'
                ? '0 0 8px rgba(16, 185, 129, 0.5)'
                : 'none'
            }}
          >
            View Crystal
            <motion.span
              animate={{ 
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="inline-block"
            >
              ◇
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
      theme === 'dark' ? 'bg-emerald-950' : 'bg-emerald-50'
    )}>
      {/* Crystal Background */}
      <motion.div
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.3), transparent)'
            : 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.2), transparent)',
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