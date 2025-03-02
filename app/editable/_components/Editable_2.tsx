'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface EditableContainerV3Props {
  initialContent: string
  className?: string
}

export default function EditableContainerV3({ initialContent, className = '' }: EditableContainerV3Props) {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [isEditing])

  const handleEditToggle = () => {
    setIsEditing(!isEditing)
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  const containerVariants = {
    collapsed: { height: 'auto' },
    expanded: { height: 'auto', minHeight: '12rem' }
  }

  const contentVariants = {
    collapsed: { opacity: 1 },
    expanded: { opacity: 0 }
  }

  const editVariants = {
    collapsed: { opacity: 0, y: 20 },
    expanded: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      className={`relative overflow-hidden border-b-2 border-gray-200 transition-all ${className}`}
      variants={containerVariants}
      initial="collapsed"
      animate={isEditing ? "expanded" : "collapsed"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <AnimatePresence mode="wait">
        {!isEditing && (
          <motion.div
            key="content"
            className="py-4 px-6"
            variants={contentVariants}
            initial="collapsed"
            animate="collapsed"
            exit="expanded"
          >
            <p className="text-lg font-light leading-relaxed">{content}</p>
          </motion.div>
        )}
        {isEditing && (
          <motion.div
            key="edit"
            className="absolute inset-0 bg-white"
            variants={editVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
          >
            <textarea
              ref={textareaRef}
              value={content}
              onChange={handleChange}
              className="w-full h-full p-6 text-lg font-light leading-relaxed resize-none focus:outline-none"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleEditToggle}
      >
        {isEditing ? (
          <img
            src="https://img.icons8.com/ios-filled/50/000000/close-window.png"
            alt="Close"
            className="w-5 h-5"
          />
        ) : (
          <img
            src="https://img.icons8.com/ios-filled/50/000000/edit.png"
            alt="Edit"
            className="w-5 h-5"
          />
        )}
      </motion.button>
    </motion.div>
  )
}
