'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface EditableContainerProps {
  initialContent: string
  onSave: (content: string) => void
  label?: string
  className?: string
}

export const EditableContainer: React.FC<EditableContainerProps> = ({
  initialContent,
  onSave,
  label = 'Content',
  className = '',
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [isEditing])

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  return (
    <motion.div
      className={`relative p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 
        dark:border-gray-700 ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <span className="absolute -top-3 left-4 px-2 bg-white dark:bg-gray-800 text-sm font-medium 
        text-purple-600 dark:text-purple-400 border border-gray-200 dark:border-gray-700 rounded-md">
        {label}
      </span>
      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-3"
          >
            <textarea
              ref={textareaRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-[100px] p-3 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 
                rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-500"
              placeholder="Enter your content..."
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSave}
              className="w-full py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600 
                dark:bg-purple-600 dark:hover:bg-purple-700 transition-colors"
            >
              Save
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsEditing(true)}
            className="cursor-pointer group"
          >
            <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 
              dark:group-hover:text-gray-100 transition-colors">
              {content || 'Click to add content...'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
} 