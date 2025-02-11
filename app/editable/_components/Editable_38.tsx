'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FileItem {
  id: string
  name: string
  size: number
  type: string
  progress: number
  status: 'uploading' | 'completed' | 'error'
  lastModified: string
  preview?: string
}

interface Editable_38Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  files?: FileItem[]
  maxFileSize?: number
  allowedTypes?: string[]
  multiple?: boolean
}

export const Editable_38: React.FC<Editable_38Props> = ({
  initialContent,
  onSave,
  className = '',
  files = [
    {
      id: '1',
      name: 'document.pdf',
      size: 2500000,
      type: 'application/pdf',
      progress: 100,
      status: 'completed',
      lastModified: '2024-03-15T10:30:00',
    },
    {
      id: '2',
      name: 'image.jpg',
      size: 1500000,
      type: 'image/jpeg',
      progress: 100,
      status: 'completed',
      lastModified: '2024-03-15T10:31:00',
      preview: 'https://picsum.photos/200',
    },
    {
      id: '3',
      name: 'data.xlsx',
      size: 500000,
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      progress: 65,
      status: 'uploading',
      lastModified: '2024-03-15T10:32:00',
    },
  ],
  maxFileSize = 10 * 1024 * 1024, // 10MB
  allowedTypes = ['image/*', 'application/pdf', '.doc', '.docx', '.xls', '.xlsx'],
  multiple = true,
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<FileItem[]>(files)
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFiles = Array.from(e.dataTransfer.files)
    handleFiles(droppedFiles)
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      handleFiles(selectedFiles)
    }
  }

  const handleFiles = (files: File[]) => {
    const newFiles: FileItem[] = files.map(file => ({
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
      progress: 0,
      status: 'uploading',
      lastModified: new Date(file.lastModified).toISOString(),
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined,
    }))

    setUploadedFiles([...uploadedFiles, ...newFiles])
    simulateUpload(newFiles)
  }

  const simulateUpload = (files: FileItem[]) => {
    files.forEach(file => {
      const interval = setInterval(() => {
        setUploadedFiles(prev => {
          const fileIndex = prev.findIndex(f => f.id === file.id)
          if (fileIndex === -1) return prev

          const updatedFile = { ...prev[fileIndex] }
          if (updatedFile.progress < 100) {
            updatedFile.progress += 10
            if (updatedFile.progress >= 100) {
              updatedFile.status = 'completed'
              clearInterval(interval)
            }
          }

          const newFiles = [...prev]
          newFiles[fileIndex] = updatedFile
          return newFiles
        })
      }, 500)
    })
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) {
      return (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
    if (type === 'application/pdf') {
      return (
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
    return (
      <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Upload header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">Files</h3>
          <div className="flex items-center space-x-2">
            {selectedFiles.length > 0 && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-3 py-1.5 text-sm text-red-600 hover:text-red-700"
              >
                Delete Selected
              </motion.button>
            )}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Upload Files
            </button>
          </div>
        </div>
      </div>

      {/* Drop zone */}
      <div
        onDragEnter={handleDragEnter}
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`p-8 transition-colors ${
          isDragging
            ? 'bg-blue-50 border-2 border-dashed border-blue-300'
            : 'border-2 border-dashed border-gray-200'
        }`}
      >
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p className="mt-2 text-sm text-gray-600">
            Drag and drop files here, or{' '}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-blue-500 hover:text-blue-600"
            >
              browse
            </button>
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Maximum file size: {formatFileSize(maxFileSize)}
          </p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          multiple={multiple}
          accept={allowedTypes.join(',')}
          onChange={handleFileInput}
          className="hidden"
        />
      </div>

      {/* File list */}
      <div className="p-4">
        <div className="space-y-2">
          {uploadedFiles.map((file) => (
            <motion.div
              key={file.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center p-3 bg-gray-50 rounded-lg group"
            >
              <input
                type="checkbox"
                checked={selectedFiles.includes(file.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedFiles([...selectedFiles, file.id])
                  } else {
                    setSelectedFiles(selectedFiles.filter(id => id !== file.id))
                  }
                }}
                className="mr-3 h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
              />
              {file.preview ? (
                <img
                  src={file.preview}
                  alt={file.name}
                  className="w-8 h-8 object-cover rounded"
                />
              ) : (
                getFileIcon(file.type)
              )}
              <div className="ml-3 flex-grow">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">{file.name}</p>
                  <span className="text-xs text-gray-500">{formatFileSize(file.size)}</span>
                </div>
                {file.status === 'uploading' && (
                  <div className="mt-1">
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <motion.div
                        className="bg-blue-500 h-1.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${file.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="ml-4 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
                <button className="p-1 text-gray-400 hover:text-red-600 rounded-full hover:bg-gray-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
} 