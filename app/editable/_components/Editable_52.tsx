'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FileItem {
  id: string
  name: string
  type: 'file' | 'folder'
  size?: number
  modified: string
  path: string
  extension?: string
  preview?: string
  starred?: boolean
}

interface Folder {
  id: string
  name: string
  path: string
  files: FileItem[]
}

interface Editable_52Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  folders?: Folder[]
  currentPath?: string
  viewMode?: 'grid' | 'list'
}

export const Editable_52: React.FC<Editable_52Props> = ({
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
    {
      id: 'documents',
      name: 'Documents',
      path: '/Documents',
      files: [
        {
          id: '4',
          name: 'Project Proposal.docx',
          type: 'file',
          size: 350000,
          modified: '2024-03-15T11:15:00',
          path: '/Documents/Project Proposal.docx',
          extension: 'docx',
        },
        {
          id: '5',
          name: 'Budget.xlsx',
          type: 'file',
          size: 150000,
          modified: '2024-03-15T10:00:00',
          path: '/Documents/Budget.xlsx',
          extension: 'xlsx',
        },
      ],
    },
    {
      id: 'images',
      name: 'Images',
      path: '/Images',
      files: [
        {
          id: '6',
          name: 'banner.jpg',
          type: 'file',
          size: 1200000,
          modified: '2024-03-15T09:30:00',
          path: '/Images/banner.jpg',
          extension: 'jpg',
          preview: 'https://picsum.photos/200/100?random=1',
        },
        {
          id: '7',
          name: 'logo.png',
          type: 'file',
          size: 500000,
          modified: '2024-03-15T09:15:00',
          path: '/Images/logo.png',
          extension: 'png',
          preview: 'https://picsum.photos/100/100?random=2',
        },
      ],
    },
  ],
  currentPath = '/',
  viewMode = 'grid',
}): JSX.Element => {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)
  const [selectedPath, setSelectedPath] = useState(currentPath)
  const [view, setView] = useState(viewMode)
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  const getCurrentFolder = () => {
    return folders.find(folder => folder.path === selectedPath)
  }

  const getBreadcrumbs = () => {
    const paths = selectedPath.split('/').filter(Boolean)
    return ['Home', ...paths]
  }

  const formatFileSize = (bytes?: number) => {
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

  const getFileIcon = (type: string, extension?: string) => {
    if (type === 'folder') {
      return (
        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      )
    }

    const iconColor = {
      docx: 'text-blue-500',
      xlsx: 'text-green-500',
      pptx: 'text-red-500',
      pdf: 'text-red-600',
      jpg: 'text-purple-500',
      png: 'text-purple-500',
    }[extension || ''] || 'text-gray-500'

    return (
      <svg className={`w-6 h-6 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg ${className}`}>
      {/* Toolbar */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
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
        <div className="flex items-center space-x-2">
          <button
            className={`p-2 rounded-lg ${view === 'grid' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
            onClick={() => setView('grid')}
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button
            className={`p-2 rounded-lg ${view === 'list' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
            onClick={() => setView('list')}
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* File Grid/List */}
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
                className={`group cursor-pointer ${
                  view === 'grid'
                    ? 'p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md'
                    : 'p-2 rounded-lg hover:bg-gray-50 flex items-center space-x-4'
                }`}
                onClick={() => file.type === 'folder' && setSelectedPath(file.path)}
              >
                <div className={view === 'grid' ? 'text-center' : 'flex items-center space-x-4 flex-1'}>
                  {file.preview ? (
                    <img
                      src={file.preview}
                      alt={file.name}
                      className={view === 'grid' ? 'w-full h-32 object-cover rounded-lg mb-2' : 'w-10 h-10 object-cover rounded'}
                    />
                  ) : (
                    <div className={view === 'grid' ? 'flex justify-center mb-2' : ''}>
                      {getFileIcon(file.type, file.extension)}
                    </div>
                  )}
                  <div className={view === 'grid' ? '' : 'flex-1'}>
                    <h3 className="text-sm font-medium text-gray-700 truncate">
                      {file.name}
                      {file.starred && <span className="ml-1 text-yellow-500">★</span>}
                    </h3>
                    {view === 'list' && (
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>{formatFileSize(file.size)}</span>
                        <span>{new Date(file.modified).toLocaleDateString()}</span>
                      </div>
                    )}
                  </div>
                </div>
                {view === 'grid' && (
                  <div className="mt-2 text-xs text-gray-500">
                    <div>{formatFileSize(file.size)}</div>
                    <div>{new Date(file.modified).toLocaleDateString()}</div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-gray-200 text-xs text-gray-500">
        <div>
          {getCurrentFolder()?.files.length} items
        </div>
        <div>
          {selectedItems.length} selected
        </div>
      </div>
    </div>
  )
} 