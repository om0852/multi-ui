"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface RadialProgressRing {
  label: string;
  value: number;
  maxValue?: number;
  color?: string;
  thickness?: number;
}

interface RadialProgressChartProps {
  data: RadialProgressRing[];
  width?: number;
  height?: number;
  innerRadius?: number;
  gap?: number;
  animationDuration?: number;
  showLabels?: boolean;
  colorPalette?: string[];
  gradientOffset?: number;
}

export default function RadialProgressChart({
  data,
  width = 400,
  height = 400,
  innerRadius = 60,
  gap = 4,
  animationDuration = 1.2,
  showLabels = true,
  colorPalette = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#6366F1'],
  gradientOffset = 0.2
}: RadialProgressChartProps) {
  const [hoveredRing, setHoveredRing] = useState<number | null>(null);
  
  const center = { x: width / 2, y: height / 2 };
  const maxRadius = Math.min(width, height) / 2 - 40;
  
  // Calculate dimensions for each ring
  const rings = data.map((ring, index) => {
    const thickness = ring.thickness || (maxRadius - innerRadius - (data.length - 1) * gap) / data.length;
    const radius = innerRadius + index * (thickness + gap);
    const color = ring.color || colorPalette[index % colorPalette.length];
    const maxValue = ring.maxValue || 100;
    const percentage = (ring.value / maxValue) * 100;
    
    // Calculate path for the ring
    const circumference = 2 * Math.PI * radius;
    const dashArray = `${(percentage * circumference) / 100} ${circumference}`;
    
    // Create gradient IDs
    const gradientId = `gradient-${index}`;
    const gradientIdHover = `gradient-hover-${index}`;
    
    return {
      ...ring,
      radius,
      thickness,
      color,
      maxValue,
      percentage,
      circumference,
      dashArray,
      gradientId,
      gradientIdHover
    };
  });
  
  return (
    <div className="relative" style={{ width, height }}>
      <svg width={width} height={height}>
        {/* Gradients */}
        <defs>
          {rings.map((ring, index) => (
            <g key={`gradients-${index}`}>
              <linearGradient
                id={ring.gradientId}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: ring.color, stopOpacity: 0.7 }}
                />
                <stop
                  offset={`${100 - gradientOffset * 100}%`}
                  style={{ stopColor: ring.color, stopOpacity: 0.9 }}
                />
              </linearGradient>
              <linearGradient
                id={ring.gradientIdHover}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: ring.color, stopOpacity: 0.8 }}
                />
                <stop
                  offset={`${100 - gradientOffset * 100}%`}
                  style={{ stopColor: ring.color, stopOpacity: 1 }}
                />
              </linearGradient>
            </g>
          ))}
        </defs>
        
        {/* Background rings */}
        {rings.map((ring, index) => (
          <circle
            key={`bg-${index}`}
            cx={center.x}
            cy={center.y}
            r={ring.radius}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth={ring.thickness}
            opacity={0.2}
          />
        ))}
        
        {/* Progress rings */}
        {rings.map((ring, index) => {
          const isHovered = hoveredRing === index;
          
          return (
            <g key={`progress-${index}`}>
              <motion.circle
                cx={center.x}
                cy={center.y}
                r={ring.radius}
                fill="none"
                stroke={`url(#${isHovered ? ring.gradientIdHover : ring.gradientId})`}
                strokeWidth={ring.thickness}
                strokeDasharray={ring.dashArray}
                strokeDashoffset={ring.circumference * 0.25}
                transform={`rotate(-90 ${center.x} ${center.y})`}
                strokeLinecap="round"
                initial={{ strokeDasharray: `0 ${ring.circumference}` }}
                animate={{ strokeDasharray: ring.dashArray }}
                transition={{ 
                  duration: animationDuration,
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 60
                }}
                onMouseEnter={() => setHoveredRing(index)}
                onMouseLeave={() => setHoveredRing(null)}
              />
              
              {/* Label */}
              {showLabels && (
                <g transform={`translate(${center.x}, ${center.y})`}>
                  <motion.text
                    y={-ring.radius}
                    textAnchor="middle"
                    className={`text-sm ${isHovered ? 'font-semibold' : 'font-normal'} fill-gray-700`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: animationDuration + index * 0.1 }}
                  >
                    {ring.label}
                  </motion.text>
                  <motion.text
                    y={-ring.radius + 20}
                    textAnchor="middle"
                    className={`text-sm ${isHovered ? 'font-semibold' : 'font-normal'} fill-gray-900`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: animationDuration + index * 0.1 }}
                  >
                    {ring.percentage.toFixed(1)}%
                  </motion.text>
                </g>
              )}
            </g>
          );
        })}
        
        {/* Center text */}
        <g transform={`translate(${center.x}, ${center.y})`}>
          <text
            textAnchor="middle"
            className="text-lg font-semibold fill-gray-900"
          >
            Progress
          </text>
          <text
            y={25}
            textAnchor="middle"
            className="text-sm fill-gray-500"
          >
            {rings.length} metrics
          </text>
        </g>
      </svg>
      
      {/* Tooltip */}
      {hoveredRing !== null && (
        <div
          className="absolute bg-white p-3 rounded shadow-lg text-sm z-10"
          style={{
            left: center.x,
            top: center.y - rings[hoveredRing].radius,
            transform: 'translate(-50%, -100%)'
          }}
        >
          <div className="font-medium">{rings[hoveredRing].label}</div>
          <div>Value: {rings[hoveredRing].value.toLocaleString()}</div>
          <div>Target: {rings[hoveredRing].maxValue?.toLocaleString()}</div>
          <div>Progress: {rings[hoveredRing].percentage.toFixed(1)}%</div>
        </div>
      )}
    </div>
  );
}

// Example Usage
const exampleData = [
  { label: "Sales", value: 100 },
  { label: "Profit", value: 80 },
  { label: "Customers", value: 90 },
  { label: "Inventory", value: 70 },
  { label: "Marketing", value: 60 },
  { label: "Revenue", value: 120 },
];

export function Component() {
  return <RadialProgressChart data={exampleData} />;
} 