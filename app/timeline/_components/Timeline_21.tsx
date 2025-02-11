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
      initial={{ opacity: 0, y: 50, rotateX: -30 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      className={clsx(
        "relative mb-16 last:mb-0 pl-12",
        "perspective-1000",
        theme === 'dark' ? 'text-purple-50' : 'text-purple-900'
      )}
    >
      {/* Star Trail */}
      <div className="absolute left-0 top-0 bottom-0 w-1">
        <motion.div 
          animate={{ 
            background: [
              "linear-gradient(to bottom, #C084FC, #A855F7, #7C3AED)",
              "linear-gradient(to bottom, #A855F7, #7C3AED, #C084FC)",
              "linear-gradient(to bottom, #7C3AED, #C084FC, #A855F7)"
            ]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />

        {/* Floating Stars */}
        <motion.div
          animate={{ 
            y: [0, "100%"],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-x-[-10px] top-0"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2,
                delay: i * 0.4,
                repeat: Infinity
              }}
              className={clsx(
                "absolute w-1 h-1 rounded-full",
                "bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              )}
              style={{ top: `${i * 20}%`, left: i % 2 ? '0' : '100%' }}
            />
          ))}
        </motion.div>
      </div>

      {/* Planet Node */}
      <div className="absolute left-0 top-0 -translate-x-1/2">
        <motion.div
          animate={{ 
            rotate: 360,
            boxShadow: [
              "0 0 20px rgba(192,132,252,0.5)",
              "0 0 30px rgba(168,85,247,0.6)",
              "0 0 20px rgba(124,58,237,0.5)"
            ]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "w-8 h-8 rounded-full",
            "flex items-center justify-center",
            theme === 'dark' 
              ? 'bg-purple-900 text-purple-200' 
              : 'bg-purple-100 text-purple-700',
            "border-2 border-purple-500",
            "relative overflow-hidden"
          )}
        >
          {/* Orbit Ring */}
          <div className={clsx(
            "absolute inset-[-2px]",
            "border-2 border-purple-400/30",
            "rounded-full"
          )} />
          {icon}
        </motion.div>
      </div>

      {/* Content Card */}
      <div className={clsx(
        "relative p-6 rounded-xl overflow-hidden",
        theme === 'dark' 
          ? 'bg-purple-900/30 backdrop-blur-sm' 
          : 'bg-purple-50/80 backdrop-blur-sm',
        "border border-purple-500/20",
        "group"
      )}>
        {/* Nebula Background */}
        <motion.div
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "absolute inset-0",
            "bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))]",
            "from-purple-400/20 via-fuchsia-500/20 to-violet-600/20",
            "group-hover:opacity-20",
            "transition-opacity duration-500"
          )}
        />

        {/* Content */}
        <div className="relative">
          {/* Date */}
          <div className={clsx(
            "inline-block px-4 py-1 mb-3 rounded-full",
            "text-sm font-mono",
            theme === 'dark' 
              ? 'bg-purple-800/50 text-purple-200' 
              : 'bg-purple-100 text-purple-700',
            "border border-purple-500/20"
          )}>
            <motion.span
              animate={{ 
                opacity: [1, 0.6, 1],
                scale: [1, 0.98, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {date}
            </motion.span>
          </div>

          {/* Title */}
          <h3 className={clsx(
            "text-xl font-medium mb-2",
            theme === 'dark' ? 'text-purple-200' : 'text-purple-800'
          )}>
            {title}
          </h3>

          {/* Category */}
          {category && (
            <div className={clsx(
              "text-sm mb-2",
              theme === 'dark' ? 'text-purple-300' : 'text-purple-600'
            )}>
              ⋆ {category} ⋆
            </div>
          )}

          {/* Description */}
          <p className={clsx(
            "mb-4",
            theme === 'dark' ? 'text-purple-300' : 'text-purple-700'
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
                    y: -2,
                    boxShadow: "0 0 15px rgba(192,132,252,0.5)"
                  }}
                  className={clsx(
                    "px-3 py-1 text-sm rounded-full",
                    theme === 'dark' 
                      ? 'bg-purple-800/50 text-purple-200' 
                      : 'bg-purple-100 text-purple-700',
                    "border border-purple-500/20",
                    "transition-shadow duration-300"
                  )}
                >
                  ✧ {tag}
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
                textShadow: "0 0 8px rgba(192,132,252,0.8)"
              }}
              className={clsx(
                "inline-flex items-center gap-2",
                "text-sm",
                theme === 'dark' 
                  ? 'text-purple-300 hover:text-purple-200' 
                  : 'text-purple-600 hover:text-purple-700',
                "transition-all duration-300"
              )}
            >
              Explore More
              <motion.span
                animate={{ 
                  x: [0, 4, 0],
                  y: [0, -2, 0],
                  rotate: [0, 45, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ⋆
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
      theme === 'dark' ? 'bg-purple-950' : 'bg-purple-50'
    )}>
      {/* Space Background */}
      <div className={clsx(
        "absolute inset-0",
        "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]",
        theme === 'dark'
          ? 'from-purple-900/50 via-purple-950 to-purple-950'
          : 'from-purple-100/50 via-purple-50 to-purple-50'
      )}>
        {/* Star Field */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ 
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
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