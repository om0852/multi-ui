"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface DataPoint {
  x: number | string;
  y: number;
}

interface LineGraphProps {
  data: DataPoint[];
  width?: number;
  height?: number;
  lineColor?: string;
  dotColor?: string;
  backgroundColor?: string;
}

export default function LineGraphAlt({
  data,
  width = 600,
  height = 400,
  lineColor = "#10B981",
  dotColor = "#059669",
  backgroundColor = "#F0FDF4",
}: LineGraphProps) {
  const [pathLength, setPathLength] = useState(0);
  const padding = 50;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const xValues = data.map((d) => d.x);
  const yValues = data.map((d) => d.y);

  const xScale = (x: number | string) => {
    const index = xValues.indexOf(x);
    return (index / (xValues.length - 1)) * chartWidth + padding;
  };

  const yScale = (y: number) => {
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);
    return chartHeight - ((y - minY) / (maxY - minY)) * chartHeight + padding;
  };

  const points = data.map((d) => `${xScale(d.x)},${yScale(d.y)}`).join(" ");

  useEffect(() => {
    const path = document.querySelector(".line-path-alt") as SVGPathElement;
    if (path) {
      setPathLength(path.getTotalLength());
    }
  }, [data]);

  return (
    <div className="relative" style={{ width, height, backgroundColor }}>
      <svg width={width} height={height}>
        {/* Y-axis */}
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          stroke="#D1FAE5"
          strokeWidth="1"
        />
        {/* X-axis */}
        <line
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          stroke="#D1FAE5"
          strokeWidth="1"
        />

        {/* Dashed Data line */}
        <motion.path
          d={`M ${points}`}
          fill="none"
          stroke={lineColor}
          strokeWidth="3"
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength}
          className="line-path-alt"
          initial={{ strokeDashoffset: pathLength }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />

        {/* Data points with pulsing animation */}
        {data.map((d, i) => (
          <motion.circle
            key={i}
            cx={xScale(d.x)}
            cy={yScale(d.y)}
            r="6"
            fill={dotColor}
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.4, 1] }}
            transition={{
              duration: 1,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        ))}

        {/* X-axis labels with slide-in animation */}
        {data.map((d, i) => (
          <motion.text
            key={i}
            x={xScale(d.x)}
            y={height - padding + 25}
            textAnchor="middle"
            className="text-xs fill-gray-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            {d.x}
          </motion.text>
        ))}

        {/* Y-axis labels with fade-in animation */}
        {yValues
          .filter((_, i) => i % 2 === 0)
          .map((y, i) => (
            <motion.text
              key={i}
              x={padding - 15}
              y={yScale(y)}
              textAnchor="end"
              dominantBaseline="middle"
              className="text-xs fill-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              {y}
            </motion.text>
          ))}
      </svg>
    </div>
  );
}
