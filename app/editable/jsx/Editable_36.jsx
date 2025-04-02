'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const Editable_36 = ({
  initialContent,
  onSave,
  className = '',
  messages = [
    {
      id: '1',
      content: 'Hey, how are you?',
      timestamp: '10:30 AM',
      status: 'read',
      type: 'text',
      isSent: false,
    },
    {
      id: '2',
      content: "I'm good, thanks! Just working on some new features.",
      timestamp: '10:31 AM',
      status: 'read',
      type: 'text',
      isSent: true,
    },
    {
      id: '3',
      content: 'Project Documentation.pdf',
      timestamp: '10:32 AM',
      status: 'delivered',
      type: 'file',
      fileUrl: '#',
      fileName: 'Project Documentation.pdf',
      isSent: true,
    },
  ],
  recipientName = 'Alice Smith',
  recipientAvatar = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
  isTyping = false,
}) => {
  const [content, setContent] = useState(initialContent)
  const [chatMessages, setChatMessages] = useState(messages)
  const [newComment, setNewComment] = useState('')
  const [comments, setComments] = useState([])

  const handleSave = () => {
    if (content.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        content,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'sent',
        type: 'text',
        isSent: true,
      }
      setChatMessages([...chatMessages, newMessage])
      onSave(content)
      setContent('')
    }
  }

  const handleAddComment = (e) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment = {
      id: Date.now().toString(),
      content: newComment,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      author: 'You'
    }
    
    setComments([...comments, comment])
    setNewComment('')
  }

  return (
    <motion.div className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <img src={recipientAvatar} alt={recipientName} className="w-10 h-10 rounded-full" />
          <div>
            <h3 className="font-medium text-gray-900">{recipientName}</h3>
            <span className="text-sm text-gray-500">{isTyping ? 'typing...' : 'Active now'}</span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4 max-h-[400px] overflow-y-auto">
        {chatMessages.map((message) => (
          <motion.div key={message.id} className={`flex ${message.isSent ? 'justify-end' : 'justify-start'}`}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          >
            <div className={`max-w-[70%] ${message.isSent ? 'order-2' : 'order-1'}`}>
              <div className={`px-4 py-2 rounded-2xl ${message.isSent ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-900'}`}>
                <p className="text-sm">{message.content}</p>
              </div>
              <div className="text-xs text-gray-400 mt-1">{message.timestamp}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-100">
        <div className="flex items-end space-x-2">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSave(); } }}
            className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-400 resize-none"
            placeholder="Type a message..."
            rows={1}
          />
          <button onClick={handleSave} className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-4 border-t border-gray-100 pt-4">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Comments</h3>
        {comments.map(comment => (
          <div key={comment.id} className="flex space-x-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">{comment.author[0]}</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-900">{comment.author}</span>
                <span className="text-xs text-gray-500">{comment.timestamp}</span>
              </div>
              <p className="text-sm text-gray-600">{comment.content}</p>
            </div>
          </div>
        ))}
        <form onSubmit={handleAddComment} className="mt-4">
          <div className="flex gap-2">
            <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..." className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400" />
            <button type="submit" className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600">Comment</button>
          </div>
        </form>
      </div>
    </motion.div>
  )
}
