'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface EditableContainerProps {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  placeholder?: string
}

export const EditableContainer: React.FC<EditableContainerProps> = ({
  initialContent,
  onSave,
  className = '',
  placeholder = 'Click to edit...',
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus()
      // Place cursor at the end of the text
      textareaRef.current.setSelectionRange(
        textareaRef.current.value.length,
        textareaRef.current.value.length
      )
    }
  }, [isEditing])

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setContent(initialContent)
    setIsEditing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSave()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }

  return (
    <motion.div
      className={`relative p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-shadow ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.div
            key="editing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col space-y-4"
          >
            <div className="relative">
              <textarea
                ref={textareaRef}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full min-h-[120px] p-4 text-gray-700 bg-white border-2 border-indigo-100 rounded-lg focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 resize-none"
                placeholder={placeholder}
              />
              <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                Press Ctrl + Enter to save, Esc to cancel
              </div>
            </div>
            <div className="flex justify-end items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCancel}
                className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-200"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSave}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-colors duration-200"
              >
                Save Changes
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="viewing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsEditing(true)}
            className="group cursor-pointer relative"
          >
            <div className="min-h-[60px] p-2">
              <p className="text-gray-700 break-words">
                {content || placeholder}
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <div className="p-2 bg-indigo-100 rounded-full">
                <svg
                  className="w-4 h-4 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
} 