'use client'

import React, { useState, useEffect } from 'react'
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
  const [cursor, setCursor] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  return (
    <motion.div
      className={`font-mono bg-black dark:bg-gray-900 border-2 border-green-500 dark:border-green-400 
        rounded-lg p-4 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center space-x-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500 dark:bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-500 dark:bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-500 dark:bg-green-400" />
      </div>
      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-3"
          >
            <div className="relative">
              <div className="text-green-500 dark:text-green-400 mb-2">$ edit content:</div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full min-h-[100px] bg-black dark:bg-gray-900 text-green-500 dark:text-green-400 
                  border border-green-500 dark:border-green-400 rounded p-2 focus:outline-none 
                  focus:border-green-400 dark:focus:border-green-300 resize-none font-mono 
                  placeholder-green-700 dark:placeholder-green-800"
                placeholder="Type your content here..."
              />
            </div>
            <div className="flex justify-between items-center text-green-500 dark:text-green-400">
              <div>
                {cursor ? '█' : ' '}
              </div>
              <div className="space-x-4">
                <button
                  onClick={() => setIsEditing(false)}
                  className="hover:text-green-400 dark:hover:text-green-300 transition-colors"
                >
                  [ESC] Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="hover:text-green-400 dark:hover:text-green-300 transition-colors"
                >
                  [ENTER] Save
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsEditing(true)}
            className="cursor-pointer"
          >
            <div className="text-green-500 dark:text-green-400 mb-2">$ cat content:</div>
            <p className="text-green-500 dark:text-green-400 whitespace-pre-wrap">
              {content || 'Click to add content...'}
              {cursor ? '█' : ' '}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
} 