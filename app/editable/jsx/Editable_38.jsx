'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export const Editable_38 = ({
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
  const [uploadedFiles, setUploadedFiles] = useState(files)
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState([])
  const fileInputRef = useRef(null)
  const [content] = useState(initialContent)

  const handleSaveChanges = () => {
    onSave(content)
  }

  const handleDragEnter = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFiles = Array.from(e.dataTransfer.files)
    handleFiles(droppedFiles)
  }

  const handleFileInput = (e) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      handleFiles(selectedFiles)
    }
  }

  const handleFiles = (files) => {
    const newFiles = files.map(file => ({
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

  const simulateUpload = (files) => {
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

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">Files</h3>
          <button
            onClick={handleSaveChanges}
            className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Save Changes
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Upload Files
          </button>
        </div>
      </div>

      <div
        onDragEnter={handleDragEnter}
        onDragOver={(e) => e.preventDefault()}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`p-8 transition-colors ${
          isDragging ? 'bg-blue-50 border-2 border-dashed border-blue-300' : 'border-2 border-dashed border-gray-200'
        }`}
      >
        <p className="text-center text-gray-600">Drag and drop files here, or click to browse.</p>
        <input
          ref={fileInputRef}
          type="file"
          multiple={multiple}
          accept={allowedTypes.join(',')}
          onChange={handleFileInput}
          className="hidden"
        />
      </div>
    </motion.div>
  )
}
