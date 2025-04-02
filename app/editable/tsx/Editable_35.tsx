'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Editable_35Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  priority?: 'Low' | 'Medium' | 'High'
  assignee?: string
  dueDate?: string
  status?: 'Todo' | 'In Progress' | 'Done'
  subtasks?: { id: string; text: string; completed: boolean }[]
}

export const Editable_35: React.FC<Editable_35Props> = ({
  initialContent,
  onSave,
  className = '',
  priority = 'Medium',
  assignee = 'John Doe',
  dueDate = '2024-03-20',
  status = 'Todo',
  subtasks = [
    { id: '1', text: 'Research', completed: true },
    { id: '2', text: 'Design', completed: false },
    { id: '3', text: 'Implementation', completed: false },
  ],
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(initialContent)
  const [taskSubtasks, setTaskSubtasks] = useState(subtasks)
  const [newSubtask, setNewSubtask] = useState('')

  const priorityColors = {
    Low: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    High: 'bg-red-100 text-red-800',
  }

  const statusColors = {
    Todo: 'bg-gray-100 text-gray-800',
    'In Progress': 'bg-blue-100 text-blue-800',
    Done: 'bg-green-100 text-green-800',
  }

  const handleSave = () => {
    onSave(content)
    setIsEditing(false)
  }

  const handleAddSubtask = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newSubtask.trim()) {
      setTaskSubtasks([
        ...taskSubtasks,
        { id: Date.now().toString(), text: newSubtask.trim(), completed: false },
      ])
      setNewSubtask('')
    }
  }

  const toggleSubtask = (id: string) => {
    setTaskSubtasks(taskSubtasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const removeSubtask = (id: string) => {
    setTaskSubtasks(taskSubtasks.filter(task => task.id !== id))
  }

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Card header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 text-xs rounded-full ${priorityColors[priority]}`}>
              {priority}
            </span>
            <span className={`px-2 py-1 text-xs rounded-full ${statusColors[status]}`}>
              {status}
            </span>
          </div>
          <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
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
              className="w-full min-h-[100px] p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              placeholder="Task description..."
            />
            <div className="mt-3 space-y-2">
              {taskSubtasks.map((subtask) => (
                <motion.div
                  key={subtask.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center space-x-2 group"
                >
                  <input
                    type="checkbox"
                    checked={subtask.completed}
                    onChange={() => toggleSubtask(subtask.id)}
                    className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                  />
                  <span className={`flex-grow text-sm ${subtask.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    {subtask.text}
                  </span>
                  <button
                    onClick={() => removeSubtask(subtask.id)}
                    className="p-1 text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    ×
                  </button>
                </motion.div>
              ))}
              <input
                type="text"
                value={newSubtask}
                onChange={(e) => setNewSubtask(e.target.value)}
                onKeyDown={handleAddSubtask}
                className="w-full p-2 text-sm bg-transparent border-none focus:outline-none focus:ring-0"
                placeholder="Add subtask and press Enter..."
              />
            </div>
            <div className="flex justify-end space-x-2 mt-3">
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
                className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Save Card
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsEditing(true)}
            className="p-4 cursor-pointer group"
          >
            <p className="text-gray-700 whitespace-pre-wrap mb-4">
              {content || 'Click to add description...'}
            </p>
            <div className="space-y-2">
              {taskSubtasks.map((subtask) => (
                <div key={subtask.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={subtask.completed}
                    readOnly
                    className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                  />
                  <span className={`text-sm ${subtask.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    {subtask.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${assignee}`}
                  alt={assignee}
                  className="w-6 h-6 rounded-full"
                />
                <span>{assignee}</span>
              </div>
              <span>{new Date(dueDate).toLocaleDateString()}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
} 