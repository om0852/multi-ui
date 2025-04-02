'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Editable_43 = ({
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
        const colors = {
          active: 'bg-green-100 text-green-800',
          inactive: 'bg-gray-100 text-gray-800',
          pending: 'bg-yellow-100 text-yellow-800',
        }
        return (
          <span className={`px-2 py-1 text-xs rounded-full ${colors[value]}`}>
            {value}
          </span>
        )
      },
    },
    {
      key: 'lastActive',
      title: 'Last Active',
      sortable: true,
      render: (value) => new Date(value).toLocaleString(),
    },
  ],
  itemsPerPage = 10,
}) => {
  const [sortConfig, setSortConfig] = useState(null)
  const [filters, setFilters] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedRows, setSelectedRows] = useState([])
  const [content] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
  }

  const handleSort = (key) => {
    setSortConfig(current => {
      if (current?.key === key) {
        return current.direction === 'asc' ? { key, direction: 'desc' } : null
      }
      return { key, direction: 'asc' }
    })
  }

  const handleFilter = (key, value) => {
    setFilters(current => ({
      ...current,
      [key]: value,
    }))
    setCurrentPage(1)
  }

  const filteredData = useMemo(() => {
    return data.filter(item =>
      Object.entries(filters).every(([key, value]) =>
        value ? String(item[key]).toLowerCase().includes(value.toLowerCase()) : true
      )
    )
  }, [data, filters])

  const sortedData = useMemo(() => {
    if (!sortConfig) return filteredData

    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key]
      const bValue = b[sortConfig.key]
      return aValue < bValue ? (sortConfig.direction === 'asc' ? -1 : 1) : aValue > bValue ? (sortConfig.direction === 'asc' ? 1 : -1) : 0
    })
  }, [filteredData, sortConfig])

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return sortedData.slice(startIndex, startIndex + itemsPerPage)
  }, [sortedData, currentPage, itemsPerPage])

  return (
    <motion.div className={`bg-white rounded-xl border shadow-sm ${className}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div className="p-4 border-b flex justify-between">
        <h2 className="text-lg font-medium">Data Table</h2>
        <button onClick={handleSave} className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600">Save Changes</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              {columns.map(column => (
                <th key={column.key} className="px-4 py-3 text-left text-xs font-medium uppercase">
                  <button onClick={() => column.sortable && handleSort(column.key)} className={column.sortable ? 'cursor-pointer hover:text-gray-700' : ''}>
                    {column.title}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {paginatedData.map(item => (
                <motion.tr key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {columns.map(column => (
                    <td key={column.key} className="px-4 py-3 text-sm">
                      {column.render ? column.render(item[column.key], item) : String(item[column.key])}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}
