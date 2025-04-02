'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Editable_25Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
}

export const Editable_25: React.FC<Editable_25Props> = ({
  initialContent,
  onSave,
  className = '',
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)
  const [activeTab, setActiveTab] = useState<'write' | 'preview'>('write')

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  // Simple markdown preview (just for demonstration)
  const renderPreview = (text: string) => {
    return text
      .split('\n')
      .map((line, i) => {
        if (line.startsWith('# ')) {
          return <h1 key={i} className="text-2xl font-bold mb-4">{line.slice(2)}</h1>
        }
        if (line.startsWith('## ')) {
          return <h2 key={i} className="text-xl font-bold mb-3">{line.slice(3)}</h2>
        }
        if (line.startsWith('- ')) {
          return <li key={i} className="ml-4 mb-1">{line.slice(2)}</li>
        }
        if (line.startsWith('```')) {
          return (
            <pre key={i} className="bg-gray-100 p-3 rounded-lg my-2 font-mono text-sm">
              {line.slice(3)}
            </pre>
          )
        }
        return <p key={i} className="mb-2">{line}</p>
      })
  }

  return (
    <motion.div
      className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
        <div className="flex space-x-1">
          <button
            onClick={() => setActiveTab('write')}
            className={`px-3 py-1 text-sm rounded-md ${
              activeTab === 'write'
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Write
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-3 py-1 text-sm rounded-md ${
              activeTab === 'preview'
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Preview
          </button>
        </div>
        <div className="flex items-center space-x-2 text-xs text-gray-500">
          <span>Markdown supported</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-4"
          >
            {activeTab === 'write' ? (
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full min-h-[200px] p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none font-mono text-sm"
                placeholder="Type your markdown here..."
              />
            ) : (
              <div className="min-h-[200px] p-3 bg-gray-50 rounded-lg border border-gray-200">
                {renderPreview(content)}
              </div>
            )}
            <div className="flex justify-end space-x-2 mt-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSave}
                className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Save
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsEditing(true)}
            className="p-4 cursor-pointer group min-h-[100px]"
          >
            <div className="prose prose-sm max-w-none">
              {renderPreview(content || 'Click to add markdown content...')}
            </div>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                Click to edit
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
} 