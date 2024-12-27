"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

interface TimelineItemProps {
  title: string;
  description: string;
  date: string;
  customStyles?: string;
}

interface TimelineProps {
  data: TimelineItemProps[];
  timelineStyle?: string;
  itemAnimation?: Variants;
}

const FadeInTimeline: React.FC<TimelineProps> = ({
  data,
  timelineStyle = "",
  itemAnimation = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { duration: 0.8 } },
  },
}) => {
  return (
    <div className={`container mx-auto px-4 py-8 ${timelineStyle}`}>
      <div className="flex flex-col gap-8">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className={`p-4 border-l-4 border-blue-500 bg-white shadow-sm ${item.customStyles || ""}`}
            variants={itemAnimation}
            initial="initial"
            whileInView="whileInView"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <span className="text-xs text-gray-400">{item.date}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FadeInTimeline;
