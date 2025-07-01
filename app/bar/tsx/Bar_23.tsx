"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface DataItem {
  label: string;
  segments: {
    value: number;
    color: string;
    label: string;
  }[];
}

interface StackedHorizontalBarChartProps {
  data: DataItem[];
  width?: number;
  height?: number;
  barHeight?: number;
  animationDuration?: number;
  showLegend?: boolean;
  showValues?: boolean;
}

export default function StackedHorizontalBarChart({
  data,
  width = 700,
  height = 400,
  barHeight = 40,
  animationDuration = 0.8,
  showLegend = true,
  showValues = true,
  ...props
}: StackedHorizontalBarChartProps) {
  const [hoveredSegment, setHoveredSegment] = useState<{ row: number; segment: number } | null>(null);
  
  const padding = { top: 20, right: 20, bottom: 20, left: 120 };
  const chartWidth = width - padding.left - padding.right;
  
  // Calculate the maximum total value for scaling
  const maxTotal = Math.max(...data.map(item => 
    item.segments.reduce((sum, segment) => sum + segment.value, 0)
  ));
  
  // Extract unique segment labels for the legend
  const legendItems = data[0]?.segments.map(segment => ({
    label: segment.label,
    color: segment.color
  })) || [];
  
  // Calculate the height based on the number of bars
  const calculatedHeight = Math.max(
    height,
    padding.top + padding.bottom + data.length * (barHeight + 10)
  );
  
  return (
    <div className="relative bg-white" style={{ width, height: calculatedHeight }} {...props}>
      <svg width={width} height={calculatedHeight}>
        {/* Y-axis labels (bar labels) */}
        {data.map((item, rowIndex) => (
          <text
            key={`label-${rowIndex}`}
            x={padding.left - 10}
            y={padding.top + rowIndex * (barHeight + 10) + barHeight / 2}
            textAnchor="end"
            dominantBaseline="middle"
            className="text-sm font-medium fill-gray-700"
          >
            {item.label}
          </text>
        ))}
        
        {/* X-axis */}
        <line
          x1={padding.left}
          y1={calculatedHeight - padding.bottom}
          x2={width - padding.right}
          y2={calculatedHeight - padding.bottom}
          stroke="#e5e7eb"
          strokeWidth="1"
        />
        
        {/* X-axis ticks and labels */}
        {[0, 0.25, 0.5, 0.75, 1].map((tick, i) => {
          const xPos = padding.left + chartWidth * tick;
          return (
            <g key={`tick-${i}`}>
              <line
                x1={xPos}
                y1={calculatedHeight - padding.bottom}
                x2={xPos}
                y2={calculatedHeight - padding.bottom + 5}
                stroke="#e5e7eb"
                strokeWidth="1"
              />
              <text
                x={xPos}
                y={calculatedHeight - padding.bottom + 20}
                textAnchor="middle"
                className="text-xs fill-gray-500"
              >
                {Math.round(maxTotal * tick)}
              </text>
            </g>
          );
        })}
        
        {/* Stacked bars */}
        {data.map((item, rowIndex) => {
          let xOffset = 0;
          
          return (
            <g key={`row-${rowIndex}`}>
              {item.segments.map((segment, segmentIndex) => {
                const segmentWidth = (segment.value / maxTotal) * chartWidth;
                const x = padding.left + xOffset;
                const y = padding.top + rowIndex * (barHeight + 10);
                
                const isHovered = 
                  hoveredSegment?.row === rowIndex && 
                  hoveredSegment?.segment === segmentIndex;
                
                // Update xOffset for the next segment
                xOffset += segmentWidth;
                
                return (
                  <g key={`segment-${rowIndex}-${segmentIndex}`}>
                    <motion.rect
                      x={padding.left}
                      y={y}
                      width={segmentWidth}
                      height={barHeight}
                      fill={segment.color}
                      rx={4}
                      opacity={isHovered ? 1 : 0.85}
                      initial={{ width: 0 }}
                      animate={{ width: segmentWidth }}
                      transition={{ 
                        duration: animationDuration,
                        delay: segmentIndex * 0.1
                      }}
                      onMouseEnter={() => setHoveredSegment({ row: rowIndex, segment: segmentIndex })}
                      onMouseLeave={() => setHoveredSegment(null)}
                      style={{ transformOrigin: 'left' }}
                      transform={`translate(${xOffset - segmentWidth}, 0)`}
                    />
                    
                    {/* Segment value label */}
                    {showValues && segmentWidth > 40 && (
                      <motion.text
                        x={x + segmentWidth / 2}
                        y={y + barHeight / 2}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-xs font-medium fill-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ 
                          duration: 0.3,
                          delay: animationDuration + segmentIndex * 0.1
                        }}
                      >
                        {segment.value}
                      </motion.text>
                    )}
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
      
      {/* Legend */}
      {showLegend && (
        <div className="absolute top-0 right-0 bg-white bg-opacity-90 p-2 rounded-md shadow-sm">
          <div className="text-sm font-medium text-gray-700 mb-1">Legend</div>
          <div className="flex flex-col gap-1">
            {legendItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-sm" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs text-gray-600">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Tooltip */}
      {hoveredSegment && (
        <div
          className="absolute bg-white p-2 rounded shadow-lg text-sm z-10"
          style={{
            left: padding.left + 
              data[hoveredSegment.row].segments
                .slice(0, hoveredSegment.segment)
                .reduce((sum, s) => sum + (s.value / maxTotal) * chartWidth, 0) + 
              (data[hoveredSegment.row].segments[hoveredSegment.segment].value / maxTotal) * chartWidth / 2,
            top: padding.top + hoveredSegment.row * (barHeight + 10) - 30,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="font-medium">
            {data[hoveredSegment.row].segments[hoveredSegment.segment].label}
          </div>
          <div>
            Value: {data[hoveredSegment.row].segments[hoveredSegment.segment].value}
          </div>
        </div>
      )}
    </div>
  );
}

// Example Usage
const exampleData: DataItem[] = [
  {
    label: "Sales",
    segments: [
      { value: 150, color: "#3b82f6", label: "Online" },
      { value: 220, color: "#10b981", label: "In-store" },
      { value: 180, color: "#f59e0b", label: "Mobile" },
    ],
  },
  {
    label: "Profit",
    segments: [
      { value: 50, color: "#3b82f6", label: "Online" },
      { value: 70, color: "#10b981", label: "In-store" },
      { value: 55, color: "#f59e0b", label: "Mobile" },
    ],
  },
];

export function Component() {
  return <StackedHorizontalBarChart data={exampleData} width={700} height={400} />;
} 