'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export const Editable_51 = ({
  initialContent,
  onSave,
  className = '',
  language = 'typescript',
  theme = 'light',
  readOnly = false,
  showLineNumbers = true,
  code = `// Example TypeScript code
interface User {
  id: string;
  name: string;
  email: string;
}

function greetUser(user: User) {
  console.log(\`Hello, \${user.name}!\`);
  return {
    message: \`Welcome back, \${user.name}\`,
    timestamp: new Date()
  };
}

// Example usage
const user: User = {
  id: "123",
  name: "John Doe",
  email: "john@example.com"
};

const result = greetUser(user);
console.log(result);`,
}) => {
  const [editorContent, setEditorContent] = useState(code)
  const [selectedLines, setSelectedLines] = useState([])
  const [cursor] = useState(null)
  const editorRef = useRef(null)
  const [content] = useState(initialContent)

  const themeStyles = {
    background: theme === 'dark' ? 'bg-gray-900' : 'bg-white',
    text: theme === 'dark' ? 'text-gray-100' : 'text-gray-900',
  }

  const handleSave = () => {
    onSave(content)
  }

  const lines = editorContent.split('\n').map((line, index) => ({
    number: index + 1,
    content: line,
    indentation: line.search(/\S|$/),
    highlight: selectedLines.includes(index + 1),
  }))

  const handleLineClick = (lineNumber, event) => {
    if (event.shiftKey) {
      const lastSelected = selectedLines[selectedLines.length - 1] || lineNumber
      const start = Math.min(lastSelected, lineNumber)
      const end = Math.max(lastSelected, lineNumber)
      const newLines = Array.from(
        { length: end - start + 1 },
        (_, i) => start + i
      )
      setSelectedLines(newLines)
    } else if (event.metaKey || event.ctrlKey) {
      setSelectedLines(prev =>
        prev.includes(lineNumber)
          ? prev.filter(l => l !== lineNumber)
          : [...prev, lineNumber]
      )
    } else {
      setSelectedLines([lineNumber])
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      const target = event.currentTarget
      const start = target.selectionStart
      const end = target.selectionEnd
      const value = target.value
      const beforeTab = value.substring(0, start)
      const afterTab = value.substring(end)
      const cursorPos = start + 2

      setEditorContent(beforeTab + '  ' + afterTab)
      
      setTimeout(() => {
        target.selectionStart = cursorPos
        target.selectionEnd = cursorPos
      }, 0)
    }
  }

  return (
    <motion.div
      className={`${themeStyles.background} rounded-xl border border-gray-200 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {language.charAt(0).toUpperCase() + language.slice(1)}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {lines.length} lines
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setEditorContent(code)}
              className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Reset
            </button>
            <button
              onClick={handleSave}
              className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <textarea
          ref={editorRef}
          value={editorContent}
          onChange={(e) => setEditorContent(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full h-full bg-transparent resize-none focus:outline-none text-gray-900 dark:text-gray-100"
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
        />
      </div>

      <div className="p-4 border-t border-gray-100">
        <button
          onClick={handleSave}
          className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Save Changes
        </button>
      </div>
    </motion.div>
  )
}
