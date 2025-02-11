'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface DataPoint {
  date: string
  value: number
}

interface Metric {
  id: string
  name: string
  value: number
  change: number
  trend: 'up' | 'down' | 'neutral'
  data: DataPoint[]
}

interface Editable_40Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  title?: string
  metrics?: Metric[]
  period?: '7d' | '30d' | '90d' | '1y'
  chartType?: 'line' | 'bar' | 'area'
}

export const Editable_40: React.FC<Editable_40Props> = ({
  initialContent,
  onSave,
  className = '',
  title = 'Analytics Overview',
  metrics = [
    {
      id: '1',
      name: 'Total Views',
      value: 128756,
      change: 12.5,
      trend: 'up',
      data: Array.from({ length: 30 }, (_, i) => ({
        date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        value: Math.floor(Math.random() * 5000) + 3000,
      })),
    },
    {
      id: '2',
      name: 'Engagement Rate',
      value: 64.2,
      change: -2.3,
      trend: 'down',
      data: Array.from({ length: 30 }, (_, i) => ({
        date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        value: Math.floor(Math.random() * 20) + 50,
      })),
    },
    {
      id: '3',
      name: 'Conversion Rate',
      value: 3.8,
      change: 0.5,
      trend: 'up',
      data: Array.from({ length: 30 }, (_, i) => ({
        date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        value: Math.floor(Math.random() * 2) + 2,
      })),
    },
  ],
  period = '30d',
  chartType = 'line',
}) => {
  const [selectedMetric, setSelectedMetric] = useState<Metric>(metrics[0])
  const [selectedPeriod, setSelectedPeriod] = useState(period)
  const [selectedChartType, setSelectedChartType] = useState(chartType)
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toFixed(1)
  }

  const getMaxValue = (data: DataPoint[]) => {
    return Math.max(...data.map(d => d.value)) * 1.1
  }

  const getChartPath = (data: DataPoint[], height: number) => {
    const maxValue = getMaxValue(data)
    const width = 100 // percentage
    const points = data.map((d, i) => ({
      x: (i / (data.length - 1)) * width,
      y: (1 - d.value / maxValue) * height,
    }))

    if (selectedChartType === 'area') {
      return `M${points.map(p => `${p.x},${p.y}`).join(' L')} L${width},${height} L0,${height} Z`
    }

    return `M${points.map(p => `${p.x},${p.y}`).join(' L')}`
  }

  const periods = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' },
  ]

  const chartTypes = [
    { value: 'line', label: 'Line' },
    { value: 'bar', label: 'Bar' },
    { value: 'area', label: 'Area' },
  ]

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Card header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">{title}</h2>
          <div className="flex items-center space-x-2">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value as typeof period)}
              className="px-3 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {periods.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
            <select
              value={selectedChartType}
              onChange={(e) => setSelectedChartType(e.target.value as typeof chartType)}
              className="px-3 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {chartTypes.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-3 gap-4 p-4">
        {metrics.map((metric) => (
          <button
            key={metric.id}
            onClick={() => setSelectedMetric(metric)}
            className={`p-4 rounded-lg border-2 transition-colors ${
              selectedMetric.id === metric.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-100 hover:border-gray-200'
            }`}
          >
            <p className="text-sm text-gray-500">{metric.name}</p>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-2xl font-semibold text-gray-900">
                {formatNumber(metric.value)}
              </span>
              <span
                className={`text-sm font-medium ${
                  metric.trend === 'up'
                    ? 'text-green-600'
                    : metric.trend === 'down'
                    ? 'text-red-600'
                    : 'text-gray-600'
                }`}
              >
                {metric.change > 0 ? '+' : ''}
                {metric.change}%
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="p-4">
        <div className="relative h-64">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {selectedChartType === 'bar' ? (
              selectedMetric.data.map((d, i) => {
                const maxValue = getMaxValue(selectedMetric.data)
                const barWidth = 100 / selectedMetric.data.length * 0.8
                const barSpacing = 100 / selectedMetric.data.length
                const barHeight = (d.value / maxValue) * 100
                return (
                  <motion.rect
                    key={i}
                    x={i * barSpacing}
                    y={100 - barHeight}
                    width={barWidth}
                    height={barHeight}
                    className="fill-blue-500"
                    initial={{ height: 0, y: 100 }}
                    animate={{ height: barHeight, y: 100 - barHeight }}
                    transition={{ duration: 0.5, delay: i * 0.02 }}
                  />
                )
              })
            ) : (
              <motion.path
                d={getChartPath(selectedMetric.data, 100)}
                className={`${
                  selectedChartType === 'area'
                    ? 'fill-blue-100 stroke-blue-500'
                    : 'fill-none stroke-blue-500'
                }`}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              />
            )}
          </svg>
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
            <span>{formatNumber(getMaxValue(selectedMetric.data))}</span>
            <span>0</span>
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{selectedMetric.data[0].date}</span>
          <span>{selectedMetric.data[selectedMetric.data.length - 1].date}</span>
        </div>
      </div>
    </motion.div>
  )
} 