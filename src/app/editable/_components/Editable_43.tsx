'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface DataTableColumn<T> {
  key: keyof T
  title: string
  sortable?: boolean
  filterable?: boolean
  render?: (value: T[keyof T], item: T) => React.ReactNode
}

interface DataTableProps<T> {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  data: T[]
  columns: DataTableColumn<T>[]
  itemsPerPage?: number
}

interface SampleData {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'inactive' | 'pending'
  lastActive: string
}

export const Editable_43: React.FC<DataTableProps<SampleData>> = ({
  initialContent,
  onSave,
  className = '',
  data = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'active',
      lastActive: '2024-03-15T10:30:00',
    },
    {
      id: '2',
      name: 'Alice Smith',
      email: 'alice@example.com',
      role: 'Editor',
      status: 'active',
      lastActive: '2024-03-15T09:45:00',
    },
    {
      id: '3',
      name: 'Bob Wilson',
      email: 'bob@example.com',
      role: 'Viewer',
      status: 'inactive',
      lastActive: '2024-03-14T15:20:00',
    },
    {
      id: '4',
      name: 'Emma Davis',
      email: 'emma@example.com',
      role: 'Editor',
      status: 'pending',
      lastActive: '2024-03-15T11:15:00',
    },
  ],
  columns = [
    { key: 'name', title: 'Name', sortable: true, filterable: true },
    { key: 'email', title: 'Email', sortable: true, filterable: true },
    { key: 'role', title: 'Role', sortable: true, filterable: true },
    {
      key: 'status',
      title: 'Status',
      sortable: true,
      filterable: true,
      render: (value) => {
        const status = value as SampleData['status']
        const colors = {
          active: 'bg-green-100 text-green-800',
          inactive: 'bg-gray-100 text-gray-800',
          pending: 'bg-yellow-100 text-yellow-800',
        }
        return (
          <span className={`px-2 py-1 text-xs rounded-full ${colors[status]}`}>
            {status}
          </span>
        )
      },
    },
    {
      key: 'lastActive',
      title: 'Last Active',
      sortable: true,
      render: (value) => new Date(value as string).toLocaleString(),
    },
  ],
  itemsPerPage = 10,
}) => {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof SampleData
    direction: 'asc' | 'desc'
  } | null>(null)
  const [filters, setFilters] = useState<Partial<Record<keyof SampleData, string>>>({})
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  const handleSort = (key: keyof SampleData) => {
    setSortConfig(current => {
      if (current?.key === key) {
        return current.direction === 'asc'
          ? { key, direction: 'desc' }
          : null
      }
      return { key, direction: 'asc' }
    })
  }

  const handleFilter = (key: keyof SampleData, value: string) => {
    setFilters(current => ({
      ...current,
      [key]: value,
    }))
    setCurrentPage(1)
  }

  const handleSelectAll = (checked: boolean) => {
    setSelectedRows(checked ? data.map(item => item.id) : [])
  }

  const handleSelectRow = (id: string, checked: boolean) => {
    setSelectedRows(current =>
      checked
        ? [...current, id]
        : current.filter(rowId => rowId !== id)
    )
  }

  const filteredData = useMemo(() => {
    return data.filter(item =>
      Object.entries(filters).every(([key, value]) => {
        if (!value) return true
        const itemValue = String(item[key as keyof SampleData]).toLowerCase()
        return itemValue.includes(value.toLowerCase())
      })
    )
  }, [data, filters])

  const sortedData = useMemo(() => {
    if (!sortConfig) return filteredData

    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key]
      const bValue = b[sortConfig.key]

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1
      }
      return 0
    })
  }, [filteredData, sortConfig])

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return sortedData.slice(startIndex, startIndex + itemsPerPage)
  }, [sortedData, currentPage, itemsPerPage])

  const totalPages = Math.ceil(sortedData.length / itemsPerPage)

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Table header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-900">Users</h2>
            <p className="text-sm text-gray-500 mt-1">
              {selectedRows.length} of {data.length} selected
            </p>
          </div>
          {selectedRows.length > 0 && (
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1.5 text-sm text-red-600 hover:text-red-700">
                Delete Selected
              </button>
              <button className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-700">
                Export Selected
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Table filters */}
      <div className="p-4 border-b border-gray-100">
        <div className="grid grid-cols-5 gap-4">
          {columns
            .filter(column => column.filterable)
            .map(column => (
              <div key={String(column.key)}>
                <input
                  type="text"
                  placeholder={`Filter ${column.title}`}
                  value={filters[column.key] || ''}
                  onChange={(e) => handleFilter(column.key, e.target.value)}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 text-left">
                <input
                  type="checkbox"
                  checked={selectedRows.length === data.length}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="rounded border-gray-300 text-blue-500 focus:ring-blue-400"
                />
              </th>
              {columns.map(column => (
                <th
                  key={String(column.key)}
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <button
                    onClick={() => column.sortable && handleSort(column.key)}
                    className={`flex items-center space-x-1 ${
                      column.sortable ? 'cursor-pointer hover:text-gray-700' : ''
                    }`}
                  >
                    <span>{column.title}</span>
                    {column.sortable && sortConfig?.key === column.key && (
                      <svg
                        className={`w-4 h-4 transform ${
                          sortConfig.direction === 'desc' ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    )}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {paginatedData.map((item, index) => (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } hover:bg-gray-100`}
                >
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(item.id)}
                      onChange={(e) => handleSelectRow(item.id, e.target.checked)}
                      className="rounded border-gray-300 text-blue-500 focus:ring-blue-400"
                    />
                  </td>
                  {columns.map(column => (
                    <td key={String(column.key)} className="px-4 py-3 text-sm text-gray-900">
                      {column.render
                        ? column.render(item[column.key], item)
                        : String(item[column.key])}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing {((currentPage - 1) * itemsPerPage) + 1} to{' '}
            {Math.min(currentPage * itemsPerPage, sortedData.length)} of{' '}
            {sortedData.length} results
          </p>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 text-sm rounded-lg ${
                  currentPage === page
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 