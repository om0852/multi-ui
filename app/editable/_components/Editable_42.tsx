'use client'

import React, { useState } from 'react'
import { motion,AnimatePresence } from 'framer-motion'

interface KanbanTask {
  id: string
  title: string
  description: string
  priority: 'low' | 'medium' | 'high'
  assignee?: {
    name: string
    avatar: string
  }
  dueDate?: string
  tags: string[]
}

interface KanbanColumn {
  id: string
  title: string
  tasks: KanbanTask[]
  color: string
}

interface Editable_42Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  columns?: KanbanColumn[]
}

export const Editable_42: React.FC<Editable_42Props> = ({
  initialContent,
  onSave,
  className = '',
  columns = [
    {
      id: 'todo',
      title: 'To Do',
      color: 'bg-gray-100',
      tasks: [
        {
          id: '1',
          title: 'Design new landing page',
          description: 'Create a modern and responsive landing page design',
          priority: 'high',
          assignee: {
            name: 'John Doe',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
          },
          dueDate: '2024-03-20',
          tags: ['design', 'web'],
        },
        {
          id: '2',
          title: 'Update documentation',
          description: 'Review and update API documentation',
          priority: 'low',
          tags: ['docs'],
        },
      ],
    },
    {
      id: 'inProgress',
      title: 'In Progress',
      color: 'bg-blue-100',
      tasks: [
        {
          id: '3',
          title: 'Implement authentication',
          description: 'Add OAuth2 authentication flow',
          priority: 'medium',
          assignee: {
            name: 'Alice Smith',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
          },
          dueDate: '2024-03-18',
          tags: ['backend', 'security'],
        },
      ],
    },
    {
      id: 'done',
      title: 'Done',
      color: 'bg-green-100',
      tasks: [
        {
          id: '4',
          title: 'Setup CI/CD pipeline',
          description: 'Configure GitHub Actions workflow',
          priority: 'high',
          assignee: {
            name: 'Bob Wilson',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
          },
          dueDate: '2024-03-15',
          tags: ['devops'],
        },
      ],
    },
  ],
}) => {
  const [boardColumns, setBoardColumns] = useState(columns)
  const [draggedTask, setDraggedTask] = useState<KanbanTask | null>(null)
  const [content] = useState(initialContent)

  const handleSave = () => {
    onSave(content)
  }

  const handleDragStart = (task: KanbanTask) => {
    setDraggedTask(task)
  }

  const handleDragEnd = (columnId: string) => {
    if (!draggedTask) return

    const sourceColumn = boardColumns.find(col => 
      col.tasks.some(task => task.id === draggedTask.id)
    )
    const targetColumn = boardColumns.find(col => col.id === columnId)

    if (sourceColumn && targetColumn && sourceColumn.id !== targetColumn.id) {
      setBoardColumns(prev => prev.map(col => {
        if (col.id === sourceColumn.id) {
          return {
            ...col,
            tasks: col.tasks.filter(task => task.id !== draggedTask.id),
          }
        }
        if (col.id === targetColumn.id) {
          return {
            ...col,
            tasks: [...col.tasks, draggedTask],
          }
        }
        return col
      }))
    }

    setDraggedTask(null)
  }

  const getPriorityColor = (priority: KanbanTask['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'low':
        return 'bg-green-100 text-green-800'
    }
  }

  return (
    <motion.div
      className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Board header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-900">Project Board</h2>
            <p className="text-sm text-gray-500 mt-1">
              {boardColumns.reduce((total, col) => total + col.tasks.length, 0)} tasks
            </p>
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>
      </div>

      {/* Board columns */}
      <div className="p-4">
        <div className="grid grid-cols-3 gap-4">
          {boardColumns.map((column) => (
            <motion.div
              key={column.id}
              className={`rounded-lg ${column.color} p-4`}
              onDragOver={(e) => {
                e.preventDefault()
                e.currentTarget.classList.add('ring-2', 'ring-blue-400')
              }}
              onDragLeave={(e) => {
                e.currentTarget.classList.remove('ring-2', 'ring-blue-400')
              }}
              onDrop={(e) => {
                e.preventDefault()
                e.currentTarget.classList.remove('ring-2', 'ring-blue-400')
                handleDragEnd(column.id)
              }}
            >
              <h3 className="text-sm font-medium text-gray-900 mb-3">
                {column.title} ({column.tasks.length})
              </h3>
              <div className="space-y-3">
                <AnimatePresence>
                  {column.tasks.map((task) => (
                    <motion.div
                      key={task.id}
                      layoutId={task.id}
                      draggable
                      onDragStart={() => handleDragStart(task)}
                      className="bg-white rounded-lg shadow-sm p-3 cursor-move hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-sm font-medium text-gray-900">{task.title}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">{task.description}</p>
                      <div className="flex items-center justify-between">
                        {task.assignee && (
                          <div className="flex items-center space-x-2">
                            <img
                              src={task.assignee.avatar}
                              alt={task.assignee.name}
                              className="w-6 h-6 rounded-full"
                            />
                            <span className="text-xs text-gray-600">{task.assignee.name}</span>
                          </div>
                        )}
                        {task.dueDate && (
                          <span className="text-xs text-gray-500">
                            Due {new Date(task.dueDate).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                      {task.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {task.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add task modal */}
      <AnimatePresence>
        {isEditing && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-full max-w-md"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Task</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter task title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter task description"
                    rows={3}
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Add Task
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
} 