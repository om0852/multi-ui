'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'

interface HistogramProps {
  data: number[]
  bins?: number
  width?: number
  height?: number
  barColor?: string
  hoverColor?: string
  showTooltip?: boolean
  animationDuration?: number
}

export default function Histogram({
  data,
  bins = 10,
  width = 600,
  height = 400,
  barColor = '#3B82F6',
  hoverColor = '#2563EB',
  showTooltip = true,
  animationDuration = 0.5,
  ...props
}: HistogramProps) {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null)

  const padding = 40
  const chartWidth = width - padding * 2
  const chartHeight = height - padding * 2

  const histogramData = useMemo(() => {
    const min = Math.min(...data)
    const max = Math.max(...data)
    const range = max - min
    const binWidth = range / bins

    const histogram = Array(bins).fill(0)
    data.forEach(value => {
      const binIndex = Math.floor((value - min) / binWidth)
      if (binIndex < bins) {
        histogram[binIndex]++
      }
    })

    return {
      bins: histogram,
      binWidth,
      min,
      max
    }
  }, [data, bins])

  const maxCount = Math.max(...histogramData.bins)
  const barWidth = chartWidth / bins

  const yScale = (count: number) => (count / maxCount) * chartHeight

  return (
    <div className="relative bg-white" style={{ width, height }} {...props}>
      <svg width={width} height={height}>
        {/* Y-axis */}
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#E5E7EB" />
        {/* X-axis */}
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#E5E7EB" />

        {/* Bars */}
        {histogramData.bins.map((count, i) => (
          <motion.rect
            key={i}
            x={padding + i * barWidth}
            y={height - padding - yScale(count)-200} // Bars now start at the X-axis
            width={barWidth - 2} // Add spacing between bars
            height={100} // Correct height calculation
            fill={hoveredBar === i ? hoverColor : barColor}
            initial={{ height: 0, y: height - padding }}
            animate={{ height: yScale(count), y: height - padding - yScale(count) }}
            transition={{ duration: animationDuration }}
            onMouseEnter={() => setHoveredBar(i)}
            onMouseLeave={() => setHoveredBar(null)}
          />
        ))}

        {/* X-axis labels */}
        {Array.from({ length: bins + 1 }).map((_, i) => (
          <text
            key={i}
            x={padding + i * barWidth}
            y={height - padding + 20}
            textAnchor={i === bins ? 'end' : 'middle'}
            className="text-xs fill-gray-500"
          >
            {Math.round(histogramData.min + i * histogramData.binWidth)}
          </text>
        ))}

        {/* Y-axis labels */}
        {[0, 0.25, 0.5, 0.75, 1].map((tick, i) => (
          <text
            key={i}
            x={padding - 10}
            y={height - padding - tick * chartHeight}
            textAnchor="end"
            dominantBaseline="middle"
            className="text-xs fill-gray-500"
          >
            {Math.round(maxCount * tick)}
          </text>
        ))}
      </svg>

      {/* Tooltip */}
      {showTooltip && hoveredBar !== null && (
        <div
          className="absolute bg-white p-2 rounded shadow-lg text-sm"
          style={{
            left: padding + hoveredBar * barWidth + barWidth / 2,
            top: height - padding - yScale(histogramData.bins[hoveredBar]) - 40,
            transform: 'translateX(-50%)'
          }}
        >
          <strong>Range:</strong> {Math.round(histogramData.min + hoveredBar * histogramData.binWidth)} -{' '}
          {Math.round(histogramData.min + (hoveredBar + 1) * histogramData.binWidth)}
          <br />
          <strong>Count:</strong> {histogramData.bins[hoveredBar]}
        </div>
      )}
    </div>
  )
}
