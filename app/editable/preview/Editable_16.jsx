
function EditableContainer({ 
  initialContent = 'Click to edit this glassmorphic card. The edit controls will appear with a beautiful gradient effect.', 
  className = '' 
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <motion.div
      className={`backdrop-blur-lg bg-white/30 dark:bg-gray-800/50 border border-white/40 
        dark:border-gray-700/50 rounded-2xl p-6 shadow-xl ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
    >
      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <div className="relative group">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full min-h-[120px] p-4 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm 
                  rounded-xl border border-white/60 dark:border-gray-600/50 focus:outline-none 
                  focus:ring-2 focus:ring-white/70 dark:focus:ring-purple-500/50 
                  placeholder-gray-500 dark:placeholder-gray-400 text-gray-700 dark:text-gray-200 resize-none"
                placeholder="Write something beautiful..."
                autoFocus
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 
                  dark:from-pink-600/20 dark:to-purple-600/20 pointer-events-none"
              />
            </div>
            <div className="flex justify-end space-x-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsEditing(false)}
                className="px-5 py-2 text-sm backdrop-blur-sm bg-white/30 dark:bg-gray-700/50 
                  rounded-xl border border-white/40 dark:border-gray-600/50 
                  text-gray-700 dark:text-gray-200 hover:bg-white/40 dark:hover:bg-gray-700/70 
                  transition-colors"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleSave}
                className="px-5 py-2 text-sm backdrop-blur-sm 
                  bg-gradient-to-r from-pink-500 to-purple-500 dark:from-pink-600 dark:to-purple-600 
                  rounded-xl text-white shadow-lg hover:from-pink-600 hover:to-purple-600 
                  dark:hover:from-pink-700 dark:hover:to-purple-700 transition-colors"
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
            className="group cursor-pointer relative"
          >
            <p className="text-gray-700 dark:text-gray-200 group-hover:text-gray-900 
              dark:group-hover:text-white transition-colors">
              {content || 'Click to add content...'}
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <div className="p-2 backdrop-blur-sm bg-white/30 dark:bg-gray-700/50 rounded-full">
                <svg
                  className="w-4 h-4 text-gray-700 dark:text-gray-200"
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
