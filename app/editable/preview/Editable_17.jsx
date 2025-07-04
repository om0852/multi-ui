
function EditableContainer({ 
  initialContent = 'Click to edit this neumorphic card. The edit controls will appear with a soft 3D effect.', 
  className = '' 
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <motion.div
      className={`bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 
        shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] 
        dark:shadow-[8px_8px_16px_#1f2937,-8px_-8px_16px_#111827] ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div className="relative">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full min-h-[120px] p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl 
                  shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] 
                  dark:shadow-[inset_4px_4px_8px_#1f2937,inset_-4px_-4px_8px_#374151] 
                  text-gray-700 dark:text-gray-200 focus:outline-none resize-none"
                placeholder="Type something..."
                autoFocus
              />
            </div>
            <div className="flex justify-end space-x-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-xl 
                  shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] 
                  dark:shadow-[4px_4px_8px_#1f2937,-4px_-4px_8px_#374151] 
                  hover:shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] 
                  dark:hover:shadow-[2px_2px_4px_#1f2937,-2px_-2px_4px_#374151] 
                  transition-shadow"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSave}
                className="px-6 py-2 text-sm text-white bg-blue-500 rounded-xl 
                  shadow-[4px_4px_8px_#3b82f6,-4px_-4px_8px_#60a5fa] 
                  hover:shadow-[2px_2px_4px_#3b82f6,-2px_-2px_4px_#60a5fa] 
                  transition-shadow"
              >
                Save Changes
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsEditing(true)}
            className="group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
                {content || 'Click to add content...'}
              </p>
              <div className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-5 h-5 text-blue-500 dark:text-blue-400"
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
    </motion.div>
  );
}

render(<EditableContainer />);
