"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

interface TimelineItemProps {
  title: string;
  description: string;
  date: string;
  customStyles?: string; // Custom styles for each item
}

interface TimelineProps {
  data: TimelineItemProps[];
  timelineStyle?: string; // Custom styles for the timeline container
  lineColor?: string; // Color for the vertical timeline line
  itemAnimation?: Variants; // Custom animation for timeline items
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  description,
  date,
  customStyles = "",
}) => {
  return (
    <motion.div
      className={`relative flex items-center justify-start gap-4 mb-10 ${customStyles}`}
    >
      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
      <div className="absolute top-0 left-1 w-0.5 h-full bg-blue-500"></div>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <span className="text-xs text-gray-400">{date}</span>
      </div>
    </motion.div>
  );
};

const Timeline: React.FC<TimelineProps> = ({
  data,
  timelineStyle = "",
  lineColor = "bg-gray-300",
  itemAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
}) => {
  return (
    <div className={`container mx-auto px-4 py-8 ${timelineStyle}`}>
      <h2 className="text-2xl font-bold mb-6">My Timeline</h2>
      <div className="relative">
        <div
          className={`absolute top-0 left-1 w-0.5 ${lineColor} h-full`}
        ></div>
        {data.map((item, index) => (
          <motion.div
            key={index}
            variants={itemAnimation}
            initial="initial"
            whileInView="whileInView"
          >
            <TimelineItem {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
