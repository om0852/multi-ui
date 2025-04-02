'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Editable_42 = ({
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
  const [draggedTask, setDraggedTask] = useState(null)
  const [content] = useState(initialContent)
  const [isEditing, setIsEditing] = useState(false)

  const handleSave = () => {
    onSave(content)
  }

  const handleDragStart = (task) => {
    setDraggedTask(task)
  }

  const handleDragEnd = (columnId) => {
    if (!draggedTask) return

    const sourceColumn = boardColumns.find(col => col.tasks.some(task => task.id === draggedTask.id))
    const targetColumn = boardColumns.find(col => col.id === columnId)

    if (sourceColumn && targetColumn && sourceColumn.id !== targetColumn.id) {
      setBoardColumns(prev => prev.map(col => {
        if (col.id === sourceColumn.id) {
          return { ...col, tasks: col.tasks.filter(task => task.id !== draggedTask.id) }
        }
        if (col.id === targetColumn.id) {
          return { ...col, tasks: [...col.tasks, draggedTask] }
        }
        return col
      }))
    }

    setDraggedTask(null)
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return ''
    }
  }

  return (
    <motion.div className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}>
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-900">Project Board</h2>
            <p className="text-sm text-gray-500 mt-1">{boardColumns.reduce((total, col) => total + col.tasks.length, 0)} tasks</p>
          </div>
          <button onClick={() => setIsEditing(true)} className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600">Add Task</button>
        </div>
      </div>

      <div className="p-4 grid grid-cols-3 gap-4">
        {boardColumns.map(column => (
          <motion.div key={column.id} className={`rounded-lg ${column.color} p-4`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDragEnd(column.id)}>
            <h3 className="text-sm font-medium text-gray-900 mb-3">{column.title} ({column.tasks.length})</h3>
            <div className="space-y-3">
              <AnimatePresence>
                {column.tasks.map(task => (
                  <motion.div key={task.id} layoutId={task.id} draggable onDragStart={() => handleDragStart(task)}
                    className="bg-white rounded-lg shadow-sm p-3 cursor-move hover:shadow-md">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-900">{task.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>{task.priority}</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">{task.description}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}