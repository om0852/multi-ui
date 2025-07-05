const Label_11 = ({ text, progress, color = "#3b82f6", className = "" }) => {
  return (
    <motion.div
      className={`
        relative inline-flex items-center px-3 py-1 bg-white
        rounded-full shadow-sm overflow-hidden ${className}
      `}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ backgroundColor: color, opacity: 0.1 }}
      />
      <span className="relative text-sm font-medium" style={{ color }}>
        {text}
      </span>
      <span className="relative ml-2 text-xs font-semibold" style={{ color }}>
        {progress}%
      </span>
    </motion.div>
  );
};

const Demo = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Label_11 text="Progress" progress={75} color="#3b82f6" />
      <Label_11 text="Loading" progress={45} color="#10b981" />
      <Label_11 text="Complete" progress={100} color="#8b5cf6" />
    </div>
  );
};

render(<Demo />);
