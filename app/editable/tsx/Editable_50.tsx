'use client'

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'

interface SearchFilter {
  id: string
  type: 'select' | 'radio' | 'checkbox' | 'range'
  label: string
  options?: {
    value: string
    label: string
    count?: number
  }[]
  range?: {
    min: number
    max: number
    step: number
    unit?: string
  }
}

interface SearchResult {
  id: string
  title: string
  description: string
  category: string
  tags: string[]
  image?: string
  metadata: {
    [key: string]: string | number
  }
  relevanceScore: number
  timestamp: string
}

interface Editable_50Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  filters?: SearchFilter[]
  results?: SearchResult[]
}

export const Editable_50: React.FC<Editable_50Props> = ({
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
  results = [
    {
      id: '1',
      title: 'Getting Started with React and TypeScript',
      description: 'Learn how to set up a new React project with TypeScript and build your first component.',
      category: 'technology',
      tags: ['tutorial', 'guide'],
      image: 'https://picsum.photos/400/225?random=1',
      metadata: {
        duration: 15,
        views: 1234,
        rating: 4.8,
      },
      relevanceScore: 0.95,
      timestamp: '2024-03-15T10:30:00',
    },
    {
      id: '2',
      title: 'UI Design Principles for Better User Experience',
      description: 'Explore key principles of UI design that can help improve the user experience of your applications.',
      category: 'design',
      tags: ['guide'],
      image: 'https://picsum.photos/400/225?random=2',
      metadata: {
        duration: 25,
        views: 856,
        rating: 4.6,
      },
      relevanceScore: 0.88,
      timestamp: '2024-03-15T09:45:00',
    },
    {
      id: '3',
      title: 'Digital Marketing Strategies for 2024',
      description: 'Discover the latest digital marketing trends and strategies that will dominate in 2024.',
      category: 'marketing',
      tags: ['guide', 'case-study'],
      image: 'https://picsum.photos/400/225?random=3',
      metadata: {
        duration: 45,
        views: 2341,
        rating: 4.9,
      },
      relevanceScore: 0.92,
      timestamp: '2024-03-14T15:20:00',
    },
  ],
}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string | string[] | number[]
  }>({})
  const [sortBy, setSortBy] = useState<'relevance' | 'date' | 'rating'>('relevance')
  const [content] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
  }

  const handleFilterChange = (filterId: string, value: string | string[] | number[]) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterId]: value,
    }))
  }

  const filteredResults = useMemo(() => {
    let filtered = [...results]

    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        result =>
          result.title.toLowerCase().includes(query) ||
          result.description.toLowerCase().includes(query) ||
          result.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    // Apply filters
    Object.entries(selectedFilters).forEach(([filterId, value]) => {
      if (!value || (Array.isArray(value) && value.length === 0)) return

      const filter = filters.find(f => f.id === filterId)
      if (!filter) return

      switch (filter.type) {
        case 'select':
        case 'radio':
          if (value !== 'all') {
            filtered = filtered.filter(result => {
              if (filterId === 'category') return result.category === value
              if (filterId === 'type') return result.metadata.type === value
              return true
            })
          }
          break
        case 'checkbox':
          if (Array.isArray(value) && value.length > 0) {
            filtered = filtered.filter(result =>
              result.tags.some(tag => (value as string[]).includes(tag))
            )
          }
          break
        case 'range':
          if (Array.isArray(value) && value.length === 2) {
            const [min, max] = value as number[]
            filtered = filtered.filter(
              result => {
                const duration = result.metadata.duration
                return typeof duration === 'number' && duration >= min && duration <= max
              }
            )
          }
          break
      }
    })

    // Apply sorting
    switch (sortBy) {
      case 'relevance':
        filtered.sort((a, b) => b.relevanceScore - a.relevanceScore)
        break
      case 'date':
        filtered.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
        break
      case 'rating':
        filtered.sort((a, b) => (b.metadata.rating as number) - (a.metadata.rating as number))
        break
    }

    return filtered
  }, [results, searchQuery, selectedFilters, sortBy])

  const formatMetadata = (metadata: SearchResult['metadata']) => {
    return Object.entries(metadata)
      .map(([key, value]) => {
        switch (key) {
          case 'duration':
            return `${value} min`
          case 'views':
            return `${value.toLocaleString()} views`
          case 'rating':
            return `${value} ★`
          default:
            return `${key}: ${value}`
        }
      })
      .join(' · ')
  }

  const renderFilter = (filter: SearchFilter) => {
    const value = selectedFilters[filter.id]

    switch (filter.type) {
      case 'select':
        return (
          <select
            value={value as string || 'all'}
            onChange={(e) => handleFilterChange(filter.id, e.target.value)}
            className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {filter.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label} {option.count && `(${option.count})`}
              </option>
            ))}
          </select>
        )
      case 'radio':
        return (
          <div className="space-y-2">
            {filter.options?.map((option) => (
              <label key={option.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={filter.id}
                  value={option.value}
                  checked={value === option.value}
                  onChange={(e) => handleFilterChange(filter.id, e.target.value)}
                  className="text-blue-500 focus:ring-blue-400"
                />
                <span className="text-sm text-gray-700">
                  {option.label} {option.count && `(${option.count})`}
                </span>
              </label>
            ))}
          </div>
        )
      case 'checkbox':
        const selectedValues = (value as string[]) || []
        return (
          <div className="space-y-2">
            {filter.options?.map((option) => (
              <label key={option.value} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={option.value}
                  checked={selectedValues.includes(option.value)}
                  onChange={(e) => {
                    const newValues = e.target.checked
                      ? [...selectedValues, option.value]
                      : selectedValues.filter((v) => v !== option.value)
                    handleFilterChange(filter.id, newValues)
                  }}
                  className="rounded text-blue-500 focus:ring-blue-400"
                />
                <span className="text-sm text-gray-700">
                  {option.label} {option.count && `(${option.count})`}
                </span>
              </label>
            ))}
          </div>
        )
      case 'range':
        const range = filter.range
        if (!range) return null
        const rangeValue = (value as number[]) || [range.min, range.max]
        return (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>
                {rangeValue[0]}
                {range.unit}
              </span>
              <span>
                {rangeValue[1]}
                {range.unit}
              </span>
            </div>
            <input
              type="range"
              min={range.min}
              max={range.max}
              step={range.step}
              value={rangeValue[1]}
              onChange={(e) => {
                const newValue = Number(e.target.value)
                handleFilterChange(filter.id, [rangeValue[0], newValue])
              }}
              className="w-full"
            />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Search header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center space-x-4">
          <div className="flex-grow relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <svg
              className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="px-3 py-2 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="relevance">Sort by Relevance</option>
            <option value="date">Sort by Date</option>
            <option value="rating">Sort by Rating</option>
          </select>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Filters sidebar */}
        <div className="w-64 p-4 border-r border-gray-100">
          <div className="space-y-6">
            {filters.map((filter) => (
              <div key={filter.id}>
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  {filter.label}
                </h3>
                {renderFilter(filter)}
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="flex-grow p-4">
          <div className="mb-4 text-sm text-gray-500">
            {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''}
          </div>

          <div className="space-y-6">
            {filteredResults.map((result) => (
              <motion.div
                key={result.id}
                className="flex space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {result.image && (
                  <img
                    src={result.image}
                    alt={result.title}
                    className="w-48 h-32 object-cover rounded-lg"
                  />
                )}
                <div className="flex-grow">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    {result.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{result.description}</p>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span className="px-2 py-1 bg-gray-100 rounded-full">
                      {result.category}
                    </span>
                    {result.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    {formatMetadata(result.metadata)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty state */}
          {filteredResults.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">
                No results found
              </h3>
              <p className="text-sm text-gray-500">
                Try adjusting your search or filters to find what you&apos;re looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
} 