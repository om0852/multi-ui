
function SlideEditContainer({ 
  initialContent = 'Click the edit button to modify this content. The edit panel will slide in from the right.', 
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
        initial={false}
        animate={{ x: isEditing ? '-100%' : '0%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 min-h-[200px]"
      >
        <div className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200">
          {content}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsEditing(true)}
          className="absolute top-2 right-2 p-2 text-gray-500 dark:text-gray-400 
            hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none 
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
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute inset-0 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-4"
          >
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-full min-h-[150px] p-2 text-gray-800 dark:text-gray-200 
                bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 
                rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 resize-none"
            />
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCancel}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white 
                  focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 rounded-full"
                aria-label="Cancel editing"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSave}
                className="p-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 
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
