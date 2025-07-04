
function EditableContainer({ 
  initialContent = 'Click the edit button to modify this content...', 
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

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const containerVariants = {
    collapsed: { opacity: 1 },
    expanded: { opacity: 0 }
  };

  const contentVariants = {
    collapsed: { opacity: 1 },
    expanded: { opacity: 0 }
  };

  const editVariants = {
    collapsed: { opacity: 0, scale: 0.8 },
    expanded: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      className={`relative overflow-hidden border-b-2 border-gray-300 dark:border-gray-700 transition-all ${className}
        bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200`}
      variants={containerVariants}
      initial="collapsed"
      animate={isEditing ? "expanded" : "collapsed"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <AnimatePresence mode="wait">
        {!isEditing ? (
          <motion.div
            key="content"
            className="py-4 px-6"
            variants={contentVariants}
            initial="collapsed"
            animate="collapsed"
            exit="expanded"
          >
            <p className="text-lg font-light text-gray-800 dark:text-gray-200">{content}</p>
          </motion.div>
        ) : (
          <motion.div
            key="edit"
            className="absolute inset-0 bg-white dark:bg-gray-800"
            variants={editVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
          >
            <textarea
              ref={textareaRef}
              value={content}
              onChange={handleChange}
              className="w-full h-full p-6 text-lg font-light leading-relaxed resize-none focus:outline-none
                bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        className="absolute top-4 right-4 p-3 rounded-full bg-gray-100 dark:bg-gray-700 
          text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleEditToggle}
      >
        {isEditing ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        )}
      </motion.button>
    </motion.div>
  );
}

render(<EditableContainer />);
