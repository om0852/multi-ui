'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface InlineEditableContainerProps {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  placeholder?: string
}

export const InlineEditableContainer: React.FC<InlineEditableContainerProps> = ({
  initialContent,
  onSave,
  className = '',
  placeholder = 'Enter text...',
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.div
            key="editing"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="flex items-center"
          >
            <input
              ref={inputRef}
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onKeyDown={handleKeyDown}
              className="px-2 py-1 text-gray-800 border-2 border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder={placeholder}
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSave}
              className="ml-2 p-1 text-white bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/000000/checkmark.png"
                alt="Save"
                className="w-4 h-4"
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleCancel}
              className="ml-1 p-1 text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/000000/multiply.png"
                alt="Cancel"
                className="w-4 h-4"
              />
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="viewing"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="group cursor-pointer"
            onClick={() => setIsEditing(true)}
          >
            <span className="text-gray-800">{content || placeholder}</span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="ml-2 inline-block text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/000000/edit.png"
                alt="Edit"
                className="w-4 h-4"
              />
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
