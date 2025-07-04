
function EditableContainer({ 
  initialContent = 'Click to edit this content. Use Ctrl+Enter to save, Esc to cancel.', 
  className = '',
  placeholder = 'Click to edit...' 
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initialContent);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(
        textareaRef.current.value.length,
        textareaRef.current.value.length
      );
    }
  }, [isEditing]);

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setContent(initialContent);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <motion.div
      className={`relative p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 
        rounded-xl shadow-lg hover:shadow-xl transition-shadow ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.div
            key="editing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col space-y-4"
          >
            <div className="relative">
              <textarea
                ref={textareaRef}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full min-h-[120px] p-4 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 
                  border-2 border-indigo-100 dark:border-gray-700 rounded-lg focus:outline-none 
                  focus:border-indigo-400 dark:focus:border-indigo-500 focus:ring-2 
                  focus:ring-indigo-200 dark:focus:ring-indigo-500/30 transition-all duration-200 resize-none"
                placeholder={placeholder}
              />
              <div className="absolute bottom-2 right-2 text-xs text-gray-400 dark:text-gray-500">
                Press Ctrl + Enter to save, Esc to cancel
              </div>
            </div>
            <div className="flex justify-end items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCancel}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 
                  bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 
                  focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 
                  transition-colors duration-200"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSave}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-lg 
                  hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 
                  dark:focus:ring-indigo-500 transition-colors duration-200"
              >
                Save Changes
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="viewing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsEditing(true)}
            className="group cursor-pointer relative"
          >
            <div className="min-h-[60px] p-2">
              <p className="text-gray-700 dark:text-gray-200 break-words">
                {content || placeholder}
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <div className="p-2 bg-indigo-100 dark:bg-gray-700 rounded-full">
                <svg
                  className="w-4 h-4 text-indigo-600 dark:text-indigo-400"
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

render(<EditableContainer />);
