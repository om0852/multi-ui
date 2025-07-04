
function EditableContainer({ 
  initialContent = 'Click to edit this notepad. The text will align with the ruled lines for a natural writing experience.', 
  className = '' 
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <motion.div
      className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-lg ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Red margin line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-red-400 dark:bg-red-500" />
      
      {/* Horizontal lines */}
      <div className="absolute inset-0 
        bg-[linear-gradient(transparent_0,transparent_calc(1.5rem_-_1px),#e5e7eb_calc(1.5rem_-_1px),#e5e7eb_1.5rem)] 
        dark:bg-[linear-gradient(transparent_0,transparent_calc(1.5rem_-_1px),#374151_calc(1.5rem_-_1px),#374151_1.5rem] 
        bg-[size:100%_1.5rem]" />

      <div className="relative p-6">
        <AnimatePresence mode="wait">
          {isEditing ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full min-h-[150px] bg-transparent text-gray-700 dark:text-gray-200 
                  leading-6 focus:outline-none resize-none pl-4 -ml-4"
                style={{ lineHeight: '1.5rem' }}
                placeholder="Write your notes here..."
                autoFocus
              />
              <div className="flex justify-end space-x-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-1.5 text-sm text-gray-600 dark:text-gray-300 
                    bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-1.5 text-sm text-white bg-blue-500 rounded-md 
                    hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Save Notes
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEditing(true)}
              className="min-h-[150px] cursor-pointer group relative"
            >
              <p className="text-gray-700 dark:text-gray-200 leading-6 pl-4 -ml-4" style={{ lineHeight: '1.5rem' }}>
                {content || 'Click to add notes...'}
              </p>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/50 rounded-full">
                  <svg
                    className="w-4 h-4 text-blue-500 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

render(<EditableContainer />);
