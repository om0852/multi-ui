'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Editable_23Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  language?: string
}

export const Editable_23: React.FC<Editable_23Props> = ({
  initialContent,
  onSave,
  className = '',
  language = 'javascript',
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  return (
    <motion.div
      className={`bg-[#1e1e1e] rounded-lg overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-[#3d3d3d]">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-sm text-gray-400 ml-2">{language}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500">UTF-8</span>
          <span className="text-xs text-gray-500">LF</span>
        </div>
      </div>

      {/* Editor area */}
      <div className="relative">
        {/* Line numbers */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-[#2d2d2d] border-r border-[#3d3d3d] flex flex-col items-end py-3 pr-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="text-xs text-gray-500 leading-6">
              {i + 1}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {isEditing ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pl-12"
            >
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full min-h-[150px] bg-[#1e1e1e] text-green-400 p-3 focus:outline-none resize-none font-mono text-sm leading-6"
                placeholder={`// Type your ${language} code here...`}
                spellCheck="false"
              />
              <div className="flex justify-end space-x-2 p-2 bg-[#2d2d2d] border-t border-[#3d3d3d]">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-3 py-1 text-xs text-gray-400 hover:text-gray-300"
                >
                  ESC to cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  ⌘S to save
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEditing(true)}
              className="pl-12 cursor-pointer group"
            >
              <pre className="p-3 text-green-400 font-mono text-sm leading-6 min-h-[150px]">
                {content || `// Click to add ${language} code...`}
              </pre>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="px-2 py-1 bg-[#2d2d2d] rounded text-xs text-gray-400">
                  Click to edit
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-1 bg-[#2d2d2d] text-xs text-gray-500">
        <div>Ready</div>
        <div className="flex items-center space-x-4">
          <span>{language}</span>
          <span>Ln 1, Col 1</span>
          <span>Spaces: 2</span>
        </div>
      </div>
    </motion.div>
  )
} 