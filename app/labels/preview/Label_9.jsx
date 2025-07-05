const Label_9 = ({ text, onRemove, className = "" }) => {
  return (
    <motion.span
      className={`
        inline-flex items-center gap-1 px-3 py-1 bg-gray-100
        rounded-full text-sm font-medium text-gray-700 ${className}
      `}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      whileHover={{ backgroundColor: "#f3f4f6" }}
    >
      {text}
      {onRemove && (
        <motion.button
          onClick={onRemove}
          className="ml-1 p-0.5 rounded-full hover:bg-gray-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      )}
    </motion.span>
  );
};

const Demo = () => {
  const [tags, setTags] = React.useState(["React", "TypeScript", "Tailwind", "Next.js"]);
  
  const handleRemove = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };
  
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Label_9 
          key={tag} 
          text={tag} 
          onRemove={() => handleRemove(tag)} 
        />
      ))}
    </div>
  );
};

render(<Demo />);
