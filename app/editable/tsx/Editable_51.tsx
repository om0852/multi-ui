'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface CodeLine {
  number: number
  content: string
  indentation: number
  highlight?: boolean
  error?: {
    message: string
    severity: 'error' | 'warning'
  }
}

interface Editable_51Props {
  initialContent: string
  onSave: (content: string) => void
  className?: string
  language?: string
  theme?: 'light' | 'dark'
  readOnly?: boolean
  showLineNumbers?: boolean
  code?: string
}

export const Editable_51: React.FC<Editable_51Props> = ({
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
  const [selectedLines, setSelectedLines] = useState<number[]>([])
  const [cursor] = useState<number | null>(null)
  const editorRef = useRef<HTMLTextAreaElement>(null)
  const [content] = useState(initialContent)

  const themeStyles = {
    background: theme === 'dark' ? 'bg-gray-900' : 'bg-white',
    text: theme === 'dark' ? 'text-gray-100' : 'text-gray-900',
  }


  const handleSave = () => {
    onSave(content)
  }

  const lines: CodeLine[] = editorContent.split('\n').map((line, index) => ({
    number: index + 1,
    content: line,
    indentation: line.search(/\S|$/),
    highlight: selectedLines.includes(index + 1),
  }))

  const handleLineClick = (lineNumber: number, event: React.MouseEvent) => {
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
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

  const getTokenType = (token: string): string => {
    if (/^(function|interface|const|let|var|return|if|else|for|while)$/.test(token)) {
      return 'keyword'
    }
    if (/^[A-Z][A-Za-z]*$/.test(token)) {
      return 'type'
    }
    if (/^(console|log|Date)$/.test(token)) {
      return 'builtin'
    }
    if (/^["'`].*["'`]$/.test(token)) {
      return 'string'
    }
    if (/^\d+$/.test(token)) {
      return 'number'
    }
    if (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(token)) {
      return 'identifier'
    }
    if (/^[{}()[\];,.]$/.test(token)) {
      return 'punctuation'
    }
    if (/^\/\/.*$/.test(token)) {
      return 'comment'
    }
    return 'text'
  }

  const renderLine = (line: CodeLine) => {
    const tokens = line.content.split(/(\s+|[{}()[\];,.]|\/\/.*$)/).filter(Boolean)
    
    return tokens.map((token, index) => {
      const type = getTokenType(token)
      return (
        <span
          key={index}
          className={`${
            type === 'keyword' ? 'text-purple-600 dark:text-purple-400' :
            type === 'type' ? 'text-blue-600 dark:text-blue-400' :
            type === 'builtin' ? 'text-green-600 dark:text-green-400' :
            type === 'string' ? 'text-orange-600 dark:text-orange-400' :
            type === 'number' ? 'text-red-600 dark:text-red-400' :
            type === 'identifier' ? 'text-gray-800 dark:text-gray-300' :
            type === 'punctuation' ? 'text-gray-600 dark:text-gray-400' :
            type === 'comment' ? 'text-gray-500 dark:text-gray-500 italic' :
            ''
          }`}
        >
          {token}
        </span>
      )
    })
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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            <button
              onClick={handleSave}
              className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-auto">
          <div className="flex min-h-full font-mono text-sm">
            {showLineNumbers && (
              <div className="flex-none w-12 py-4 text-right text-gray-400 dark:text-gray-600 select-none bg-gray-50 dark:bg-gray-900">
                {lines.map((line) => (
                  <div
                    key={line.number}
                    className={`px-4 ${
                      line.highlight ? 'bg-blue-50 dark:bg-blue-900' : ''
                    }`}
                  >
                    {line.number}
                  </div>
                ))}
              </div>
            )}

            <div className="flex-grow p-4 overflow-auto">
              {readOnly ? (
                <div className="space-y-0">
                  {lines.map((line) => (
                    <div
                      key={line.number}
                      className={`px-4 ${
                        line.highlight ? 'bg-blue-50 dark:bg-blue-900' : ''
                      }`}
                      onClick={(e) => handleLineClick(line.number, e)}
                    >
                      <span
                        style={{ marginLeft: `${line.indentation * 0.5}rem` }}
                        className="inline-block"
                      >
                        {renderLine(line)}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center justify-between">
          <div>
            Ln {cursor}, Col {cursor}
          </div>
          <div>
            {selectedLines.length > 0 && (
              <span>{selectedLines.length} line{selectedLines.length !== 1 ? 's' : ''} selected</span>
            )}
          </div>
        </div>
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