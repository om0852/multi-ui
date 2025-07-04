'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface EditableContainerProps {
  initialContent: string
  className?: string
}

export default function EditableContainer({ initialContent, className = '' }: EditableContainerProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)
  const containerRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [isEditing])

  const handleDoubleClick = () => {
    setIsEditing(true)
  }

  const handleBlur = () => {
    setIsEditing(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <motion.div
      ref={containerRef}
      className={`relative p-4 rounded-lg shadow-md transition-all ${className} 
        bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100
        border border-gray-200 dark:border-gray-700`}
      whileHover={{ scale: 1.01, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      whileTap={{ scale: 0.99 }}
      layout
    >
      {isEditing ? (
        <motion.textarea
          ref={textareaRef}
          value={content}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full h-full min-h-[100px] p-2 bg-transparent resize-none focus:outline-none
            text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
          placeholder="Type something..."
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      ) : (
        <motion.div
          onDoubleClick={handleDoubleClick}
          className="w-full h-full cursor-text whitespace-pre-wrap break-words"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {content}
        </motion.div>
      )}
    </motion.div>
  )
}

