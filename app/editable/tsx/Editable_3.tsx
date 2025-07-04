'use client'

import React, { useState, useRef, useEffect } from 'react'
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
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus()
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

  return (
    <motion.div
      className={`relative p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.div
            key="editing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <textarea
              ref={textareaRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-full min-h-[100px] p-2 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 
                border-2 border-blue-300 dark:border-blue-600 rounded-md focus:outline-none 
                focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
            />
            <div className="flex justify-end mt-2 space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCancel}
                className="px-3 py-1 text-sm text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 
                  rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none 
                  focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/multiply.png"
                  alt="Cancel"
                  className="w-4 h-4 inline-block mr-1"
                />
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSave}
                className="px-3 py-1 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/checkmark.png"
                  alt="Save"
                  className="w-4 h-4 inline-block mr-1"
                />
                Save
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="viewing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">{content}</div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsEditing(true)}
              className="absolute top-2 right-2 p-1 text-blue-500 dark:text-blue-400 
                bg-white dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-gray-600 
                focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/000000/edit.png"
                alt="Edit"
                className="w-4 h-4"
              />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
