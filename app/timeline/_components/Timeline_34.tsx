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
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.2,
        type: "spring",
        damping: 15
      }}
      className={clsx(
        "relative mb-12 last:mb-0 pl-16",
        theme === 'dark' ? 'text-cyan-100' : 'text-cyan-900'
      )}
    >
      {/* Quantum Circuit Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px">
        <motion.div
          animate={{ 
            background: [
              "linear-gradient(to bottom, #06B6D4, #0891B2, #0E7490)",
              "linear-gradient(to bottom, #0891B2, #0E7490, #06B6D4)",
              "linear-gradient(to bottom, #0E7490, #06B6D4, #0891B2)"
            ]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        />

        {/* Quantum Particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: ["0%", "100%"],
              opacity: [0, 1, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ 
              duration: 2,
              delay: i * 0.6,
              repeat: Infinity,
              ease: "linear"
            }}
            className={clsx(
              "absolute w-2 h-2 -left-[3px]",
              "rounded-full",
              theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-600',
              "shadow-[0_0_10px_rgba(8,145,178,0.5)]"
            )}
          />
        ))}
      </div>

      {/* Quantum Gate Node */}
      <div className="absolute left-0 top-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            boxShadow: [
              "0 0 15px rgba(8,145,178,0.4)",
              "0 0 25px rgba(8,145,178,0.6)",
              "0 0 15px rgba(8,145,178,0.4)"
            ]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "w-10 h-10 -translate-x-1/2",
            "rounded-lg rotate-45",
            "flex items-center justify-center",
            theme === 'dark' 
              ? 'bg-cyan-900/80 text-cyan-200' 
              : 'bg-cyan-100 text-cyan-700',
            "border-2 border-cyan-500/50",
            "backdrop-blur-sm"
          )}
        >
          <div className="rotate-[-45deg]">{icon}</div>
        </motion.div>
      </div>

      {/* Content Card */}
      <div className={clsx(
        "relative p-6 rounded-lg",
        theme === 'dark' 
          ? 'bg-cyan-900/20 backdrop-blur-sm' 
          : 'bg-cyan-50/80 backdrop-blur-sm',
        "border border-cyan-500/30",
        "group"
      )}>
        {/* Matrix Rain Background */}
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: ["0%", "100%"],
                opacity: [0, 0.3, 0]
              }}
              transition={{ 
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "linear"
              }}
              className={clsx(
                "absolute w-px",
                theme === 'dark' ? 'bg-cyan-400/20' : 'bg-cyan-600/20'
              )}
              style={{ left: `${i * 10}%` }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative">
          {/* Date Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={clsx(
              "inline-block px-4 py-1 mb-3 rounded-md",
              "font-mono text-sm",
              theme === 'dark' 
                ? 'bg-cyan-900/50 text-cyan-200' 
                : 'bg-cyan-100 text-cyan-700',
              "border border-cyan-500/30"
            )}
          >
            <span className="tracking-wider">{date}</span>
          </motion.div>

          {/* Title */}
          <h3 className={clsx(
            "text-xl font-semibold mb-2",
            theme === 'dark' ? 'text-cyan-200' : 'text-cyan-800'
          )}>
            {title}
          </h3>

          {/* Category */}
          {category && (
            <div className={clsx(
              "text-sm mb-2 font-mono",
              theme === 'dark' ? 'text-cyan-300' : 'text-cyan-600'
            )}>
              &lt;{category}&gt;
            </div>
          )}

          {/* Description */}
          <p className={clsx(
            "mb-4",
            theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'
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
                    boxShadow: "0 0 12px rgba(8,145,178,0.4)"
                  }}
                  className={clsx(
                    "px-3 py-1 text-sm rounded",
                    "font-mono",
                    theme === 'dark' 
                      ? 'bg-cyan-900/50 text-cyan-200' 
                      : 'bg-cyan-100 text-cyan-700',
                    "border border-cyan-500/30"
                  )}
                >
                  [{tag}]
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
                "font-mono text-sm",
                theme === 'dark' 
                  ? 'text-cyan-300 hover:text-cyan-200' 
                  : 'text-cyan-600 hover:text-cyan-700'
              )}
            >
              EXECUTE &gt;&gt;
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                _
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
      theme === 'dark' ? 'bg-cyan-950' : 'bg-cyan-50'
    )}>
      {/* Circuit Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={clsx(
          "absolute inset-0",
          "bg-[linear-gradient(90deg,rgba(8,145,178,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(8,145,178,0.1)_1px,transparent_1px)]",
          "bg-[size:20px_20px]"
        )} />
        
        {/* Quantum Wave */}
        <motion.div
          animate={{ 
            y: ["0%", "100%"],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "absolute inset-0",
            "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]",
            theme === 'dark'
              ? 'from-cyan-500/10 via-cyan-700/5 to-transparent'
              : 'from-cyan-300/10 via-cyan-500/5 to-transparent'
          )}
        />
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