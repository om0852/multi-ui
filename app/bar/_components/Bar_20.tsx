'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface DataPoint {
  x: number | string
  y: number
}

interface LineGraphProps {
  data: DataPoint[]
  width?: number
  height?: number
  lineColor?: string
  dotColor?: string
  backgroundColor?: string
}

export default function LineGraphDesign4({
  data,
  width = 600,
  height = 400,
  lineColor = '#6366F1',
  dotColor = '#4F46E5',
  backgroundColor = '#EEF2FF'
}: LineGraphProps) {
  const padding = 50
  const chartWidth = width - padding * 2
  const chartHeight = height - padding * 2

  const xValues = data.map(d => d.x)
  const yValues = data.map(d => d.y)

  const xScale = (x: number | string) => {
    const index = xValues.indexOf(x)
    return (index / (xValues.length - 1)) * chartWidth + padding
  }

  const yScale = (y: number) => {
    const minY = Math.min(...yValues)
    const maxY = Math.max(...yValues)
    return chartHeight - ((y - minY) / (maxY - minY)) * chartHeight + padding
  }

  const points = data.map(d => `${xScale(d.x)},${yScale(d.y)}`).join(' ')

  useEffect(() => {
    const path = document.querySelector('.line-path-design4') as SVGPathElement
    if (path) {
      path.style.strokeDasharray = `${path.getTotalLength()} ${path.getTotalLength()}`
    }
  }, [data])

  return (
    <div className="relative" style={{ width, height, backgroundColor }}>
      <svg width={width} height={height}>
        {/* Background grid */}
        {Array.from({ length: 5 }).map((_, i) => (
          <line
            key={i}
            x1={padding}
            y1={padding + (chartHeight / 4) * i}
            x2={width - padding}
            y2={padding + (chartHeight / 4) * i}
            stroke="#E0E7FF"
            strokeWidth="0.5"
          />
        ))}

        {/* X-axis */}
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#CBD5E1" strokeWidth="1" />

        {/* Y-axis */}
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#CBD5E1" strokeWidth="1" />

        {/* Data line with gradient stroke */}
        <motion.path
          d={`M ${points}`}
          fill="none"
          stroke={lineColor}
          strokeWidth="3"
          className="line-path-design4"
          initial={{ strokeDashoffset: chartWidth }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />

        {/* Animated Data points */}
        {data.map((d, i) => (
          <motion.circle
            key={i}
            cx={xScale(d.x)}
            cy={yScale(d.y)}
            r="5"
            fill={dotColor}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.4 }}
          />
        ))}

        {/* X-axis labels with staggered fade-in */}
        {data.map((d, i) => (
          <motion.text
            key={i}
            x={xScale(d.x)}
            y={height - padding + 20}
            textAnchor="middle"
            className="text-sm fill-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            {d.x}
          </motion.text>
        ))}

        {/* Y-axis labels */}
        {yValues.filter((_, i) => i % 2 === 0).map((y, i) => (
          <motion.text
            key={i}
            x={padding - 15}
            y={yScale(y)}
            textAnchor="end"
            dominantBaseline="middle"
            className="text-sm fill-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            {y}
          </motion.text>
        ))}
      </svg>
    </div>
  )
}
