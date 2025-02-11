'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Editable_34Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  title?: string
  category?: string
  tags?: string[]
  lastEdited?: string
  color?: string
}

export const Editable_34: React.FC<Editable_34Props> = ({
  initialContent,
  onSave,
  className = '',
  title = 'Untitled Note',
  category = 'Personal',
  tags = ['notes', 'ideas'],
  lastEdited = 'Just now',
  color = 'blue',
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)
  const [noteTitle, setNoteTitle] = useState(title)
  const [noteTags, setNoteTags] = useState(tags)
  const [newTag, setNewTag] = useState('')

  const colorVariants = {
    blue: 'bg-blue-50 border-blue-200',
    green: 'bg-green-50 border-green-200',
    yellow: 'bg-yellow-50 border-yellow-200',
    purple: 'bg-purple-50 border-purple-200',
    pink: 'bg-pink-50 border-pink-200',
  }

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newTag.trim()) {
      setNoteTags([...noteTags, newTag.trim()])
      setNewTag('')
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setNoteTags(noteTags.filter(tag => tag !== tagToRemove))
  }

  return (
    <motion.div
      className={`rounded-xl border shadow-sm ${colorVariants[color as keyof typeof colorVariants]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Note header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full bg-${color}-400`} />
            <input
              type="text"
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
              className="font-medium text-gray-900 bg-transparent border-none focus:outline-none focus:ring-0"
              placeholder="Note title"
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">{lastEdited}</span>
            <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-2 flex items-center space-x-2">
          <span className={`px-2 py-1 text-xs rounded-full bg-${color}-100 text-${color}-700`}>
            {category}
          </span>
          <div className="flex flex-wrap gap-1">
            {noteTags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700 group"
              >
                #{tag}
                <button
                  onClick={() => handleRemoveTag(tag)}
                  className="ml-1 text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ×
                </button>
              </span>
            ))}
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyDown={handleAddTag}
              className="px-2 py-1 text-xs bg-transparent border-none focus:outline-none focus:ring-0"
              placeholder="Add tag..."
            />
          </div>
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
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-[200px] p-3 bg-white/50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              placeholder="Start writing your note..."
            />
            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center space-x-2">
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
                  className={`px-4 py-2 text-sm text-white rounded-lg bg-${color}-500 hover:bg-${color}-600`}
                >
                  Save Note
                </motion.button>
              </div>
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
            <div className="relative">
              <p className="text-gray-700 whitespace-pre-wrap">
                {content || 'Click to start writing...'}
              </p>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
} 