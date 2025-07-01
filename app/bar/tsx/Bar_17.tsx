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
}

export default function LineGraph({
  data,
  width = 600,
  height = 400,
  lineColor = "#3B82F6",
  dotColor = "#2563EB",
  ...props
}: LineGraphProps) {
  const [pathLength, setPathLength] = useState(0);
  const padding = 40;
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
    const path = document.querySelector(".line-path") as SVGPathElement;
    if (path) {
      setPathLength(path.getTotalLength());
    }
  }, [data]);

  return (
    <div className="relative" style={{ width, height }} {...props}>
      <svg width={width} height={height}>
        {/* Y-axis */}
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          stroke="#E5E7EB"
        />
        {/* X-axis */}
        <line
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          stroke="#E5E7EB"
        />

        {/* Data line */}
        <motion.path
          d={`M ${points}`}
          fill="none"
          stroke={lineColor}
          strokeWidth="2"
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength}
          className="line-path"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Data points */}
        {data.map((d, i) => (
          <motion.circle
            key={i}
            cx={xScale(d.x)}
            cy={yScale(d.y)}
            r="4"
            fill={dotColor}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
          />
        ))}

        {/* X-axis labels */}
        {data.map((d, i) => (
          <text
            key={i}
            x={xScale(d.x)}
            y={height - padding + 20}
            textAnchor="middle"
            className="text-xs fill-gray-500"
          >
            {d.x}
          </text>
        ))}

        {/* Y-axis labels */}
        {yValues
          .filter((_, i) => i % 2 === 0)
          .map((y, i) => (
            <text
              key={i}
              x={padding - 10}
              y={yScale(y)}
              textAnchor="end"
              dominantBaseline="middle"
              className="text-xs fill-gray-500"
            >
              {y}
            </text>
          ))}
      </svg>
    </div>
  );
}
