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
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        damping: 12
      }}
      className={clsx(
        "relative mb-16 pl-16",
        theme === 'dark' ? 'text-emerald-100' : 'text-emerald-900'
      )}
    >
      {/* Vine Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1">
        <motion.div
          animate={{ 
            background: [
              "linear-gradient(to bottom, #059669, #10B981, #34D399)",
              "linear-gradient(to bottom, #10B981, #34D399, #059669)",
              "linear-gradient(to bottom, #34D399, #059669, #10B981)"
            ]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />

        {/* Growing Leaves */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 15, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 4,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={clsx(
              "absolute w-3 h-3",
              "transform -translate-x-1/2",
              theme === 'dark' 
                ? 'text-emerald-400' 
                : 'text-emerald-600'
            )}
            style={{ 
              top: `${i * 30}%`,
              left: "50%"
            }}
          >
            {/* Leaf SVG */}
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Flower Node */}
      <div className="absolute left-0 top-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "w-10 h-10 -translate-x-1/2",
            "rounded-full",
            "flex items-center justify-center",
            theme === 'dark' 
              ? 'bg-emerald-900 text-emerald-200' 
              : 'bg-emerald-100 text-emerald-700',
            "border-2 border-emerald-500/50",
            "overflow-hidden"
          )}
        >
          {/* Flower Petals */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={clsx(
                "absolute w-4 h-4",
                "rounded-full",
                theme === 'dark'
                  ? 'bg-emerald-700'
                  : 'bg-emerald-200'
              )}
              style={{ 
                transform: `rotate(${i * 60}deg) translateY(-8px)`
              }}
            />
          ))}
          <div className="relative z-10">{icon}</div>
        </motion.div>
      </div>

      {/* Content Card */}
      <div className={clsx(
        "relative p-6 rounded-lg",
        theme === 'dark' 
          ? 'bg-emerald-900/30 backdrop-blur-sm' 
          : 'bg-emerald-50/80 backdrop-blur-sm',
        "border border-emerald-500/20",
        "group overflow-hidden"
      )}>
        {/* Decorative Vines */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                pathLength: [0, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ 
                duration: 8,
                delay: i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className={clsx(
                "absolute",
                theme === 'dark'
                  ? 'stroke-emerald-600/20'
                  : 'stroke-emerald-400/20'
              )}
              style={{
                top: `${i * 30}%`,
                right: "0",
                width: "100%",
                height: "2px"
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative">
          {/* Date */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={clsx(
              "inline-block px-4 py-1 mb-3 rounded-full",
              theme === 'dark' 
                ? 'bg-emerald-800/50 text-emerald-200' 
                : 'bg-emerald-100 text-emerald-700',
              "border border-emerald-500/20"
            )}
          >
            {date}
          </motion.div>

          {/* Title */}
          <h3 className={clsx(
            "text-xl font-medium mb-2",
            theme === 'dark' ? 'text-emerald-200' : 'text-emerald-800'
          )}>
            {title}
          </h3>

          {/* Category */}
          {category && (
            <div className={clsx(
              "text-sm mb-2",
              theme === 'dark' ? 'text-emerald-300' : 'text-emerald-600'
            )}>
              🌿 {category} 🌿
            </div>
          )}

          {/* Description */}
          <p className={clsx(
            "mb-4",
            theme === 'dark' ? 'text-emerald-300' : 'text-emerald-700'
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
                    y: -2
                  }}
                  className={clsx(
                    "px-3 py-1 text-sm rounded-full",
                    theme === 'dark' 
                      ? 'bg-emerald-800/50 text-emerald-200' 
                      : 'bg-emerald-100 text-emerald-700',
                    "border border-emerald-500/20"
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
                theme === 'dark' 
                  ? 'text-emerald-300 hover:text-emerald-200' 
                  : 'text-emerald-600 hover:text-emerald-700'
              )}
            >
              Explore Garden
              <motion.span
                animate={{ 
                  x: [0, 4, 0],
                  rotate: [0, 45, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🌱
              </motion.span>
            </motion.a>
          )}
        </div>
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
      theme === 'dark' ? 'bg-emerald-950' : 'bg-emerald-50'
    )}>
      {/* Garden Background */}
      <div className={clsx(
        "absolute inset-0",
        "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]",
        theme === 'dark'
          ? 'from-emerald-900/50 via-emerald-950 to-emerald-950'
          : 'from-emerald-100/50 via-emerald-50 to-emerald-50'
      )}>
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0, 0.5, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className={clsx(
              "absolute w-1 h-1 rounded-full",
              theme === 'dark'
                ? 'bg-emerald-400/20'
                : 'bg-emerald-600/20'
            )}
            style={{ 
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

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