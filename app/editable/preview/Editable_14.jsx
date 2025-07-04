
function EditableContainer({ 
  initialContent = 'Click to edit this sliding panel. The content will slide in from the right when editing.', 
  className = '' 
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={false}
    >
      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.div
            key="edit"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
          >
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-[100px] bg-transparent text-gray-800 dark:text-gray-200 
                resize-none focus:outline-none"
              placeholder="Type your content..."
              autoFocus
            />
            <div className="flex justify-end mt-2 space-x-4">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-1.5 text-sm text-gray-700 dark:text-gray-300 
                  bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-1.5 text-sm text-white bg-blue-500 rounded-md 
                  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Save Changes
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="view"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={() => setIsEditing(true)}
            className="group cursor-pointer p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors"
          >
            <div className="flex items-center justify-between">
              <p className="text-gray-700 dark:text-gray-200">
                {content || 'Click to add content...'}
              </p>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-flex items-center text-blue-400 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Edit
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

render(<EditableContainer />);
