const Label_21 = ({ text, expandedText, className = "" }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      className={`
        inline-flex items-center bg-white rounded-full
        shadow-sm cursor-pointer overflow-hidden ${className}
      `}
      animate={{ width: isExpanded ? "auto" : "fit-content" }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.div
        className="px-3 py-1 bg-indigo-500 text-white text-sm font-medium"
        animate={{ borderRadius: isExpanded ? "0.5rem 0 0 0.5rem" : "9999px" }}
      >
        {text}
      </motion.div>
      <motion.div
        className="px-3 py-1 text-sm text-gray-600"
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {expandedText}
      </motion.div>
    </motion.div>
  );
};

const Demo = () => {
  const [expandedState, setExpandedState] = React.useState({
    label1: false,
    label2: false,
    label3: false,
  });
  
  const toggleLabel = (label) => {
    setExpandedState(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };
  
  const presets = [
    {
      id: 'label1',
      text: 'Click me',
      expandedText: 'More information here',
      color: '#4f46e5'
    },
    {
      id: 'label2',
      text: 'Details',
      expandedText: 'Additional context about this item',
      color: '#10b981'
    },
    {
      id: 'label3',
      text: 'Info',
      expandedText: 'Important message that appears on click',
      color: '#f59e0b'
    }
  ];
  
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-4 justify-center">
        {presets.map((preset) => (
          <motion.div
            key={preset.id}
            className={`
              inline-flex items-center bg-white rounded-full
              shadow-sm cursor-pointer overflow-hidden
            `}
            animate={{ width: expandedState[preset.id] ? "auto" : "fit-content" }}
            onClick={() => toggleLabel(preset.id)}
          >
            <motion.div
              className="px-3 py-1 text-white text-sm font-medium"
              style={{ backgroundColor: preset.color }}
              animate={{ 
                borderRadius: expandedState[preset.id] ? "0.5rem 0 0 0.5rem" : "9999px" 
              }}
            >
              {preset.text}
            </motion.div>
            <motion.div
              className="px-3 py-1 text-sm text-gray-600"
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: expandedState[preset.id] ? "auto" : 0,
                opacity: expandedState[preset.id] ? 1 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              {preset.expandedText}
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      <div className="max-w-md mx-auto p-4 bg-gray-50 rounded-lg space-y-4">
        <h3 className="text-sm font-medium text-gray-700">Customize Label</h3>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Main Text</label>
          <input
            type="text"
            defaultValue="Click me"
            className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Expanded Text</label>
          <input
            type="text"
            defaultValue="Hover to see more information"
            className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        
        <div className="pt-2">
          <button className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
            Create Custom Label
          </button>
        </div>
      </div>
    </div>
  );
};

render(<Demo />);
