'use client'

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'

export const Editable_50 = ({
  initialContent,
  onSave,
  className = '',
  filters = [
    {
      id: 'category',
      type: 'select',
      label: 'Category',
      options: [
        { value: 'all', label: 'All Categories' },
        { value: 'technology', label: 'Technology', count: 145 },
        { value: 'design', label: 'Design', count: 86 },
        { value: 'marketing', label: 'Marketing', count: 64 },
        { value: 'business', label: 'Business', count: 92 },
      ],
    },
    {
      id: 'type',
      type: 'radio',
      label: 'Content Type',
      options: [
        { value: 'all', label: 'All Types' },
        { value: 'article', label: 'Articles', count: 234 },
        { value: 'video', label: 'Videos', count: 56 },
        { value: 'podcast', label: 'Podcasts', count: 32 },
      ],
    },
    {
      id: 'tags',
      type: 'checkbox',
      label: 'Tags',
      options: [
        { value: 'tutorial', label: 'Tutorials', count: 89 },
        { value: 'guide', label: 'Guides', count: 67 },
        { value: 'review', label: 'Reviews', count: 45 },
        { value: 'case-study', label: 'Case Studies', count: 34 },
      ],
    },
    {
      id: 'duration',
      type: 'range',
      label: 'Duration',
      range: {
        min: 0,
        max: 60,
        step: 5,
        unit: 'min',
      },
    },
  ],
  results = [],
}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilters, setSelectedFilters] = useState({})
  const [sortBy, setSortBy] = useState('relevance')
  const [content] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
  }

  const handleFilterChange = (filterId, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterId]: value,
    }))
  }

  const filteredResults = useMemo(() => {
    let filtered = [...results]

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        result =>
          result.title.toLowerCase().includes(query) ||
          result.description.toLowerCase().includes(query) ||
          result.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    Object.entries(selectedFilters).forEach(([filterId, value]) => {
      if (!value || (Array.isArray(value) && value.length === 0)) return

      const filter = filters.find(f => f.id === filterId)
      if (!filter) return

      switch (filter.type) {
        case 'select':
        case 'radio':
          if (value !== 'all') {
            filtered = filtered.filter(result => result.category === value)
          }
          break
        case 'checkbox':
          if (Array.isArray(value) && value.length > 0) {
            filtered = filtered.filter(result =>
              result.tags.some(tag => value.includes(tag))
            )
          }
          break
        case 'range':
          if (Array.isArray(value) && value.length === 2) {
            const [min, max] = value
            filtered = filtered.filter(
              result => result.metadata.duration >= min && result.metadata.duration <= max
            )
          }
          break
      }
    })

    switch (sortBy) {
      case 'relevance':
        filtered.sort((a, b) => b.relevanceScore - a.relevanceScore)
        break
      case 'date':
        filtered.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        break
      case 'rating':
        filtered.sort((a, b) => b.metadata.rating - a.metadata.rating)
        break
    }

    return filtered
  }, [results, searchQuery, selectedFilters, sortBy])

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 border-b border-gray-100">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="p-4">
        {filteredResults.map(result => (
          <div key={result.id} className="mb-4 p-3 border rounded-lg">
            <h3 className="text-lg font-medium">{result.title}</h3>
            <p className="text-sm text-gray-600">{result.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
