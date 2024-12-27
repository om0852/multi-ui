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
  lineColor?: string; // Color for the vertical timeline line
}

const VerticalTimeline: React.FC<TimelineProps> = ({
  data,
  timelineStyle = "",
  itemAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
  lineColor = "bg-blue-500",
}) => {
  return (
    <div className={`relative container mx-auto px-4 py-8 ${timelineStyle}`}>
      <div className={`absolute left-1/2 top-0 h-full w-1 ${lineColor} -translate-x-1/2`} />
      <div className="flex flex-col items-center gap-8">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col items-start ${item.customStyles || ""}`}
            variants={itemAnimation}
            initial="initial"
            whileInView="whileInView"
          >
            <div
              className={`absolute top-0 left-1/2 w-6 h-6 rounded-full bg-white border-4 ${lineColor} -translate-x-1/2`}
            />
            <div className="mt-6 ml-6">
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

export default VerticalTimeline;
