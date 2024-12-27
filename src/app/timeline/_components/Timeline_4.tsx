"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

interface TimelineItemProps {
  title: string;
  description: string;
  date: string;
}

interface TimelineProps {
  data: TimelineItemProps[];
  timelineStyle?: string;
}

const CardTimeline: React.FC<TimelineProps> = ({ data, timelineStyle = "" }) => {
  return (
    <div className={`container mx-auto px-4 py-8 ${timelineStyle}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          >
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            <span className="text-xs text-gray-400 mt-1">{item.date}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardTimeline;
