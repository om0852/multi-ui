"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

interface TimelineItemProps {
  title: string;
  description: string;
  date: string;
  customStyles?: string; // Optional custom styles for each timeline item
}

interface TimelineProps {
  data: TimelineItemProps[];
  timelineStyle?: string; // Custom styles for the timeline container
  itemAnimation?: Variants; // Custom animation for timeline items
}

const HorizontalTimeline: React.FC<TimelineProps> = ({
  data,
  timelineStyle = "",
  itemAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  },
}) => {
  return (
    <div className={`container mx-auto px-4 py-8 ${timelineStyle}`}>
      <div className="flex overflow-x-auto gap-8">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center ${item.customStyles || ""}`}
            variants={itemAnimation}
            initial="initial"
            whileInView="whileInView"
          >
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
              {index + 1}
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <span className="text-xs text-gray-400">{item.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalTimeline;
