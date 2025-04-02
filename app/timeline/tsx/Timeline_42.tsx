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
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      className={clsx(
        "relative mb-16 pl-16",
        theme === 'dark' ? 'text-green-100' : 'text-green-900'
      )}
    >
      {/* Timeline Line with Digital Rain Effect */}
      <div className="absolute left-0 top-0 bottom-0 w-1">
        <motion.div
          animate={{ 
            backgroundPosition: ["0% 0%", "0% 100%"]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "absolute inset-0",
            theme === 'dark' ? 'bg-green-500/30' : 'bg-green-400/30',
            "bg-[linear-gradient(0deg,transparent_0%,#00ff00_50%,transparent_100%)]",
            "bg-[length:100%_200%]"
          )}
        />
      </div>

      {/* Node with Matrix Effect */}
      <div className="absolute left-0 top-0">
        <motion.div
          animate={{ 
            boxShadow: [
              "0 0 10px #00ff00, inset 0 0 5px #00ff00",
              "0 0 20px #00ff00, inset 0 0 10px #00ff00",
              "0 0 10px #00ff00, inset 0 0 5px #00ff00"
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className={clsx(
            "w-10 h-10 -translate-x-1/2",
            "flex items-center justify-center rounded-sm",
            theme === 'dark' 
              ? 'bg-green-900/50 text-green-400' 
              : 'bg-green-100 text-green-700',
            "border border-green-500/50"
          )}
        >
          {icon}
        </motion.div>
      </div>

      {/* Content Card with Digital Effect */}
      <div className={clsx(
        "relative p-6 rounded-sm overflow-hidden",
        theme === 'dark' 
          ? 'bg-black/80 border-green-500/30' 
          : 'bg-green-50/80 border-green-300/50',
        "backdrop-blur-sm",
        "border"
      )}>
        {/* Digital Rain Background */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: ["0%", "100%"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 3 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2
              }}
              className={clsx(
                "absolute w-px h-20",
                theme === 'dark' ? 'bg-green-500/20' : 'bg-green-400/20'
              )}
              style={{
                left: `${(i + 1) * 10}%`
              }}
            />
          ))}
        </div>

        {/* Glitch Effect Container */}
        <div className="relative">
          {/* Date Badge */}
          <motion.div
            whileHover={{ 
              textShadow: "0 0 8px #00ff00",
              boxShadow: "0 0 8px #00ff00"
            }}
            className={clsx(
              "inline-block px-4 py-1 mb-3",
              theme === 'dark' 
                ? 'bg-green-900/50 text-green-400' 
                : 'bg-green-100 text-green-700',
              "border border-green-500/30"
            )}
          >
            {date}
          </motion.div>

          {/* Title with Matrix Effect */}
          <motion.h3
            animate={{ 
              textShadow: [
                "0 0 4px #00ff00",
                "0 0 8px #00ff00",
                "0 0 4px #00ff00"
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className={clsx(
              "text-xl font-mono font-bold mb-2",
              theme === 'dark' ? 'text-green-400' : 'text-green-700'
            )}
          >
            {title}
          </motion.h3>

          {/* Category */}
          {category && (
            <div className={clsx(
              "text-sm mb-2 font-mono",
              theme === 'dark' ? 'text-green-500' : 'text-green-600'
            )}>
              {`<${category}>`}
            </div>
          )}

          {/* Description */}
          <p className={clsx(
            "mb-4 font-mono",
            theme === 'dark' ? 'text-green-300' : 'text-green-700'
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
                    textShadow: "0 0 8px #00ff00",
                    boxShadow: "0 0 8px #00ff00"
                  }}
                  className={clsx(
                    "px-3 py-1 text-sm font-mono",
                    theme === 'dark' 
                      ? 'bg-green-900/50 text-green-400' 
                      : 'bg-green-100 text-green-700',
                    "border border-green-500/30"
                  )}
                >
                  {`[${tag}]`}
                </motion.span>
              ))}
            </div>
          )}

          {/* Link */}
          {link && (
            <motion.a
              href={link}
              whileHover={{ 
                textShadow: "0 0 8px #00ff00",
                boxShadow: "0 0 8px #00ff00"
              }}
              className={clsx(
                "inline-flex items-center gap-2 font-mono",
                "px-4 py-1",
                theme === 'dark'
                  ? 'bg-green-900/50 text-green-400'
                  : 'bg-green-100 text-green-700',
                "border border-green-500/30"
              )}
            >
              {"> EXECUTE"}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  ease: "steps(1)"
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
      theme === 'dark' ? 'bg-black' : 'bg-gray-50'
    )}>
      {/* Matrix Background */}
      <div className={clsx(
        "absolute inset-0",
        "bg-[linear-gradient(0deg,rgba(0,255,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.05)_1px,transparent_1px)]",
        "bg-[size:20px_20px]"
      )}>
        {/* Digital Rain */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: ["0%", "100%"],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            className={clsx(
              "absolute w-px",
              theme === 'dark' ? 'bg-green-500/20' : 'bg-green-400/20'
            )}
            style={{
              left: `${Math.random() * 100}%`,
              height: `${50 + Math.random() * 50}%`,
              top: `-${Math.random() * 100}%`
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