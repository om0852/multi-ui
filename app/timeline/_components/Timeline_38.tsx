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
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      className={clsx(
        "relative mb-16 pl-12",
        theme === 'dark' ? 'text-rose-100' : 'text-rose-900'
      )}
    >
      {/* Stained Glass Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1">
        <motion.div
          animate={{ 
            background: [
              "linear-gradient(to bottom, #F43F5E, #E11D48, #BE123C)",
              "linear-gradient(to bottom, #E11D48, #BE123C, #F43F5E)",
              "linear-gradient(to bottom, #BE123C, #F43F5E, #E11D48)"
            ]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={clsx(
            "absolute inset-0",
            "shadow-[0_0_10px_rgba(244,63,94,0.5)]"
          )}
        />

        {/* Glass Segments */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              opacity: [0.5, 0.8, 0.5],
              boxShadow: [
                "0 0 10px rgba(244,63,94,0.3)",
                "0 0 20px rgba(244,63,94,0.5)",
                "0 0 10px rgba(244,63,94,0.3)"
              ]
            }}
            transition={{ 
              duration: 3,
              delay: i * 0.6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={clsx(
              "absolute w-3 h-3 -left-1",
              "bg-gradient-to-br",
              theme === 'dark'
                ? 'from-rose-500/80 to-rose-700/80'
                : 'from-rose-400/80 to-rose-600/80',
              "backdrop-blur-sm"
            )}
            style={{ 
              top: `${i * 25}%`,
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
            }}
          />
        ))}
      </div>

      {/* Glass Node */}
      <div className="absolute left-0 top-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            boxShadow: [
              "0 0 15px rgba(244,63,94,0.4)",
              "0 0 25px rgba(244,63,94,0.6)",
              "0 0 15px rgba(244,63,94,0.4)"
            ]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "w-8 h-8 -translate-x-1/2",
            "rounded-lg",
            "flex items-center justify-center",
            theme === 'dark' 
              ? 'bg-rose-900/80 text-rose-200' 
              : 'bg-rose-100/80 text-rose-700',
            "border-2 border-rose-500/50",
            "backdrop-blur-sm"
          )}
        >
          <div className="relative z-10">{icon}</div>
        </motion.div>
      </div>

      {/* Content Card */}
      <div className={clsx(
        "relative p-6 rounded-lg overflow-hidden",
        theme === 'dark' 
          ? 'bg-rose-900/30 backdrop-blur-md' 
          : 'bg-rose-50/80 backdrop-blur-md',
        "border-2 border-rose-500/20",
        "shadow-[0_0_15px_rgba(244,63,94,0.2)]",
        "group"
      )}>
        {/* Glass Pattern */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                delay: i * 0.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={clsx(
                "absolute w-32 h-32",
                "bg-gradient-to-br",
                theme === 'dark'
                  ? 'from-rose-500/10 to-rose-700/10'
                  : 'from-rose-300/10 to-rose-500/10',
                "backdrop-blur-sm"
              )}
              style={{
                left: `${i * 20}%`,
                top: `${(i % 2) * 50}%`,
                transform: `rotate(${i * 30}deg)`,
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
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
              "inline-block px-4 py-1 mb-3 rounded",
              theme === 'dark' 
                ? 'bg-rose-800/50 text-rose-200' 
                : 'bg-rose-100 text-rose-700',
              "border border-rose-500/30",
              "shadow-[0_0_10px_rgba(244,63,94,0.2)]",
              "backdrop-blur-sm"
            )}
          >
            {date}
          </motion.div>

          {/* Title */}
          <h3 className={clsx(
            "text-xl font-medium mb-2",
            theme === 'dark' ? 'text-rose-200' : 'text-rose-800'
          )}>
            {title}
          </h3>

          {/* Category */}
          {category && (
            <div className={clsx(
              "text-sm mb-2",
              theme === 'dark' ? 'text-rose-300' : 'text-rose-600'
            )}>
              ❖ {category} ❖
            </div>
          )}

          {/* Description */}
          <p className={clsx(
            "mb-4",
            theme === 'dark' ? 'text-rose-300' : 'text-rose-700'
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
                    boxShadow: "0 0 15px rgba(244,63,94,0.4)"
                  }}
                  className={clsx(
                    "px-3 py-1 text-sm rounded",
                    theme === 'dark' 
                      ? 'bg-rose-800/50 text-rose-200' 
                      : 'bg-rose-100 text-rose-700',
                    "border border-rose-500/30",
                    "backdrop-blur-sm"
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
                x: 5,
                textShadow: "0 0 8px rgba(244,63,94,0.6)"
              }}
              className={clsx(
                "inline-flex items-center gap-2",
                theme === 'dark' 
                  ? 'text-rose-300 hover:text-rose-200' 
                  : 'text-rose-600 hover:text-rose-700'
              )}
            >
              View Details
              <motion.span
                animate={{ 
                  rotate: [0, 180, 360],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                ❖
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
  animated = true,
}) => {
  return (
    <div className={clsx(
      "relative max-w-3xl mx-auto p-8",
      theme === 'dark' ? 'bg-rose-950' : 'bg-rose-50'
    )}>
      {/* Glass Background */}
      <div className={clsx(
        "absolute inset-0",
        "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]",
        theme === 'dark'
          ? 'from-rose-900/50 via-rose-950 to-rose-950'
          : 'from-rose-100/50 via-rose-50 to-rose-50'
      )}>
        {/* Glass Panels */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: Math.random() * 4 + 4,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={clsx(
              "absolute w-40 h-40",
              "bg-gradient-to-br",
              theme === 'dark'
                ? 'from-rose-500/10 to-rose-700/10'
                : 'from-rose-300/10 to-rose-500/10',
              "backdrop-blur-sm",
              "border border-rose-500/10"
            )}
            style={{ 
              left: `${(i % 4) * 30}%`,
              top: `${Math.floor(i / 4) * 30}%`,
              transform: `rotate(${i * 30}deg)`,
              clipPath: i % 2 === 0
                ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                : "polygon(0% 0%, 100% 0%, 50% 100%)"
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