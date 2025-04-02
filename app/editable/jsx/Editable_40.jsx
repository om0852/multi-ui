'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const Editable_40 = ({
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
  chartType = 'line',
}) => {
  const [selectedMetric, setSelectedMetric] = useState(metrics[0]);
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [selectedChartType, setSelectedChartType] = useState(chartType);
  const [content] = useState(initialContent);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toFixed(1);
  };

  const getMaxValue = (data) => Math.max(...data.map(d => d.value)) * 1.1;

  const getChartPath = (data, height) => {
    const maxValue = getMaxValue(data);
    const width = 100;
    const points = data.map((d, i) => ({
      x: (i / (data.length - 1)) * width,
      y: (1 - d.value / maxValue) * height,
    }));
    return `M${points.map(p => `${p.x},${p.y}`).join(' L')}`;
  };

  const periods = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' },
  ];

  const chartTypes = [
    { value: 'line', label: 'Line' },
    { value: 'bar', label: 'Bar' },
    { value: 'area', label: 'Area' },
  ];

  const handleSave = () => {
    onSave(content);
  };

  return (
    <motion.div className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        <button onClick={handleSave} className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Save Changes
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {metrics.map(metric => (
          <button key={metric.id} onClick={() => setSelectedMetric(metric)} className={`p-4 rounded-lg border-2 transition-colors ${selectedMetric.id === metric.id ? 'border-blue-500 bg-blue-50' : 'border-gray-100 hover:border-gray-200'}`}>
            <p className="text-sm text-gray-500">{metric.name}</p>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-2xl font-semibold text-gray-900">{formatNumber(metric.value)}</span>
              <span className={`text-sm font-medium ${metric.trend === 'up' ? 'text-green-600' : metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'}`}>{metric.change > 0 ? '+' : ''}{metric.change}%</span>
            </div>
          </button>
        ))}
      </div>
      <div className="p-4">
        <div className="relative h-64">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path d={getChartPath(selectedMetric.data, 100)} className="fill-none stroke-blue-500" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};
