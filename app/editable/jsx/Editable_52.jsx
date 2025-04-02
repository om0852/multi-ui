'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Editable_52 = ({
  initialContent,
  onSave,
  className = '',
  folders = [
    {
      id: 'root',
      name: 'My Files',
      path: '/',
      files: [
        {
          id: '1',
          name: 'Documents',
          type: 'folder',
          modified: '2024-03-15T10:30:00',
          path: '/Documents',
        },
        {
          id: '2',
          name: 'Images',
          type: 'folder',
          modified: '2024-03-15T09:45:00',
          path: '/Images',
        },
        {
          id: '3',
          name: 'presentation.pptx',
          type: 'file',
          size: 2500000,
          modified: '2024-03-14T15:20:00',
          path: '/presentation.pptx',
          extension: 'pptx',
          starred: true,
        },
      ],
    },
  ],
  currentPath = '/',
  viewMode = 'grid',
}) => {
  const [selectedPath, setSelectedPath] = useState(currentPath)
  const [view, setView] = useState(viewMode)
  const [selectedItems] = useState([])
  const [content] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
  }

  const getCurrentFolder = () => {
    return folders.find(folder => folder.path === selectedPath)
  }

  const getBreadcrumbs = () => {
    const paths = selectedPath.split('/').filter(Boolean)
    return ['Home', ...paths]
  }

  const formatFileSize = (bytes) => {
    if (!bytes) return ''
    const units = ['B', 'KB', 'MB', 'GB']
    let size = bytes
    let unitIndex = 0
    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024
      unitIndex++
    }
    return `${size.toFixed(1)} ${units[unitIndex]}`
  }

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              {getBreadcrumbs().map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span>/</span>}
                  <button
                    className="hover:text-blue-500"
                    onClick={() => setSelectedPath(index === 0 ? '/' : '/' + getBreadcrumbs().slice(1, index + 1).join('/'))}
                  >
                    {crumb}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </div>
      <div className="p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={view === 'grid' ? 'grid grid-cols-4 gap-4' : 'space-y-2'}
          >
            {getCurrentFolder()?.files.map((file) => (
              <motion.div
                key={file.id}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md"
                onClick={() => file.type === 'folder' && setSelectedPath(file.path)}
              >
                <h3 className="text-sm font-medium text-gray-700 truncate">{file.name}</h3>
                <div className="mt-2 text-xs text-gray-500">
                  <div>{formatFileSize(file.size)}</div>
                  <div>{new Date(file.modified).toLocaleDateString()}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-between px-4 py-2 border-t border-gray-200 text-xs text-gray-500">
        <div>
          {getCurrentFolder()?.files.length} items
        </div>
        <div>
          {selectedItems.length} selected
        </div>
      </div>
    </motion.div>
  )
}
