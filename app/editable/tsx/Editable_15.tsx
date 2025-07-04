'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface EditableContainerProps {
  initialContent: string
  onSave: (content: string) => void
  className?: string
}

export const EditableContainer: React.FC<EditableContainerProps> = ({
  initialContent,
  onSave,
  className = '',
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  return (
    <motion.div
      className={`bg-gray-100 dark:bg-gray-900 rounded-xl p-5 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div className="relative">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full min-h-[120px] p-4 text-gray-800 dark:text-gray-100 
                  bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 
                  focus:outline-none focus:border-purple-500 dark:focus:border-purple-500 
                  focus:ring-1 focus:ring-purple-500 dark:focus:ring-purple-500 
                  placeholder-gray-400 dark:placeholder-gray-500 resize-none"
                placeholder="Enter your content..."
              />
              <div className="absolute bottom-3 right-3 text-xs text-gray-400 dark:text-gray-500">
                Press Enter to save
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-sm text-gray-700 dark:text-gray-400 
                  bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 
                  transition-colors"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSave}
                className="px-4 py-2 text-sm text-white bg-purple-600 rounded-lg 
                  hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 
                  transition-colors"
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
            className="group cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 
                dark:group-hover:text-white transition-colors">
                {content || 'Click to add content...'}
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="ml-4"
              >
                <svg
                  className="w-5 h-5 text-purple-500 dark:text-purple-400 opacity-0 
                    group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
} 