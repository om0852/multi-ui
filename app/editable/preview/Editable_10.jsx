
function EditableContainer({ 
  initialContent = 'Click to edit this content. The edit panel will slide in from the right.', 
  className = '' 
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initialContent);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isEditing]);

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setContent(initialContent);
    setIsEditing(false);
  };

  return (
    <motion.div
      className={`relative p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence>
        {isEditing ? (
          <motion.div
            key="editing"
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="flex flex-col space-y-3"
          >
            <textarea
              ref={textareaRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-32 p-3 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 
                border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none 
                focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
            <div className="flex justify-between items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCancel}
                className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 
                  rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none 
                  focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSave}
                className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
              >
                Save
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
            className="cursor-pointer group"
            onClick={() => setIsEditing(true)}
          >
            <p className="text-gray-800 dark:text-gray-200">{content || 'Click to edit...'}</p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-2 right-2"
            >
              <svg 
                className="w-6 h-6 text-blue-500 dark:text-blue-400 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

render(<EditableContainer />);
