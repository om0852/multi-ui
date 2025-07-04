
function SlideEditContainer({ 
  initialContent = 'Click the edit button to modify this content. The edit panel will slide up from the bottom.', 
  className = '' 
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setContent(initialContent);
    setIsEditing(false);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: isEditing ? '0%' : '100%' }}
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
        className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-[200px]"
      >
        <div className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200">
          {content}
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsEditing(true)}
          className="absolute top-2 right-2 p-3 text-gray-600 dark:text-gray-400 
            hover:text-gray-800 dark:hover:text-gray-200 focus:outline-none 
            focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 rounded-full"
          aria-label="Edit content"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isEditing && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 400, damping: 40 }}
            className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md p-6"
          >
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-full min-h-[150px] p-2 text-gray-800 dark:text-gray-200 
                bg-white dark:bg-gray-800 border-2 border-gray-400 dark:border-gray-600 
                rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 resize-none"
            />
            <div className="absolute bottom-4 right-4 flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCancel}
                className="p-3 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white 
                  focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 rounded-full"
                aria-label="Cancel editing"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleSave}
                className="p-3 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 rounded-full"
                aria-label="Save changes"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

render(<SlideEditContainer />);
