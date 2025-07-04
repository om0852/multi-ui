
function EditableContainer({ 
  initialContent = "Click to edit this social media style post. It includes a user avatar, name, timestamp, and engagement buttons.", 
  className = '',
  username = 'DemoUser',
  avatar = 'https://api.dicebear.com/7.x/avataaars/svg?seed=PreviewUser'
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    }
  };

  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 
        dark:border-gray-700 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-center space-x-3 p-4 border-b border-gray-100 dark:border-gray-700">
        <img
          src={avatar}
          alt={username}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="font-medium text-gray-900 dark:text-white">{username}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">Just now</p>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {isEditing ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-4"
          >
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full min-h-[100px] text-gray-700 dark:text-gray-200 
                bg-transparent placeholder-gray-400 dark:placeholder-gray-500 
                focus:outline-none resize-none"
              placeholder="What's on your mind?"
              autoFocus
            />
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  Press Enter to post or click Post
                </span>
              </div>
              <div className="flex space-x-2">
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
                  Post Update
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-4 group cursor-pointer"
            onClick={() => setIsEditing(true)}
          >
            <p className="text-gray-700 dark:text-gray-200">
              {content || "What's on your mind?"}
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 flex items-center justify-between text-gray-400 dark:text-gray-500 text-sm"
            >
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 hover:text-blue-500 dark:hover:text-blue-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>Like</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-500 dark:hover:text-blue-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Comment</span>
                </button>
              </div>
              <button className="flex items-center space-x-1 hover:text-blue-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span>Share</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

render(<EditableContainer />);
