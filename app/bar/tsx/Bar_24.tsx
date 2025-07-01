"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface ProgressItem {
    label: string;
  value: number;
    color: string;
  icon?: React.ReactNode;
}

interface CircularProgressChartProps {
  data: ProgressItem[];
  width?: number;
  height?: number;
  thickness?: number;
  animationDuration?: number;
  showLabels?: boolean;
  showValues?: boolean;
  maxValue?: number;
}

export default function CircularProgressChart({
  data,
  width = 600,
  height = 400,
  thickness = 20,
  animationDuration = 1.5,
  showLabels = true,
  showValues = true,
  maxValue = 100,
  ...props
}: CircularProgressChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(centerX, centerY) - thickness / 2 - 20;
  
  // Calculate the circumference of the circle
  
  // Calculate the spacing between arcs
  const arcSpacing = 10; // degrees
  const arcAngle = (360 - data.length * arcSpacing) / data.length;

  return (
    <div className="relative bg-white" style={{ width, height }} {...props}>
      <svg width={width} height={height}>
        {data.map((item, index) => {
          // Calculate the start and end angles for this arc
          const startAngle = index * (arcAngle + arcSpacing);
          const endAngle = startAngle + arcAngle;
          
          // Convert to radians
          const startRad = (startAngle - 90) * (Math.PI / 180);
          const endRad = (endAngle - 90) * (Math.PI / 180);
          
          // Calculate the SVG arc path
          const x1 = centerX + radius * Math.cos(startRad);
          const y1 = centerY + radius * Math.sin(startRad);
          const x2 = centerX + radius * Math.cos(endRad);
          const y2 = centerY + radius * Math.sin(endRad);
          
          // Determine if the arc is more than 180 degrees
          const largeArcFlag = arcAngle > 180 ? 1 : 0;
          
          // Calculate the progress percentage
          const progress = Math.min(item.value / maxValue, 1);
          
          // Calculate the progress end angle
          const progressEndAngle = startAngle + arcAngle * progress;
          const progressEndRad = (progressEndAngle - 90) * (Math.PI / 180);
          
          // Calculate the progress arc path
          const px2 = centerX + radius * Math.cos(progressEndRad);
          const py2 = centerY + radius * Math.sin(progressEndRad);
          
          // Determine if the progress arc is more than 180 degrees
          const progressLargeArcFlag = arcAngle * progress > 180 ? 1 : 0;
          
          const isHovered = hoveredIndex === index;
          
          return (
            <g key={index}>
              {/* Background arc */}
              <path
                d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth={thickness}
                strokeLinecap="round"
              />
              
              {/* Progress arc with animation */}
              <motion.path
                d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${progressLargeArcFlag} 1 ${px2} ${py2}`}
                fill="none"
                stroke={item.color}
                strokeWidth={isHovered ? thickness + 4 : thickness}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: progress }}
                transition={{ duration: animationDuration, ease: "easeOut" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
              
              {/* Label */}
              {showLabels && (
                <g>
                  {/* Calculate position for the label */}
                  {(() => {
                    const midAngle = (startAngle + endAngle) / 2;
                    const midRad = (midAngle - 90) * (Math.PI / 180);
                    const labelRadius = radius + thickness / 2 + 20;
                    const labelX = centerX + labelRadius * Math.cos(midRad);
                    const labelY = centerY + labelRadius * Math.sin(midRad);
                    
                    return (
                      <motion.text
                        x={labelX}
                        y={labelY}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className={`text-sm ${isHovered ? 'font-semibold' : 'font-normal'} fill-gray-700`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + animationDuration / 2 }}
                      >
                        {item.label}
                      </motion.text>
                    );
                  })()}
                </g>
              )}
              
              {/* Value */}
              {showValues && (
                <g>
                  {/* Calculate position for the value */}
                  {(() => {
                    const midAngle = (startAngle + progressEndAngle) / 2;
                    const midRad = (midAngle - 90) * (Math.PI / 180);
                    const valueRadius = radius - thickness / 2 - 15;
                    const valueX = centerX + valueRadius * Math.cos(midRad);
                    const valueY = centerY + valueRadius * Math.sin(midRad);
                    
                    return (
                      <motion.text
                        x={valueX}
                        y={valueY}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className={`text-xs ${isHovered ? 'font-semibold' : 'font-normal'} fill-gray-600`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered || progress > 0.1 ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.value}%
                      </motion.text>
                    );
                  })()}
                </g>
              )}
            </g>
          );
        })}

        {/* Center text */}
          <text
          x={centerX}
          y={centerY}
            textAnchor="middle"
          dominantBaseline="middle"
          className="text-lg font-semibold fill-gray-700"
        >
          {hoveredIndex !== null ? `${data[hoveredIndex].value}%` : 'Progress'}
                    </text>
      </svg>
    </div>
  );
}

// Example Usage
const exampleData = [
  { label: "Views", value: 1200, color: "#0f172a" },
  { label: "Likes", value: 800, color: "#f472b6" },
];

export function Component() {
  return <CircularProgressChart data={exampleData} />;
} 