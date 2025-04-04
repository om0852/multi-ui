"use client";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const Timeline = ({
  data,
  theme = 'light',
  layout = 'alternate'
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={clsx(
        "max-w-2xl mx-auto px-4 py-16",
        theme === 'dark' ? "bg-gray-900" : "bg-white"
      )}
    >
      <div className="relative">
        {data.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            index={index}
            theme={theme}
            layout={layout}
          />
        ))}
      </div>
    </motion.div>
  );
};

const TimelineItem = ({
  title,
  description,
  date,
  icon,
  tags,
  link,
  index,
  theme,
  layout
}) => {
  const isLeft = layout === 'left' || (layout === 'alternate' && index % 2 === 0);
  const paddingClass = isLeft ? "pl-8" : "pr-8";
  const dotPosition = isLeft ? "left-0" : "right-0";
  const linePosition = isLeft ? "left-0" : "right-0";
  const translateDot = isLeft ? "-translate-x-[6px]" : "translate-x-[6px]";
  const translateLine = isLeft ? "-translate-x-[1px]" : "translate-x-[1px]";

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 20
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            ease: "easeOut"
          }
        }
      }}
      className={clsx(
        "relative pb-12 last:pb-0",
        paddingClass,
        theme === 'dark' ? "text-white" : "text-gray-800"
      )}
    >
      {/* Dot with Icon */}
      <div className={clsx(
        "absolute w-6 h-6 rounded-full flex items-center justify-center",
        dotPosition,
        theme === 'dark' ? "bg-indigo-500 text-white" : "bg-indigo-600 text-white",
        translateDot
      )}>
        {icon && <span className="text-xs">{icon}</span>}
      </div>

      {/* Vertical Line */}
      <div className={clsx(
        "absolute top-3 w-px h-[calc(100%-12px)]",
        linePosition,
        theme === 'dark' ? "bg-gray-700" : "bg-gray-200",
        translateLine
      )} />

      {/* Content */}
      <div className={clsx(
        "p-4 rounded-lg",
        theme === 'dark' ? "bg-gray-800" : "bg-gray-50"
      )}>
        {/* Date */}
        <div className={clsx(
          "text-sm font-medium mb-1",
          theme === 'dark' ? "text-indigo-300" : "text-indigo-600"
        )}>
          {date}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold mb-2">{title}</h3>

        {/* Description */}
        <p className={clsx(
          "text-sm mb-3",
          theme === 'dark' ? "text-gray-400" : "text-gray-600"
        )}>
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, i) => (
              <span
                key={i}
                className={clsx(
                  "inline-block text-xs px-2 py-1 rounded-full",
                  theme === 'dark' 
                    ? "bg-gray-700 text-gray-300" 
                    : "bg-gray-200 text-gray-700"
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Link */}
        {link && (
          <a
            href={link}
            className={clsx(
              "inline-block text-sm font-medium",
              theme === 'dark' 
                ? "text-indigo-300 hover:text-indigo-200" 
                : "text-indigo-600 hover:text-indigo-700"
            )}
          >
            Learn more →
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default Timeline; 